import Preview from "./components/Preview";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExerciseCreatorPage from "./pages/ExerciseCreatorPage";
import HomePage from "./pages/HomePage";
import SearchVideoPage from "./pages/SearchVideoPage";
import FaqPage from "./pages/FaqPage";
import LectureRequestPage from "./pages/LectureRequestPage";
import CurriculumCreatorRouter from "./routers/CurriculumCreatorRouter";
import ClassroomCreatorRouter from "./routers/ClassroomCreatorRouter";
import VideoUploadPage from "./pages/VideoUploadPage";
import SupportPage from "./pages/SupportPage";
import ExerciseSelectionPage from "./pages/ExerciseSelectionPage";

const theme = createTheme({
  palette: {
    primary: { main: "#245FA7" },
    secondary: { main: "#555F71" },
    tertiary: { main: "#6E5675", contrastText: "#fff" },
    error: { main: "#BA1B1B" },
    background: { main: "#FDFBFF", contrastText: "#1B1B1D" },
    sichert: { main: "#003063", contrastText: "#fff" },
    primary_container: { main: "#D4E3FF", contrastText: "#001B3D" },
    secondary_container: { main: "#D9E3F8", contrastText: "#121C2B" },
    tertiary_container: { main: "#F8D8FE", contrastText: "#27132F" },
    error_container: { main: "#FFDAD4", contrastText: "#410001" },
    surface_variant: { main: "#E0E2EB", contrastText: "#43474F" },
    neutral: { main: "#74777F", contrastText: "#fff" },
    neutral2: { main: "#fff", contrastText: "#000" },
    black: { main: "#000", contrastText: "#fff" },
    onhover: { main: "#7AACF9", contrastText: "#fff" },
  },

  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        },
      },
    },
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kurs_anfragen" element={<LectureRequestPage />} />
          <Route
            path="/lehrplan_erstellen/*"
            element={<CurriculumCreatorRouter />}
          >
            <Route
              path="neuer_lehrplan/"
              element={<CurriculumCreatorRouter />}
            />
          </Route>
          <Route
            path="/klasse_erstellen/*"
            element={<ClassroomCreatorRouter />}
          >
            <Route path="neue_klasse/" element={<ClassroomCreatorRouter />} />
          </Route>
          <Route path="/video_suchen/*" element={<SearchVideoPage />}>
            <Route path="video/" />
          </Route>
          <Route path="/lehrplan_verfolgen" element={<p>to be done</p>} />
          <Route path="/fragen_beantworten" element={<FaqPage />} />
          <Route path="/kurs_hochladen" element={<VideoUploadPage />} />
          <Route
            path="/aufgaben_hinzufuegen/*"
            element={<ExerciseSelectionPage />}
          />
          <Route path="/mc" element={<ExerciseCreatorPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
