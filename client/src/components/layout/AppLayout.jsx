import {  Grid } from "@mui/material";
import React from "react";
import {  useParams } from "react-router-dom";

import Header from "./Header";
import Title from "../shared/title";
import ChatList from "../specific/ChatList";
import { samepleChats } from "../../constants/sampleData";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
 
  return (props) => {
 
    const params = useParams();
  const chatId = params.chatId;

  const handleDeleteChat = (e, chatId, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat",chatId,groupChat);
  };
    return (
      <>
        <Title/>
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <ChatList chats = {samepleChats} chatId={chatId}   handleDeleteChat={handleDeleteChat} newMessagesAlert={[{
              chatId,
              count : 4
            }]}   onlineUsers={["1" , "2"]}/>
            
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props}  />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >

            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;