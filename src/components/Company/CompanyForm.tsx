import { useFormik } from "formik";
import * as yup from "yup";
import FormField from "@components/FormField";
import { Button } from "@mui/material";
import { useAddCompanyMutation } from "@utils/Graphql";
import { useSnackbar } from "notistack";
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
  const { mutate: addCompany } = useAddCompanyMutation({
    onSuccess: (data: any, error: any) => {
      const { addCompany: company } = data;

      if (company) {
        enqueueSnackbar(`${company.name} created sucessfully`, {
          variant: "success",
        });
      }
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
        <FormField
          name="name"
          label="Name"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={AddBusinessOutlined}
        />
        <FormField
          name="location"
          label="Location"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={GpsFixedOutlined}
        />
        <FormField
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
