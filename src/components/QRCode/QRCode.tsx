import { FC, useState } from "react";
import QrCode from "qrcode";
import { Box, Button, Link } from "@mui/material";
import { saveAs } from "file-saver";
import { QrCodeOutlined } from "@mui/icons-material";

interface Props {
  url: string;
  title: string;
}
const QRCode: FC<Props> = ({ url, title }) => {
  const [src, setSrc] = useState("");

  const downloadImg = () => {
    saveAs(src, `${title}.png`);
  };
  QrCode.toDataURL(url).then(setSrc);
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <div>
        <img src={src} alt="" />
      </div>
      <Button onClick={downloadImg} startIcon={<QrCodeOutlined />}>
        Download QR
      </Button>
      {process.env.NODE_ENV === "development" && (
        <Link
          style={{ marginLeft: "2px" }}
          href={`${url}?test=true`}
          underline="hover"
          rel="noopener noreferrer"
          target="_blank"
        >
          Test Review Form
        </Link>
      )}
    </Box>
  );
};

export default QRCode;
