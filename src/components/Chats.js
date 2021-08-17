import React from "react";
import { ChatEngine } from "react-chat-engine";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Chats = () => {
  const history = useHistory();

  const logoutHandler = async () => {
    await auth.signOut();

    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">EasyChat</div>
        <div className="logout-tab" onClick={logoutHandler}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="a48e9f25-7ecc-4a98-b8cc-807e9cfbe2e6"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
