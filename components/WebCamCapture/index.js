import React, { useRef, useCallback } from "react";
import Router from "next/router";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";

import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import classes from "./webcam.module.css";
import { setCameraImage } from "../../redux/slices/cameraSlice";

const videoConstraints = {
  width: 250,
  height: 400,
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
        heigh={videoConstraints.height}
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
