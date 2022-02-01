import GoBack from "../components/GoBack";
import { Stack, Box, Typography, TextField, Button, Grid } from "@mui/material";
import StudentCard from "../components/StudentCard";

function NewClassroomPage(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack
        spacing={10}
        sx={{
          p: "0 24px",
          background: "#E3E2E6",
          height: "100vh",
          width: "30vw",
        }}
      >
        <GoBack />
        <Box sx={{ maxHeight: "100vh", overflow: "scroll" }}>
          <Stack
            sx={{
              width: "auto",
              maxWidth: "600px",
              gap: "24px",
            }}
          >
            <Typography variant="h4" align="center" sx={{ color: "#563E5D" }}>
              Neue Klasse
            </Typography>
            <Grid container spacing={5} sx={{ width: "auto" }}>
              {props.classroom.map((student) => (
                <Grid item xs={2} sm={4}>
                  <StudentCard
                    src={student.src}
                    name={student.name}
                    surname={student.surname}
                  />
                </Grid>
              ))}
            </Grid>
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
          <Typography color="sichert.main" variant="h4" align="center">
            Klassen Details
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Klassen Name"
          ></TextField>
          <TextField
            id="outlined-required"
            label="Lehrplan zuweisen"
          ></TextField>
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
export default NewClassroomPage;
