import React, { useContext } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import image from "../../logo1.png"
import { UserContext } from "../../App";
function NavBar()
{
	const { state, dispatch } = useContext(UserContext);
    const isLoggedIn = state.loggedIn;
    const user = state.user;
    return (
<>
        {isLoggedIn?
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
    <Navbar.Brand href="/">
    <img
              alt="logo.png"
              src={image}
              width="65"
              height="65"
              border-radius="50%"
              style={{"margin":"7px 10px 7px 10px", "borderRadius":"50%" }}
              className="brands"

            />
    <span style={{"color":"#FCF8E8", "backgroundColor":"#1E212D"}}>Research</span>
     <span style={{"color":"black", "backgroundColor":"#FCF8E8"}}>Hub</span>
    </Navbar.Brand>
    <Nav className="ms-auto nav-item" > 
    
      <Nav.Link   href="/home">Home</Nav.Link>
      <Nav.Link  href="/addpaper">AddPaper</Nav.Link>
      <Nav.Link  href={`/profile/${user.email}`}>Profile</Nav.Link>
      <Nav.Link  href="/home" onClick={()=>{
        localStorage.clear()
        dispatch({type:"LOGGED"})}}>LogOut</Nav.Link>
    </Nav>
  </Navbar>:
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
  <Navbar.Brand href="/">
    <img
              alt="logo.png"
              src={image}
              width="65"
              height="65"
              border-radius="50%"
              style={{"margin":"7px 10px 7px 10px", "borderRadius":"50%" }}
              className="brands"

            />
    <span style={{"color":"#FCF8E8", "backgroundColor":"#1E212D"}}>Research</span>
     <span style={{"color":"black", "backgroundColor":"#FCF8E8"}}>Hub</span>
    </Navbar.Brand>
    <Nav className="ms-auto  nav-item" > 
      <Nav.Link   href="/home">Home</Nav.Link>
      <Nav.Link  href="/signup">SignUp</Nav.Link>
      <Nav.Link  href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>
        }
  
  <br />
 
</>
       
    )
    ;
}
export default NavBar;