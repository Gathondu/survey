import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useCompaniesQuery } from "@utils/Graphql";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const { data, isLoading, isError, error } = useCompaniesQuery();
  const navigate = useNavigate();

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    console.error(error);
    return <Typography>Error</Typography>;
  }
  const { companies } = data;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "##E7EBF0",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {companies?.map((company) => (
        <Card key={`${company?.id}`}>
          <CardActionArea onClick={() => navigate(`${company?.url}`)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {company?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {company?.location}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Companies;
