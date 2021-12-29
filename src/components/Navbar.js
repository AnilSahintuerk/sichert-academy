import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";

function Navbar() {
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
      <HomeIcon
        sx={{ fontSize: "30px", paddingLeft: "20px", color: "#fff" }}
      ></HomeIcon>
      <Typography variant="h5" sx={{ color: "#fff" }}>
        Sichert Academy
      </Typography>
      <Button sx={{ color: "#fff" }}>Mein Konto</Button>
    </Box>
  );
}

export default Navbar;
