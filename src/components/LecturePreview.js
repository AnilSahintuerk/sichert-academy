import {
  Typography,
  Button,
  Stack,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import VideoPage from "../pages/VideoPage";

function LecturePreview(props) {
  let navigate = useNavigate();

  const clickHandler = (lecture) => {
    navigate("video/");
  };

  return (
    <Box>
      <Card
        sx={{
          width: "375px",
          height: "auto",
          maxHeight: "auto",
          borderRadius: "8px",
          position: "relative",
          boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CardMedia
          component="img"
          src={props.lecture.thumb}
          sx={{ maxHeight: "250px" }}
        ></CardMedia>
        <Avatar
          src={props.lecture.teacher.src}
          sx={{
            width: "96px",
            height: "96px",
            position: "absolute",
            right: "15px",
            top: "23%",
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
              {props.lecture.tags.map((tag, index) => (
                <Typography
                  kex={index}
                  sx={{
                    color: "#563E5D",
                    fontSize: "14px",
                    fontWeight: "300",
                    marginBottom: "4px",
                  }}
                >
                  #{tag}
                </Typography>
              ))}
            </Stack>
            <Typography
              sx={{
                color: "#563E5D",
                fontSize: "14px",
                fontWeight: "300",
                marginBottom: "32px",
              }}
            >
              {props.lecture.duration}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            color="sichert"
            onClick={() => clickHandler(props.lecture)}
          >
            Ansehen
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LecturePreview;
