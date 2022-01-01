import IconButton from "@mui/material/IconButton";
import PlayArrow from "@mui/icons-material/PlayArrow";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
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
import NoteBlock from "./NoteBlock";
import {
  Typography,
  Tooltip,
  Popover,
  Button,
  Box,
  Stack,
  Container,
  Slider,
} from "@mui/material";
import { useState, useRef } from "react";

function Videoplayer(props) {
  const videoRef = useRef();
  const videoContainerRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [mute, setMute] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [seeking, setSeeking] = useState(null);
  const [onHover, setOnHover] = useState(false);
  const [description, setDescription] = useState(false);
  const [playerSize, setPlayerSize] = useState("md");

  const format = (seconds) => {
    if (isNaN(seconds)) {
      return "00:00";
    }

    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");

    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }

    return `${mm}:${ss}`;
  };

  function valueLabelComponent(props) {
    const { children } = props;

    return (
      <Tooltip enterTouchDelay={0} placement="top" title={elapsedTime}>
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

    if (description) {
      setDescription(false);
    }

    setPlayerSize("md");
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
  };

  const open = Boolean(anchorEl);
  const currentTime = videoRef.current
    ? videoRef.current.getCurrentTime()
    : "00:00";
  const duration = videoRef.current ? videoRef.current.getDuration() : "00:00";

  const elapsedTime = format(currentTime);

  const totalDuration = format(duration);

  const handleDescription = () => {
    setDescription(!description);
    if (fullScreen) {
      handleFullScreen();
    }
    if (description) {
      setPlayerSize("md");
    } else {
      setPlayerSize("xl");
    }
  };

  const skipToTimestamp = (timestamp) => {
    const time = timestamp.split(":");
    const seconds = parseInt(time[0]) * 60 + parseInt(time[1]);
    videoRef.current.seekTo(seconds);
  };

  return (
    <Container maxWidth={playerSize} gap="0" sx={{ display: "flex", gap: "0" }}>
      {/* For hiding controls after hover */}
      <Box
        onMouseLeave={handleHoverLeave}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          top: "0",
          left: "0",
        }}
        ref={videoContainerRef}
      >
        {onHover ? (
          // For clicking on player and play the video
          <Box
            onClick={handlePlayPause}
            sx={{
              width: "100%",
              height: "94%",
              position: "absolute",
              zIndex: "3",
              top: "0",
              left: "0",
            }}
          ></Box>
        ) : (
          <Box />
        )}
        {/* Actual Videoplayer */}
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
        {/* Showing controls on hover  */}
        {onHover ? (
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
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
                ValueLabel: valueLabelComponent,
              }}
              aria-label="custom thumb label"
              sx={{
                position: "absolute",
                bottom: "27px",
                zIndex: "10",
              }}
            ></Slider>
            {/* wrapper for all icon buttons */}
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
              {/* wrapper for icon buttons on the left side */}
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
                  {elapsedTime}/{totalDuration}
                </Typography>
                <IconButton sx={{ color: "#fff" }} onClick={handleForward}>
                  <Forward30Icon />
                </IconButton>
              </Stack>
              {/* wrapper for icon buttons on the right side */}
              <Stack
                sx={{
                  flexDirection: "row",
                  minWidth: "50%",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <IconButton
                  sx={{ marginRight: "14px", color: "#fff" }}
                  onClick={handleDescription}
                >
                  {description ? (
                    <DescriptionIcon sx={{ color: "#A6C8FF" }} />
                  ) : (
                    <DescriptionIcon sx={{ color: "#fff" }} />
                  )}
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
          // empty box to wait for hover input to trigger controls
          <Box
            onMouseOver={handleHover}
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              top: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {playing ? (
              <Box />
            ) : (
              <PlayCircleIcon sx={{ fontSize: "128px", color: "#fff" }} />
            )}
          </Box>
        )}
      </Box>
      {description ? (
        <NoteBlock
          noteblockData={props.noteblockData}
          skipToTimestamp={skipToTimestamp}
        />
      ) : (
        <Box />
      )}
    </Container>
  );
}

export default Videoplayer;
