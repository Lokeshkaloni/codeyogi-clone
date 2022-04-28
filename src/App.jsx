import React, { useState } from "react";
import QuizPage from "./QuizPage";
import MainLayout from "./MainLayout";
import LecturesPage from "./LecturesPage";
import AssignmentsPage from "./AssignmentsPage";
import { Navigate, Routes, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import NotFound from "./NotFound";
import StudentsPage from "./StudentsPage";
import AssignmentDetail from "./AssignmentDetail";
import AlertContext from "./AlertContext";

function App() {
  const [alert, setAlert] = useState({});
  const removeAlert = () => {
    setAlert({});
  };
  const showAlertData = { alert, setAlert, removeAlert };

  return (
    <AlertContext.Provider value={showAlertData}>
      <Routes>
        <Route path="Quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/Lectures" />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="Lectures" element={<LecturesPage />} />
          <Route path="Students" element={<StudentsPage />} />
          <Route path="Assignments" element={<AssignmentsPage />} />
          <Route path="Profile" element={<ProfilePage />} />
          <Route
            path="Assignments/:id/Details"
            element={<AssignmentDetail />}
          />
        </Route>
      </Routes>
    </AlertContext.Provider>
  );
}

export default App;
