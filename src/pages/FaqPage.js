import GoBack from "../components/GoBack";
import {
  Stack,
  Box,
  Container,
  TextField,
  Modal,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import Faq from "../components/Faq";
import QuestionElements from "../components/QuestionElements";
import FaqAnswer from "../components/FaqAnswer";
import Videoplayer from "../components/Videoplayer";
import lecturesData from "../data/LecturesData";
import { useState } from "react";
import teachersData from "../data/TeachersData";

const FAQ_DATA = [
  {
    id: "0",
    question: "Wie erhebt man Daten?",
    faqAnswer: [
      { type: "img", content: "4.jpg" },
      {
        type: "text",
        content:
          "Es existieren mehrere gängige Methoden Daten zu erheben eine der am häufigsten verwendeten Methoden ist die Methode der Umfrage",
      },
    ],
    lectureId: "0",
    studentID: "3",
  },
  {
    id: "0",
    question: "Was ist die desprektive Datenanalyse?",
    faqAnswer: [
      {
        type: "text",
        content:
          "Die deskriptive (auch: beschreibende) Statistik hat zum Ziel, empirische Daten (z. B. Ergebnisse aus Experimenten) durch Tabellen, Kennzahlen (auch: Maßzahlen oder Parameter) und Grafiken übersichtlich darzustellen und zu ordnen. Dies ist vor allem bei umfangreichem Datenmaterial sinnvoll, da dieses nicht leicht überblickt werden kann.",
      },
    ],
    lectureId: "0",
    studentID: "31",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function FaqPage(props) {
  props = FAQ_DATA;
  const [active, setActive] = useState(["Warum ist das nützlich?", 0]);
  return (
    <Box
      maxWidth="100%"
      className="noScroll"
      sx={{
        height: "auto",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        className="noScroll"
        maxWidth="25%"
        sx={{
          height: "100vh",
          maxHeight: "auto",
          width: "25vw",
          position: "relative",
          paddingBottom: "64px",
          background: "#E3E2E6",
          overflowY: "scroll",
        }}
      >
        <Stack justifyContent="space-between">
          <GoBack />
          <Box>
            <Typography
              variant="subtitle2"
              color="secondary"
              sx={{ marginTop: "32px" }}
            >
              Meine Kurse
            </Typography>
          </Box>
        </Stack>
        <Stack sx={{ gap: "64px", marginTop: "16px" }}>
          <QuestionElements active={active} setActive={setActive} />
        </Stack>
      </Container>
      <Container
        maxWidth="75%"
        sx={{
          minHeight: "100vh",
          maxHeight: "100vh",
          width: "75vw",
          display: "flex",
          background: "#F1F0F4",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflowY: "auto",
        }}
      >
        <Stack
          alignItems="center"
          sx={{
            height: "100%",
            width: "70%",
            marginTop: "128px",
            gap: "80px",
          }}
        >
          <Faq lecture={lecturesData[1]} />
          <Box width="800px">
            <Typography variant="h5" sx={{ color: "#003063", pb: "8px" }}>
              {active[0]}
            </Typography>
            <Typography variant="body2" sx={{ color: "secondary.main" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren,
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                mt: "32px",
              }}
            >
              <Typography variant="caption" color="secondary">
                Frage gestellt von:
              </Typography>
              <Avatar
                src={teachersData[getRandomInt(11)].src}
                sx={{ height: "50px", width: "50px" }}
              />
            </Box>
          </Box>
          <Videoplayer lecture={lecturesData[1]} />
          <FaqAnswer />
          <Box sx={{ display: "flex", gap: "16px", pb: "128px" }}>
            <Button color="secondary" variant="outlined">
              Frage löschen
            </Button>
            <Button color="sichert" variant="contained">
              Antwort veröffentlichen
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default FaqPage;
