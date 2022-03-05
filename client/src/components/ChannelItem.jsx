import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { StyledChannelItem, Line } from "./styles/ChannelItem.styled";
import Cookies from "universal-cookie";

const ChannelItem = ({
  channel,
  onClick,
  setShowMemberList,
  selectedChannel,
}) => {
  const [isOwner, setIsOwner] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    setIsOwner(channel.data.created_by.id === cookies.get("userId"));
  }, []);

  function addMemberClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setShowMemberList((prev) => !prev);
  }

  return (
    <>
      <StyledChannelItem
        onClick={onClick}
        isSelected={selectedChannel === channel}
      >
        {channel.data.image ? (
          <img src={channel.data.image} alt="" />
        ) : (
          <h2>{channel.data.name.charAt(0).toUpperCase()}</h2>
        )}
        <p>{channel.data.name}</p>
        {isOwner && selectedChannel === channel && (
          <FaUser onClick={addMemberClick} />
        )}
      </StyledChannelItem>
      <Line />
    </>
  );
};

export default ChannelItem;
