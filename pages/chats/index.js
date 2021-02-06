import React from "react";

import { BackScreen, ChatHeader, ChatPosts } from "../../components";

export default function Chats() {
  return (
    <BackScreen>
      <div style={{ maxWidth: "260px" }}>
        <ChatHeader />
        <ChatPosts />
      </div>
    </BackScreen>
  );
}
