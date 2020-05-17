import React from "react";

export const Button = ({ getValue }) => {
  return (
    <>
      <button onClick={getValue} name="good" type="button">Good</button>
      <button onClick={getValue} name="neutral" type="button">Neutral </button>
      <button onClick={getValue} name="bad" type="button">Bad</button>
    </>
  );
};