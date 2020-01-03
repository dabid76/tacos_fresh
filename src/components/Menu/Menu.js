// import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import {withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Header, Icon, Menu, Segment, Sidebar, Button, Dropdown } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
// import './Menu.css'
// import logo from '../images/logo.jpg'

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// class MenuItem extends Component {

//     state = {
//         expanded: false
//     }

//     handleExpand = () => {
//         this.setState({
//             expanded: !this.state.expanded,
//             hidden: false,
//             animation: 'overlay',
//         })
//     }

//   render () {
//     return (
//         <div className="navBack">
//             <div className="sidebar">
//         <Sidebar
//             as={Menu}
//             animation='overlay'
//             icon='labeled'
//             inverted
//             // vertical
//             // visible
//             // width='0px' 
//             onHide={() => this.setState({hidden: false})}
//             vertical
//             visible={this.state.hidden}
//             width='thin' 
//         >
//             <Link to="/home">
//                 <Menu.Item as='a'>
//                     <img src={logo} height='50px' width='50px' position='fixed' />
//                 </Menu.Item>
//             </Link>

//             <Link  to="/about">
//                 <Menu.Item as='a'>
//                         About
//                 </Menu.Item>
//             </Link>

//             <Link  to="/photo">
//                 <Menu.Item as='a'>
//                         Gallary
//                 </Menu.Item>
//             </Link>

//             <Link  to="/private">
//                 <Menu.Item as='a'>
//                         Private Events
//                 </Menu.Item>
//             </Link>

//         </Sidebar>
//                 <div className='fp-panel-main'>
//                     <Sidebar.Pusher dimmed={this.state.hidden}>
//                         <Segment basic textAlign="left">
//                             <Link to="/home">
//                             </Link>
//                         <Button onClick={()=>{this.setState({hidden: true})}}>
//                             <Icon name="sidebar" color='blue'/>
//                         </Button>
//                         </Segment>
//                     </Sidebar.Pusher>
//                 </div>
//         </div>
//         </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

// export default withRouter(connect(mapStateToProps)(MenuItem));
