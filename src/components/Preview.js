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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Navbar from "./Navbar";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Faq from "./Faq";

function Preview(props) {
  return <Navbar></Navbar>;
}

export default Preview;
