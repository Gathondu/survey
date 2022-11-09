import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useCompaniesQuery } from "@utils/Graphql";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    records: string
  ) => {
    if (records !== null) {
      setRecords(records);
    }
  };

  return (
    <>
      <div style={{ textAlign: "end", marginBottom: 2 }}>
        <ToggleButtonGroup
          color="primary"
          value={records}
          exclusive
          onChange={handleToggle}
          aria-label="Platform"
          size="small"
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="active">Active</ToggleButton>
          <ToggleButton value="deleted">Deleted</ToggleButton>
        </ToggleButtonGroup>
      </div>
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
