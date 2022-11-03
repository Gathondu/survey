import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBranchQuery } from "@utils/Graphql";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const Branch = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useBranchQuery({ id });

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    console.error(error);
    return <Typography>Error</Typography>;
  }
  const { branch } = data;
  return (
    <Box>
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
  );
};

export default Branch;
