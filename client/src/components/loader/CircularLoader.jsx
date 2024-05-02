import { Box, CircularProgress, Typography } from "@mui/material";

const CircularLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <CircularProgress />
      <Typography>Chats are being fetched...</Typography>
    </Box>
  );
};

export default CircularLoader;
