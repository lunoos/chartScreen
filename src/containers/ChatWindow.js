import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import _ from "lodash";
import "./ChatWindow.css";
import MessageInput from "./MessageInput";


const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  console.log(activeUser);
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages= {_.values(activeMsgs)} />
      <MessageInput value = {typing}/>
    </div>
  );
};

export default ChatWindow; 