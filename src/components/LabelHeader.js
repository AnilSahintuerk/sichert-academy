import { Typography, Box, Stack } from "@mui/material";

function LabelHeader(props) {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        overflow: "hidden",
        gap: "8px",
        color: "#563E5D",
        width: "100%",
      }}
    >
      <Typography sx={{ display: "flex", fontSize: "18px", fontWeight: "400" }}>
        {props.header}
      </Typography>
      <Box
        sx={{
          height: "1px",
          minWidth: "1px",
          background: "#563E5D",
          flexGrow: "1",
        }}
      ></Box>
    </Stack>
  );
}

export default LabelHeader;
