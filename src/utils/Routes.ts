import type { Routes } from "@utils/Types";
import { AddBusinessOutlined, BusinessOutlined } from "@mui/icons-material";

export const SideNavRoutes: Routes[] = [
  {
    header: "Company",
    icon: BusinessOutlined,
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
