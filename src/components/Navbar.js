import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";

function Preview() {
  return (
    <div className="App">
      <Box
        sx={{
          width: "100vw",
          height: "60px",
          backgroundColor: "#245FA7",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HomeIcon
          color="white"
          sx={{ fontSize: "30px", paddingLeft: "20px" }}
        ></HomeIcon>
        <Typography variant="h5" color="#fff">
          Sichert Academy
        </Typography>
        <Button color="white">Mein Konto</Button>
      </Box>
    </div>
  );
}

export default Preview;
