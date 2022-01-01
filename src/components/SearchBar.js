import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper, Box } from "@mui/material";

function SearchBar(props) {
  return (
    <Paper
      sx={{
        width: "100%",
        height: 40,
        backgroundColor: "#BDC7DC",
        borderRadius: 8,
        fontColor: "#886E8F",
        display: "flex",
      }}
    >
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#886E8F" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        fullWidth={true}
        sx={{ color: "#00468B", pt: "4px" }}
        placeholder={props.placeholder}
      ></InputBase>
    </Paper>
  );
}

export default SearchBar;
