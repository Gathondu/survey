import '../styles/globals.css'
import 'react-phone-input-2/lib/material.css'
import '../styles/phone-input.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from 'notistack'
import { Box, useTheme, ThemeProvider, CssBaseline } from '@mui/material'
import Navbar from 'ui/Navbar'
import Sidebar from 'ui/Sidebar'
import { useRouter } from 'next/router'
import {
  ColorModeContext,
  useMode,
  ScreenSizeProvider,
  useScreenSizeContext,
} from 'ui'
import { ProSidebarProvider } from 'react-pro-sidebar'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      retry: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme()
  const [colorTheme, colorMode] = useMode()
  const router = useRouter()
  const [mode, setMode] = useState<string>('dark')
  const { isMobile } = useScreenSizeContext()
  return (
    <QueryClientProvider client={client}>
      {/* @ts-ignore next-line */}
      <ColorModeContext.Provider value={colorMode}>
        {/* @ts-ignore next-line */}
        <ThemeProvider theme={colorTheme}>
          <SnackbarProvider maxSnack={5}>
            <ProSidebarProvider>
              <ScreenSizeProvider>
                <Box className="app">
                  <CssBaseline />
                  <Sidebar />
                  <Box component="main" className="content">
                    <Navbar />
                    <Component {...pageProps} />
                  </Box>
                </Box>
              </ScreenSizeProvider>
            </ProSidebarProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
