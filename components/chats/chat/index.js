import React from "react";
import ReactTimeAgo from "react-timeago";
import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import { useDispatch } from "react-redux";
import { selectImage } from "../../../redux/slices/appSlice";
import firebase from "../../lib/firebase";
import Router from "next/router";

import classes from "./chat.module.css";

export function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  const db = firebase.firestore();
  const date = new Date(timestamp?.toDate()).toUTCString();
  const dispatch = useDispatch();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));

      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
    } else {
      dispatch(selectImage(imageUrl));
    }
    Router.push("/chats/view");
  };

  return (
    <div className={classes.chat} onClick={open}>
      <Avatar src={profilePic} className={classes.avatar} />
      <div className={classes.chatInfo}>
        <h4>{username}</h4>
        <p>
          Tap to view - <ReactTimeAgo date={date} />
        </p>
      </div>
      {!read && <StopRoundedIcon className={classes.chatRedIcon} />}
    </div>
  );
}
