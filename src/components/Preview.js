import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Typography,
  Stack,
  Container,
  Avatar,
  TextField,
  InputBase,
  Paper,
  Chip,
} from "@mui/material";
import { useState } from "react";

function Preview() {
  let [status, setStatus] = useState("inactive");
  console.log(status);

  const onClickHandler = () => {
    setStatus("active");
    console.log(status);
  };

  const onDeleteHanlder = () => {
    setStatus("inactive");
  };

  const statusHandler = () => {
    if (status === "active") {
      return "#245FA7";
    } else {
      return "#8791A5";
    }
  };

  return (
    <Box>
      <Chip
        label="Tag"
        onClick={onClickHandler}
        onDelete={onDeleteHanlder}
        sx={{
          backgroundColor: statusHandler,
          color: "#fff",
          padding: "1em",
        }}
      ></Chip>
    </Box>
  );
}

export default Preview;
