import GoBack from "../components/GoBack";
import { Stack, Box, Container, Typography } from "@mui/material";
import VideoCardDrag from "../components/VideoCardDrag";

function NewCurriculumPage(props) {
  return (
    <Stack spacing={10} sx={{ ml: "24px" }}>
      <GoBack />
      <Box sx={{ maxHeight: "100vh", overflow: "scroll" }}>
        <Stack
          sx={{
            maxWidth: "600px",
            gap: "16px",
            pb: "128px",
          }}
        >
          <Typography variant="h4" align="center" sx={{ color: "#563E5D" }}>
            Lehrplan
          </Typography>
          {props.lectures.map((lecture) => (
            <VideoCardDrag lecture={lecture} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
export default NewCurriculumPage;
