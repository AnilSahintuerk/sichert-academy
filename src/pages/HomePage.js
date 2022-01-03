import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageButton from "../components/HomePageButtons";

function HomePage() {
  let navigate = useNavigate();

  const clickHandler = (route) => {
    navigate(route);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <Grid
          container
          rowSpacing={{ xs: 5 }}
          columnSpacing={{ xs: 20 }}
          sx={{ width: "30%" }}
        >
          <Grid item xs={4}>
            <HomePageButton
              action="Kurs anfragen"
              onClick={() => clickHandler("kurs_anfragen")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Lehrplan erstellen"
              onClick={() => clickHandler("lehrplan_erstellen")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Klasse erstellen"
              onClick={() => clickHandler("klasse_erstellen")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Dozenten Suchen"
              onClick={() => clickHandler("dozent_suchen")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Video Suchen"
              onClick={() => clickHandler("video_suchen")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Lehrplan verflogen"
              onClick={() => clickHandler("lehrplan_verfolgen")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Fragen Beantworten"
              onClick={() => clickHandler("fragen_beantworten")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Kurs hochladen"
              onClick={() => clickHandler("kurs_hochladen")}
            />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton
              action="Support"
              onClick={() => clickHandler("support")}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
