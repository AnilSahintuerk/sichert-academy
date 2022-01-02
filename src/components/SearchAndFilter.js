import { Box } from "@mui/material";
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
    <Box sx={{ height: "160px", marginTop: "32px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
          gap: "32px",
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
