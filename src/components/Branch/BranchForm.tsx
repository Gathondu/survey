import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Field, Select } from "@components/Form";
import { Button } from "@mui/material";
import {
  Company,
  useAddBranchMutation,
  useCompaniesQuery,
  useCompanyQuery,
  useBranchesQuery,
} from "@utils/Graphql";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import {
  GpsFixedOutlined,
  AddBusinessOutlined,
  StoreOutlined,
} from "@mui/icons-material";

const validationSchema = yup.object({
  name: yup.string().required("Branch name is required"),
  location: yup.string(),
  company: yup.string().required("Company is required"),
});

const BranchForm = () => {
  const { companyId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [companies, setCompanies] = useState<any>([]);
  const [selectedCompany, setSelectedCompany] = useState<any>("");
  const [disabled, setDisabled] = useState(true);
  const { data: companiesData, refetch: refreshCompanies } = useCompaniesQuery({
    recordsToGet: "all",
  });
  useBranchesQuery({
    recordsToGet: "all",
  });
  const { data: companyData } = useCompanyQuery(
    { id: companyId! },
    { enabled: !!companyId }
  );

  const { mutate: addBranch } = useAddBranchMutation({
    onSuccess: (data: any, error: any) => {
      const { addBranch: branch } = data;
      queryClient.setQueryData(
        ["Branches", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData?.branches) {
            oldData.branches.push(branch);
          }
        }
      );
      queryClient.setQueryData(
        ["Companies", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData.companies) {
            oldData.companies.map((company: Company) => {
              if (company.id === branch.company.id) {
                company?.branches?.push(branch);
              }
              return company;
            });
          }
        }
      );

      if (branch) {
        enqueueSnackbar(`${branch.name} created sucessfully`, {
          variant: "success",
        });
      }
      navigate(companyId ? companyData?.company?.url : branch.url);
    },
  });

  useEffect(() => {
    if (companyId && companyData) {
      setSelectedCompany(companyData?.company?.id);
      setCompanies([
        { name: companyData?.company?.name, value: companyData?.company?.id },
      ]);
    } else if (companiesData && companiesData.companies) {
      setDisabled(false);

      if (companiesData?.companies?.length > 0) {
        /**@ts-ignore */
        setSelectedCompany(companiesData?.companies[0]?.id);
        setCompanies(
          companiesData?.companies?.map((company: any) => ({
            name: company?.name,
            value: company?.id,
          }))
        );
      }
    } else {
      refreshCompanies();
    }
  }, [
    setDisabled,
    setSelectedCompany,
    setCompanies,
    companyData,
    companyId,
    companiesData,
    refreshCompanies,
  ]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      location: "",
      company: selectedCompany,
    },
    validationSchema,
    onSubmit: (values) =>
      addBranch({
        name: values.name,
        location: values.location,
        company: values.company,
      }),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <form
        style={{ width: "50%", display: "inline-block" }}
        onSubmit={formik.handleSubmit}
      >
        <Field
          name="name"
          label="Name"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={AddBusinessOutlined}
        />
        <Field
          name="location"
          label="Location"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={GpsFixedOutlined}
        />
        <Select
          name="company"
          variant="standard"
          formik={formik}
          data={companies}
          selected={selectedCompany}
          disabled={disabled}
          Icon={StoreOutlined}
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
          Add Branch
        </Button>
      </form>
    </div>
  );
};

export default BranchForm;
