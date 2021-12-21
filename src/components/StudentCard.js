import { Typography, Avatar, Box } from "@mui/material";

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
        sx={{ width: 100, height: 100 }}
      ></Avatar>
      <Typography variant="subtitle1" color="secondary">
        {props.name}
      </Typography>
      <Typography variant="h6" color="#003063">
        {props.surname}
      </Typography>
    </Box>
  );
}

export default StudentCard;
