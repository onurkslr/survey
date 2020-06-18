import React, { Component } from "react";
import { FormGroup,Label,Input,Button } from "reactstrap";
export default class MainView extends Component {
  render() {
    return (
      <div>
        
        <h3>How Likely are you to recommend Groove to a friend or colleague?</h3>
        <form>
        <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Groove</option>
          <option>Uber</option>
          
        </Input>
      </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            1
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           2
           </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            3
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            4
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            5
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            6
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            7
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           8
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            9
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            10
          </Label>
        </FormGroup>
        <FormGroup>
        <Label for="exampleText"><h3>What is the most important reason for your score?</h3></Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button color="success">Submit Survey</Button>
        </form>
      </div>
    );
  }
}
