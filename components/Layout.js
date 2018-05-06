import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

class Layout extends Component {
  constructor(props){
    super(props);
    console.log(this.props.activePage);
  }

  render(){
    return (
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        </Head>
        <Header activePage={this.props.activePage}>
        </Header>
        {this.props.children}
      </Container>
    )
  }
}

export default Layout;
