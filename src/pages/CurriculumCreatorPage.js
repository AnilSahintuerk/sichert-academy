import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import GoBack from "../components/GoBack";
import VideoCardsDragAndDrop from "../components/VideoCardsDragAndDrop";
import SearchAndFilter from "../components/SearchAndFilter";

function CurriculumCreatorPage() {
  return (
    <Box
      maxWidth="100%"
      sx={{
        height: "auto",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container
        maxWidth="20%"
        sx={{
          height: "100vh",
          width: "20vw",
          position: "relative",
          paddingBottom: "64px",
          background: "#E3E2E6",
        }}
      >
        <GoBack />
        <SearchAndFilter direction="column" />
      </Container>
      <Container
        maxWidth="80%"
        sx={{
          height: "100vh",
          width: "80vw",
          background: "#fff",
          display: "flex",
          overflowY: "scroll",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            m: "16px 0",
          }}
        >
          {/* <Typography variant="h6" color="secondary">
            Alle Schüler
          </Typography> */}
        </Box>
        <VideoCardsDragAndDrop />
      </Container>
      <Box sx={{ background: "neutral2.main" }}>
        <Divider orientation="vertical" />
      </Box>
      <Box sx={{ position: "absolute", bottom: "32px", left: "16px" }}>
        <Button variant="contained" color="sichert">
          Klasse erstellen
        </Button>
      </Box>
    </Box>
  );
}

export default CurriculumCreatorPage;
