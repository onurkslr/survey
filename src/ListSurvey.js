import React, { Component } from "react";
import { Table, Form, FormGroup, Label, Input } from "reactstrap";
export default class ListSurvey extends Component {
  render() {
    return (
      <div>
        <h3>List Survey</h3>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Groove</option>
              <option>Uber</option>
            </Input>
          </FormGroup>
          <Table>
            <thead>
              <tr>
                <th>Submit Id</th>
                <th>Score</th>
                <th>feedback</th>
                <th>Category Id</th>
              </tr>
            </thead>
            <tbody>
              {this.props.surveys.map((survey) => (
                <tr key={survey.id}>
                  <th scope="row">{survey.id}</th>
                  <td>{survey.score}</td>
                  <td>{survey.feedback}</td>
                  <td>{survey.topic_id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Form>
      </div>
    );
  }
}
