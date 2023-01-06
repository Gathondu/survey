import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'
import { useCustomersQuery } from '../utils/graphql'
import { useState, useEffect } from 'react'
import RecordsToggle from 'ui/RecordsToggle'
import { useRouter } from 'next/router'
import { useScreenSizeContext } from 'utils/Context'

const Customers = () => {
  const router = useRouter()
  const [records, setRecords] = useState('all')
  const { isMobile } = useScreenSizeContext()
  const { data, isLoading, isError, error, refetch } = useCustomersQuery({
    recordsToGet: records,
  })

  useEffect(() => {}, [refetch, records])

  if (isLoading || !data) {
    return <Typography>Loading</Typography>
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>
  }
  const { customers } = data

  return (
    <>
      <RecordsToggle
        setRecord={records}
        updateRecords={setRecords}
        styles={{ textAlign: isMobile ? 'start' : 'end' }}
      />
      <Box
        sx={{
          display: 'flex',
          width: '90%',
          flexWrap: 'wrap',
          backgroundColor: '##E7EBF0',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {customers?.map((customer: any) => (
          <Card key={`${customer?.id}`}>
            <CardActionArea onClick={() => router.push(`${customer?.url}`)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {customer?.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {customer?.fullDetails}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default Customers
