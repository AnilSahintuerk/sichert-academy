import {
  Button,
  Box,
  Stack,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

function TagFilter() {
  let [status, setStatus] = useState("inactive");
  let [dialog, setDialog] = useState(false);

  const onClickHandler = () => {
    setStatus("active");
    setDialog(true);
  };

  const onDeleteHanlder = () => {
    setStatus("inactive");
  };

  const closeDialog = () => {
    setDialog(false);
  };

  const okayHandler = () => {
    setDialog(false);
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
      <Dialog open={dialog} maxWidth="xs">
        <DialogTitle> Abteilungen </DialogTitle>
        <DialogContent>
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginBottom: 2 }}
          >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="hello" />
              <FormControlLabel control={<Checkbox />} label="hello" />
            </FormGroup>
          </Stack>
          <DialogActions>
            <Button color="secondary" onClick={closeDialog}>
              Cancel
            </Button>
            <Button onClick={okayHandler}>Okay</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default TagFilter;
