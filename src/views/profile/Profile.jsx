import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import { Navbar } from "views/navbar/Navbar";
import { FriendListWidget } from "views/widgets/FirendListWidget";
import { MyPostWidget } from "views/widgets/MyPostWidget";
import { PostsWidget } from "views/widgets/PostsWidget";
import { UserWidget } from "views/widgets/UserWidget";


export const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state)=> state.token);
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");

  const getUser = async()=>{
     const response = await fetch(`https://foodie-site-api-rest.onrender.com/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`}
     })
     const data = await response.json();

     setUser(data);
  };

  useEffect(()=>{
    getUser();
  }, [])
  
  if(!user) return null;
  
  console.log(user)
  return (
    <Box>
      <Navbar />
      <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreen ? "flex" : "block"}
      gap="2rem"
      justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0"/>
          <FriendListWidget userId={userId}/> 
        </Box>
        <Box 
        flexBasis={isNonMobileScreen ? "42%" : undefined}
        mt={isNonMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath}/>
          <PostsWidget userId={userId} isProfile/>
        </Box>
      </Box>
    </Box>

  )
};

