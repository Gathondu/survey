import { useMediaQuery, useTheme } from "@mui/material";
import {
  FC,
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

/*

is Moblie Context and Provider

**/
interface SizeProps {
  isMobile: boolean;
  isMedium: boolean;
  isDesktop: boolean;
}
const defaultState: SizeProps = {
  isMobile: false,
  isMedium: false,
  isDesktop: false,
};

export const ScreenSizeContext = createContext<SizeProps | undefined>(
  undefined
);

export const useScreenSizeContext = () => {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    return defaultState;
  }
  return context;
};

interface MPProps {
  children: ReactNode;
}

export const ScreenSizeProvider: FC<MPProps> = ({ children }) => {
  const theme = useTheme();
  const [sizes, setSize] = useState<SizeProps>(defaultState);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setSize({ isMobile, isMedium, isDesktop });
  }, [isMobile, isMedium, isDesktop]);
  return (
    <ScreenSizeContext.Provider value={sizes}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
