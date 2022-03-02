import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { StyledUserListItem, Line } from "./styles/UserListItem.styled";

const UserListItem = ({ user, addMember, channelMembersIds }) => {
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    channelMembersIds.includes(user.id)
      ? setIsMember(true)
      : setIsMember(false);
  }, [channelMembersIds]);

  return (
    <>
      <StyledUserListItem
        onClick={(e) => {
          e.preventDefault();

          try {
            addMember(user.id);
            setIsMember(true);
          } catch (error) {}
        }}
      >
        <p>{user.name.charAt(0).toUpperCase()}</p>
        <span>{user.name}</span>
        {!isMember && (
          <FaUserPlus color="blue" fontSize="1.5em" cursor="pointer" />
        )}
      </StyledUserListItem>
      <Line />
    </>
  );
};

export default UserListItem;
