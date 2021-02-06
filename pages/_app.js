import React from "react";
import PropTypes from "prop-types";
// import Router from "next/router";
import Head from "next/head";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

import store from "../redux/store/store";
import { Spinner } from "../components";
import { theme } from "../theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>SnapChat || Next || Redux</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
