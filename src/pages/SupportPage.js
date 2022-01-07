import {
  Typography,
  Box,
  Container,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GoBack from "../components/GoBack";
import { useNavigate } from "react-router-dom";

function SupportPage() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "auto",
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
        Support
      </Typography>

      <Stack spacing={5} sx={{ mb: "10%", width: "80%" }}>
        <TextField required id="outlined-required" label="Titel"></TextField>
        <TextField
          id="outlined-required"
          label="Problembeschreibung"
          multiline
          rows={6}
        ></TextField>
        <Box>
          <Button sx={{ gap: "8px" }}>
            <AttachFileIcon fontSize="small" />
            Datein hinzufügen
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

export default SupportPage;
