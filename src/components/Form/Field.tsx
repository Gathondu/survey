import { Box, TextField } from "@mui/material";

const Field = ({ ...props }: any) => {
  const { label, readOnly, fullWidth, Icon, variant, name, formik }: any =
    props;

  const { errors, touched, values, handleChange, handleBlur } = formik;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Icon sx={{ mr: 2 }} />
      <TextField
        inputProps={{
          readOnly,
        }}
        fullWidth={fullWidth}
        name={name}
        label={label}
        variant={variant}
        value={values[name]}
        error={touched[name] && Boolean(errors[name])}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched[name] && errors[name]}
      />
    </Box>
  );
};

export default Field;
