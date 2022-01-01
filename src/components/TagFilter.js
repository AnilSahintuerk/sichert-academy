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
import { useState, useEffect } from "react";

function TagFilter(props) {
  let [status, setStatus] = useState("inactive");
  let [dialog, setDialog] = useState(false);
  const [checked, setChecked] = useState({});
  // Sichert2021: false,
  // Ankündigungen: false,
  // FFC: false,
  // Kabelverzweiger: false,
  // test: "",

  // useEffect(() => {
  //   onDeleteHanlder();
  // }, []);

  const onClickHandler = (e) => {
    setDialog(true);
  };

  const onDeleteHanlder = () => {
    setStatus("inactive");
    const checkboxState = {};
    for (const option of props.options) {
      checkboxState[option] = false;
    }
    setChecked(checkboxState);
  };

  const onCancel = () => {
    setDialog(false);
    setStatus("inactive");
  };

  const okayHandler = (value) => {
    setDialog(false);
    setStatus("active");
  };

  const statusHandler = () => {
    if (status === "active") {
      return "#245FA7";
    } else {
      return "#8791A5";
    }
  };

  const onChangeHandler = (e, option) => {
    const obj = checked;
    obj[option] = !obj[option];
    setChecked(obj);
  };

  return (
    <Box>
      <Chip
        label={props.name}
        onClick={onClickHandler}
        onDelete={status === "active" ? onDeleteHanlder : ""}
        sx={{
          backgroundColor: statusHandler,
          color: "#fff",
          padding: "1em",
        }}
      ></Chip>
      <Dialog open={dialog} maxWidth="sm" fullWidth>
        <DialogTitle> Abteilungen </DialogTitle>
        <DialogContent>
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ marginBottom: 2 }}
          >
            {props.options.map((option, index) => (
              <FormControlLabel
                label={option}
                control={
                  <Checkbox
                    onChange={(e) => onChangeHandler(e, option)}
                    checked={checked[option]}
                    key={index}
                  />
                }
              />
            ))}
          </Stack>
          <DialogActions>
            <Button color="secondary" onClick={onCancel}>
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
