import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Layout } from '../components/Layout';
import { Link } from '../routes';

class RegisterIdentity extends Component{

  render(){
      return(
        <div>
        <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Unique Identitification Number' placeholder='UIN' />
              <Form.Input fluid label='Name' placeholder='Enter your name' />
              <Form.Input fluid label='Gender' placeholder='Enter your gender' />
              <Form.Input fluid label='Date of birth' placeholder='Enter your date of birth' />
              <Form.Input fluid label='Parent Name' placeholder="Enter your parent's name" />
              <Form.Input fluid label='Name' placeholder='Enter your name' />


              <Form.Select fluid label='Gender' options={options} placeholder='Enter your gender' />
            </Form.Group>
            <Form.Group inline widths='equal'>
              <label>Left Hand</label>
              <Form.Input fluid label='Left Finger1' placeholder='LFinger1 Description' />
              <Form.Input fluid label='Left Finger2' placeholder='LFinger2 Description' />
              <Form.Input fluid label='Left Finger3' placeholder='LFinger3 Description' />
              <Form.Input fluid label='Left Finger4' placeholder='LFinger4 Description' />
              <Form.Input fluid label='Left Finger5' placeholder='LFinger5 Description' />
            </Form.Group>
            <Form.Group inline widths='equal'>
              <label>Right Hand</label>
              <Form.Input fluid label='Right Finger1' placeholder='RFinger1 Description' />
              <Form.Input fluid label='Right Finger2' placeholder='RFinger2 Description' />
              <Form.Input fluid label='Right Finger3' placeholder='RFinger3 Description' />
              <Form.Input fluid label='Right Finger4' placeholder='RFinger4 Description' />
              <Form.Input fluid label='Right Finger5' placeholder='RFinger5 Description' />
            </Form.Group>
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      );
  }

}

export default RegisterIdentity;
