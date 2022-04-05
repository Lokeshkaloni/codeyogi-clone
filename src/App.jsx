import React from 'react';
import QuizPage from './QuizPage';
import MainLayout from './MainLayout';
import ReactDOM from 'react-dom';
import LecturesPage from './LecturesPage';
import AssignmentsPage from './AssignmentsPage';
import { Navigate, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import NotFound from './NotFound';

function App() {
	return (
		
			<Routes>
				<Route path="Quiz" element={<QuizPage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Navigate to="/Lectures" />} />
				  <Route path="/" element={<MainLayout />}>
					  <Route path="Lectures" element={<LecturesPage />} />
					  <Route path="Assignments" element={<AssignmentsPage />} />
                      <Route path="Profile" element={<ProfilePage />} />
				  </Route>
			</Routes>
		
	);
}

export default App;

