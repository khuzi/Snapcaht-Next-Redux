import React from "react";

import { WebCamCapture, BackScreen } from "../components";

export default function Home() {
  return (
    <BackScreen>
      <WebCamCapture />
    </BackScreen>
  );
}
