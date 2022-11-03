import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCompanyQuery } from "@utils/Graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const Company = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useCompanyQuery({ id });

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    console.error(error);
    return <Typography>Error</Typography>;
  }
  const { company } = data;
  return (
    <Box>
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
    </Box>
  );
};

export default Company;
