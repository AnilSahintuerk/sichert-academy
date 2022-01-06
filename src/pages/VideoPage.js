import {
  Box,
  Typography,
  Stack,
  Container,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import GoBack from "../components/GoBack";
import Videoplayer from "../components/Videoplayer";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Faq from "../components/Faq";
import VideoCardStatic from "../components/VideoCardStatic";
import DescriptionBox from "../components/DescriptionBox";
import lecturesData from "../data/LecturesData";
import { useState } from "react";

function VideoPage(props) {
  const [descBoxActive, setDescBoxActive] = useState(true);

  return (
    <Box
      maxWidth="100%"
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container
        className="noScroll"
        maxWidth="65%"
        sx={{
          height: "100vh",
          width: "75vw",
          overflowY: "scroll",
          position: "relative",
          paddingBottom: "64px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <GoBack />
        <Box sx={{ mb: "48px" }}>
          <Videoplayer
            lecture={props.lecture}
            descBoxHandler={setDescBoxActive}
          />
        </Box>
        <Box sx={{ padding: "16px 80px" }}>
          <Typography sx={{ fontSize: "32px", color: "#001B3D", mb: "32px" }}>
            {props.lecture.title}
          </Typography>
          <Divider sx={{ mb: "16px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Avatar
                src={props.lecture.teacher.src}
                sx={{ height: "75px", width: "75px" }}
              />
              <Typography>
                {props.lecture.teacher.name} {props.lecture.teacher.surname}
              </Typography>
            </Box>
            <Button sx={{ gap: "8px" }}>
              <QuestionMarkIcon fontSize="small" />
              Frage stellen
            </Button>
          </Box>
          <Divider sx={{ mt: "16px" }} />
          <Stack
            sx={{
              alignItems: "center",
              width: "100%",
              gap: "128px",
              mt: "110px",
            }}
          >
            <Faq lecture={props.lecture} />
            <Stack alignItems="center" spacing={10}>
              <Typography variant="h5" color="secondary">
                Ähnliche Videos
              </Typography>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <VideoCardStatic lecture={lecturesData[9]} />
                <VideoCardStatic lecture={lecturesData[2]} />
                <VideoCardStatic lecture={lecturesData[6]} />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
      {descBoxActive ? (
        <Container
          maxWidth="45%"
          sx={{
            height: "100vh",
            width: "25vw",
            background: "#FDFCFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            mt: "7%",
          }}
        >
          <DescriptionBox lecture={props.lecture} />
        </Container>
      ) : (
        <Box />
      )}
    </Box>
  );
}

export default VideoPage;
