import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { PlayArrow } from "@mui/icons-material";
import Forward30Icon from "@mui/icons-material/Forward30";
import Replay30Icon from "@mui/icons-material/Replay30";
import DescriptionIcon from "@mui/icons-material/Description";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PauseIcon from "@mui/icons-material/Pause";
import {
  Typography,
  LinearProgress,
  Button,
  Box,
  Stack,
  Divider,
  Container,
  Avatar,
  TextField,
  InputBase,
  Paper,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Checkbox,
  FormGroup,
  AvatarGroup,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  CardActionArea,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import VideoCardDrag from "./VideoCardDrag";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DATA = [
  {
    id: "0",
    teacher: "Dieter Müller",
    src: "logo192.png",
    title: "Kurs 1",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "06:05",
  },
  {
    id: "1",
    teacher: "Tina Schmidt",
    src: "3.png",
    title: "Kurs 2",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
  {
    id: "2",
    teacher: "Martina Müller",
    src: "2.JPEG",
    title: "Kurs 3",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
  {
    id: "3",
    teacher: "Dieter Müller",
    src: "logo192.png",
    title: "Kurs 1",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "06:05",
  },
  {
    id: "14",
    teacher: "Tina Schmidt",
    src: "3.png",
    title: "Kurs 2",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
  {
    id: "5",
    teacher: "Martina Müller",
    src: "2.JPEG",
    title: "Kurs 3",
    body: "Hier geht es um Kurse",
    tag: "Kurse",
    time: "02:05",
  },
];

function Preview(props) {
  const videoRef = useRef();
  const [videoTime, setVideoTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [volume, setVolume] = useState(100);

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
  }, 1000);

  window.setInterval(function () {
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 500);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const forward30Seconds = () => {
    videoRef.current.currentTime += 30;
  };

  const replay30Seconds = () => {
    videoRef.current.currentTime -= 30;
  };

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <video id="video1" src="1.mp4" ref={videoRef} width={"700px"}></video>
      <Box
        className="bar"
        sx={{
          minHeight: "800px",
          display: "none",

          "&:hover": {
            display: "block",
            position: "absolute",
            marginBottom: "40px",
          },
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          color="primary"
          sx={{
            height: "8px",
            width: "700px",
            position: "absolute",
            marginBottom: "40px",
            "&:hover": {
              height: "12px",
            },
          }}
        />
        <Stack
          sx={{
            position: "absolute",
            background: "rgba(0, 0, 0, 0.8)",
            minHeight: "40px",
            maxHeight: "40px",
            minWidth: "700px",
            color: "#fff",
            flexDirection: "row",
            flex: "1 0 auto",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              minWidth: "50%",
              gap: "24px",
            }}
          >
            {playing ? (
              <PauseIcon
                onClick={() => videoHandler("pause")}
                sx={{ marginLeft: "8px" }}
              />
            ) : (
              <PlayArrow
                onClick={() => videoHandler("play")}
                sx={{ marginLeft: "8px" }}
              ></PlayArrow>
            )}
            <Replay30Icon onClick={replay30Seconds} />
            <Typography>
              {Math.floor(currentTime / 60) +
                ":" +
                ("0" + Math.floor(currentTime % 60)).slice(-2) +
                " / " +
                Math.floor(videoTime / 60) +
                ":" +
                ("0" + Math.floor(videoTime % 60)).slice(-2)}
            </Typography>
            <Forward30Icon onClick={forward30Seconds} />
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              minWidth: "50%",
              justifyContent: "flex-end",
              gap: "24px",
            }}
          >
            <DescriptionIcon sx={{ marginRight: "16px" }} />

            <VolumeUpIcon />
            <SettingsIcon />
            <FullscreenIcon sx={{ marginRight: "8px" }} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Preview;
