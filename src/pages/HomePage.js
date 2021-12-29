import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { useState } from "react";
import HomePageButton from "../components/HomePageButtons";

function HomePage() {
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
            <HomePageButton action="Kurs anfragen" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Lehrplan zuweisen" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Klasse erstellen" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Dozenten Suchen" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Video Suchen" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Lehrplan verflogen" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Fragen Beantworten" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Kurs hochladen" />
          </Grid>
          <Grid item xs={4}>
            <HomePageButton action="Support" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
