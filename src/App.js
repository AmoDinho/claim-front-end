import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import './App.css';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"><p>Claim</p></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
        <LinkContainer to="/signup">
        <NavItem >Sigup</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
        <NavItem >Login</NavItem>
        </LinkContainer>

        
       

        </Nav>
      </Navbar.Collapse>
      
      </Navbar>
      <Routes/>
      </div>
    );
  }
}

export default App;
