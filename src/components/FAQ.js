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
    question: "Was bedeutet das?",
    faqAnswer: [
      { type: "img", content: "\\vid\\logo192.png" },
      {
        type: "text",
        content:
          "Lorem ipsum dolor sit amet, in usu perpetua explicari necessitatibus, nam diam altera legendos in. In duo deserunt qualisque dignissim. Cum id ludus feugait alienum, ubique tamquam persius no quo, et qui utamur officiis consulatu.",
      },
    ],
    lectureId: "0",
    studentID: "3",
  },
  {
    id: "0",
    question: "Wie nutze ich das im Alltag?",
    faqAnswer: [
      {
        type: "text",
        content:
          "Lorem ipsum dolor sit amet, quot primis molestiae est in. Dolor primis mei cu. Nec populo timeam commune cu, munere recusabo sed eu, salutandi explicari dissentiet sit te. Pro urbanitas similique accommodare at. Ex mei justo gubergren democritum. Ut lorem meliore appellantur sed. Ullum tation tractatos quo cu, ad sed ferri nostrum atomorum. Ex paulo indoctum persecuti vel, lorem vituperata no vis. Mei facer liberavisse ne. Ea mucius efficiantur eam.",
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

function Faq(props) {
  return (
    <Stack
      sx={{
        width: "520px",
        justifyContent: "center",
        alignItems: "center",
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
          marginBottom: "48px",
        }}
      >
        FAQ - {props.lecture.title}
      </Typography>
      {FAQ_DATA.map((faq) => (
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

export default Faq;
