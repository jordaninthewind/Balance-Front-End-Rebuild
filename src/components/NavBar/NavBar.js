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
import "./NavBar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" id="header" expand="md" light>
          <RRNavLink to="/">
            <img className="logo-img" src="shambhala sun.png" alt="" />
          </RRNavLink>
          <NavbarBrand>B a l a n c e</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink
                  to="/timer"
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
                  onClick={this.toggle}
                >
                  Timer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/meditation_sessions"
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
                  onClick={this.toggle}
                >
                  Sessions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/resources"
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
                  onClick={this.toggle}
                >
                  Resources
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/"
                  className="menuTile"
                  activeClassName="active"
                  tag={RRNavLink}
                  onClick={this.toggle}
                >
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
