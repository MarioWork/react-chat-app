import { useState, useEffect } from "react";
import {
  StyledSideBar,
  ChannelsContainer,
  ChannelsContainerHeader,
  ListContainer,
  InteriorContainer,
  InteriorContainerFooter,
} from "./styles/SideBar.styled";
import { FaPlus } from "react-icons/fa";
import { ChannelItem } from "./";
import Cookies from "universal-cookie";

const SideBar = ({
  client,
  selectedChannel,
  setSelectedChannel,
  setShowMemberList,
  setShowCreateChannelModal,
}) => {
  const cookies = new Cookies();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const filter = { members: { $in: [`${cookies.get("userId")}`] } };

    //Get channels
    client.queryChannels(filter).then((data) => {
      setChannels(data);
      setSelectedChannel(data[0]);
    });
  }, [client, setSelectedChannel]);

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

  function channelSelection(cid) {
    const channel = channels.find((_channel) => cid === _channel.cid);
    setSelectedChannel(channel);
  }

  return (
    <StyledSideBar>
      <ChannelsContainer>
        <ChannelsContainerHeader>
          <h3>Channels</h3>
          <FaPlus
            cursor="pointer"
            fontSize="1em"
            onClick={(e) => {
              e.preventDefault();
              setShowCreateChannelModal(true);
            }}
          />
        </ChannelsContainerHeader>
        <InteriorContainer>
          <ListContainer>
            {channels.length > 0 &&
              channels.map((channel) => (
                <ChannelItem
                  key={channel.cid}
                  channel={channel}
                  selectedChannel={selectedChannel}
                  onClick={(e) => {
                    e.preventDefault();
                    channelSelection(channel.cid);
                  }}
                  setShowMemberList={setShowMemberList}
                />
              ))}
          </ListContainer>
          <InteriorContainerFooter>
            <button onClick={handleLogout}>Logout</button>
          </InteriorContainerFooter>
        </InteriorContainer>
      </ChannelsContainer>
    </StyledSideBar>
  );
};

export default SideBar;
