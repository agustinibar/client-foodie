import { Typography, useTheme } from "@mui/material"
import FlexBetween from "components/FlexBetween"
import { WidgetWrapper } from "components/WidgetWrapper"


export const AdvertisingWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img 
            width="100%"
            height="auto"
            alt="advert"
            src="http://localhost:3001/assets/donJulio.png"
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}}/>
            <FlexBetween>
                <Typography color={main}>Don Julio</Typography>
                <Typography color={medium}>https://www.parrilladonjulio.com/</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
            Enjoy the authentic Argentine grill experience at Don Julio. Our restaurant offers you the most exquisite cuts of meat, cooked to perfection on a traditional grill.
            </Typography>
        </WidgetWrapper>
  )
}
