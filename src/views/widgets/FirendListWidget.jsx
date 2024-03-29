import { Palette } from "@mui/icons-material"
import { Box, Typography, useTheme } from "@mui/material"
import { Friend } from "components/Friend"
import { WidgetWrapper } from "components/WidgetWrapper"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFriends } from "../../redux/index"

export const FriendListWidget = ({ userId, setSelectedFriend }) => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state)=> state.token);
    const friends = useSelector((state)=> state.user.friends);

  const getFriends = async()=>{
    const response = await fetch(`https://foodie-site-api-rest.onrender.com/users/${userId}/friends`,
    {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
    });

    const data = await response.json();
    dispatch(setFriends({ friends: data }))
  };
  useEffect(()=>{
    getFriends();
  }, []);

    return (
    <WidgetWrapper>
        <Typography
        color={palette}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
        >
            Friend List
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
            {friends.map((friend)=>(
                <Friend
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}
                userPicturePath={friend.picturePath}
                setSelectedFriend={setSelectedFriend}
                />
            ))}
        </Box>
    </WidgetWrapper>
  )
}
