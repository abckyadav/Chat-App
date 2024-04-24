import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import Conversations from "./Conversations";

const Menu = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <Conversations />
    </div>
  );
};

export default Menu;
