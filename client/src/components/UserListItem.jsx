import React from "react";
import { StyledUserListItem, Line } from "./styles/UserListItem.styled";

const UserListItem = ({ user }) => {
  return (
    <>
      <StyledUserListItem>
        <p>{user.name.charAt(0).toUpperCase()}</p>
        <span>{user.name}</span>
      </StyledUserListItem>
      <Line />
    </>
  );
};

export default UserListItem;
