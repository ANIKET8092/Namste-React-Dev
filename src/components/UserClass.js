import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
      userInfo: {
        name: "dummy",
        location: "dummy",
        avatar_url: "dummy_pic",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ANIKET8092");
    if (!data.ok) {
      throw new Error("Api called failed");
    }
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("moved to new page");
  }

  render() {
    const { id, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <img src={avatar_url} alt="image" /> */}
        <h2>Id: {id}</h2>
        <h3>Name: {login}</h3>
        <h4>Contact: @ANIKET8092</h4>
      </div>
    );
  }
}

export default UserClass;
