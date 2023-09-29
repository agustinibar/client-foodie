import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Form } from "./Form";






export const Login = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");

  return (
    <Box 
    width="100%" 
    backgroundColor={theme.palette.background.alt}
    p="1rem 6%" 
    textAlign="center"
    >
        <Typography 
          fontWeight="bold"
          variant="h4" 
          color="primary.main" 
        >
          Foodie Site Lab
        </Typography>
        <Box
        width={isNonMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
          <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem"}}
          >
            Welcome to Foodie, the Social Media for Chefs & restauranteurs!
          </Typography>
          <Form/>
        </Box>
    </Box>
  )
};

