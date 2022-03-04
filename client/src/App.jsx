import { useState, useEffect } from "react";
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
const client = StreamChat.getInstance(API_KEY);
const authToken = cookies.get("token");

function App() {
  const [showMemberList, setShowMemberList] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
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

      getChannels();

      const addedToChannelEvent = client.on(
        "notification.added_to_channel",
        (e) => {
          if (e.member.user_id === cookies.get("userId")) {
            getChannels();
          }
        }
      );

      const removeFromChannelEvent = client.on(
        "notification.removed_from_channel",
        (e) => {
          if (e.member.user_id === cookies.get("userId")) {
            getChannels();
          }
        }
      );

      return () => {
        addedToChannelEvent.unsubscribe();
        removeFromChannelEvent.unsubscribe();
      };
    }
  }, []);

  function getChannels() {
    const filter = { members: { $in: [`${cookies.get("userId")}`] } };

    //Get channels
    client.queryChannels(filter).then((data) => {
      setChannels(data);
      setSelectedChannel(data[0]);
    });
  }

  if (!authToken) {
    return <AuthForm />;
  }

  return (
    <AppContainer>
      {selectedChannel && (
        <SideBar
          client={client}
          setSelectedChannel={setSelectedChannel}
          setShowMemberList={setShowMemberList}
          setShowCreateChannelModal={setShowCreateChannelModal}
          selectedChannel={selectedChannel}
          channels={channels}
        />
      )}
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
      {
        //Render only if there is a selected channel
      }
      {selectedChannel && (
        <ChatContainer client={client} selectedChannel={selectedChannel} />
      )}
    </AppContainer>
  );
}

export default App;
