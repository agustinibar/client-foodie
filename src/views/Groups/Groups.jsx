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
import { CreateGroupWidget } from "views/widgets/CreateGroup";
import { GroupWidget } from "views/widgets/GroupWidget";
import GroupsWidget from "views/widgets/GroupsWidget";




export const Groups = () => {
  
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
            <CreateGroupWidget/>
            <Box m="2rem 0"/>
                <AdvertisingWidget/>
            </Box>
            <Box>
                <GroupsWidget/>
            </Box>
        </Box>
      </Box>
    
    );
  };