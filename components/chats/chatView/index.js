import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedImage,
  resetImage,
} from "../../../redux/slices/appSlice";
import Router from "next/router";

import classes from "./chatView.module.css";

export function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, []);

  const exit = () => {
    Router.push("/chats");
  };
  return (
    <div className={classes.chatView}>
      <img src={selectedImage} onClick={exit} />
    </div>
  );
}
