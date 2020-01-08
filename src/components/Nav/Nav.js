import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import logo from '../Nav/logoCopy.png'


// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

import { Header, Icon, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';




const theme = createMuiTheme({
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => 'none',
  },
});

class Nav extends Component {
  
  state = {
  expanded: false
}

handleExpand = () => {
  this.setState({
      expanded: !this.state.expanded,
      hidden: false,
      animation: 'overlay',
  })
}

myFunction = () => {
  console.log('click')
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

render () {
  return (
    <MuiThemeProvider theme={theme}>

  <div className="nav" id="nav">
    <Link to="/home">
    <img src={logo} 
    height='120px' 
    width='190px' 
    position='fixed' />
    </Link>
    <div className="nav-right">
      {/* <ExpansionPanel 
      expanded={this.state.expanded} 
      onChange={this.handleExpand} 
      >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{backgroundColor:'black', color: 'red',}}
                        >
                             Menu 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Table>
                            <TableBody>
                            <TableRow>
                            <Link className="nav-link" to="/food">
                                <TableCell style={{backgroundColor:'black', color: 'red',}}>Dine</TableCell>
                            </Link>
                            </TableRow>                               
                            <TableRow>
                            <Link className="nav-link" to="/drinks">
                                <TableCell style={{backgroundColor:'black', color: 'red',}}>Drinks</TableCell>
                            </Link>
                                </TableRow>
                            <TableRow>
                            <Link className="nav-link" to="/happy">
                                <TableCell style={{backgroundColor:'black', color: 'red',}}>Happy Hours</TableCell>
                            </Link>
                            </TableRow>
                            </TableBody>
                            </Table>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> */}
                 
      {/* <div className="dropdown" id="nav">
        <Link className="nav-link">Menu</Link>
          <div className="dropdown-content">
            <Link className="nav-link" to="/food">Dine</Link>
            <Link className="nav-link" to="/drinks">Drinks</Link>
            <Link className="nav-link" to="/happy">Happy Hours</Link>
            </div>
      </div> */}
      
      
<div className="dropdown" id="dropdown">
<Link className="nav-link-none">
</Link>
<Link className="nav-link">Menu</Link>
<div className="dropdown-content">
<Link className="nav-link" to="/food">Dine</Link>
<Link className="nav-link" to="/drinks">Drinks</Link>
<Link className="nav-link" to="/happy">Happy Hours</Link>
</div>
</div>


      <Link className="nav-link" to="/about">
      About
      </Link>
      <Link className="nav-link" to="/photo">
      Gallery
      </Link>
      <Link className="nav-link" to="/private">
      Private Events
      </Link>
      <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
      <b className="fa fa-bars"></b>
      </a>
    </div>
  </div>
  
  </MuiThemeProvider>

  );
}
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
