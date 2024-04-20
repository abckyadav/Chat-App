import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
  padding: 0.5rem 3.5rem 0.5rem 1.5rem;
  font-size: 0.9rem;
`;

const CustomMenu = styled(Menu)`
  padding: 10px 0;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(11, 20, 26, 0.26),
    0 2px 10px 0 rgba(11, 20, 26, 0.16);
`;

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreVertOutlinedIcon
        color="icon"
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      />
      <CustomMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </CustomMenu>
    </div>
  );
};

export default HeaderMenu;
