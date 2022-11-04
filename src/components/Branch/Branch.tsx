import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBranchQuery } from "@utils/Graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { QrCodeOutlined } from "@mui/icons-material";

const Branch = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useBranchQuery({ id });
  //@ts-ignore
  const QRC = qrcodegen.QrCode;

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    console.error(error);
    return <Typography>Error</Typography>;
  }
  const { branch } = data;

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Card key={`${branch?.id}`}>
          <CardActionArea onClick={() => navigate(`${branch?.url}`)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {branch?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {branch?.location}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Button
        variant="contained"
        startIcon={<QrCodeOutlined />}
        onClick={() => console.log(QRC.encodeText(branch, QRC.Ecc.MEDIUM))}
      >
        Generate QR Code
      </Button>
    </>
  );
};

export default Branch;
