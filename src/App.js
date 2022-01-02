import Preview from "./components/Preview";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import Navbar from "./components/Navbar";
import ExerciseCreatorPage from "./pages/ExerciseCreatorPage";
import HomePage from "./pages/HomePage";
import SearchVideoPage from "./pages/SearchVideoPage";
import VideoPage from "./pages/VideoPage";
import FaqPage from "./pages/FaqPage";
import ClassroomCreatorPage from "./pages/ClassroomCreatorPage";
import CurriculumCreatorPage from "./pages/CurriculumCreatorPage";

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

const lecture = {
  id: "0",
  title: "Hello World",
  description: "kurze beschreibung",
  duration: "03:04",
  src: "4.jpg",
  tags: ["tag1", "tag2"],
  teacher: {
    name: "Martina",
    id: "2",
    src: "2.png",
  },
};

const tagFilterData = [
  {
    name: "Abteilung",
    options: [
      "Einkauf",
      "Arbeitsvorbereitung",
      "IT",
      "Human Resource",
      "Lager",
      "Logistik",
      "Qualitätssicherung",
      "Technische Entwicklung",
    ],
  },
  {
    name: "Tags",
    options: ["Sichert2021", "Ankündigungen", "FFC", "Kabelverzweiger"],
  },
  {
    name: "Software",
    options: ["Rheiner", "Infra", "Windchill", "Personio"],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          maxWidth="99%"
          className="noScroll"
          sx={{
            height: "100vh",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          {/* <Box sx={{ border: "1px solid red", padding: "20px" }}>
            <Preview /> */}
          <Navbar />
          <CurriculumCreatorPage lecture={lecture} />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
