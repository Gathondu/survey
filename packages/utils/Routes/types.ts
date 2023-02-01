import { ElementType } from 'react'

export interface RouteProp {
  title?: Capitalize<string>
  icon?: ElementType
  readonly link: string
}

// export interface RoutesProp {
//   header: Capitalize<string>
//   icon?: ElementType
//   readonly links?: RouteProp[]
//   readonly link?: RouteProp
// }
