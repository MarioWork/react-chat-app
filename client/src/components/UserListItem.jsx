import React, { useState, useEffect } from "react";
import { FaUserPlus, FaTimes } from "react-icons/fa";
import { StyledUserListItem, Line } from "./styles/UserListItem.styled";
import Cookies from "universal-cookie";

const UserListItem = ({ user, addMember, removeMember, channelMembersIds }) => {
  const [isMember, setIsMember] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    //If the user is already in the channel update the state
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
            //if is a member remove member if not, add member
            if (isMember) {
              removeMember(user.id);
              setIsMember(false);
            } else {
              addMember(user.id);
              setIsMember(true);
            }
          } catch (error) {}
        }}
      >
        <p>{user.name.charAt(0).toUpperCase()}</p>
        <span>{user.name}</span>
        {user.id != cookies.get("userId") ? (
          isMember ? (
            <FaTimes color="red" fontSize="1.5em" cursor="pointer" />
          ) : (
            <FaUserPlus color="blue" fontSize="1.5em" cursor="pointer" />
          )
        ) : (
          <h4>Admin</h4>
        )}
      </StyledUserListItem>
      <Line />
    </>
  );
};

export default UserListItem;
