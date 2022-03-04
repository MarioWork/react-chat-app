import React, { useEffect, useState } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { firstCharToUpperCaseString } from "../utils/firstCharToUpperCaseString";

import {
  StyledChatContainer,
  StyledChat,
  StyledChatHeader,
} from "./styles/ChatContainer.styled";
import "stream-chat-react/dist/css/index.css";

const ChatContainer = ({ selectedChannel, client }) => {
  const [membersCounter, setMembersCounter] = useState(0);
  //console.log(selectedChannel.state.messages);
  /*   let messages = [];
  
  if (selectedChannel) {
    selectedChannel.on("message.new", (e) => {
      if (!messages.includes(e.message)) {
        messages.push(e.message);
      }
    });
  }
  console.log(messages); 
  
  if (selectedChannel) {
    selectedChannel.on("USER.PRESENCE.CHANGED", (event) => {
      console.log(event);
    });
  }
  */

  useEffect(() => {
    const addedMemberToChannel = client.on("member.added", (e) => {
      if (e.channel_id === selectedChannel.id) {
        setMembersCounter((prevCounter) => (prevCounter = prevCounter + 1));
      }
    });

    const removeMemberFromChannel = client.on("member.removed", (e) => {
      if (e.channel_id === selectedChannel.id) {
        setMembersCounter((prevCounter) => (prevCounter = prevCounter - 1));
      }
    });

    return () => {
      addedMemberToChannel.unsubscribe();
      removeMemberFromChannel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setMembersCounter(selectedChannel.data.member_count);
  }, [selectedChannel]);

  return (
    <StyledChatContainer>
      <StyledChat>
        <StyledChatHeader>
          <h2>{firstCharToUpperCaseString(selectedChannel.data.name)}</h2>
          <h5>
            {`${membersCounter} ${membersCounter != 1 ? "members" : "member"}`}
          </h5>
        </StyledChatHeader>
      </StyledChat>
    </StyledChatContainer>
  );
};

{
  /* <Chat client={client}>
        <Channel channel={selectedChannel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat> */
}
export default ChatContainer;
