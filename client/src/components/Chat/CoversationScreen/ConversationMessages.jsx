import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  overflow-y: auto;
  flex: 1 1 auto;

  display: flex;
  align-items: flex-end;

  &::-webkit-scrollbar {
    width: 12px;
  }
  /* For Firefox */
  &::-moz-scrollbar {
    width: 12px;
  }
  /* For Internet Explorer and Edge */
  &::-ms-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #88888895;
    border-radius: 10px;
  }
`;

const ContainerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 1rem 1.5rem;
  gap: 0.2rem;

  width: 100%;
`;
const ReceivedText = styled(Box)`
  display: flex;
  justify-content: flex-start;
  & > p {
    background-color: #fff;
  }
`;
const SentText = styled(Box)`
  display: flex;
  justify-content: flex-end;

  & > p {
    background-color: #d9fdd3;
  }
`;

const CutomTypography = styled(Typography)`
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const ConversationMessages = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ReceivedText>
          <CutomTypography>1. Lorem ipsum dolor sit.</CutomTypography>
        </ReceivedText>
        <ReceivedText>
          <CutomTypography>1. Lorem ipsum dolor sit.</CutomTypography>
        </ReceivedText>
        <SentText>
          <CutomTypography>2. Lorem ipsum dolor sit.</CutomTypography>
        </SentText>
        <SentText>
          <CutomTypography>2. Lorem ipsum dolor sit.</CutomTypography>
        </SentText>
        <ReceivedText>
          <CutomTypography>3. Lorem ipsum dolor sit.</CutomTypography>
        </ReceivedText>
        <SentText>
          <CutomTypography>4. Lorem ipsum dolor sit.</CutomTypography>
        </SentText>
        <ReceivedText>
          <CutomTypography>5. Lorem ipsum dolor sit.</CutomTypography>
        </ReceivedText>
      </ContainerWrapper>
    </Container>
  );
};
export default ConversationMessages;
