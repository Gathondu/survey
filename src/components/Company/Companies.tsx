import React from "react";
import { Typography } from "@mui/material";
import { useCompaniesQuery } from "@utils/graphql";

const Companies = () => {
  const { data, isLoading, error } = useCompaniesQuery();
  console.log(data, isLoading, error);
  return (
    <div>
      <Typography variant="h5">Companies</Typography>
    </div>
  );
};

export default Companies;
