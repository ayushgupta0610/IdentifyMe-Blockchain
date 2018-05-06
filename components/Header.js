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
        <Menu style={{marginTop: '10px'}}>
        <Link route="/"><a className="item">Republic Of Decentraland</a></Link>

        <Menu.Menu position="right">
          <Link route="/MemberPortal">
            <a className="item">Member Portal</a>
          </Link>

          <Link route="/AgencyPortal">
          <a className="item">Agency Portal</a>
          </Link>
        </Menu.Menu>
      </Menu>
     </div>
    )
  }

}
export default Header;
