import '../styles/globals.css'
import '../styles/Main.scss'
import "react-toastify/dist/ReactToastify.css";
// import type { AppProps } from 'next/app'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../components/theme';
import createEmotionCache from './createEmotionCache';
import { Provider } from "react-redux";
import { store } from "../src/services/store";

import { toast, ToastContainer } from 'react-toastify';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />

        <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
      
        closeOnClick
        pauseOnHover
      />
      </ThemeProvider>
    </CacheProvider>
    </Provider>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };