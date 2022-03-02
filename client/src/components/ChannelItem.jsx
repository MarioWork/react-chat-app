import React from "react";
import { FaUser } from "react-icons/fa";
import { StyledChannelItem } from "./styles/ChannelItem.styled";

const ChannelItem = ({ channel, onClick, setShowMemberList }) => {
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
      <FaUser onClick={addMemberClick} color="blue" />
    </StyledChannelItem>
  );
};

export default ChannelItem;
