import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Box,
} from "@mui/material";

const SelectField = ({ ...props }: any) => {
  const { variant, name, formik, data, selected, disabled, Icon }: any = props;

  const { errors, values, touched, handleBlur, handleChange } = formik;

  return (
    <Box
      sx={{
        mb: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon sx={{ mr: 2 }} />
      <FormControl disabled={disabled} variant={variant} fullWidth>
        <InputLabel id={`select-${name}`}>Company</InputLabel>
        <Select
          fullWidth
          name={name}
          value={values[name]}
          onChange={handleChange}
          labelId={`select-${name}`}
          onBlur={handleBlur}
          inputProps={{
            name,
          }}
        >
          {data.map((item: any) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        {touched[name] && !selected && (
          <FormHelperText>{errors[name]}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default SelectField;
