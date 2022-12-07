import { useRouter } from "next/router";
import { useCustomerQuery } from "@survey/utils/graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const Customer = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error } = useCustomerQuery({
    id: id?.toString()!,
  });

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
          <CardActionArea onClick={() => router.push(`${customer?.url}`)}>
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
