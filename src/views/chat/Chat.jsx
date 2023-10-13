import React, { useState } from "react";
import {
  Box,
  Typography
} from "@mui/material";
import { Navbar } from "views/navbar/Navbar";
import { useSelector } from "react-redux";
import { FriendListWidget } from "views/widgets/FirendListWidget";
import { ChatWindow } from "views/widgets/ChatWindow";




export const Chat = () => {
  
    const { _id } = useSelector((state)=> state.user);
    const [selectedFriend, setSelectedFriend] = useState(null);

  
  
    return (
      <Box>
        <Navbar />
        <Typography variant="h4">Mensajes</Typography>
  
        {/* Lista de amigos */}
        <FriendListWidget userId={_id} setSelectedFriend={setSelectedFriend}/>

        {/* Ventana de mensajes */}
        { selectedFriend && (
            <ChatWindow friend={selectedFriend} onClose={()=> setSelectedFriend(null)}/>
        )}
      </Box>
    );
  };
