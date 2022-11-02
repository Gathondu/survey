import { Typography } from "@mui/material";
import { useCompaniesQuery } from "@utils/Graphql";

const Companies = () => {
  const { data, isLoading, error } = useCompaniesQuery();
  return (
    <div>
      <Typography variant="h5">Companies</Typography>
    </div>
  );
};

export default Companies;
