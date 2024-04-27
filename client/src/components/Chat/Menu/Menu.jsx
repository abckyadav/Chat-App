import React, { useState } from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import Conversations from "./Conversations";

const Menu = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Header />
      <SearchBox setSearchText={setSearchText} />
      <Conversations searchText={searchText} />
    </div>
  );
};

export default Menu;
