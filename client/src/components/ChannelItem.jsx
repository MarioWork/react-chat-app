import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { StyledChannelItem } from "./styles/ChannelItem.styled";
import Cookies from "universal-cookie";

const ChannelItem = ({ channel, onClick, setShowMemberList }) => {
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
    <StyledChannelItem onClick={onClick}>
      {channel.data.image ? (
        <img src={channel.data.image} alt="" />
      ) : (
        <h2>{channel.data.name.charAt(0).toUpperCase()}</h2>
      )}
      <p>{channel.data.name}</p>
      {isOwner && <FaUser onClick={addMemberClick} color="blue" />}
    </StyledChannelItem>
  );
};

export default ChannelItem;
