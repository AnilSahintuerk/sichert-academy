import { Box } from "@mui/material";
import GoBack from "./GoBack";
import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";

const tags = [
  {
    name: "Abteilung",
    options: [
      "Einkauf",
      "Arbeitsvorbereitung",
      "IT",
      "Human Resource",
      "Lager",
      "Logistik",
      "Qualitätssicherung",
      "Technische Entwicklung",
    ],
  },
  {
    name: "Tags",
    options: ["Sichert2021", "Ankündigungen", "FFC", "Kabelverzweiger"],
  },
  {
    name: "Software",
    options: ["Rheiner", "Infra", "Windchill", "Personio"],
  },
];

function SearchAndFilter(props) {
  return (
    <Box
      sx={{
        height: "160px",
        display: "flex",
        alignItems: "flex-start",
        marginTop: "32px",
        flex: "1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
          gap: "32px",
          height: "100%",

          flex: "1",
        }}
      >
        <SearchBar />
        <Box
          sx={{ display: "flex", gap: "16px", flexDirection: props.direction }}
        >
          {tags.map((tag, index) => (
            <TagFilter key={index} name={tag.name} options={tag.options} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SearchAndFilter;
