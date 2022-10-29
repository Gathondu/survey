import React, { useState, useEffect } from "react";
import { Field, useField, useFormikContext } from "formik";
import { get } from "lodash";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Tooltip, IconButton } from "@mui/material";

const FormField = ({ ...props }: any) => {
  const propsClone = { ...props };
  const {
    label,
    required,
    readOnly,
    type,
    tooltip,
    tooltipWidthClass,
    className,
  } = props;
  delete propsClone.tooltipWidthClass;

  const [field] = useField(props);
  const { name } = field;
  const { errors, touched } = useFormikContext();
  const [fieldErrors, setFieldErrors] = useState(null);
  const [isCheckbox, setIsCheckbox] = useState(false);

  useEffect(() => {
    const fieldErrors = get(errors, name);
    setFieldErrors(fieldErrors && get(touched, name) ? fieldErrors : null);
  }, [name, errors, touched]);

  useEffect(() => {
    setIsCheckbox(type === "checkbox");
  }, [type]);

  return (
    <div>
      <label
        htmlFor={name}
        className={
          isCheckbox ? "flex flex-row-reverse items-center justify-end" : ""
        }
      >
        <LabelContent
          label={label}
          required={required}
          readOnly={readOnly}
          name={name}
          tooltip={tooltip}
          tooltipWidthClass={tooltipWidthClass}
          isCheckbox={isCheckbox}
        />
        <Field
          {...field}
          {...propsClone}
          id={name}
          className={`${
            !isCheckbox ? "form-input w-full" : "mr-2"
          } ${className}`}
        />
      </label>
      <FieldErrors fieldErrors={fieldErrors} />
    </div>
  );
};

export default FormField;

const LabelContent = ({
  label,
  required,
  readOnly,
  tooltip,
  tooltipWidthClass,
  name,
  isCheckbox,
}: any) => {
  return (
    <span
      className={`inline-block flex items-center space-x-2 ${
        !isCheckbox ? "mb-1" : "text-base"
      } ${readOnly ? "text-medium-gray font-body-bold" : ""}`}
    >
      <span>
        {label}
        {required && !readOnly && <span className="text-sm required">*</span>}
      </span>

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
    </span>
  );
};
const FieldErrors = ({ fieldErrors }: any) => {
  return fieldErrors ? (
    <div className="text-sm text-red mt-1">{fieldErrors}</div>
  ) : null;
};
