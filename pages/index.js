import React from "react";

import { WebCamCapture } from "../components";

import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.root}>
      <WebCamCapture />
    </div>
  );
}
