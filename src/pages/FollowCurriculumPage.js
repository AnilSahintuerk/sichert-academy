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
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import FlagIcon from "@mui/icons-material/Flag";
import { useNavigate } from "react-router-dom";

const LEHRPLAN = [
  {
    ...lecturesData[0],
    title: "Dozenten Vorstellung",
    duration: "02:15",
    id: "4",
    checked: true,
  },
  { ...lecturesData[0], checked: true },
  lecturesData[1],
  lecturesData[2],
];

console.log(LEHRPLAN);

function FollowCurriculumPage(props) {
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
          width: "80vw",
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
                defaultValue={lecturesData[0].title}
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
            lecture={lecturesData[1]}
            descBoxHandler={setDescBoxActive}
          />
        </Box>
        <Box sx={{ padding: "16px 80px" }}>
          <Typography sx={{ fontSize: "32px", color: "#001B3D", mb: "32px" }}>
            {lecturesData[1].title}
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
                src={lecturesData[1].teacher.src}
                sx={{ height: "75px", width: "75px" }}
              />
              <Typography>
                {lecturesData[1].teacher.name} {lecturesData[1].teacher.surname}
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
            <Faq lecture={lecturesData[1]} />
            <Box sx={{ width: "70%" }}>
              <DescriptionBox lecture={lecturesData[1]} />
            </Box>
          </Stack>
        </Box>
      </Container>
      {descBoxActive ? (
        <Container
          color="primary.main"
          disableGutters
          sx={{
            height: "100vh",
            width: "20vw",
            background: "#D9E3F8",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Stack
            sx={{
              background: "#001B3D",
              height: "250px",
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "24px solid rgba(0, 115, 255, 0.2)",
                boxSizing: "border-box",
                borderRadius: "100%",
                width: "50%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ color: "#A6C8FF" }}>
                50%
              </Typography>
            </Box>
            <Box
              sx={{
                border: "24px solid  #A6C8FF",
                boxSizing: "border-box",
                borderRadius: "100%",
                width: "50%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                clipPath: "polygon(100% 0, 55% 0, 55% 100%, 100% 100%)",
              }}
            />
          </Stack>
          <Typography
            variant="h5"
            sx={{
              background: "#001B3D",
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#A6C8FF",
              pb: "16px",
            }}
          >
            Lehrplan: IT - Einführung
          </Typography>
          <Stack
            sx={{
              width: "100%",
              overflow: "scroll",
            }}
          >
            {LEHRPLAN.map((lecture, index) =>
              lecture.id == 1 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    height: "70px",
                    width: "100%",
                    background: "#EBF1FF",
                    p: "8px",
                  }}
                >
                  <Stack sx={{ display: "flex", gap: "4px" }}>
                    <Typography
                      align="center"
                      sx={{
                        color: "#A8ABB4",
                        fontSize: "20px",
                        fontWeight: "300",
                        fontStyle: "normal",
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <Divider />
                    <Typography
                      align="center"
                      sx={{
                        color: "#8791A5",
                        fontSize: "14px",
                        fontWeight: "300",
                        fontStyle: "normal",
                      }}
                    >
                      {lecture.duration}
                    </Typography>
                  </Stack>
                  <Box sx={{ display: "flex", gap: "8px" }}>
                    {lecture.checked ? (
                      <CheckIcon sx={{ color: "#7AACF9" }} />
                    ) : (
                      <Box />
                    )}
                    <Typography
                      sx={{
                        color: "#003063",
                        fontSize: "18px",
                        fontWeight: "300",
                      }}
                    >
                      {lecture.title}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    height: "70px",
                    width: "100%",
                    background: "#fff",
                    border: "0.5px solid rgba(0,0,0,0.1)",
                    p: "8px",
                  }}
                >
                  <Stack sx={{ display: "flex", gap: "4px" }}>
                    <Typography
                      align="center"
                      sx={{
                        color: "#A8ABB4",
                        fontSize: "20px",
                        fontWeight: "300",
                        fontStyle: "normal",
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <Divider />
                    <Typography
                      align="center"
                      sx={{
                        color: "#8791A5",
                        fontSize: "14px",
                        fontWeight: "300",
                        fontStyle: "normal",
                      }}
                    >
                      {lecture.duration}
                    </Typography>
                  </Stack>
                  <Box sx={{ display: "flex", gap: "8px" }}>
                    {lecture.checked ? (
                      <CheckIcon sx={{ color: "#7AACF9" }} />
                    ) : (
                      <Box />
                    )}
                    <Typography
                      sx={{
                        color: "#003063",
                        fontSize: "18px",
                        fontWeight: "300",
                      }}
                    >
                      {lecture.title}
                    </Typography>
                  </Box>
                </Box>
              )
            )}
          </Stack>
        </Container>
      ) : (
        <Box />
      )}
    </Box>
  );
}

export default FollowCurriculumPage;
