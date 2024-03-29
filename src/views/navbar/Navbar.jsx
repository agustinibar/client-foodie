import { useState } from "react"
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogOut } from '../../redux/index';
import { useNavigate } from "react-router-dom"; 
import FlexBetween from "components/FlexBetween";


export const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=> state.user);
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");

  
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  

  const fullName = user.firstName;
  


  return <FlexBetween padding="1rem 6%" backgroundColor={alt}>
    <FlexBetween gap="1.75rem">
          <Typography 
          fontWeight="bold"
          variant="h4" 
          color="primary.main"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: "primary.light", 
              cursor: "pointer",
            },
          }}
        >
          Xapport
        </Typography>

      {isNonMobileScreen && (
        <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
          <InputBase placeholder="Search..."/>
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      )}
    </FlexBetween>

    {isNonMobileScreen ? (
    <FlexBetween gap="2rem">
      <IconButton onClick={()=> dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px" }}/>
        ) 
        : (
          <LightMode sx={{ color:dark, fontSize: "25px" }}/>
        )} 
      </IconButton>
      <IconButton onClick={() => navigate("/messages")}>
      <Message  
      
      sx={{ fontSize: "25px" }}/>

      </IconButton>
      <IconButton onClick={()=>{ navigate("/groups")}}>

      <Notifications sx={{ fontSize: "25px" }}/>

      </IconButton>
      <Help  sx={{ fontSize: "25px" }}/>
      <FormControl variant="standard" value={fullName}>
        <Select 
        value={fullName}
        sx={{
          backgroundColor:neutralLight,
          width:"150px",
          borderRadius:"0.25rem",
          p:"0.25rem 1rem",
          "& .MuiSvgIcon-root" : {
            pr: "0.25rem 1rem",
            width:"3rem"
          },
          "& .MuiSelect-select:focus" : {
            backgroundColor: neutralLight 
          }
        }}
        input={<InputBase/>}
        >
          <MenuItem value={fullName}>
            <Typography>{fullName}</Typography>
          </MenuItem>
          <MenuItem onClick={()=> dispatch(setLogOut())}>Log Out</MenuItem>
        </Select>
      </FormControl>
    </FlexBetween>
    ) : (
    <IconButton
      onClick={()=> setIsMobileMenuToggled(!isMobileMenuToggled)}
    >
      <Menu/>
    </IconButton>
    )}

    {/* mobile */}
    {!isNonMobileScreen && isMobileMenuToggled && (
      <Box
        position="fixed"
        right="0"
        botton="0"
        height="100%"
        zIndex="10"
        maxWidth="500px"
        minWidth="300px"
        backgroundColor={background}
      >
        {/* close */}
        <Box display="flex" justifyContent="flex-end" p="1rem">
          <IconButton onClick={()=> setIsMobileMenuToggled(!isMobileMenuToggled)}>
            <Close/>
          </IconButton>
        </Box>
        {/* items */}
        <FlexBetween 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        gap="2rem"
        >
      <IconButton 
      onClick={()=> dispatch(setMode())}
      sx={{ fontSize: "25px" }}
      >
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px" }}/>
        ) 
        : (
          <LightMode sx={{ color:dark, fontSize: "25px" }}/>
        )} 
      </IconButton>
      <Message  
      onClick={() => navigate("/messages")}
      sx={{ fontSize: "25px" }}/>
      <Notifications  
      onClick={()=>{ navigate("/groups")}}
      sx={{ fontSize: "25px" }}/>
      <Help  sx={{ fontSize: "25px" }}/>
      <FormControl variant="standard" value={fullName}>
        <Select 
        value={fullName}
        sx={{
          backgroundColor:neutralLight,
          width:"150px",
          borderRadius:"0.25rem",
          p:"0.25rem 1rem",
          "& .MuiSvgIcon-root" : {
            pr: "0.25rem 1rem",
            width:"3rem"
          },
          "& .MuiSelect-select:focus" : {
            backgroundColor: neutralLight 
          }
        }}
        input={<InputBase/>}
        >
          <MenuItem value={fullName}>
            <Typography>{fullName}</Typography>
          </MenuItem>
          <MenuItem onClick={()=> dispatch(setLogOut())}>Log Out</MenuItem>
        </Select>
      </FormControl>
    </FlexBetween>
      </Box>
    )}
  </FlexBetween>
}
