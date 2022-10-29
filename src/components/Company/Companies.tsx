import React from "react";
// import { Formik, Form } from "formik";
import { Typography } from "@mui/material";
import { useCompaniesQuery } from "../../utils/graphql/graphql";

const Companies = () => {
  const { data, isLoading, error } = useCompaniesQuery();
  console.log(data, isLoading, error);
  return (
    <div>
      <Typography variant="h5">Companies</Typography>
      {/* <Formik>
        <Form></Form>
      </Formik> */}
    </div>
  );
};

export default Companies;
