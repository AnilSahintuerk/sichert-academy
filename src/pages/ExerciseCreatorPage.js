import ExerciseCreator from "../components/ExerciseCreator";
import ExercisePreview from "../components/ExercisePreview";
import GoBack from "../components/GoBack";
import { Stack, Box, Container, TextField } from "@mui/material";

const DATA = {
  question: "Wann wurde die Firma gegründet?",
  answers: ["1914", "1941", "1972", "2001"],
  correct: ["1"],
};

function ExerciseCreatorPage(props) {
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
        maxWidth="25%"
        sx={{
          height: "100vh",
          width: "25vw",
          overflowY: "scroll",
          position: "relative",
          paddingBottom: "64px",
          background: "#E3E2E6",
        }}
      >
        <GoBack />
        <Stack alignItems="center" sx={{ gap: "64px", marginTop: "48px" }}>
          <TextField
            required
            id="question"
            label="Frage"
            sx={{
              width: "100%",
              color: "#003063",
            }}
          />
          <TextField
            multiline
            rows={4}
            id="description"
            label="Weitere Beschreibung"
            sx={{
              width: "100%",
              color: "#003063",
            }}
          />
          <ExerciseCreator exercise={DATA} />
        </Stack>
      </Container>
      <Container
        maxWidth="75%"
        sx={{
          height: "100vh",
          width: "75vw",
          background: "#2F3033",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ExercisePreview exercise={DATA} />
      </Container>
    </Box>
  );
}

export default ExerciseCreatorPage;
