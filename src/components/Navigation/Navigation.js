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

  // TODO: Fix sidebar toggle on link click
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const user = this.context;

    return (
      <header>
        <Navbar color="faded" id="header" expand="md" light>
          <RRNavLink to={CONSTANTS.LANDING}>
            <img className="logo-img" src="shambhala sun.png" alt="" />
          </RRNavLink>
          <NavbarBrand>b a l a n c e</NavbarBrand>
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
                  tag={RRNavLink}
                >
                  Sessions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to={CONSTANTS.RESOURCES}
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
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
                <NavItem>
                  <NavLink
                    to={CONSTANTS.LANDING}
                    className="menuTile"
                    onClick={this.props.firebase.doSignOut}
                    activeClassName="active"
                    tag={RRNavLink}>
                    Sign Out</NavLink>
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withFirebase(Navigation);
