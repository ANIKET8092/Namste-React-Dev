import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h2>Name:{props.name}</h2>
      <h3>Location: Muzaffarpur</h3>
      <h4>Contact: @ANIKET8092</h4>
    </div>
  );
};

export default User;
