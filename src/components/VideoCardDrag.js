import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

/*
props:
src - image path
title
body
time
tag
*/

function VideoCardDrag(props) {
  return (
    <Card
      elevation={10}
      sx={{
        width: "485px",
        height: "128px",
        padding: "4px 0",
        paddingLeft: "8px",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5) ",
        background:
          " linear-gradient(179.07deg, #004466 1.01%, #001B3D 99.41%)",
        display: "flex",
        alignItems: "center",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component="img"
        src={props.src}
        alt="hier img"
        sx={{
          width: 145,
          height: 105,
          borderRadius: "16px",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5) ",
        }}
      />
      <Box
        sx={{
          width: 145,
          height: 105,
          display: "flex",

          flexDirection: "column",
          flex: "1 0 auto",
        }}
      >
        <CardContent
          sx={{
            padding: "0 8px",
            display: "flex",
            flex: "auto",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" align="left" color="#fff">
            {props.title}
          </Typography>
          <Typography variant="body2" align="left" color="#fff">
            {props.body}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2" color="#BDC7DC">
              {props.teacher}
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "600" }}
              color="#A1ABC0"
            >
              {props.time}
            </Typography>
            <Typography variant="caption" color="#F8D8FE">
              {props.tag}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default VideoCardDrag;
