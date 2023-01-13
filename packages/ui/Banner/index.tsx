import { Alert, AlertColor, AlertTitle } from "@mui/material";

const Banner = ({
  message,
  severity,
}: {
  message: string;
  severity: AlertColor;
}) => (
  <Alert severity={severity}>
    <AlertTitle>{severity.toUpperCase()}</AlertTitle>
    {message}
  </Alert>
);

export default Banner;
