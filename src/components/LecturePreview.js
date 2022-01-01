import {
  Typography,
  Button,
  Stack,
  Avatar,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function LecturePreview(props) {
  return (
    <Card
      sx={{
        width: "375px",
        height: "auto",
        maxHeight: "630px",
        borderRadius: "8px",
        position: "relative",
        boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardMedia
        component="img"
        src="4.jpg"
        sx={{ maxHeight: "35%" }}
      ></CardMedia>
      <Avatar
        src="2.png"
        sx={{
          width: "96px",
          height: "96px",
          position: "absolute",
          right: "15px",
          top: "25%",
          border: "2px solid white",
        }}
      ></Avatar>
      <CardContent sx={{ margin: "32px 16px" }}>
        <Stack
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "space-around",
            margin: "32px 16px",
          }}
        >
          <Typography
            sx={{
              color: "#001B3D",
              fontSize: "24px",
              marginBottom: "32px",
            }}
          >
            {props.lecture.title}
          </Typography>
          <Typography
            sx={{
              color: "#003063",
              fontSize: "18px",
              marginBottom: "32px",
            }}
          >
            {props.lecture.description}
          </Typography>
          <Stack direction="row" spacing={1}>
            {props.lecture.tags.map((x) => (
              <Typography
                sx={{
                  color: "#563E5D",
                  fontSize: "14px",
                  fontWeight: "300",
                  marginBottom: "4px",
                }}
              >
                #{x}
              </Typography>
            ))}
          </Stack>
          <Typography
            sx={{
              color: "#563E5D",
              fontSize: "14px",
              fontWeight: "300",
              marginBottom: "48px",
            }}
          >
            {props.lecture.duration}
          </Typography>
          <Button variant="contained" color="sichert">
            Ansehen
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default LecturePreview;
