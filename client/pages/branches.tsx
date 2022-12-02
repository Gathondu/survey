import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useBranchesQuery } from "@utils/Graphql";
import { useState, useEffect } from "react";
import RecordsToggle from "@components/RecordsToggle";
import { useRouter } from "next/router";

const Branches = () => {
  const router = useRouter();
  const [records, setRecords] = useState("all");
  const { data, isLoading, isError, error, refetch } = useBranchesQuery({
    recordsToGet: records,
  });

  useEffect(() => {}, [refetch, records]);

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>;
  }
  const { branches } = data;

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
        {branches?.map((branch: any) => (
          <Card key={`${branch?.id}`}>
            <CardActionArea onClick={() => router.push(`${branch?.url}`)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {branch?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {branch?.company.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Branches;
