import { Box, styled, InputBase } from "@mui/material";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

const Container = styled(Box)`
  background-color: #f0f2f5;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;

  & > svg {
    cursor: pointer;
  }

  & > svg:nth-of-type(2) {
    transform: rotate(40deg);
  }
`;

const InputContainer = styled(Box)`
  flex: 1 1 auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 1rem;
`;
const CustomInput = styled(InputBase)`
  width: 100%;
`;

const Footer = ({ sendText, messageValue, setMessageValue }) => {
  return (
    <Container>
      <TagFacesOutlinedIcon color="icon" />
      <AttachFileOutlinedIcon color="icon" />
      <InputContainer>
        <CustomInput
          placeholder="Type a message"
          onChange={(e) => setMessageValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={messageValue}
        />
      </InputContainer>
      <MicOutlinedIcon color="icon" />
    </Container>
  );
};

export default Footer;
