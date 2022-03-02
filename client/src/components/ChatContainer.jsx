import React from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StyledChatContainer } from "./styles/ChatContainer.styled";
import "stream-chat-react/dist/css/index.css";

const ChatContainer = ({ client, selectedChannel }) => {
  return (
    <StyledChatContainer>
      <Chat client={client}>
        <Channel channel={selectedChannel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </StyledChatContainer>
  );
};

export default ChatContainer;
