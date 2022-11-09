import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCustomerQuery } from "utils/Graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const Customer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useCustomerQuery({ id: id! });

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>;
  }
  const { customer } = data;

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Card key={`${customer?.id}`}>
          <CardActionArea onClick={() => navigate(`${customer?.url}`)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {customer?.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {customer?.phoneNumber}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default Customer;
