import React, {Component} from 'react';
import { Card, Button, Form, Input, Message, Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import contract from '../ethereum/MagicIDContract';
import web3 from '../ethereum/web3';

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
    this.setState({getDetailsButton: true, getDetailsMessage: ''});
    try {
      const accounts = await web3.eth.getAccounts();
      const userDetails = {};
      let user = await contract.methods.authID(web3.utils.fromAscii(this.state.userUIN)).call();
    } catch(err){
        this.setState({ getDetailsMessage: err.message });
    }
    this.setState({getDetailsButton: false});
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

              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button loading={this.state.submitButton} primary>Register Agency</Button>
            </Form>
          </Grid.Column>

          <Grid.Column width={8}>
          <h4>Get Member Details</h4>
            <Grid.Row>
            <Form onSubmit={this.getUserDetails} error={!!this.state.getDetailsMessage}>
              <label>Enter the UIN of the member</label>
              <Input style={{ width: "40%" }}
                value={this.state.userUIN}
                onChange={event => this.setState({ time_fence: event.target.value})}
                 />
                <Button loading={this.state.getDetailsButton} primary>Get User Details</Button>
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

export default AgencyPortal;
