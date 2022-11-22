import { useMediaQuery, useTheme } from "@mui/material";
import { FC, createContext, ReactNode, useContext } from "react";

export const MobileContext = createContext<boolean>(false);

export const useMobileContext = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    return false;
  }

  return context;
};
interface MPProps {
  children: ReactNode;
}

export const MobileProvider: FC<MPProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};
