import React, { useRef, useCallback } from "react";
import Router from "next/router";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import { setCameraImage } from "../../../redux/slices/cameraSlice";

import classes from "./webcam.module.css";

const videoConstraints = {
  width: 300,
  height: 500,
  facingMode: "user",
};

export function WebCamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    Router.push("/preview");
  }, [webcamRef]);

  return (
    <div className={classes.webcamCapture}>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
        className={classes.webcamCapture_button}
        fontSize="large"
        onClick={capture}
      />
    </div>
  );
}
