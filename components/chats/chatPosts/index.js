import React, { useEffect, useState } from "react";
import firebase from "../../lib/firebase";

import { Chat } from "../chat";

import classes from "./chatPosts.module.css";

export function ChatPosts() {
  const db = firebase.firestore();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    console.log("Posts = ", posts);
  }, [posts]);

  return (
    <div className={classes.chatPosts}>
      {posts.map(
        ({ id, data: { profilePic, username, imageUrl, timestamp, read } }) => (
          <Chat
            key={id}
            id={id}
            profilePic={profilePic}
            username={username}
            imageUrl={imageUrl}
            read={read}
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
}
