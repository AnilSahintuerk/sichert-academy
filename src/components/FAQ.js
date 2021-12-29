import {
  Typography,
  Stack,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const handleAnswer = (answer) => {
  if (answer.type === "img" || answer.type === "video") {
    return (
      <CardMedia
        component={answer.type}
        alt={answer.type}
        src={answer.content}
        sx={{ objectFit: "scale-down" }}
      />
    );
  } else {
    return (
      <Typography
        sx={{
          fontSize: "18px",
          fontStyle: " normal",
          fontWeight: "400",
          lineHeight: "28px",
          textAlign: "left",
          color: "#003063",
        }}
      >
        {answer.content}
      </Typography>
    );
  }
};

function FAQ(props) {
  return (
    <Stack
      sx={{
        width: "520px",
        justifyContent: "center",
        alignItems: "center",
        border: "1px dashed green",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontStyle: " normal",
          fontWeight: "500",
          lineHeight: "28px",
          textAlign: "left",
          color: "#000",
          marginBottom: "16px",
        }}
      >
        Datenanalyse - FAQ
      </Typography>
      {props.map((faq) => (
        <Accordion key={faq.id} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} color="secondary">
            <Typography sx={{ flexShrink: 0 }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {faq.faqAnswer.map((answer) => handleAnswer(answer))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}

export default FAQ;
