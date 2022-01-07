import { Route, Routes, useNavigate } from "react-router-dom";
import NewClassroomPage from "../pages/NewClassroomPage";
import ClassroomCreatorPage from "../pages/ClassroomCreatorPage";
import { useState } from "react";

function ClassroomCreatorRouter() {
  const navigate = useNavigate();
  const [newClass, setNewClass] = useState([]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ClassroomCreatorPage newClass={newClass} setNewClass={setNewClass} />
        }
      />
      <Route
        path="/neue_klasse"
        element={<NewClassroomPage classroom={newClass} />}
      />
    </Routes>
  );
}

export default ClassroomCreatorRouter;
