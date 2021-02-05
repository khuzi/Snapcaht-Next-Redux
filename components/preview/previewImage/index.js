import React, { useEffect } from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

import {
  selectCameraImage,
  resetCameraImage,
} from "../../../redux/slices/cameraSlice";
import { storage, db } from "../../lib/firebase";

import CloseIcon from "@material-ui/icons/Close";
import TextFieldIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";

import classes from "./previewImage.module.css";

export function PreviewImage() {
  const cameraImage = useSelector(selectCameraImage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      Router.push("/");
    }
  }, [cameraImage, Router]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  const sendPost = () => {
    const id = uuid();
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, "data_url");

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              username: "Khuzaima",
              read: false,
              //profilePic,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            Router.push("/chats");
          });
      }
    );
  };
  return (
    <div className={classes.preview}>
      <CloseIcon className={classes.close} onClick={closePreview} />
      <div className={`${classes.toolbar} preview_toolbar`}>
        <TextFieldIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt="" />
      <div className={classes.footer} onClick={sendPost}>
        <h2>Send Now</h2>
        <SendIcon fontSize="small" className={classes.sendIcon} />
      </div>
    </div>
  );
}
