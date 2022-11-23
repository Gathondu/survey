import AppModal from "components/Modal";
import { Field, Form } from "components/Form";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AddBusinessOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useUrlIdQuery } from "utils";
import Typography from "@mui/material/Typography/Typography";

const ReviewForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { urlId } = useParams();
  const { data, isLoading, isError, error } = useUrlIdQuery({
    urlId: urlId!,
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

  return (
    <AppModal isModalOpen={isOpen} closeModal={handleCloseModal}>
      <Form submit={formik.handleSubmit}>
        <Field
          name="name"
          label="Name"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={AddBusinessOutlined}
        />
      </Form>
    </AppModal>
  );
};

export default ReviewForm;
