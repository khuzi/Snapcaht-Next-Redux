import React from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import classes from "./chatHeader.module.css";

export function ChatHeader() {
  return (
    <div className={classes.header}>
      <Avatar className={classes.avatar} />
      <div className={classes.search}>
        <SearchIcon />
        <input placeholder="Friends" />
      </div>
      <ChatBubbleIcon className={classes.chatIcon} />
    </div>
  );
}
