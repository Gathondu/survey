import AppModal from "components/Modal";
import { Field, Form } from "components/Form";
import { useState, useEffect, ChangeEvent } from "react";
import { useFormik } from "formik";
import { AddBusinessOutlined, Radio } from "@mui/icons-material";
import { useParams, useSearchParams } from "react-router-dom";
import { useUrlIdQuery } from "utils";
import Typography from "@mui/material/Typography/Typography";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const ReviewForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [service, setService] = useState<number>(0);
  const { urlId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const test = searchParams.get("test");
  const { data, isLoading, isError, error } = useUrlIdQuery({
    urlId: urlId!,
    test: !!test,
  });
  const handleCloseModal = () => setIsOpen(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(data);
      console.log(test);
    },
  });

  useEffect(() => {
    if (!isLoading) {
      setIsOpen(true);
    }
  }, [isLoading]);

  if (isLoading || !data) {
    return <Typography>Loading</Typography>;
  }
  if (isError) {
    return <Typography>{`${error}`}</Typography>;
  }

  const handleServiceReview = (event: ChangeEvent<HTMLInputElement>) => {
    setService(parseInt((event.target as HTMLInputElement).value));
  };

  return (
    <AppModal isModalOpen={isOpen} closeModal={handleCloseModal}>
      <FormControl>
        <FormLabel>Service</FormLabel>
        <RadioGroup
          row
          name="service"
          value={service}
          onChange={handleServiceReview}
        >
          <FormControlLabel value={1} control={<Radio />} label="😒" />
          <FormControlLabel value={2} control={<Radio />} label="😒" />
          <FormControlLabel value={3} control={<Radio />} label="😒" />
          <FormControlLabel value={4} control={<Radio />} label="😒" />
          <FormControlLabel value={5} control={<Radio />} label="😒" />
        </RadioGroup>
      </FormControl>
    </AppModal>
  );
};

export default ReviewForm;
