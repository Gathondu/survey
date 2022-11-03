import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Field, Select } from "@components/Form";
import { Button } from "@mui/material";
import {
  useAddBranchMutation,
  useCompaniesQuery,
  useCompanyQuery,
} from "@utils/Graphql";
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
  const { data: companiesData } = useCompaniesQuery({
    recordsToGet: "all",
  });
  const { data: companyData } = useCompanyQuery({ id: companyId });

  const { mutate: addBranch } = useAddBranchMutation({
    onSuccess: (data: any, error: any) => {
      const { addBranch: branch } = data;

      if (branch) {
        enqueueSnackbar(`${branch.name} created sucessfully`, {
          variant: "success",
        });
      }
    },
  });

  const [companies, setCompanies] = useState<any>([]);
  const [selectedCompany, setSelectedCompany] = useState<any>("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (companyId && companyData) {
      setSelectedCompany(companyData?.company?.id);
      setCompanies([
        { name: companyData?.company?.name, value: companyData?.company?.id },
      ]);
    } else if (companiesData) {
      setDisabled(false);
      /**@ts-ignore */
      setSelectedCompany(companiesData?.companies[0]?.id);
      setCompanies(
        companiesData?.companies?.map((company: any) => ({
          name: company?.name,
          value: company?.id,
        }))
      );
    }
  }, [
    setDisabled,
    setSelectedCompany,
    setCompanies,
    companyData,
    companyId,
    companiesData,
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
          width={730}
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
