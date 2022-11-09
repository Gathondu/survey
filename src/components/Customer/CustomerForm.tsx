import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Field, PhoneInput } from "@components/Form";
import { Button, Box, FormControlLabel } from "@mui/material";
import { useAddCustomerMutation, useCustomersQuery } from "@utils/Graphql";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AddBusinessOutlined } from "@mui/icons-material";
import { CountryData } from "react-phone-input-2";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(),
  email: yup.string().required("Please enter a valid email address"),
  promotions: yup.bool(),
});

const CustomerForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  useCustomersQuery({
    recordsToGet: "all",
  });
  const { mutate: addCustomer } = useAddCustomerMutation({
    onSuccess: (data: any, error: any) => {
      const { addCustomer: customer } = data;
      queryClient.setQueryData(
        ["Customers", { recordsToGet: "all" }],
        (oldData: any = {}) => {
          if (oldData.customers) {
            oldData.customers.push(customer);
          }
        }
      );

      if (customer) {
        enqueueSnackbar(`${customer.name} created sucessfully`, {
          variant: "success",
        });
      }

      navigate(customer.url);
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "",
      promotions: [],
    },
    validationSchema,
    onSubmit: (values) => {
      Object.assign(values, { phone, countryCode });
      //@ts-ignore
      addCustomer(values);
    },
  });

  const handlePhoneChange = (
    value: string,
    data: CountryData,
    event: ChangeEvent,
    formattedValue: string
  ): void => {
    setPhone(value.slice(data.dialCode.length));
    setCountryCode(`+${data.dialCode}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        style={{ width: "50%", display: "inline-block" }}
        onSubmit={formik.handleSubmit}
      >
        <Field
          name="firstName"
          label="First Name"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={AddBusinessOutlined}
        />
        <Field
          name="lastName"
          label="Last Name"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={AddBusinessOutlined}
        />
        <Field
          type="email"
          name="email"
          label="Email"
          variant="standard"
          formik={formik}
          fullWidth
          Icon={AddBusinessOutlined}
        />
        <Box>
          <FormControlLabel
            control={<PhoneInput handlePhoneChange={handlePhoneChange} />}
            label=""
          />

          <FormControlLabel
            control={
              <input
                value={formik.values.promotions ? "promotions" : ""}
                onChange={formik.handleChange}
                type="checkbox"
                name="promotions"
              />
            }
            label="Promotions"
          />
        </Box>
        <Button
          sx={{
            mt: 2,
          }}
          color="primary"
          variant="contained"
          type="submit"
        >
          Add Customer
        </Button>
      </form>
    </div>
  );
};

export default CustomerForm;