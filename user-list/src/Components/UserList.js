import React from "react";
import { axiosWithAuth } from "../axiosAuth";

class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addUser = user => {
    axiosWithAuth()
      .post("http://localhost:5000/api/users", JSON.parse(JSON.stringify(user)))
      .then(res => {
        this.getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <div></div>;
  }
}

export default UserList;
