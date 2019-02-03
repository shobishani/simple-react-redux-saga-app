import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import _ from "lodash";
import { Spinner } from "reactstrap";

const UsersList = props => {
  return (
    <ListGroup>
      {!!_.size(props.users.items) &&
        _.map(props.users.items, user => {
          return (
            <ListGroupItem key={user.id}>{`${user.firstName} ${
              user.lastName
            }`}</ListGroupItem>
          );
        })}
      {!!props.error && <div>{props.error}</div>}
      {!_.size(props.users.items) && (
        <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
      )}
    </ListGroup>
  );
};

export default UsersList;
