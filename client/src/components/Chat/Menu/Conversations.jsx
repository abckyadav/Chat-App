import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";
import SingleChatCard from "./SingleChatCard";
import { AccountContext } from "../../../Context/AccountProvider";

const ConversationContainer = styled(Box)`
  height: 100%;
  overflow-y: auto;
`;

const CustomDivider = styled(Divider)`
  border-color: #e9edef;
  margin: 0 1rem 0 5rem;
`;

const Conversations = ({ searchText }) => {
  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();

      const filteredUsers = res.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setUsers(filteredUsers);
    };

    fetchUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <ConversationContainer>
      {users &&
        users?.map(
          (user) =>
            user?.sub !== account?.sub && (
              <React.Fragment key={user?.sub}>
                <SingleChatCard user={user} />
                <CustomDivider />
              </React.Fragment>
            )
        )}
    </ConversationContainer>
  );
};

export default Conversations;
