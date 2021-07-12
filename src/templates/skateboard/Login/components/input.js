import React from "react";

export const Input = ({
  type,
  className,
  placeHolder,
  icon,
  value,
  field,
  setFieldValue,
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setFieldValue(field, e.target.value)}
      />
      <i className={icon} />
    </>
  );
};
