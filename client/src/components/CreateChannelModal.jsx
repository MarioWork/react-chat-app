import React, { useState } from "react";
import Cookies from "universal-cookie";
import { FaTimes } from "react-icons/fa";
import { nanoid } from "nanoid";
import {
  StyledCreateChannelModal,
  Modal,
  ModalHeader,
  ModalBody,
} from "./styles/CreateChannelModal.styled.js";

const CreateChannelModal = ({ client, setShowCreateChannelModal }) => {
  const cookies = new Cookies();
  const [channelInfo, setChannelInfo] = useState({ image: "", name: "" });
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const createChannel = (e) => {
    e.preventDefault();

    if (channelInfo.name != "") {
      const channel = client.channel("messaging", nanoid(30), {
        image: channelInfo.image,
        name: channelInfo.name,
        members: [cookies.get("userId")],
      });
      channel.create();
      setShowCreateChannelModal(false);
      return;
    }

    setShowErrorDialog(true);
  };

  function updateChannelInfo(e) {
    setChannelInfo((prevChannelInfo) => {
      return { ...prevChannelInfo, [e.target.name]: e.target.value };
    });
  }

  function closeModal(e) {
    e.preventDefault();
    setShowCreateChannelModal(false);
  }

  return (
    <StyledCreateChannelModal>
      <Modal>
        <ModalHeader>
          <h3>Create Channel</h3>
          <FaTimes fontSize="2em" cursor="pointer" onClick={closeModal} />
        </ModalHeader>
        <ModalBody>
          <form onSubmit={createChannel}>
            <input
              type="text"
              name="name"
              onChange={updateChannelInfo}
              placeholder="Channel Name..."
              value={channelInfo.name}
            />
            <input
              type="text"
              name="image"
              onChange={updateChannelInfo}
              placeholder="Channel Image Url..."
              value={channelInfo.image}
            />
            <button>Create</button>
          </form>
          {showErrorDialog && <p>Please insert a valid name...</p>}
        </ModalBody>
      </Modal>
    </StyledCreateChannelModal>
  );
};

export default CreateChannelModal;
