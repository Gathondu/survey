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
import { SupportAgentOutlined, QrCodeOutlined } from "@mui/icons-material";
import QrCode from "qr-code";
import { useState } from "react";

const Branch = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useBranchQuery({ id: id! });

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>;
  }
  const { branch } = data;
  const { QrCode: QRC } = QrCode;

  const generateQR = () => {
    const qr = QRC.encodeText(JSON.stringify(branch), QRC.Ecc.MEDIUM);
    console.log(qr);
  };

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
        sx={{
          mr: 2,
        }}
        variant="contained"
        startIcon={<SupportAgentOutlined />}
        onClick={() => navigate(`/branch/${id}/employee/new`)}
      >
        Add Employee
      </Button>
      <Button
        variant="contained"
        startIcon={<QrCodeOutlined />}
        onClick={generateQR}
      >
        Generate QR Code
      </Button>
    </>
  );
};

export default Branch;
