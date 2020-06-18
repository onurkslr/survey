import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ListTopic extends Component {
  render() {
    return (
      <div>
        <h3>Topic Table</h3>
        <Table>
          <thead>
            <tr>
              <th>Topic Id</th>
              <th>Topic Name</th>
              <th>Npm Score</th>
            </tr>
          </thead>
          <tbody>
            {this.props.topics.map((topic) => (
              <tr key={topic.topic_id}>
                <th scope="row">{topic.topic_id}</th>
                <td>{topic.topic}</td>
                <td>{topic.npm}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
