import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import contract from '../ethereum/MagicIDContract';

class Home extends Component{

  render(){
      return(
        <Layout>
        <Link route="/registerIdentity"><a>
          <Button  basic color='teal'>Register your identity</Button>
        </a></Link>
        <Link route="/registerAgency"><a>
        <Button basic color='red'>Register as agency</Button>
        </a></Link>
        <Link route="/memberPortal"><a>
        <Button basic color='blue'>Enter user portal</Button>
        </a></Link>
        <Link route="/agencyPortal"><a>
        <Button basic color='yellow'>Enter agency portal</Button>
        </a></Link>
        </Layout>
      );
  }

}

export default Home;
