import { FC, useState } from "react";
import QrCode from "qrcode";
import { Box, Button } from "@mui/material";
import { saveAs } from "file-saver";
import { QrCodeOutlined } from "@mui/icons-material";

interface Props {
  text: string;
  title: string;
}
const QRCode: FC<Props> = ({ text, title }) => {
  const [src, setSrc] = useState("");

  const downloadImg = () => {
    saveAs(src, `${title}.png`);
  };
  QrCode.toDataURL(text).then(setSrc);
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
    </Box>
  );
};

export default QRCode;
