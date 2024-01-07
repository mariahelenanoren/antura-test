import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider, createTheme } from '@mui/material';

import '../styles/global.css';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  shape: {
    borderRadius: 0,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
