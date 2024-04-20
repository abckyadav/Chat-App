import {
  Grid,
  Box,
  List,
  ListItem,
  styled,
  Divider,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import WhatsappLogo from "../Assets/WhatsappLogo.svg";
import { qrCodeImage } from "../../Constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../Context/AccountProvider";

const LogoHeader = styled(Box)`
  display: flex;
  width: 70%;
  gap: 1rem;
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const TitleHeading = styled("h2")`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
`;
const Boxshadow = styled("div")`
  width: 70%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 17px 50px 0 rgba(11, 20, 26, 0.19),
    0 12px 15px 0 rgba(11, 20, 26, 0.24);

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const LoginDialogContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 4rem;
  background: #fff;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
`;

const LandingTitle = styled("div")`
  font-size: 1.75rem;
  font-weight: 300;
  line-height: normal;
  color: #41525d;
  margin-bottom: 1.5rem;
`;

const BackgroundQRcodeImage = styled("div")`
  background-image: url(${qrCodeImage});
  background-repeat: no-repeat;
  background-size: contain;
  width: 264px;
  height: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const QrContainer = {
  display: "flex",
  justifyContent: "flex-end",

  "@media screen and (max-width: 900px)": {
    justifyContent: "center",
  },
};

const TutorialContainer = styled(Grid)`
  width: 100%;
  padding: 2rem;
  background: #f9f9fa;
`;

const LoginScreen = () => {
  const { setAccount } = useContext(AccountContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onLoginSuccess = (res) => {
    const decoded = jwtDecode(res.credential);

    console.log(decoded);
    setAccount(decoded);
  };

  const onLoginError = (res) => {
    console.log("Login error", res);
  };
  return (
    <div>
      <LogoHeader>
        <img src={WhatsappLogo} alt="Whatsapp Logo" />
        <TitleHeading>Whatsapp Web</TitleHeading>
      </LogoHeader>

      <Boxshadow>
        <LoginDialogContainer container>
          <Grid item xs={12} md={6}>
            <Box>
              <LandingTitle>Use WhatsApp on your computer</LandingTitle>
              <List>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>
                  2. Tap Menu on Android, or Settings on iPhone
                </ListItem>
                <ListItem>
                  3. Tap Linked Devices and then Link a device
                </ListItem>
                <ListItem>
                  4. Point your phone at this screen to capture the QR code
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={QrContainer}>
            <BackgroundQRcodeImage>
              {/* <QRcodeImage src={qrCodeImage} alt="qrCodeImage" /> */}
              <Box>
                <GoogleLogin
                  onSuccess={onLoginSuccess}
                  onError={onLoginError}
                />
              </Box>
            </BackgroundQRcodeImage>
          </Grid>

          <Grid item xs={12} mt={5}>
            <Divider />
          </Grid>
          <Grid item xs={12} mt={5}>
            <Typography color="primary" sx={{ cursor: "pointer" }}>
              Link with your phone number
            </Typography>
          </Grid>
        </LoginDialogContainer>

        <TutorialContainer mb={2}>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <LandingTitle xs={12}>Tutorial</LandingTitle>
            <Typography color="primary" xs={12} mb={3}>
              Need help to get started
            </Typography>

            <video
              autoPlay
              controls
              controlsList="nodownload"
              width={windowWidth < 768 ? "100%" : "50%"}
            >
              <source
                src="https://static.whatsapp.net/rsrc.php/yn/r/6swO8kJM8z2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Grid>
        </TutorialContainer>
      </Boxshadow>
    </div>
  );
};

export default LoginScreen;
