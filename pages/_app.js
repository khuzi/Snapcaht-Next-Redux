import React, { useState } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import Head from "next/head";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

import store from "../redux/store/store";
import { Spinner } from "../components";
import { theme } from "../theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    const handleRouteChange = () => {
      setLoading(true);
    };
    const handleRouteComplete = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      Router.events.off("routeChangeStart", () => handleRouteChange);
      Router.events.off("routeChangeStart", () => handleRouteComplete);
    };
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
            {loading ? <Spinner /> : <Component {...pageProps} />}
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
