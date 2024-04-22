import { Drawer, styled } from "@mui/material";
import React from "react";

const CustomDrawer = styled(Drawer)({
  position: "relative", //imp
  width: 240, //drawer width
  "& .MuiDrawer-paper": {
    width: 240, //drawer width
    position: "absolute", //imp
    zIndex: 1500,
  },
});

const InfoDrawer = ({ open, setOpen }) => {
  console.log("open:", open);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomDrawer open={open} onClose={handleClose}>
      hello
    </CustomDrawer>
  );
};

export default InfoDrawer;
