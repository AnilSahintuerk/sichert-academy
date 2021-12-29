import {
  Box,
  Stack,
  Typography,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

function ExercisePreview(props) {
  return (
    <Paper
      elevation={16}
      sx={{
        width: "50%",
        minHeight: " 30%",
      }}
    >
      <Box
        sx={{
          margin: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "24px",
            fontStyle: "normal",
            lineHeight: "28px",
            color: "#000",
          }}
        >
          {props.exercise.question}
        </Typography>
        <Stack>
          <FormGroup>
            {props.exercise.answers.map((answer, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    onClick={() => {
                      console.log(index);
                    }}
                  />
                }
                label={answer}
              />
            ))}
          </FormGroup>
        </Stack>
        <Stack
          direction="row"
          sx={{ gap: "8px", justifyContent: "flex-end", marginTop: "16px" }}
        >
          <Button variant="outlined" color="secondary">
            Frage löschen
          </Button>
          <Button variant="contained">Frage hinzufügen</Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default ExercisePreview;
