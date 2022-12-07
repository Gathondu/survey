import { ChangeEvent, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Field, PhoneInput, Select, Form } from "@@survey/ui/Form";
import { Button, Box, FormControlLabel } from "@mui/material";
import {
  Branch,
  useAddEmployeeMutation,
  useBranchesQuery,
  useBranchQuery,
} from "@survey/utils/graphql";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { AddBusinessOutlined } from "@mui/icons-material";
import { CountryData } from "react-phone-input-2";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
  email: yup.string().required("Please enter a valid email address"),
  employeeId: yup.string().required("Please add employee id"),
  branch: yup.string().required("Please select associated branch"),
});

const EmployeeForm = () => {
  const router = useRouter();
  const { bid: branchId } = router.query;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [branches, setBranches] = useState<any>([]);
  const [selectedBranch, setSelectedBranch] = useState<any>("");
  const [disabled, setDisabled] = useState(true);
  const { data: branchesData, refetch: refreshBranches } = useBranchesQuery({
    recordsToGet: "all",
  });
  useBranchesQuery({
    recordsToGet: "all",
  });
  const { data: branchData } = useBranchQuery(
    { id: branchId?.toString()! },
    { enabled: !!branchId }
  );

  const { mutate: addEmployee } = useAddEmployeeMutation({
    onSuccess: (data: any, error: any) => {
      const { addEmployee: employee } = data;
      queryClient.setQueryData(
        ["Employees", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData?.employees) {
            oldData.employees.push(employee);
          }
        }
      );
      queryClient.setQueryData(
        ["Branches", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData.branches) {
            oldData.branches.map((branch: Branch) => {
              if (branch.id === employee.branch.id) {
                branch?.employees?.push(employee);
              }
              return branch;
            });
          }
        }
      );

      if (employee) {
        enqueueSnackbar(`${employee.name} created sucessfully`, {
          variant: "success",
        });
      }
      router.push(branchId ? branchData?.branch?.url : employee.url);
    },
  });

  useEffect(() => {
    if (branchId && branchData) {
      setSelectedBranch(branchData?.branch?.id);
      setBranches([
        { name: branchData?.branch?.name, value: branchData?.branch?.id },
      ]);
    } else if (branchesData && branchesData.branches) {
      setDisabled(false);

      if (branchesData?.branches?.length > 0) {
        /**@ts-ignore */
        setSelectedBranch(branchesData?.branches[0]?.id);
        setBranches(
          branchesData?.branches?.map((branch: any) => ({
            name: branch?.name,
            value: branch?.id,
          }))
        );
      }
    } else {
      refreshBranches();
    }
  }, [
    setDisabled,
    setSelectedBranch,
    setBranches,
    branchData,
    branchId,
    branchesData,
    refreshBranches,
  ]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      branch: selectedBranch,
      countryCode: "",
      phone: "",
      employeeId: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      Object.assign(values, { phone, countryCode });
      addEmployee(values);
    },
  });

  const handlePhoneChange = (
    value: string,
    data: CountryData,
    event: ChangeEvent,
    formattedValue: string
  ): void => {
    setPhone(value.slice(data.dialCode.length));
    setCountryCode(`+${data.dialCode}`);
  };

  return (
    <Form submit={formik.handleSubmit}>
      <Field
        name="firstName"
        label="First Name"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Field
        name="lastName"
        label="Last Name"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Field
        type="email"
        name="email"
        label="Email"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Field
        name="employeeId"
        label="Employee ID"
        variant="standard"
        formik={formik}
        fullWidth
        Icon={AddBusinessOutlined}
      />
      <Box>
        <FormControlLabel
          control={<PhoneInput handlePhoneChange={handlePhoneChange} />}
          label=""
        />
      </Box>
      <Select
        name="branch"
        label="Branch"
        variant="standard"
        formik={formik}
        data={branches}
        selected={selectedBranch}
        disabled={disabled}
        Icon={AddBusinessOutlined}
        handleChange={formik.handleChange}
      />
      <Button
        sx={{
          mt: 2,
        }}
        color="primary"
        variant="contained"
        type="submit"
      >
        Add Employee
      </Button>
    </Form>
  );
};

export default EmployeeForm;
