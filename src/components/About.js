import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        {/* <User name="Aniket 111" /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
