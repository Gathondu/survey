import React from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Companies from "./components/Company";

const App = () => {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Survey
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Box>
          <Routes>
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
};

export default App;
