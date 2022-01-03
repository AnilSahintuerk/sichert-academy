import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";

function Navbar() {
  let navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "60px",
        maxWidth: "100%",
        backgroundColor: "#245FA7",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={goBackHome}
        sx={{ fontSize: "30px", ml: "20px", color: "#fff" }}
      >
        <HomeIcon></HomeIcon>
      </IconButton>
      <Typography variant="h5" sx={{ color: "#fff" }}>
        Sichert Academy
      </Typography>
      <Button sx={{ color: "#fff", mr: "20px" }}>Mein Konto</Button>
    </Box>
  );
}

export default Navbar;
