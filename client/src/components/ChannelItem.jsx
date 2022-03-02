import React from "react";
import { StyledChannelItem } from "./styles/ChannelItem.styled";

const ChannelItem = ({ channel }) => {
  console.log(channel);
  return (
    <StyledChannelItem>
      {channel.data.image ? (
        <img src={channel.data.image} alt="" />
      ) : (
        <h2>{channel.data.name.charAt(0).toUpperCase()}</h2>
      )}
      <p>{channel.data.name}</p>
    </StyledChannelItem>
  );
};

export default ChannelItem;
