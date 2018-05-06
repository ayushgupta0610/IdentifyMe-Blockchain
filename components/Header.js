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
          <Link route="/index">
          <Menu.Item as="a" to='/index' name='republicOfDecentraland' active={activeItem === 'index'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position='right'>
            <Link route="/MemberPortal">
            <Menu.Item as="a" to='/MemberPortal' name='MemberPortal' active={activeItem === 'MemberPortal'} onClick={this.handleItemClick} />
            </Link>
          </Menu.Menu>
          <Menu.Menu>
            <Link route="/AgencyPortal">
            <Menu.Item as="a" to='/AgencyPortal' name='AgencyPortal' active={activeItem === 'AgencyPortal'} onClick={this.handleItemClick} />
            </Link>
          </Menu.Menu>
        </Menu>
     </div>
    )
  }

}
export default Header;
