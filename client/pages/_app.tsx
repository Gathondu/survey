import "../styles/globals.css";
import "../styles/phone-input.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { MainNav, DrawerHeader } from "@components/Navigation";
import { ScreenSizeProvider } from "@utils/Context";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <QueryClientProvider client={client}>
      <SnackbarProvider maxSnack={5}>
        <ScreenSizeProvider>
          <Box className="App">
            <MainNav>
              <DrawerHeader />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  flexShrink: 1,
                  mr: 2,
                  backgroundColor: "#E7EBF0",
                  padding: "3rem",
                  mt: isMobile ? 7 : 8,
                  height: "100vh",
                }}
              >
                <Component {...pageProps} />
              </Box>
            </MainNav>
          </Box>
        </ScreenSizeProvider>
      </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
