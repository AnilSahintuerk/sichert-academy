import { Typography, Box, Stack, Paper, Container, Grid } from "@mui/material";
import GoBack from "../components/GoBack";
import VideoCardStatic from "../components/VideoCardStatic";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import LecturePreview from "../components/LecturePreview";
import SearchAndFilter from "../components/SearchAndFilter";
import lecturesData from "../data/LecturesData";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import VideoPage from "../pages/VideoPage";

function SearchVideoPage(props) {
  props = lecturesData;
  let [active, setActive] = useState();

  const activeHandler = (lecture) => {
    setActive(lecture);
  };

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            <Box
              maxWidth="100%"
              sx={{
                height: "100vh",
                display: "flex",
                overflow: "hidden",
                position: "relative",
              }}
            >
              ;
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
                <Grid container spacing={8}>
                  {props.map((lecture, index) => (
                    <Grid item xs={4} md={3} key={index}>
                      <VideoCardStatic
                        lecture={lecture}
                        onClick={() => activeHandler(lecture)}
                      />
                    </Grid>
                  ))}
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
                {active !== undefined ? (
                  <LecturePreview lecture={active} />
                ) : (
                  <Box />
                )}
              </Container>
            </Box>
          }
        />
        <Route path="video/" element={<VideoPage lecture={active} />} />;
      </Routes>
    </Box>
  );
}

export default SearchVideoPage;
