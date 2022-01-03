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
  Stack,
} from "@mui/material";
import GoBack from "../components/GoBack";
import StudentCard from "../components/StudentCard";
import SearchAndFilter from "../components/SearchAndFilter";
import { useState } from "react";
import { CardMedia } from "@mui/material";

const allTeacherData = [
  {
    id: "0",
    src: "2.png",
    name: "Jane",
    surname: "Schmitt",
    tags: ["Einkauf", "Director"],
    numVideos: "3",
  },
  {
    id: "1",
    src: "3.jpeg",
    name: "Kurt",
    surname: "Krömer",
    tags: ["IT", "teacher"],
    numVideos: "1",
  },
  {
    id: "2",
    src: "4.jpg",
    name: "Wolfgang",
    surname: "Luder",
    tags: ["Buchhaltung", "teacher"],
    numVideos: "2",
  },
  {
    id: "3",
    src: "logo192.png",
    name: "Atom",
    surname: "Bombe",
    tags: ["Physik", "teacher"],
    numVideos: "18",
  },
];

function LectureRequestPage(props) {
  const [allTeachers, setAllTeachers] = useState(allTeacherData);
  const [preview, setPreview] = useState({});

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
          {allTeachers.map((student) => (
            <Grid
              key={student.id}
              item
              xs={2}
              onClick={(e) => onClickHandler(e, student.id)}
            >
              <StudentCard
                src={student.src}
                name={student.name}
                surname={student.surname}
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
        >
          <Typography variant="h6" color="primary">
            Preview
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "48px",
          }}
        >
          {console.log(preview)}
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
                  {preview.tags.map((tag, index) => (
                    <Chip label={tag} key={index} color="tertiary" />
                  ))}
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
                >
                  Kurs Anfragen
                </Button>
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  sx={{ mt: "16px", mr: "8px" }}
                >
                  {preview.numVideos} Videos
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
