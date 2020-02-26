import React from "react";
import { axiosWithAuth } from "../axiosAuth";
import User from "./User";
import { findRenderedComponentWithType } from "react-dom/test-utils";

class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // addUser = user => {
  //   axiosWithAuth()
  //     .post("http://localhost:3000/api/users", JSON.parse(JSON.stringify(user)))
  //     .then(res => {
  //       this.getData();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return;
          <User key={user.id} data={user} />;
        })}
      </div>
    );
  }
}

export default UserList;
