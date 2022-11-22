import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCompaniesQuery } from "utils/Graphql";
import { RecordsToggle } from "components/Toggle";

const Companies = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState("all");
  const { data, isLoading, isError, error, refetch } = useCompaniesQuery({
    recordsToGet: records,
  });

  useEffect(() => {}, [refetch, records]);

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>;
  }
  const { companies } = data;

  return (
    <>
      <RecordsToggle setRecord={records} updateRecords={setRecords} />
      <Box
        sx={{
          display: "flex",
          width: "90%",
          flexWrap: "wrap",
          backgroundColor: "##E7EBF0",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {companies?.map((company) => (
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
        ))}
      </Box>
    </>
  );
};

export default Companies;
