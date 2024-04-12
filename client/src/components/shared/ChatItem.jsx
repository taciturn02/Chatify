import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";


const ChatItem = ({
  name,
  _id,
  groupChat = false,
  avatar = [],
  isOnline,
  newMessageAlert,
 
  handleDeleteChat,
}) => {
  return (
    <Link

        sx = {{
                    padding :"0",
        }}
    
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
     
        <AvatarCard avatar={avatar}/>

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                top: "50%",
                right: "1rem",
                transform: "translateY(-50%)",
            }}
          />
        )}
    </Link>
  );
};

export default memo(ChatItem); //It will not render until a props changes