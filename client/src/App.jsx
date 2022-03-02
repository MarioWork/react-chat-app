import { useState } from "react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import { API_KEY } from "./secrets";
import AuthForm from "./components/AuthForm";
import SideBar from "./components/SideBar";
import ChatContainer from "./components/ChatContainer";
import MembersList from "./components/MembersList";
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
  const [showMemberList, setShowMemberList] = useState(true);

  if (!authToken) {
    return <AuthForm />;
  }

  return (
    <AppContainer>
      <SideBar
        client={client}
        setSelectedChannel={setSelectedChannel}
        setShowMemberList={setShowMemberList}
      />
      {showMemberList && (
        <MembersList
          client={client}
          setShowMemberList={setShowMemberList}
          channel={selectedChannel}
        />
      )}
      <ChatContainer client={client} selectedChannel={selectedChannel} />
    </AppContainer>
  );
}

export default App;
