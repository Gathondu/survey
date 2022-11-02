import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Companies, CompanyForm, Company } from "@components/Company";
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
        columnGap: 1,
        width: "100%",
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
          height: "100vh",
        }}
      >
        <SideNav routes={SideNavRoutes} />
      </Box>
      <Box
        sx={{
          gridArea: "Content",
          backgroundColor: "#E7EBF0",
          padding: "3rem",
          height: "100vh",
        }}
      >
        <Routes>
          <Route path="/company/:id" element={<Company />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/company/new" element={<CompanyForm />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
