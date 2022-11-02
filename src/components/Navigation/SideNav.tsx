import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import type { Routes, Route } from "@utils/Type";

const SideNav: FC<{ routes: Routes[] }> = ({ routes }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setIsOpen(!isOpen);
  const handleNavigation = (url: string): void => {
    navigate(url);
  };

  return (
    <List
      sx={{
        width: "100%",
      }}
      component="nav"
    >
      {routes.map((route: Routes, index: number) => {
        const { header, icon: Icon, links } = route;
        return (
          <div key={`${index}-${header}`}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                {/* @ts-ignore */}
                <Icon />
              </ListItemIcon>
              <ListItemText primary={header} />
              {links.length > 0 && isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {links.length > 0 &&
              links?.map((link: Route, index: number) => {
                const { title, icon: Icon, link: url } = link;
                return (
                  <Collapse
                    in={isOpen}
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
