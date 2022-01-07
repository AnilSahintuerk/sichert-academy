import { Route, Routes, useNavigate } from "react-router-dom";
import CurriculumCreatorPage from "../pages/CurriculumCreatorPage";
import { useState } from "react";
import NewCurriculumPage from "../pages/NewCurriculumPage";

function CurriculumCreatorRouter() {
  const navigate = useNavigate();
  const [selectedCards, updateSelectedCards] = useState([]);
  console.log(selectedCards);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CurriculumCreatorPage
            selectedCards={selectedCards}
            updateSelectedCards={updateSelectedCards}
          />
        }
      />
      <Route
        path="/neuer_lehrplan"
        element={<NewCurriculumPage lectures={selectedCards} />}
      />
    </Routes>
  );
}

export default CurriculumCreatorRouter;
