import { Typography, Stack, IconButton } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function GoBack(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ gap: "4px", marginTop: "24px" }}
    >
      <IconButton onClick={props.onBack}>
        <ArrowBackIcon fontSize="large" sx={{ color: "#886E8F" }} />
        <Typography sx={{ color: "#886E8F" }}>Zurück</Typography>
      </IconButton>
    </Stack>
  );
}

export default GoBack;
