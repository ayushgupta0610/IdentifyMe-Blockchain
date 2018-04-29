import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Layout } from '../components/Layout';
import { Link } from '../routes';
import contract from '../ethereum/MagicIDContract';


// Work under progress. This might/will break the UI.
class RegisterIdentity extends Component{

  state = {
      loading: '',
      errorMessage: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({loading: true, errorMessage: ''});

    try {
       const accounts = await web3.eth.getAccounts();

       await contract.methods.createMagicID(description, web3.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });
       Router.pushRoute(`/index`);
    } catch (err) {
        this.setState({errorMessage: err.message});
    }
    this.setState({loading:false});
  }

  render(){
      return(
        <div>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={this.state.uin}
            onChange={event => this.setState({ uin: event.target.value})}
           />
        </Form.Field>
        <Form.Field>
          <label>Value in Ether (Should not be more than the amount contributed by the investors)</label>
          <Input
          value={this.state.value}
          onChange={event => this.setState({ name: event.target.value})}
           />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            value={this.state.recipient}
            onChange={event => this.setState({ recipient: event.target.value})}
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Create!</Button>
      </Form>
        </div>
      );
  }

}

export default RegisterIdentity;
