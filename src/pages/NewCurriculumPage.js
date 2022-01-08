import GoBack from "../components/GoBack";
import { Stack, Box, Typography, TextField, Button } from "@mui/material";
import VideoCardDrag from "../components/VideoCardDrag";

function NewCurriculumPage(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack
        spacing={10}
        sx={{ p: "0 24px", background: "#E3E2E6", height: "100vh" }}
      >
        <GoBack />
        <Box sx={{ maxHeight: "100vh", overflow: "scroll" }}>
          <Stack
            sx={{
              maxWidth: "600px",
              gap: "16px",
              pb: "128px",
            }}
          >
            <Typography variant="h4" align="center" sx={{ color: "#563E5D" }}>
              Neuer Lehrplan
            </Typography>
            {props.lectures.map((lecture) => (
              <VideoCardDrag lecture={lecture} />
            ))}
          </Stack>
        </Box>
      </Stack>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={5} sx={{ mb: "20%", width: "40%" }}>
          <TextField
            required
            id="outlined-required"
            label="Lehrplan Name"
          ></TextField>
          <TextField id="outlined-required" label="Klasse zuweisen"></TextField>
          <TextField
            id="outlined-required"
            label="Nachricht"
            multiline
            rows={6}
          ></TextField>
          <Button variant="contained" color="sichert">
            Lehrplan erstellen
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
export default NewCurriculumPage;
