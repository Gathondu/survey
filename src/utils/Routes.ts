import type { Routes } from "@utils/Types";
import { AddBusinessOutlined, StoreOutlined } from "@mui/icons-material";

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
];
