import React, {Component} from 'react';
import { Card, Button, Form, Input, Message, Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import contract from '../ethereum/MagicIDContract';
import web3 from '../ethereum/web3';
import { BigNumber } from 'bignumber.js';

// Work under progress. This might/will break the UI.
class MemberPortal extends Component{

  state = {
      uin: '',
      name:'',
      gender:'',
      dob: '',
      parentName: '',
      personalAddress: '',
      mobile: '',
      email: '',
      iris_left: '',
      iris_right: '',
      face: '',
      right_finger_1: '',
      right_finger_2: '',
      right_finger_3: '',
      right_finger_4: '',
      right_finger_5: '',
      left_finger_1: '',
      left_finger_2: '',
      left_finger_3: '',
      left_finger_4: '',
      left_finger_5: '',
      agencyID: '',
      time_fence: '',
      location_fence: '',
      submitButton: false,
      authButton: false,
      authErrorMessage: '',
      errorMessage: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({submitButton: true, errorMessage: ''});

    let personal = [web3.utils.fromAscii(this.state.name), web3.utils.fromAscii(this.state.gender), web3.utils.fromAscii(this.state.dob), web3.utils.fromAscii(this.state.parentName),
      web3.utils.fromAscii(this.state.personalAddress), web3.utils.fromAscii(this.state.mobile), web3.utils.fromAscii(this.state.email),
      web3.utils.fromAscii(this.state.iris_left), web3.utils.fromAscii(this.state.iris_right), web3.utils.fromAscii(this.state.face),
      web3.utils.fromAscii(this.state.right_finger_1), web3.utils.fromAscii(this.state.right_finger_2), web3.utils.fromAscii(this.state.right_finger_3), web3.utils.fromAscii(this.state.right_finger_4),
      web3.utils.fromAscii(this.state.right_finger_5), web3.utils.fromAscii(this.state.left_finger_1), web3.utils.fromAscii(this.state.left_finger_2),
      web3.utils.fromAscii(this.state.left_finger_3), web3.utils.fromAscii(this.state.left_finger_4), web3.utils.fromAscii(this.state.left_finger_5)];
    try {
       const accounts = await web3.eth.getAccounts();
       await contract.methods.createMagicID(web3.utils.fromAscii(this.state.uin), personal).send({ from: accounts[0] });
    } catch (err) {
        this.setState({errorMessage: err.message});
    }
    this.setState({submitButton:false, uin: '',
    name:'',
    gender:'',
    dob: '',
    parentName: '',
    personalAddress: '',
    mobile: '',
    email: '',
    iris_left: '',
    iris_right: '',
    face: '',
    right_finger_1: '',
    right_finger_2: '',
    right_finger_3: '',
    right_finger_4: '',
    right_finger_5: '',
    left_finger_1: '',
    left_finger_2: '',
    left_finger_3: '',
    left_finger_4: '',
    left_finger_5: '',
    agencyID: '',
    time_fence: '',
    location_fence: ''});
  }

  convertStringToBytesArray(str){
    let stringArray = str.split(',');
    let bytesArray = [];
    for(let element of stringArray){
      // console.log(element.replace(/^\s\s*/, '').replace(/\s\s*$/, ''));
      bytesArray.push(web3.utils.fromAscii(element.replace(/^\s\s*/, '').replace(/\s\s*$/, '')));
    }
    return bytesArray;
  }

  authenticate = async(event) => {
    event.preventDefault();
    this.setState({authButton: true, errorMessage: ''});
    try {
      const accounts = await web3.eth.getAccounts();
      let bigNumberTimeFence = new BigNumber(this.state.time_fence);
      let locationFenceBytesArray =  this.convertStringToBytesArray(this.state.location_fence);
      console.log(typeof bigNumberTimeFence.toNumber() + bigNumberTimeFence.toNumber());
      await contract.methods.authID(web3.utils.fromAscii(this.state.agencyID), bigNumberTimeFence.toNumber(), locationFenceBytesArray).send({
        from: accounts[0],
        value: web3.utils.toWei( '0.01', 'ether')
      });
    } catch(err){
        this.setState({ authErrorMessage: err.message });
    }
    this.setState({authButton:false});
  }

  render(){
      return(
        <Layout activePage="MemberPortal">
        <h3>Create your ID</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={9}>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>
                <label>Unique Identity Number</label>
                <Input style={{ width: "40%" }}
                  value={this.state.uin}
                  onChange={event => this.setState({ uin: event.target.value})}
                 />
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <Input style={{ width: "40%" }}
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value})}
                 />
              </Form.Field>
              <Form.Field>
                <label>Gender</label>
                <Input style={{ width: "40%" }}
                  value={this.state.gender}
                  onChange={event => this.setState({ gender: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Date of birth</label>
                <Input style={{ width: "40%" }}
                  value={this.state.dob}
                  onChange={event => this.setState({ dob: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Parent Name</label>
                <Input style={{ width: "40%" }}
                  value={this.state.parentName}
                  onChange={event => this.setState({ parentName: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Personal Address</label>
                <Input style={{ width: "40%" }}
                  value={this.state.personalAddress}
                  onChange={event => this.setState({ personalAddress: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Mobile</label>
                <Input style={{ width: "40%" }}
                  value={this.state.mobile}
                  onChange={event => this.setState({ mobile: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Input style={{ width: "40%" }}
                  value={this.state.email}
                  onChange={event => this.setState({ email: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Left iris</label>
                <Input style={{ width: "40%" }}
                  value={this.state.iris_left}
                  onChange={event => this.setState({ iris_left: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Right iris</label>
                <Input style={{ width: "40%" }}
                  value={this.state.iris_right}
                  onChange={event => this.setState({ iris_right: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Face</label>
                <Input style={{ width: "40%" }}
                  value={this.state.face}
                  onChange={event => this.setState({ face: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Right Finger 1</label>
                <Input style={{ width: "40%" }}
                  value={this.state.right_finger_1}
                  onChange={event => this.setState({ right_finger_1: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Right Finger 2</label>
                <Input style={{ width: "40%" }}
                  value={this.state.right_finger_2}
                  onChange={event => this.setState({ right_finger_2: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Right Finger 3</label>
                <Input style={{ width: "40%" }}
                  value={this.state.right_finger_3}
                  onChange={event => this.setState({ right_finger_3: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Right Finger 4</label>
                <Input style={{ width: "40%" }}
                  value={this.state.right_finger_4}
                  onChange={event => this.setState({ right_finger_4: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Right Finger 5</label>
                <Input style={{ width: "40%" }}
                  value={this.state.right_finger_5}
                  onChange={event => this.setState({ right_finger_5: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Left Finger 1</label>
                <Input style={{ width: "40%" }}
                  value={this.state.left_finger_1}
                  onChange={event => this.setState({ left_finger_1: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Left Finger 2</label>
                <Input style={{ width: "40%" }}
                  value={this.state.left_finger_2}
                  onChange={event => this.setState({ left_finger_2: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Left Finger 3</label>
                <Input style={{ width: "40%" }}
                  value={this.state.left_finger_3}
                  onChange={event => this.setState({ left_finger_3: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Left Finger 4</label>
                <Input style={{ width: "40%" }}
                  value={this.state.left_finger_4}
                  onChange={event => this.setState({ left_finger_4: event.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label>Left Finger 5</label>
                <Input style={{ width: "40%" }}
                  value={this.state.left_finger_5}
                  onChange={event => this.setState({ left_finger_5: event.target.value})}
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button loading={this.state.submitButton} primary>Create ID</Button>
            </Form>
          </Grid.Column>

          <Grid.Column width={7}>
          <h4>Authenticate your ID</h4>
            <Grid.Row>
            <Form onSubmit={this.authenticate} error={!!this.state.authErrorMessage}>
              <Form.Field>
                <label>Agency ID you want to authenticate to</label>
                <Input style={{ width: "40%" }}
                  value={this.state.agencyID}
                  onChange={event => this.setState({ agencyID: event.target.value})}
                 />
              </Form.Field>
              <Form.Field>
                <label>Time(in seconds) your id should be accessible</label>
                <Input style={{ width: "40%" }}
                value={this.state.time_fence}
                onChange={event => this.setState({ time_fence: event.target.value})}
                 />
              </Form.Field>
              <Form.Field>
                <label>Locations where your id can be accessed <br/> (Enter in comma seperated format)</label>
                <Input style={{ width: "40%" }}
                  value={this.state.location_fence}
                  onChange={event => this.setState({ location_fence: event.target.value})}
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.authErrorMessage} />
              <Button loading={this.state.authButton} primary>Authenticate</Button>
            </Form>
            </Grid.Row>
            <Grid.Row>
                To be decided
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>


      </Grid>
        </Layout>
      );
  }

}

export default MemberPortal;
