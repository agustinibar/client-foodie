import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery
} from "@mui/material";
import { Navbar } from "views/navbar/Navbar";
import { useSelector } from "react-redux";
import { FriendListWidget } from "views/widgets/FirendListWidget";
import { ChatWindow } from "views/widgets/ChatWindow";
import { AdvertisingWidget } from "views/widgets/AdvertisingWidget";
import { MyPostWidget } from "views/widgets/MyPostWidget";
import { PostsWidget } from "views/widgets/PostsWidget";
import { UserWidget } from "views/widgets/UserWidget";




export const Chat = () => {
  
    const { _id } = useSelector((state)=> state.user);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  
  
    return (
     
      <Box>
      <Navbar/>
      <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreen ? "flex" : "block"}
      gap="0.5rem"
      justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <FriendListWidget userId={_id} setSelectedFriend={setSelectedFriend}/>
          <Box m="2rem 0"/>
        <AdvertisingWidget/>
        </Box>
         
        </Box>
        <Box 
        flexBasis={isNonMobileScreen ? "42%" : undefined}
        mt={isNonMobileScreen ? undefined : "2rem"}
        >
          {/* Ventana de mensajes */}
           { selectedFriend && (
               <Box flexBasis="26%">
               <ChatWindow friend={selectedFriend} onClose={() => setSelectedFriend(null)} />
               </Box>
          )}
        </Box>
        {isNonMobileScreen && (
          <Box flexBasis="26%">
         
        </Box>
        )}
      </Box>
    
    );
  };
