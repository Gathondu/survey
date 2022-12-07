import AppModal from "@@survey/ui/Modal";
import { Field, Form } from "@@survey/ui/Form";
import { useState, useEffect, ChangeEvent } from "react";
import { useFormik } from "formik";
import { AddBusinessOutlined, Radio } from "@mui/icons-material";
import { useUrlIdQuery } from "@survey/utils/graphql";
import Typography from "@mui/material/Typography/Typography";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useRouter } from "next/router";

const ReviewForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [service, setService] = useState<number>(0);
  const router = useRouter();
  const { uid: urlId, test } = router.query;
  const { data, isLoading, isError, error } = useUrlIdQuery({
    urlId: urlId?.toString()!,
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
