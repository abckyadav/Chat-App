import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";
import SingleChatCard from "./SingleChatCard";
import { AccountContext } from "../../../Context/AccountProvider";

const ConversationContainer = styled(Box)`
  height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  /* For Firefox */
  &::-moz-scrollbar {
    width: 8px;
  }

  /* For Internet Explorer and Edge */
  &::-ms-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #88888895;
    border-radius: 10px;
  }
`;

const CustomDivider = styled(Divider)`
  border-color: #e9edef;
  margin: 0 1rem 0 5rem;
`;

const Conversations = () => {
  const { account } = useContext(AccountContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      setUsers(res);
    };

    fetchUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
