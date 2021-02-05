import React from "react";

import classes from "./backScreen.module.css";

export function BackScreen({ children }) {
  return <div className={classes.backScreen}>{children}</div>;
}
