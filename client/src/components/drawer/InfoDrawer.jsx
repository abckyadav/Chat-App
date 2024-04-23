import { useContext, useEffect, useState } from "react";
import { Box, Drawer, Typography, styled } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { AccountContext } from "../../Context/AccountProvider";

const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  boxShadow: "none",
  back: "none",

  "@media screen and (min-width: 1300px)": {
    width: "calc(30% - 13px)",
  },
  "@media screen and (min-width: 901px) and (max-width: 1300px)": {
    width: "calc(40% - 13px)",
  },
  "@media screen and (max-width: 900px)": {
    width: "calc(45% - 13px)",
  },
};

const DrawerHeader = styled(Box)`
  display: flex;
  gap: 1rem;
  height: 110px;
  background-color: #008069;

  & svg,
  & > p {
    margin-top: auto;
    padding: 1rem;
    color: #fff;
  }
`;

const ProfilePictureContainer = styled(Box)`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled("img")`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  padding: 2rem 0;
`;
const YourName = styled(Box)`
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(11, 20, 26, 0.08);

  & :first-child {
    color: #009688;
    font-size: 0.8rem;
    font-weight: 300;
  }
  & :last-child {
    margin-top: 0.8rem;
  }
`;
const Disclaimer = styled(Box)`
  background-color: #ededed;
  padding: 1rem;
  font-size: 0.8rem;
  color: #54656f;
`;
const About = styled(Box)`
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(11, 20, 26, 0.08);

  & :first-child {
    color: #009688;
    font-size: 0.8rem;
    font-weight: 300;
  }
  & :last-child {
    margin-top: 0.8rem;
  }
`;

const InfoDrawer = ({ open, setOpen }) => {
  const { account } = useContext(AccountContext);
  const [profileImageUrl, setProfileImageUrl] = useState(account.picture);

  const enlargePicture = () => {
    let newSize = 1080; // For example, set the new size to 200

    // Split the URL string at the "=" sign
    let parts = account.picture.split("=s");

    // Construct the new URL with the dynamically changed size
    let newPictureUrl = parts[0] + "=s" + newSize;
    setProfileImageUrl(newPictureUrl);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    enlargePicture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileImageUrl]);

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
      hideBackdrop
    >
      <DrawerHeader>
        <ArrowBackOutlinedIcon
          onClick={handleClose}
          sx={{ cursor: "pointer" }}
        />
        <Typography>Profile</Typography>
      </DrawerHeader>

      <ProfilePictureContainer>
        <Image alt={account.name} src={profileImageUrl} />
      </ProfilePictureContainer>
      <YourName>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </YourName>
      <Disclaimer>
        This is not your username or pin. This name will be visible to your
        Whatsapp contacts
      </Disclaimer>
      <About>
        <Typography>About</Typography>
        <Typography>Eat 🥪 | Sleep 😴 | Code 💻 | Repeat</Typography>
      </About>
    </Drawer>
  );
};

export default InfoDrawer;
