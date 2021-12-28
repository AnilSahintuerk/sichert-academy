import { Typography, Stack } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function GoBack(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ gap: "4px", marginTop: "24px" }}
    >
      <ArrowBackIcon fontSize="large" sx={{ color: "#886E8F" }} />
      <Typography sx={{ color: "#886E8F" }}>Zurück</Typography>
    </Stack>
  );
}

export default GoBack;
