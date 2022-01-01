import { Stack, Box, Divider, Typography } from "@mui/material";

function DescriptionBox(props) {
  return (
    <Stack
      sx={{
        width: "95%",
        height: "60%",
        borderRadius: "8px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "60px",
          background: "#003063",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Beschreibung
        </Box>
        <Divider orientation="vertical" />
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Aufgaben
        </Box>
      </Box>
      <Stack sx={{ p: "16px 16px", gap: "32px", overflowY: "scroll" }}>
        <Typography variant="body1" color="tertiary.main">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata
        </Typography>
        <Stack sx={{ gap: "8px" }}>
          <Typography variant="h6" color="primary">
            Lernziele
          </Typography>
          <Typography variant="body1" color="primary">
            - Lernziel 1
          </Typography>
          <Typography variant="body1" color="primary">
            - Lernziel 2
          </Typography>
          <Typography variant="body1" color="primary">
            - Lernziel 3
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DescriptionBox;
