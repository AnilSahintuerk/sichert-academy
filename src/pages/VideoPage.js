import {
  Box,
  Typography,
  Stack,
  Container,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import GoBack from "../components/GoBack";
import Videoplayer from "../components/Videoplayer";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Faq from "../components/Faq";
import VideoCardStatic from "../components/VideoCardStatic";
import DescriptionBox from "../components/DescriptionBox";

function VideoPage(props) {
  return (
    <Box
      maxWidth="100%"
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container
        className="noScroll"
        maxWidth="65%"
        sx={{
          height: "100vh",
          width: "75vw",
          overflowY: "scroll",
          position: "relative",
          paddingBottom: "64px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <GoBack />
        <Box>
          <Videoplayer />
        </Box>
        <Box sx={{ padding: "16px 80px" }}>
          <Typography sx={{ fontSize: "32px", color: "#001B3D", mb: "32px" }}>
            Video Title
          </Typography>
          <Divider sx={{ mb: "16px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Avatar src="2.png" sx={{ height: "75px", width: "75px" }} />
              <Typography>Teacher Name</Typography>
            </Box>
            <Button sx={{ gap: "8px" }}>
              <QuestionMarkIcon fontSize="small" />
              Frage stellen
            </Button>
          </Box>
          <Divider sx={{ mt: "16px" }} />
          <Stack
            sx={{
              alignItems: "center",
              width: "100%",
              gap: "128px",
              mt: "128px",
            }}
          >
            <Faq />
            <Stack alignItems="center" spacing={3}>
              <Typography variant="h5" color="secondary">
                Ähnliche Videos
              </Typography>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <VideoCardStatic lecture={props.lecture} />
                <VideoCardStatic lecture={props.lecture} />
                <VideoCardStatic lecture={props.lecture} />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
      <Container
        maxWidth="45%"
        sx={{
          height: "100vh",
          width: "25vw",
          background: "#FDFCFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: "7%",
        }}
      >
        <DescriptionBox />
      </Container>
    </Box>
  );
}

export default VideoPage;
