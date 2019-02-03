import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserRequest } from "../../actions/users";
import { Container } from "reactstrap";
import UsersList from "../pages/UsersList";

class UsersListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.getUserRequest();
  }

  render() {
    return (
      <Container>
        <UsersList users={this.props.users} />
      </Container>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  {
    getUserRequest
  }
)(UsersListContainer);
