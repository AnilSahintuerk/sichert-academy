import {
  Typography,
  Box,
  Button,
  Divider,
  Container,
  Grid,
} from "@mui/material";
import GoBack from "../components/GoBack";
import StudentCard from "../components/StudentCard";
import SearchAndFilter from "../components/SearchAndFilter";
import teachersData from "../data/TeachersData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CurriculumCreator(props) {
  const [allStudents, setAllStudents] = useState(teachersData);
  const navigate = useNavigate();
  // const [props.newClass, props.setNewClass] = useState([]);

  const onClickHandler = (e, id) => {
    const studentIndex = allStudents.findIndex((x) => x.id === id);
    const allStudentsArray = Array.from(allStudents);
    const newClassArray = Array.from(props.newClass);
    if (studentIndex !== -1) {
      const student = allStudentsArray[studentIndex];
      allStudentsArray.splice(studentIndex, 1);
      setAllStudents(allStudentsArray);
      newClassArray.push(student);
      props.setNewClass(newClassArray);
    } else {
      const studentIndex = props.newClass.findIndex((x) => x.id === id);
      const student = newClassArray[studentIndex];
      newClassArray.splice(studentIndex, 1);
      props.setNewClass(newClassArray);
      allStudentsArray.push(student);
      setAllStudents(allStudentsArray);
    }
  };

  return (
    <Box
      maxWidth="100%"
      sx={{
        height: "95vh",
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
        maxWidth="40%"
        sx={{
          height: "100vh",
          width: "40vw",
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
            Alle Schüler
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {allStudents.map((student) => (
            <Grid
              key={student.id}
              item
              xs={4}
              sm={3}
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
        maxWidth="40%"
        sx={{
          height: "100vh",
          width: "40vw",
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
            Neue Klasse
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {props.newClass.map((student) => (
            <Grid
              key={student.id}
              item
              xs={4}
              sm={3}
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
      <Box sx={{ position: "absolute", bottom: "32px", left: "16px" }}>
        <Button
          variant="contained"
          color="sichert"
          onClick={() => navigate("neue_klasse")}
        >
          Klasse erstellen
        </Button>
      </Box>
    </Box>
  );
}

export default CurriculumCreator;
