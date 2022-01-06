import { Typography, Stack, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function GoBack(props) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ gap: "4px", marginTop: "24px" }}
    >
      <IconButton onClick={clickHandler}>
        <ArrowBackIcon fontSize="large" sx={{ color: "#886E8F" }} />
      </IconButton>
      <Typography sx={{ color: "#886E8F" }}>Zurück</Typography>
    </Stack>
  );
}

export default GoBack;
