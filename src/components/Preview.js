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
import ReactPlayer from "react-player";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import screenfull from "screenfull";
import {
  Typography,
  Tooltip,
  LinearProgress,
  Popover,
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
  Slider,
  PrettoSlider,
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
  const videoContainerRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playedTime, setPlayedTime] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [mute, setMute] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [seeking, setSeeking] = useState(null);
  const [onHover, setOnHover] = useState(false);

  function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleReplay = () => {
    videoRef.current.seekTo(videoRef.current.getCurrentTime() - 30);
  };

  const handleForward = () => {
    videoRef.current.seekTo(videoRef.current.getCurrentTime() + 30);
  };

  const handleMute = () => {
    setMute(!mute);
  };

  const handlePlaybackRate = (rate) => {
    setPlaybackRate(rate);
  };

  const handleFullScreen = () => {
    screenfull.toggle(videoContainerRef.current);
    setFullScreen(!fullScreen);
  };

  const handleProgress = (changeState) => {
    if (!seeking) {
      setPlayedTime(changeState.played);
    }
  };

  const handleSeekChange = (event, newValue) => {
    setPlayedTime(parseFloat(newValue / 100));
  };

  const handleSeekMouseDown = (event) => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (event, newValue) => {
    setSeeking(false);
    videoRef.current.seekTo(newValue / 100);
  };

  const handleHover = () => {
    setOnHover(true);
  };

  const handleHoverLeave = () => {
    setOnHover(false);
    console.log("hello");
  };

  const open = Boolean(anchorEl);

  return (
    <Container
      maxWidth="md"
      gap="0"
      sx={{ display: "flex", flexDirection: "column", gap: "0" }}
    >
      <Box
        onMouseLeave={handleHoverLeave}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          bottom: "0",
          left: "0",
        }}
        ref={videoContainerRef}
      >
        <ReactPlayer
          url="1.mp4"
          width="100%"
          height="100%"
          ref={videoRef}
          playing={playing}
          muted={mute}
          playbackRate={playbackRate}
          onProgress={handleProgress}
        ></ReactPlayer>

        {onHover ? (
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              marginBottom: "5px",
              background: "rgba(10,0,0,0.5)",
              width: "99.9%",
              height: "40px",
            }}
          >
            <Slider
              min={0}
              max={100}
              value={playedTime * 100}
              onChange={handleSeekChange}
              onMouseDown={handleSeekMouseDown}
              onChangeCommitted={handleSeekMouseUp}
              valueLabelDisplay="auto"
              components={{
                ValueLabel: ValueLabelComponent,
              }}
              aria-label="custom thumb label"
              sx={{ position: "absolute", bottom: "27px" }}
            ></Slider>
            <Stack
              sx={{
                color: "#fff",
                flexDirection: "row",
                height: "40px",
                flex: "1 0 auto",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  minWidth: "50%",
                  gap: "24px",
                  marginLeft: "8px",
                }}
              >
                <IconButton sx={{ color: "#fff" }} onClick={handlePlayPause}>
                  {playing ? (
                    <PauseIcon fontSize="large" />
                  ) : (
                    <PlayArrow fontSize="large" />
                  )}
                </IconButton>
                <IconButton sx={{ color: "#fff" }} onClick={handleReplay}>
                  <Replay30Icon />
                </IconButton>
                <Typography
                  sx={{
                    color: "#fff",
                    alignSelf: "center",
                  }}
                >
                  0:55/1:25
                </Typography>
                <IconButton sx={{ color: "#fff" }} onClick={handleForward}>
                  <Forward30Icon />
                </IconButton>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  minWidth: "50%",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <IconButton sx={{ marginRight: "14px", color: "#fff" }}>
                  <DescriptionIcon />
                </IconButton>
                <IconButton sx={{ color: "#fff" }} onClick={handleMute}>
                  {mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
                </IconButton>
                <IconButton sx={{ color: "#fff" }}>
                  <SettingsIcon />
                </IconButton>
                <Button
                  variant="text"
                  align="center"
                  onClick={handleClick}
                  sx={{ fontSize: "16px", color: "#fff" }}
                >
                  {playbackRate}X
                </Button>
                <Popover
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  open={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  color="primary"
                >
                  <Stack direction="column-reverse">
                    {[0.5, 1, 1.5, 2].map((rate) => (
                      <Button
                        variant="text"
                        align="center"
                        onClick={() => handlePlaybackRate(rate)}
                        sx={{
                          fontSize: "16px",
                          color: "#000",
                          background: "#fff",
                        }}
                      >
                        {rate}
                      </Button>
                    ))}
                  </Stack>
                </Popover>
                <IconButton
                  sx={{ marginRight: "16px", color: "#fff" }}
                  onClick={handleFullScreen}
                >
                  {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        ) : (
          <Box
            onMouseOver={handleHover}
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              top: "0",
              marginBottom: "5px",
              width: "99.9%",
              height: "100%",
            }}
          ></Box>
        )}
      </Box>
    </Container>
  );
}

export default Preview;
