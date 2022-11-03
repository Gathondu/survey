import { Tooltip, IconButton, Box, TextField } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const FormField = ({ ...props }: any) => {
  const {
    label,
    readOnly,
    tooltip,
    tooltipWidthClass,
    fullWidth,
    Icon,
    variant,
    name,
    formik,
  }: any = props;

  const { errors, touched, values, handleChange, handleBlur } = formik;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {Icon && <Icon />}
      {tooltip && (
        <Tooltip
          className={tooltipWidthClass}
          title={tooltip}
          id={name}
          placement="right"
        >
          <IconButton>
            <QuestionMarkIcon />
          </IconButton>
        </Tooltip>
      )}
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

export default FormField;
