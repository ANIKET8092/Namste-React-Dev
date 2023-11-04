import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOPS!!!!</h1>
      <p>{error.data}</p>
      <h2>Something Went Wrong</h2>
    </div>
  );
};

export default Error;
