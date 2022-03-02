import { useState, useEffect } from "react";
import {
  StyledSideBar,
  ChannelsContainer,
  ChannelsContainerHeader,
  ListContainer,
  InteriorContainer,
} from "./styles/SideBar.styled";
import ChannelItem from "./ChannelItem";
import Cookies from "universal-cookie";

const SideBar = ({ client, setSelectedChannel }) => {
  const cookies = new Cookies();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //Get channels
    client.queryChannels().then((data) => {
      setChannels(data);
      setSelectedChannel(data[0]);
    });
  }, [client, setSelectedChannel]);

  console.log(channels);

  //Logout user
  const handleLogout = (e) => {
    e.preventDefault();

    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };

  const createChannel = (e) => {
    const channel = client.channel("messaging", "Teste", {
      image: "https://www.drupal.org/files/project-images/react.png",
      name: "Talk about React",
      members: [cookies.get("userId")],
    });
  };

  function channelSelection(e) {
    e.preventDefault();
  }

  return (
    <StyledSideBar>
      <ChannelsContainer>
        <ChannelsContainerHeader>
          <h3>Channels</h3>
        </ChannelsContainerHeader>
        <InteriorContainer>
          <ListContainer>
            {channels.length > 0 &&
              channels.map((channel) => (
                <ChannelItem
                  key={channel.cid}
                  channel={channel}
                  onClick={channelSelection}
                />
              ))}
          </ListContainer>
          <button onClick={handleLogout}>Logout</button>
        </InteriorContainer>
      </ChannelsContainer>
    </StyledSideBar>
  );
};

export default SideBar;
