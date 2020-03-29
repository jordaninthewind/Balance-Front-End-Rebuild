import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { withFirebase } from '../Firebase';
import "./Navigation.scss";
import * as CONSTANTS from '../../constants/routes';
import { AuthUserContext } from '../FirebaseSession/';

const INITIAL_STATE = { isOpen: false };

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  static contextType = AuthUserContext;

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const user = this.context;
    console.log(this.props)
    return (
      <div>
        <Navbar color="faded" id="header" expand="md" light>
          <RRNavLink to={CONSTANTS.LANDING}>
            <img className="logo-img" src="shambhala sun.png" alt="" />
          </RRNavLink>
          <NavbarBrand>B a l a n c e</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  to={CONSTANTS.TIMER}
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
                >
                  Timer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={CONSTANTS.MEDITATION_SESSIONS}
                  className="menuTile"
                  activeClassName="active"
                  onClick={this.toggle}
                >
                  Sessions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={CONSTANTS.RESOURCES}
                  className="menuTile"
                  activeClassName="active"
                  onClick={this.toggle}
                >
                  Resources
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={CONSTANTS.LANDING}
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
                >
                  Profile
                </NavLink>
              </NavItem>
              {user &&
                <NavItem
                  onClick={this.props.firebase.doSignOut}
                  to={CONSTANTS.LANDING}
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
                >
                  <NavLink>Sign Out</NavLink>
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withFirebase(Navigation);
