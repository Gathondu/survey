import { Formik, Field } from "formik";
import { Typography, Button } from "@mui/material";
import { useAddCompanyMutation } from "@utils/Graphql";

const CompanyForm = () => {
  const { mutate: addCompany } = useAddCompanyMutation({
    onSuccess: (data) => console.log(data),
  });

  return (
    <div>
      <Typography variant="h5">Companies</Typography>
      <Formik
        initialValues={{
          name: "",
          location: "",
          website: "",
        }}
        onSubmit={(values) =>
          addCompany({
            name: values.name,
            location: values.location,
            website: values.website,
          })
        }
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Field name="name" />
            <Field name="location" />
            <Field name="website" />
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CompanyForm;
