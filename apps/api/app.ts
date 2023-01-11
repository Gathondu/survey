/* eslint-disable import/first */
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../.env.local' })

import express, {
  Application,
  Request,
  Response,
  NextFunction,
  json,
  urlencoded,
} from 'express'

import { createHandler } from 'graphql-http/lib/use/express'
import cors, { CorsOptions } from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { schema, db } from './utils/index.js'

const port: number | string = process.env.SERVER_PORT || 5000
const dbUri: string = process.env.DB_STRING || ''
const app: Application = express()
const vercel_hosts = `https://${process.env.VERCEL_URL},http://${process.env.VERCEL_URL},${process.env.BASE_URL}`
const domains: string = process.env.ALLOWED_ORIGINS || vercel_hosts || ''
const whitelist: string[] = domains.split(',').map(domain => domain.trim())

const corsOptions = {
  origin: function (
    origin: string,
    callback: (arg0?: null | Error, arg1?: boolean) => void,
  ): void {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(cors(corsOptions as CorsOptions))
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  )
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  next()
})

app.use(json())
app.use(urlencoded({ extended: true }))

await db.connectToServer(dbUri, function (err: string): void {
  if (err) {
    console.log(`MONGODB ERROR: ${err}`)
    process.exit(1)
  }
})

app.all('/api', createHandler({ schema }))

if (!process.env.VERCEL) {
  app.listen(port, async () => {
    console.log(`Server runnning on port: ${port}`)
  })
}

export default app
