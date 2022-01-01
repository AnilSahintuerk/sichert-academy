import { Typography, Box, Stack, Paper, Container, Grid } from "@mui/material";
import GoBack from "../components/GoBack";
import VideoCardStatic from "../components/VideoCardStatic";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import LecturePreview from "../components/LecturePreview";
import SearchAndFilter from "../components/SearchAndFilter";

function SearchVideoPage(props) {
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
        maxWidth="75%"
        sx={{
          height: "100vh",
          width: "75vw",
          overflowY: "scroll",
          position: "relative",
          paddingBottom: "64px",
          background: "#fff",
        }}
      >
        <SearchAndFilter direction="row" />
        <Grid container spacing={5}>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
          <Grid item>
            <VideoCardStatic lecture={props.lecture} />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="25%"
        sx={{
          height: "100vh",
          width: "25vw",
          background: "#FDFCFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LecturePreview lecture={props.lecture} />
      </Container>
    </Box>
  );
}

export default SearchVideoPage;
