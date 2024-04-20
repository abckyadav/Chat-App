import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBoxConatiner = styled(Box)`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9edef;
`;
const Wrapper = styled(Box)`
  background: #fff;
  height: 35px;
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 0.75rem;
  border-radius: 10px;
  background: #f0f2f5;
`;

const CustomInputBase = styled(InputBase)`
  padding: 0 2rem 0 1rem;
`;

const SearchBox = () => {
  return (
    <SearchBoxConatiner>
      <Wrapper>
        <SearchIcon
          color="icon"
          sx={{ marginLeft: "1rem" }}
          fontSize="medium"
        />
        <CustomInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Wrapper>
    </SearchBoxConatiner>
  );
};

export default SearchBox;
