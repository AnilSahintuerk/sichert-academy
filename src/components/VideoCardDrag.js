import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

function VideoCardDrag(props) {
  console.log(props.lecture);
  return (
    <Card
      sx={{
        width: "485px",
        height: "128px",
        padding: "4px 0",
        paddingLeft: "8px",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5) ",
        background:
          " linear-gradient(179.07deg, #004466 1.01%, #001B3D 99.41%)",
        display: "flex",
        alignItems: "center",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component="img"
        src={props.lecture.thumb}
        alt="hier img"
        sx={{
          width: 145,
          height: 105,
          borderRadius: "16px",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5) ",
        }}
      />
      <Box
        sx={{
          width: 145,
          height: 105,
          display: "flex",

          flexDirection: "column",
          flex: "1 0 auto",
        }}
      >
        <CardContent
          sx={{
            padding: "0 16px 0 8px",
            display: "flex",
            flex: "auto",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" align="left" color="#fff">
            {props.lecture.title}
          </Typography>
          <Typography variant="body2" align="left" color="#fff">
            {props.lecture.goals}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2" color="#BDC7DC">
              {props.lecture.teacher.name}
              {props.lecture.teacher.surname}
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "600" }}
              color="#A1ABC0"
            >
              {props.lecture.duration}
            </Typography>
            {props.lecture.tags.map((tag) => (
              <Typography variant="caption" color="#F8D8FE">
                #{tag}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default VideoCardDrag;
