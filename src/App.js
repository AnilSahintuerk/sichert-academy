import TagFilter from "./components/TagFilter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, Stack, Container, Avatar } from "@mui/material";

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
    white: { main: "#fff" },
    black: { main: "#000" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TagFilter />
      </div>
    </ThemeProvider>
  );
}

export default App;
