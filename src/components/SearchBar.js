import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper } from "@mui/material";

function SearchBar(props) {
  return (
    <Paper
      sx={{
        width: 400,
        height: 40,
        backgroundColor: "#BDC7DC",
        borderRadius: 8,
        fontColor: "#886E8F",
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
        sx={{ color: "#00468B" }}
        placeholder={props.placeholder}
      ></InputBase>
    </Paper>
  );
}

export default SearchBar;
