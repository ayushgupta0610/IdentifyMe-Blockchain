import React, {Component} from 'react';
import { Card, Button, Form, Input, Message, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import contract from '../../ethereum/MagicIDContract';
import web3 from '../../ethereum/web3';

class AgencyPortal extends Component{

  state = {
      agencyID: '',
      name:'',
      domain:'',
      isAllowedName: 'false',
      isAllowedGender: 'false',
      isAllowedDOB: 'false',
      isAllowedParentName: 'false',
      isAllowedAddress: 'false',
      isAllowedMobile: 'false',
      isAllowedEmail: 'false',
      isAllowedBioIRIS: 'false',
      isAllowedBioFace: 'false',
      isAllowedBioRightFinger: 'false',
      isAllowedBioLeftFingers: 'false',
      submitButton: false,
      getDetailsMessage: '',
      getDetailsButton: false,
      userUIN: '',
      userDetails: '',
      errorMessage: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({submitButton: true, errorMessage: ''});
    let accessBoolArray = [JSON.parse(this.state.isAllowedName), JSON.parse(this.state.isAllowedGender), JSON.parse(this.state.isAllowedDOB), JSON.parse(this.state.isAllowedParentName),
      JSON.parse(this.state.isAllowedAddress), JSON.parse(this.state.isAllowedMobile), JSON.parse(this.state.isAllowedEmail), JSON.parse(this.state.isAllowedBioIRIS),
      JSON.parse(this.state.isAllowedBioFace), JSON.parse(this.state.isAllowedBioRightFinger), JSON.parse(this.state.isAllowedBioLeftFingers)];
    try {
       const accounts = await web3.eth.getAccounts();
       await contract.methods.createAccessAgency(web3.utils.fromAscii(this.state.agencyID), web3.utils.fromAscii(this.state.name), web3.utils.fromAscii(this.state.domain), accessBoolArray).send({ from: accounts[0] });
    } catch (err) {
        this.setState({errorMessage: err.message});
    }
    this.setState({submitButton: false, agencyID: '',name:'',domain:'',isAllowedName: 'false',isAllowedGender: 'false',isAllowedDOB: 'false',isAllowedParentName: 'false',isAllowedAddress: 'false',
    isAllowedMobile: 'false',isAllowedEmail: 'false',isAllowedBioIRIS: 'false',isAllowedBioFace: 'false',isAllowedBioRightFinger: 'false',isAllowedBioLeftFingers: 'false'});
  }

  getUserDetails = async(event) => {
    event.preventDefault();
    this.setState({getDetailsButton: true, userDetails: ''});
      const accounts = await web3.eth.getAccounts();
      // const { userDetails } = this.state;
      debugger;
      try {
        let uin = await contract.methods.getIDUIN(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
        this.state.userDetails+="Unique Identity Number: " + uin.ret_uin + "\n";
        } catch(err){
         this.setState({ getDetailsMessage: err.message });
       }
      try {
        let name = await contract.methods.getIDName(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
        this.state.userDetails+="Name: " + name.ret_name + "\n";
      } catch(err){
       this.setState({ getDetailsMessage: err.message });
      }
      try {
        let gender = await contract.methods.getIDGender(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
        this.state.userDetails+="Gender: " + gender.ret_gender + "\n";
        } catch(err){
         this.setState({ getDetailsMessage: err.message });
       }
       try {
         let dob = await contract.methods.getIDdob(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
         this.state.userDetails+="Date of birth: " + dob.ret_dob + "\n";
         } catch(err){
          this.setState({ getDetailsMessage: err.message });
        }
      try {
        let parentName = await contract.methods.getIDParentName(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
        this.state.userDetails+="Parent's Name: " + parentName.ret_parentName + "\n";
        } catch(err){
         this.setState({ getDetailsMessage: err.message });
       }
       try {
         let personalAddress = await contract.methods.getIDaddress(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
         this.state.userDetails+="Personal Address: " + personalAddress.ret_personalAddress + "\n";
         } catch(err){
          this.setState({ getDetailsMessage: err.message });
        }
      try {
        let mobile = await contract.methods.getIDmobile(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
        this.state.userDetails+="Mobile No.: " + mobile.ret_mobile + "\n";
        } catch(err){
         this.setState({ getDetailsMessage: err.message });
      }
       try {
         let email = await contract.methods.getIDemail(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
         this.state.userDetails+="Email ID: " + email.ret_email + "\n";
         } catch(err){
          this.setState({ getDetailsMessage: err.message });
        }
      try {
        let bioIRIS = await contract.methods.getBioIRIS(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
        this.state.userDetails+="Left Iris: " + bioIRIS.ret_iris_left  + "\n" + "Right Iris: " + bioIRIS.ret_iris_right + "\n";
        } catch(err){
         this.setState({ getDetailsMessage: err.message });
       }
     try {
       let bioFace = await contract.methods.getBioFace(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
       this.state.userDetails+="Face: " + bioFace.ret_face + "\n";
       } catch(err){
        this.setState({ getDetailsMessage: err.message });
      }
      try {
        let bioRightFingers = await contract.methods.getBioRightFingers(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
        this.state.userDetails+="Right Hand Finger1: " + bioRightFingers.right_finger_1 + "\n" +
                                "Right Hand Finger2: " + bioRightFingers.right_finger_2 + "\n" +
                                "Right Hand Finger3: " + bioRightFingers.right_finger_3 + "\n" +
                                "Right Hand Finger4: " + bioRightFingers.right_finger_4 + "\n" +
                                "Right Hand Finger5: " + bioRightFingers.right_finger_5 + "\n";
        } catch(err){
         this.setState({ getDetailsMessage: err.message });
       }
     try {
       let bioLeftFingers = await contract.methods.getBioLeftFingers(web3.utils.fromAscii(this.state.userUIN)).call({ from: accounts[0] });
       this.state.userDetails+="Left Hand Finger1: " + bioLeftFingers.left_finger_1 + "\n" +
                                "Left Hand Finger2: " + bioLeftFingers.left_finger_2 + "\n" +
                                "Left Hand Finger3: " + bioLeftFingers.left_finger_3 + "\n" +
                                "Left Hand Finger4: " + bioLeftFingers.left_finger_4 + "\n" +
                                "Left Hand Finger5: " + bioLeftFingers.left_finger_5 + "\n";
       } catch(err){
        this.setState({ getDetailsMessage: err.message });
      }
    console.log(this.state.userDetails);
    if(this.state.userDetails == ""){
        this.setState({ userDetails: `You are not authorized to access ${this.state.userUIN}'s details.` });
    }
    this.setState({getDetailsButton: false});
  }

  userDetailsDismiss = () => {
    this.setState({ userDetails: "" });
    // this.state.userDetails="";
  }

  submitDismiss = () => {
    this.setState({ errorMessage: "" });
  }

  render(){
      return(
        <Layout activePage="AgencyPortal">
        <h3>Register your Agency</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>
                <label>Agency ID</label>
                <Input style={{ width: "40%" }}
                  value={this.state.agencyID}
                  onChange={event => this.setState({ agencyID: event.target.value})}
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
                <label>Domain</label>
                <Input style={{ width: "40%" }}
                  value={this.state.domain}
                  onChange={event => this.setState({ domain: event.target.value})}
                />
              </Form.Field>
              <Form.Group inline>
                <label>Is allowed access to Name?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedName == 'true'} onChange={(event, {value}) => this.setState({ isAllowedName: value}) } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedName == 'false'} onChange={(event, {value}) => this.setState({ isAllowedName: value}) } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Gender?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedGender == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedGender: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedGender == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedGender: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Date of Birth?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedDOB == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedDOB: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedDOB == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedDOB: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Parent Name?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedParentName == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedParentName: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedParentName == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedParentName: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Address?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedAddress == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedAddress: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedAddress == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedAddress: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Mobile?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedMobile == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedMobile: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedMobile == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedMobile: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Email?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedEmail == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedEmail: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedEmail == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedEmail: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to IrisID?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedBioIRIS == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedBioIRIS: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedBioIRIS == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedBioIRIS: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to FaceID?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedBioFace == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedBioFace: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedBioFace == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedBioFace: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Right Hand Fingers ID?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedBioRightFinger == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedBioRightFinger: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedBioRightFinger == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedBioRightFinger: value})} } />
              </Form.Group>
              <Form.Group inline>
                <label>Is allowed access to Left Hand Fingers ID?</label>
                <Form.Radio label='True' value='true' checked={this.state.isAllowedBioLeftFingers == 'true'} onChange={(event, {value}) => { this.setState({ isAllowedBioLeftFingers: value})} } />
                <Form.Radio label='False' value='false' checked={this.state.isAllowedBioLeftFingers == 'false'} onChange={(event, {value}) => { this.setState({ isAllowedBioLeftFingers: value})} } />
              </Form.Group>

              <Message error header="Oops!" hidden={this.state.errorMessage==""} onDismiss={this.submitDismiss} content={this.state.errorMessage} />
              <Button loading={this.state.submitButton} primary>Register Agency</Button>
            </Form>
          </Grid.Column>

          <Grid.Column width={8}>
          <h4>Get Member Details</h4>
            <Grid.Row>
            <Form onSubmit={this.getUserDetails} error={!!this.state.getDetailsMessage}>
              <Form.Field>
                <label>Enter the UIN of the member</label>
                <Input style={{ width: "40%" }}
                  value={this.state.userUIN}
                  onChange={event => this.setState({ userUIN: event.target.value})}
                   />
                <Button loading={this.state.getDetailsButton} primary>Get Member Details</Button>
              </Form.Field>

            </Form>
            </Grid.Row>
            <Grid.Row>
            <Message info hidden={this.state.userDetails==""} onDismiss={this.userDetailsDismiss} header="Member Details" content={this.state.userDetails} />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </Layout>
      );
  }

}

export default AgencyPortal;
