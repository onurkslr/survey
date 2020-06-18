import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        
        <ListGroup>
          <ListGroupItem>
            <Link to="/">Add New Survey</Link>
          </ListGroupItem>
          <ListGroupItem>
          <Link to="surveys">List Survey Answers</Link>
            </ListGroupItem>
          <ListGroupItem>
          <Link to="topics">List Survey Topics</Link>
            </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
