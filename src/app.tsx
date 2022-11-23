import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Companies, CompanyForm, Company } from "components/Company";
import { Branch, BranchForm, Branches } from "components/Branch";
import { Customer, Customers, CustomerForm } from "components/Customer";
import { Employee, EmployeeForm, Employees } from "components/Employee";
import { MainNav, DrawerHeader } from "components/Navigation";
import { ScreenSizeProvider } from "utils";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ScreenSizeProvider>
      <Box className="App">
        <MainNav>
          <DrawerHeader />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              mr: 2,
              backgroundColor: "#E7EBF0",
              padding: "3rem",
              mt: isMobile ? 7 : 8,
            }}
          >
            <Routes>
              <Route path="/company/:id" element={<Company />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/company/new" element={<CompanyForm />} />
              <Route path="/company/:id" element={<Company />} />
              <Route
                path="/company/:companyId/branch/new"
                element={<BranchForm />}
              />
              <Route path="/branch/:id" element={<Branch />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/branch/new" element={<BranchForm />} />{" "}
              <Route
                path="/branch/:branchId/employee/new"
                element={<EmployeeForm />}
              />
              <Route path="/employee/:id" element={<Employee />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employee/new" element={<EmployeeForm />} />
              <Route path="/customer/:id" element={<Customer />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customer/new" element={<CustomerForm />} />
              <Route path="/reviews" element={<Customers />} />
            </Routes>
          </Box>
        </MainNav>
      </Box>
    </ScreenSizeProvider>
  );
};

export default App;
