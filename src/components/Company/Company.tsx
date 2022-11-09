import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCompanyQuery } from "utils/Graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { AddBusinessOutlined } from "@mui/icons-material";

const Company = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useCompanyQuery({ id: id! });

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>;
  }
  const { company } = data;
  return (
    <Box>
      <Card
        sx={{
          mb: 2,
        }}
        key={`${company?.id}`}
      >
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
      <Button
        variant="contained"
        startIcon={<AddBusinessOutlined />}
        onClick={() => navigate(`/company/${id}/branch/new`)}
      >
        Add Branch
      </Button>
    </Box>
  );
};

export default Company;
