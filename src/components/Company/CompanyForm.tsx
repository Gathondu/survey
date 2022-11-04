import { useFormik } from "formik";
import * as yup from "yup";
import { Field } from "@components/Form";
import { Button } from "@mui/material";
import { useAddCompanyMutation, useCompaniesQuery } from "@utils/Graphql";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  GpsFixedOutlined,
  AddBusinessOutlined,
  HttpOutlined,
} from "@mui/icons-material";

const validationSchema = yup.object({
  name: yup.string().required("Company name is required"),
  location: yup.string(),
  website: yup.string(),
});

const CompanyForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  useCompaniesQuery({
    recordsToGet: "all",
  });
  const { mutate: addCompany } = useAddCompanyMutation({
    onSuccess: (data: any, error: any) => {
      const { addCompany: company } = data;
      queryClient.setQueryData(
        ["Companies", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData.companies) {
            return oldData.companies.push(company);
          }
        }
      );

      if (company) {
        enqueueSnackbar(`${company.name} created sucessfully`, {
          variant: "success",
        });
      }

      navigate(company.url);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      website: "",
    },
    validationSchema,
    onSubmit: (values) =>
      addCompany({
        name: values.name,
        location: values.location,
        website: values.website,
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
        <Field
          name="website"
          label="Website"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={HttpOutlined}
        />
        <Button
          sx={{
            mt: 2,
          }}
          color="primary"
          variant="contained"
          type="submit"
        >
          Add Company
        </Button>
      </form>
    </div>
  );
};

export default CompanyForm;
