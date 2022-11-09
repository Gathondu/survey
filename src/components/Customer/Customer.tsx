import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCustomerQuery } from "@utils/Graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { QrCodeOutlined } from "@mui/icons-material";
import QrCode from "qr-code";

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
  const { QrCode: QRC } = QrCode;

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
      <Button
        variant="contained"
        startIcon={<QrCodeOutlined />}
        onClick={() =>
          console.log(QRC.encodeText(JSON.stringify(customer), QRC.Ecc.MEDIUM))
        }
      >
        Generate QR Code
      </Button>
    </>
  );
};

export default Customer;
