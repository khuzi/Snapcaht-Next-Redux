import React, { useRef, useCallback, useState, useEffect } from "react";
import Router from "next/router";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import { Spinner } from "../../common";
import { setCameraImage } from "../../../redux/slices/cameraSlice";

import classes from "./webcam.module.css";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

export function WebCamCapture() {
  const [loading, setLoading] = useState(true);
  const webcamRef = useRef(null);
  const dispatch = useDispatch();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    Router.push("/preview");
  }, [webcamRef]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      {!loading && (
        <RadioButtonUncheckedIcon
          className={classes.webcamCapture_button}
          fontSize="large"
          onClick={capture}
        />
      )}
    </div>
  );
}
