import { Typography, Avatar, Box, Stack } from "@mui/material";

function StudentCard(props) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        alt="props.fullname"
        src={props.src}
        variant="rounded"
        sx={{
          width: 100,
          height: 100,
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          "&:hover": {
            boxShadow: "0 16px 32px rgba(0,0,0,0.2)",
          },
          "&:active": {
            boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
          },
        }}
      ></Avatar>
      <Typography variant="subtitle1" color="tertiary.dark">
        {props.name}
      </Typography>
      <Typography variant="h6" color="#003063" sx={{ mt: "-8px" }}>
        {props.surname}
      </Typography>
    </Box>
  );
}

export default StudentCard;
