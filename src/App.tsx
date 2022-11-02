import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Companies, CompanyForm } from "@components/Company";
import { SideNavRoutes } from "@utils/Routes";
import { SideNav } from "@components/Navigation";

const App = () => {
  return (
    <Box
      className="App"
      sx={{
        boxSizing: "border-box",
        display: "grid",
        gridTemplateAreas: `
          "Header Header Header"
          "Nav Content Content"
        `,
        gridTemplateColumns: "250px 1fr",
        gridTemplateRows: "auto",
        gap: 1,
        width: "100%",
        heigth: "100vh",
      }}
    >
      <Box sx={{ flexGrow: 1, gridArea: "Header" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Survey
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          gridArea: "Nav",
        }}
      >
        <SideNav routes={SideNavRoutes} />
      </Box>
      <Box
        sx={{
          gridArea: "Content",
        }}
      >
        <Container maxWidth="lg">
          <Routes>
            <Route path="/companies" element={<Companies />} />
            <Route path="/company/new" element={<CompanyForm />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
