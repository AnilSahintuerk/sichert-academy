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
  Card,
} from "@mui/material";
import Faq from "../components/Faq";
import QuestionElements from "../components/QuestionElements";
import FaqAnswer from "../components/FaqAnswer";
import Videoplayer from "../components/Videoplayer";
import lecturesData from "../data/LecturesData";
import { useState } from "react";
import teachersData from "../data/TeachersData";
import ExerciseElements from "../components/ExerciseElements";
import { useNavigate, Route, Routes } from "react-router-dom";

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

function ExerciseSelectionPage(props) {
  const navigate = useNavigate();

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
          <ExerciseElements />
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
          position: "relative",
          overflowY: "auto",
          pt: "64px",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "auto",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="neutral">
            Aufgabenblatt
          </Typography>
          <Box
            sx={{
              width: "60%",
              height: "60px",
              border: "1px dashed #00468B",
              color: "#003063",
              background: "#E3E2E6",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            + Neue Seite hinzufügen
          </Box>
          <Card
            sx={{ width: "60%", height: "40%", borderRadius: "8px" }}
          ></Card>
          <Box
            sx={{
              width: "60%",
              height: "60px",
              border: "1px dashed #00468B",
              color: "#003063",
              background: "#E3E2E6",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            + Neue Seite hinzufügen
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default ExerciseSelectionPage;
