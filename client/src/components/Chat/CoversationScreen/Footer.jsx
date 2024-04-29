import { Box, styled, InputBase } from "@mui/material";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { useEffect } from "react";
import { UploadFile } from "../../../service/api";

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

  & > label {
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

const Footer = ({
  sendText,
  messageValue,
  setMessageValue,
  file,
  setFile,
  setFileFromServer,
}) => {
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessageValue(e.target.files[0].name);
  };

  useEffect(() => {
    const setFiles = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await UploadFile(data);
        setFileFromServer(response.data);
      }
    };
    setFiles();
  }, [file, setFileFromServer]);

  return (
    <Container>
      <TagFacesOutlinedIcon color="icon" />
      <label htmlFor="file">
        <AttachFileOutlinedIcon color="icon" />
      </label>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
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
