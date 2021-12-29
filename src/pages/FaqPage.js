import GoBack from "../components/GoBack";
import {
  Stack,
  Box,
  Container,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Faq from "../components/Faq";
import QuestionElements from "../components/QuestionElements";
import FaqAnswer from "../components/FaqAnswer";
import Videoplayer from "../components/Videoplayer";

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

function FaqPage(props) {
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
          <QuestionElements />
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
          <Faq />
          <Box width="800px">
            <Typography variant="h5" sx={{ color: "#003063", pb: "8px" }}>
              Was ist eine Lineare Regression?
            </Typography>
            <Typography variant="body2" sx={{ color: "secondary.main" }}>
              In dem Video wurde an der Stelle 01.23 die Lineare Regression
              erwähnt. Ich weiß leider nicht was das ist und habe gehofft Sie
              können dies nochmal etwas genauer für mich erklären. MFG
            </Typography>
          </Box>
          <Videoplayer></Videoplayer>
          <FaqAnswer />
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button color="secondary" variant="outlined">
              Frage löschen
            </Button>
            <Button color="sichert" variant="contained">
              Antwort veröffentlichen
            </Button>
          </Box>
          <Box
            sx={{
              height: "500px",
              width: "200px",
              position: "absolute",
              border: "1px solid green",
              display: "flex",
              background: "#F1F0F4",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflowY: "scroll",
            }}
          ></Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default FaqPage;
