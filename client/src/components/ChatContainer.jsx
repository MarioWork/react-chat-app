import React, { useEffect } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import Cookies from "universal-cookie";
import "stream-chat-react/dist/css/index.css";

const ChatContainer = ({ client }) => {
  const cookies = new Cookies();
  const userToken = cookies.get("token");

  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      image: "",
    },
    userToken
  );

  const channel = client.channel("messaging", "Teste", {
    // add as many custom fields as you'd like
    image: "https://www.drupal.org/files/project-images/react.png",
    name: "Talk about React",
    members: [cookies.get("userId")],
  });

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatContainer;
