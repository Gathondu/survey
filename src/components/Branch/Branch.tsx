import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBranchQuery } from "utils/Graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { SupportAgentOutlined } from "@mui/icons-material";
import QRCode from "components/QRCode";

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
      <QRCode
        url={`${process.env.REACT_APP_BASE_URL}/review/${branch?.urlId}`}
        title={branch?.name!}
      />
    </>
  );
};

export default Branch;
