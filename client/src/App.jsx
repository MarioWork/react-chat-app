import { useState } from "react";
import { StreamChat } from "stream-chat";
import { API_KEY } from "./secrets";
import Cookies from "universal-cookie";
import {
  AuthForm,
  SideBar,
  ChatContainer,
  MembersList,
  CreateChannelModal,
} from "./components";
import { AppContainer } from "./components/styles/AppContainer.styled";

const cookies = new Cookies();
const authToken = cookies.get("token");

const client = StreamChat.getInstance(API_KEY);

//Check if there is a user logged in
if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

function App() {
  const [selectedChannel, setSelectedChannel] = useState({});
  const [showMemberList, setShowMemberList] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);

  if (!authToken) {
    return <AuthForm />;
  }

  return (
    <AppContainer>
      <SideBar
        client={client}
        setSelectedChannel={setSelectedChannel}
        setShowMemberList={setShowMemberList}
        setShowCreateChannelModal={setShowCreateChannelModal}
      />
      {showMemberList && (
        <MembersList
          client={client}
          setShowMemberList={setShowMemberList}
          channel={selectedChannel}
        />
      )}

      {showCreateChannelModal && (
        <CreateChannelModal
          client={client}
          setShowCreateChannelModal={setShowCreateChannelModal}
        />
      )}

      <ChatContainer client={client} selectedChannel={selectedChannel} />
    </AppContainer>
  );
}

export default App;
