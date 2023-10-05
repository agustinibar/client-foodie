import { Box } from "@mui/material"

export const UserImage = ({ image, size="60px" })=>{
    return(
        <Box
        width={size}
        height={size}
        >
        <img
        style={{ objectFit: "cover", borderRadius: "50%"}}
        width={size}
        height={size}
        alt="user"
        src={`https://foodie-site-api-rest.onrender.com/assets/${image}`}
        />
        </Box>
    )
}
