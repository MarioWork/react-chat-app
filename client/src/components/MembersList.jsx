import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  StyledMembersList,
  Modal,
  ModalHeader,
  ModalBody,
  HeaderTopPart,
  HeaderSearchPart,
} from "./styles/MembersList.styled";
import UserListItem from "./UserListItem";

const MembersList = ({ client, channel, setShowMemberList }) => {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    if (searchUser) {
      client
        .queryUsers({ name: { $autocomplete: searchUser } })
        .then((data) => setUsers(data.users));
    }
    console.log(users);
  }, [searchUser]);

  function closeModal(e) {
    e.preventDefault();
    e.stopPropagation();
    setShowMemberList((prev) => !prev);
  }

  function onInputChange(e) {
    setSearchUser(e.target.value);
  }

  return (
    <StyledMembersList>
      <Modal>
        <ModalHeader>
          <HeaderTopPart>
            <h2>Users</h2>
            <FaTimes fontSize="2em" cursor="pointer" onClick={closeModal} />
          </HeaderTopPart>
          <HeaderSearchPart>
            <input
              type="text"
              placeholder="Enter the username..."
              onChange={onInputChange}
            />
          </HeaderSearchPart>
        </ModalHeader>
        <ModalBody>
          {users.length > 0 &&
            users.map((user) => <UserListItem user={user} />)}
        </ModalBody>
      </Modal>
    </StyledMembersList>
  );
};

export default MembersList;
