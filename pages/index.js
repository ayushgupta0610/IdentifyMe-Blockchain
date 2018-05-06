import React, {Component} from 'react';
import { Form, Message, Input, Card, Button, Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import contract from '../ethereum/MagicIDContract';
import web3 from '../ethereum/web3';

class Home extends Component{

  state = {
      agencyID: '',
      isActive: 'true',
      setAccessMessage: '',
      setAccessButton: false
    }

  static async getInitialProps() {
    const memberCount = await contract.methods.getMemberCount().call();
    const agencyCount = await contract.methods.getAgencyCount().call();
    const allMemberID = await Promise.all(
      Array(parseInt(memberCount)).fill()
      .map(
        (element, index) => {
          return contract.methods.uinArray(index).call();
        })
      );
    const allAgencyID = await Promise.all(
      Array(parseInt(agencyCount)).fill()
      .map(
        (element, index) => {
          return contract.methods.AccessAgencyArray(index).call();
        })
      );
    return { allMemberID, allAgencyID };
  }

  renderMemberID(){
    const items = this.props.allMemberID.map(uin => {
      return {
        header: uin,
        style: { overflowWrap: 'break-word', border: '1px dashed blue' }
      };
    });

    return <Card.Group items={items} />;
  }

  renderAgencyID(){
    const items = this.props.allAgencyID.map(agencyID => {
      return {
        header: agencyID,
        style: { overflowWrap: 'break-word', border: '1px dashed green' }
      };
    });
    return <Card.Group items={items} />;
  }

  setAccess = async (event) => {
    event.preventDefault();
    this.setState({setAccessButton: true, setAccessMessage: ''});

    try {
        debugger;
       const accounts = await web3.eth.getAccounts();
       await contract.methods.setAgencyAccess(web3.utils.fromAscii(this.state.agencyID), Boolean(this.state.isActive)).send({ from: accounts[0] });
    } catch (err) {
        this.setState({setAccessMessage: err.message});
    }
    this.setState({setAccessButton: false, agencyID: '', isActive: 'true' });
  }

  render(){
      return(
        <Layout activePage="index">
        <h3> Set Agency Active </h3>
        <Form onSubmit={this.setAccess} error={!!this.state.setAccessMessage}>
          <Form.Group inline>
            <label>Set access to agency</label>
            <Input style={{ width: "20%" }}
              value={this.state.agencyID}
              onChange={event => this.setState({ agencyID: event.target.value})}
             />
             <label style={{marginLeft:'10px'}}>Set(true) or Withdraw(false) Access</label>
             <Form.Radio label='True' value='true' checked={this.state.isActive == 'true'} onChange={(event, {value}) => { this.setState({ isActive: value})} } />
             <Form.Radio label='False' value='false' checked={this.state.isActive == 'false'} onChange={(event, {value}) => { this.setState({ isActive: value})} } />
          </Form.Group>
          <Button loading={this.state.setAccessButton} primary>Set Access</Button>
          <Message error header="Oops!" content={this.state.setAccessMessage} />
          <br/> <br/>
        </Form>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h3> Member IDs</h3>
              <div>
                {this.renderMemberID()}
              </div>
            </Grid.Column>

            <Grid.Column width={8}>
              <h3> Agency IDs</h3>
              <div>
                {this.renderAgencyID()}
              </div>
            </Grid.Column>
          </Grid.Row>

        </Grid>
        </Layout>
      );
  }

}

export default Home;
