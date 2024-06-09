import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import TeacherView from "./TeacherView";
import { Container } from "@mui/material";

const Teacher = () => {
  return (
    <Container>
      <Helmet>
        <title>Teacher Page</title>
      </Helmet>
      <Routes>
        <Route path="*" element={<TeacherView />} />
      </Routes>
    </Container>
  );
};

export default Teacher;