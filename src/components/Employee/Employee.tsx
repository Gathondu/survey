import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEmployeeQuery } from "@utils/Graphql";
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

const Employee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useEmployeeQuery({ id: id! });

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>;
  }
  const { employee } = data;
  const { QrCode: QRC } = QrCode;

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Card key={`${employee?.id}`}>
          <CardActionArea onClick={() => navigate(`${employee?.url}`)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {employee?.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {employee?.phoneNumber}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Button
        variant="contained"
        startIcon={<QrCodeOutlined />}
        onClick={() =>
          console.log(QRC.encodeText(JSON.stringify(employee), QRC.Ecc.MEDIUM))
        }
      >
        Generate QR Code
      </Button>
    </>
  );
};

export default Employee;
