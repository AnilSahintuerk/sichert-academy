import {
  Typography,
  Box,
  Container,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import GoBack from "../components/GoBack";

function VideoUploadPage() {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        height: "130vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "64px",
        gap: "48px",
      }}
    >
      <Box sx={{ position: "absolute", top: "60px", left: "24px" }}>
        <GoBack />
      </Box>
      <Typography variant="h3" color="sichert.main">
        Lerneinheit Hochladen
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: "40%",
          background: "#F8F8F8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "24px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "80%",
            border: "3px dashed #E7EAED",
            borderRadius: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button color="secondary">Hier Hochladen</Button>
        </Box>
      </Box>
      <Stack spacing={5} sx={{ mb: "10%", width: "80%" }}>
        <TextField
          required
          id="outlined-required"
          label="Video Titel"
        ></TextField>
        <TextField id="outlined-required" label="Tags"></TextField>
        <TextField
          id="outlined-required"
          label="Lernziele"
          multiline
          rows={3}
        ></TextField>
        <TextField
          id="outlined-required"
          label="Videobeschreibung"
          multiline
          rows={6}
        ></TextField>
        <Box>
          <Button
            sx={{ gap: "8px" }}
            onClick={() => navigate("/aufgaben_hinzufuegen")}
          >
            <AddIcon fontSize="small" />
            Aufgaben hinzufügen
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button variant="outlined" color="secondary">
            Abbrechen
          </Button>
          <Button variant="contained" color="sichert">
            Lerneinheit hochladen
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default VideoUploadPage;
