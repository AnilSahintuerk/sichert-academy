import { Paper, Button } from "@mui/material";

function HomePageButton(props) {
  return (
    <Button
      color="sichert"
      sx={{
        p: "0 ",
        fontWeight: "600",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          height: "150px",
          width: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "sichert.main",
          "&:hover": {
            color: "#fff",
            backgroundColor: "onhover.main",
            boxShadow: "0 16px 32px 0 rgba(0, 0, 0, 0.4)",
          },
          "&:active": {
            color: "#fff",
            backgroundColor: "onhover.main",
            boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        {props.action}
      </Paper>
    </Button>
  );
}

export default HomePageButton;
