import React, {Component} from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { Link } from '../routes';

class Header extends Component{
  // state = { activeItem: 'index' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render(){
    const activeItem = this.props.activePage;
    return (
     <div>
     <Menu pointing secondary>
          <Link href="/index">
          <Menu.Item name='republicOfDecentraland' active={activeItem === 'index'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position='right'>
            <Link href="/MemberPortal">
            <Menu.Item name='MemberPortal' active={activeItem === 'MemberPortal'} onClick={this.handleItemClick} />
            </Link>
          </Menu.Menu>
          <Menu.Menu>
            <Link href="/AgencyPortal">
            <Menu.Item name='AgencyPortal' active={activeItem === 'AgencyPortal'} onClick={this.handleItemClick} />
            </Link>
         </Menu.Menu>
      </Menu>
     </div>
    )
  }

}
export default Header;
