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
  const [channelMembersIds, setChannelMembersIds] = useState([]);

  //Search for the user every time the state searchUser changes
  useEffect(() => {
    if (searchUser) {
      client
        .queryUsers({
          name: { $autocomplete: searchUser },
        })
        .then((data) => setUsers(data.users));
    } else {
      channel
        .queryMembers({})
        .then((data) => setUsers(data.members.map((member) => member.user)));
    }
  }, [searchUser]);

  //Get the membersIds of the channel
  useEffect(() => {
    channel
      .queryMembers({})
      .then((data) =>
        setChannelMembersIds(data.members.map((user) => user.user_id))
      );
  }, []);

  function closeModal(e) {
    e.preventDefault();
    e.stopPropagation();
    setShowMemberList((prev) => !prev);
  }

  function onInputChange(e) {
    setSearchUser(e.target.value);
  }

  function addMember(id) {
    const membersArray = [];
    membersArray.push(id);
    channel.addMembers(membersArray);
  }

  function removeMember(id) {
    const membersArray = [];
    membersArray.push(id);
    channel.removeMembers(membersArray);
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
            users.map((user) => (
              <UserListItem
                key={user.id}
                user={user}
                addMember={addMember}
                removeMember={removeMember}
                channelMembersIds={channelMembersIds}
              />
            ))}
        </ModalBody>
      </Modal>
    </StyledMembersList>
  );
};

export default MembersList;
