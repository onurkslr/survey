import React, { Component } from "react";
import Navi from "./Navi";
import MainView from "./MainView";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import ListSurvey from "./ListSurvey";
import ListTopic from "./ListTopic";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = { topics: [], surveys: [] };

  componentDidMount() {
    this.getTopics();
    this.getSurveyList();
  }

  getTopics = () => {
    fetch("http://localhost:8080/api/topics")
      .then((response) => response.json())
      .then((data) => this.setState({ topics: data }));
  };
  getSurveyList = () => {
    fetch("http://localhost:8080/api/surveys")
      .then((response) => response.json())
      .then((data) => this.setState({ surveys: data }));
  };

  render() {
    let categoryList = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12 ">
              <Navi />
            </Col>
          </Row>
          <Row>
            <Col xs="3 ">
              <CategoryList info={categoryList} />
            </Col>

            <Col xs="9 ">
              <Switch>
                <Route exact path="/" component={MainView}></Route>
                <Route exact path="/topics" component={ListTopic}>
                  <ListTopic topics={this.state.topics} />
                </Route>
                <Route exact path="/surveys" component={ListSurvey}>
                  <ListSurvey surveys={this.state.surveys} />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
