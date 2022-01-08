import {
  Typography,
  Box,
  Button,
  Card,
  Divider,
  Container,
  Grid,
  CardContent,
  Chip,
  Modal,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  Stack,
} from "@mui/material";
import GoBack from "../components/GoBack";
import StudentCard from "../components/StudentCard";
import SearchAndFilter from "../components/SearchAndFilter";
import { useState } from "react";
import { CardMedia } from "@mui/material";
import teachersData from "../data/TeachersData";

const allTeacherData = teachersData;

function LectureRequestPage(props) {
  const [allTeachers, setAllTeachers] = useState(allTeacherData);
  const [preview, setPreview] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(allTeacherData);

  const onClickHandler = (e, id) => {
    const teacherIndex = allTeachers.findIndex((x) => x.id === id);
    const allTeachersArray = Array.from(allTeachers);
    setPreview(allTeachersArray[teacherIndex]);
    console.log(preview);
  };

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
        maxWidth="60%"
        sx={{
          height: "100vh",
          width: "60vw",
          background: "#fff",
          display: "flex",
          overflowY: "scroll",
          flexDirection: "column",
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "30vw", height: "auto", p: "32px" }}>
            <Typography variant="h4" color="sichert.main" sx={{ mb: "16px" }}>
              Kurs Anfrage
            </Typography>
            <Stack spacing={5} sx={{ mb: "20%", width: "100%" }}>
              <TextField
                required
                id="outlined-required"
                label="Video Titel"
              ></TextField>
              <TextField
                id="outlined-required"
                label="Video Setting"
              ></TextField>
              <TextField id="outlined-required" label="Tags"></TextField>
              <Stack>
                <FormLabel component="legend">Videolänge</FormLabel>
                <RadioGroup color="sichert">
                  <FormControlLabel
                    value="kurz"
                    color="sichert.main"
                    control={<Radio />}
                    label="Kurz (ca. 2-3 Min)"
                  />
                  <FormControlLabel
                    value="mittel"
                    control={<Radio />}
                    label="Mittel (ca. 4-5 Min)"
                  />
                  <FormControlLabel
                    value="lang"
                    control={<Radio />}
                    label="Lang (ca.6-9 Min)"
                  />
                </RadioGroup>
              </Stack>
              <TextField
                id="outlined-required"
                label="Nachricht"
                multiline
                rows={6}
              ></TextField>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Abbrechen
                </Button>
                <Button
                  variant="contained"
                  color="sichert"
                  onClick={handleClose}
                >
                  Anfrage stellen
                </Button>
              </Box>
            </Stack>
          </Card>
        </Modal>
        <Box
          sx={{
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            m: "16px 0",
          }}
        >
          <Typography variant="h6" color="secondary">
            Alle Dozenten
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {allTeachers.map((teachers) => (
            <Grid
              key={teachers.id}
              item
              xs={2}
              onClick={(e) => onClickHandler(e, teachers.id)}
            >
              <StudentCard
                src={teachers.src}
                name={teachers.name}
                surname={teachers.surname}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ background: "neutral2.main" }}>
        <Divider orientation="vertical" />
      </Box>
      <Container
        maxWidth="20%"
        sx={{
          height: "100vh",
          width: "20vw",
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
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "48px",
          }}
        >
          {Object.keys(preview).length === 0 ? (
            <Box />
          ) : (
            <Card elevation={15} sx={{ height: "auto", width: "300px" }}>
              <CardMedia
                component="img"
                src={preview.src}
                sx={{
                  height: "200px",
                  objectFit: "contain",
                  p: "16px 0",
                  borderRadius: "8px",
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                  m: "8px 16px",
                }}
              >
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <Chip label={preview.department} color="tertiary" />
                </Box>

                <Typography variant="h5" color="sichert">
                  {preview.name + " " + preview.surname}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  color="sichert"
                  sx={{ m: "32px 8px 16px 8px" }}
                  onClick={handleOpen}
                >
                  Kurs Anfragen
                </Button>
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  sx={{ mt: "16px", mr: "8px" }}
                >
                  {preview.numVideos +
                    (preview.numVideos === "1" ? " Video" : " Videos")}
                </Typography>
              </Box>
            </Card>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default LectureRequestPage;
