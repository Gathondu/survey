import { useState, FC } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import type { Routes, Route } from "@utils/Types";
import { useRouter } from "next/router";

const SideNav: FC<{ routes: Routes[] }> = ({ routes }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<string[]>([]);
  const router = useRouter();
  const handleClick = (parentIndex: number, header: string) => {
    const index = `${parentIndex}-${header}`;

    if (isOpen.includes(index)) {
      setIsOpen(isOpen.filter((ind) => ind !== index));
    } else {
      setIsOpen([...isOpen, index]);
    }
  };
  const handleNavigation = (url: string): void => {
    router.push(url);
  };

  return (
    <List
      sx={{
        width: "100%",
      }}
      component="nav"
    >
      {routes.map((route: Routes, parentIndex: number) => {
        const { header, icon: Icon, links, link } = route;
        return (
          <div key={`${parentIndex}-${header}`}>
            {links ? (
              <ListItemButton onClick={() => handleClick(parentIndex, header)}>
                <ListItemIcon>
                  {/* @ts-ignore */}
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={header} />
                {links &&
                  (links!.length > 0 &&
                  isOpen.includes(`${parentIndex}-${header}`) ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  ))}
              </ListItemButton>
            ) : (
              <ListItemButton onClick={() => handleNavigation(link!.link)}>
                <ListItemIcon>
                  {/* @ts-ignore */}
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={header} />
              </ListItemButton>
            )}
            {links &&
              links!.length > 0 &&
              links?.map((link: Route, index: number) => {
                const { title, icon: Icon, link: url } = link;
                return (
                  <Collapse
                    in={isOpen.includes(`${parentIndex}-${header}`)}
                    timeout="auto"
                    unmountOnExit
                    key={`${index}-${title}`}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => handleNavigation(url)}
                      >
                        <ListItemIcon>
                          {/* @ts-ignore */}
                          <Icon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                );
              })}
          </div>
        );
      })}
    </List>
  );
};

export default SideNav;
