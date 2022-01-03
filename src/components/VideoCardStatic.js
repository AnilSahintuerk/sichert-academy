import {
  Typography,
  Stack,
  Avatar,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function VideoCardStatic(props) {
  return (
    <Card
      onClick={props.onClick}
      sx={{
        width: "285px",
        height: "245px",
        borderRadius: "8px",
        background: "#001B3D",
        boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.5) ",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          color: "#001B3D",
          outline: "4px solid #A6C8FF",
          boxShadow: "0 18px 30px 0 rgba(0, 0, 0, 0.5) ",
        },
      }}
    >
      <CardMedia
        component="img"
        image={props.lecture.thumb}
        alt={props.lecture.title}
        height="165"
        sx={{
          borderRadius: "8px 8px 0 0",
          background: "#001B3D",
          objectFit: "fill",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5) ",
        }}
      ></CardMedia>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          flex: "2 0 auto",
          paddingLeft: "8px",
        }}
      >
        <Stack direction="row" alignItems="center" gap="16px">
          <Avatar
            alt={props.lecture.teacher.name}
            src={props.lecture.teacher.src}
          />
          <Typography sx={{ fontSize: "16px", color: "#EBF1FF" }}>
            {props.lecture.title}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default VideoCardStatic;
