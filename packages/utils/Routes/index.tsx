import type { RouteProp } from './types'
import {
  AddBusinessOutlined,
  StoreOutlined,
  BadgeOutlined,
  SupportAgentOutlined,
  PeopleAltOutlined,
  ReviewsOutlined,
  DomainAddOutlined,
  DomainOutlined,
  PersonAddAlt1Outlined,
  GroupsOutlined,
  PersonAddAltOutlined,
  RateReviewOutlined,
} from '@mui/icons-material'

export const Routes: RouteProp[] = [
  {
    title: 'Company',
    icon: StoreOutlined,
    link: '/companies',
    // links: [
    //   {
    //     title: 'New',
    //     icon: AddBusinessOutlined,
    //     link: '/company/new',
    //   },
    //   {
    //     title: 'All',
    //     icon: StoreOutlined,
    //   },
    // ],
  },
  {
    title: 'Branches',
    icon: DomainOutlined,
    link: '/branches',
    // links: [
    //   {
    //     title: 'New',
    //     icon: DomainAddOutlined,
    //     link: '/branch/new',
    //   },
    //   {
    //     title: 'All',
    //     icon: DomainOutlined,
    //   },
    // ],
  },
  {
    title: 'Employees',
    icon: SupportAgentOutlined,
    link: '/employees',
    // link: {
    // {
    //   title: 'New',
    //   icon: PersonAddAlt1Outlined,
    //   link: '/employee/new',
    // icon: BadgeOutlined,
    // },
    // },
  },
  {
    title: 'Customers',
    icon: GroupsOutlined,
    link: '/customers',
    // link: {
    // {
    //   title: 'New',
    //   icon: PersonAddAltOutlined,
    //   link: '/customer/new',
    // },
    // icon: PeopleAltOutlined,
    // },
  },
  {
    title: 'Reviews',
    icon: ReviewsOutlined,
    link: '/reviews',
    // link: {
    //   icon: RateReviewOutlined,
    // },
  },
]
