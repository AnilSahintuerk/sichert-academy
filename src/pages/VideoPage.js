import {
  Box,
  Typography,
  Stack,
  Container,
  Button,
  Modal,
  Card,
  TextField,
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
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useState } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import { useNavigate } from "react-router-dom";

function VideoPage(props) {
  const [descBoxActive, setDescBoxActive] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

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
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "30vw", height: "auto", p: "32px" }}>
            <Typography variant="h4" color="sichert.main" sx={{ mb: "16px" }}>
              Frage stellen
            </Typography>
            <Stack spacing={5} sx={{ mb: "20%", width: "100%" }}>
              <TextField
                required
                id="outlined-required"
                label="Video Titel"
                defaultValue={props.lecture.title}
              ></TextField>
              <TextField id="outlined-required" label="Zeitstempel"></TextField>
              <TextField
                id="outlined-required"
                label="Nachricht"
                multiline
                rows={6}
              ></TextField>
              <Box>
                <Button sx={{ gap: "8px" }} onClick={handleOpen}>
                  <AttachFileIcon fontSize="small" />
                  Datei Anfügen
                </Button>
              </Box>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Abbrechen
                </Button>
                <Button
                  variant="contained"
                  color="sichert"
                  onClick={handleClose}
                >
                  Frage stellen
                </Button>
              </Box>
            </Stack>
          </Card>
        </Modal>
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
            <Box sx={{ display: "flex" }}>
              <Button sx={{ gap: "8px" }} onClick={handleOpen}>
                <QuestionMarkIcon fontSize="small" />
                Frage stellen
              </Button>
              <Button sx={{ gap: "8px" }} onClick={() => navigate("/support")}>
                <FlagIcon fontSize="small" />
                Problem melden
              </Button>
            </Box>
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
