import type { Routes } from "utils/Types";
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
} from "@mui/icons-material";

export const SideNavRoutes: Routes[] = [
  {
    header: "Company",
    icon: StoreOutlined,
    links: [
      {
        title: "New",
        icon: AddBusinessOutlined,
        link: "/company/new",
      },
      {
        title: "All",
        icon: StoreOutlined,
        link: "/companies",
      },
    ],
  },
  {
    header: "Branches",
    icon: DomainOutlined,
    links: [
      {
        title: "New",
        icon: DomainAddOutlined,
        link: "/branch/new",
      },
      {
        title: "All",
        icon: DomainOutlined,
        link: "/branches",
      },
    ],
  },
  {
    header: "Employees",
    icon: SupportAgentOutlined,
    links: [
      {
        title: "New",
        icon: PersonAddAlt1Outlined,
        link: "/employee/new",
      },
      {
        title: "All",
        icon: BadgeOutlined,
        link: "/employees",
      },
    ],
  },
  {
    header: "Customers",
    icon: GroupsOutlined,
    links: [
      {
        title: "New",
        icon: PersonAddAltOutlined,
        link: "/customer/new",
      },
      {
        title: "All",
        icon: PeopleAltOutlined,
        link: "/customers",
      },
    ],
  },
  {
    header: "Reviews",
    icon: ReviewsOutlined,
    link: {
      icon: RateReviewOutlined,
      link: "/reviews",
    },
  },
];
