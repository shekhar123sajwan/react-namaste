import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const userInfo = await fetch(
      "https://api.github.com/users/shekhar123sajwan"
    );

    const json = await userInfo.json();

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("component Did update");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return (
              <div>
                <p className="text-2xl">ContextAPI : {loggedInUser}</p>
                <img src={avatar_url} />
                <h2>Name:: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {login}</h4>
              </div>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
