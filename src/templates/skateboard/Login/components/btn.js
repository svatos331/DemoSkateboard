import React from "react";

export const Btn = ({ text, handleSubmit }) => {
  return (
    <button className="btn mt-4" onClick={handleSubmit}>
      {text}
    </button>
  );
};
