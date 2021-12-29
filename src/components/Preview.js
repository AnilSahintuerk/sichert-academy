import {
  Typography,
  Tooltip,
  LinearProgress,
  Popover,
  Button,
  Box,
  Stack,
  Divider,
  Container,
  Avatar,
  TextField,
  InputBase,
  Paper,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Checkbox,
  FormGroup,
  AvatarGroup,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  CardActionArea,
  Slider,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  PrettoSlider,
  IconButton,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import VideoCardDrag from "./VideoCardDrag";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelHeader from "./LabelHeader";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GoBack from "./GoBack";
import { lineHeight } from "@mui/system";
import ExercisePreview from "./ExercisePreview";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function Preview(props) {
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

export default Preview;
