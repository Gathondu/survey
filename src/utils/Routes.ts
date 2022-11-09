import type { Routes } from "@utils/Types";
import {
  AddBusinessOutlined,
  StoreOutlined,
  BusinessOutlined,
  BadgeOutlined,
  SupportAgentOutlined,
  PeopleAltOutlined,
  ReviewsOutlined,
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
        icon: AddBusinessOutlined,
        link: "/companies",
      },
    ],
  },
  {
    header: "Branches",
    icon: BusinessOutlined,
    links: [
      {
        title: "New",
        icon: AddBusinessOutlined,
        link: "/branch/new",
      },
      {
        title: "All",
        icon: AddBusinessOutlined,
        link: "/branches",
      },
    ],
  },
  {
    header: "Employees",
    icon: StoreOutlined,
    links: [
      {
        title: "New",
        icon: SupportAgentOutlined,
        link: "/company/new",
      },
      {
        title: "All",
        icon: BadgeOutlined,
        link: "/companies",
      },
    ],
  },
  {
    header: "Customers",
    icon: StoreOutlined,
    links: [
      {
        title: "New",
        icon: PeopleAltOutlined,
        link: "/customer/new",
      },
      {
        title: "All",
        icon: AddBusinessOutlined,
        link: "/customers",
      },
    ],
  },
  {
    header: "Review",
    icon: ReviewsOutlined,
    links: [
      {
        title: "New",
        icon: AddBusinessOutlined,
        link: "/company/new",
      },
      {
        title: "All",
        icon: AddBusinessOutlined,
        link: "/companies",
      },
    ],
  },
];
