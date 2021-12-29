import { Typography, Button, Box, Stack, Paper } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function FaqAnswer(props) {
  return (
    <Stack>
      <Typography color="secondary" variant="h6">
        Antwort
      </Typography>
      <Paper
        sx={{
          width: "800px",
          minHeight: "130px",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: "60px",
            border: "1px dashed #245FA7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button>
            <TextSnippetIcon
              color="primary"
              sx={{ paddingRight: "4px" }}
            ></TextSnippetIcon>
            Text hinzufügen
          </Button>

          <Box sx={{ padding: "0 16px" }}>
            <Button>
              <ImageIcon
                color="primary"
                sx={{ paddingRight: "4px" }}
              ></ImageIcon>
              Bild hinzufügen
            </Button>

            <Button>
              <YouTubeIcon sx={{ paddingRight: "4px" }}> </YouTubeIcon>
              Video hinzufügen
            </Button>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
}

export default FaqAnswer;
