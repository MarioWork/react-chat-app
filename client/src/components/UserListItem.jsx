import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { StyledUserListItem, Line } from "./styles/UserListItem.styled";

const UserListItem = ({ user }) => {
  return (
    <>
      <StyledUserListItem>
        <p>{user.name.charAt(0).toUpperCase()}</p>
        <span>{user.name}</span>
        <FaUserPlus color="blue" fontSize="1.5em" cursor="pointer" />
      </StyledUserListItem>
      <Line />
    </>
  );
};

export default UserListItem;
