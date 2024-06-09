import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Teacher from './Teacher';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/teacher-view" />} />
        <Route path="/teacher-view" element={<Teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
