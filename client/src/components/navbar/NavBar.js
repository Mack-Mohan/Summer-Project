import React, { useContext } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import { UserContext } from "../../App";
function NavBar()
{
<<<<<<< HEAD
    const {login} = JSON.parse(localStorage.getItem('local'));
    
=======
	const { state, dispatch } = useContext(UserContext);
  // console.log(state);
    const isLoggedIn = true;
>>>>>>> b4938244250a6c2a110b742c01c8bd7609ebb9f3
    return (
<>
        {!login?
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
    <Navbar.Brand href="/">
    <img
              alt="logo.png"
              src="logo1.png"
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
      <Nav.Link  href="/signup">SignUp</Nav.Link>
      <Nav.Link  href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>:
  <Navbar style={{height:"80px"}} bg="dark" variant="dark">
    <Navbar.Brand href="#home">ResearchHub</Navbar.Brand>
    <Nav className="ms-auto  nav-item" > 
      <Nav.Link   href="/home">Home</Nav.Link>
      <Nav.Link  href="/profile">Profile</Nav.Link>
      <Nav.Link  href="/login" onClick={()=>{localStorage.setItem('local',JSON.stringify({
        login:false,
        token:""
      }))
      console.log(localStorage.getItem('local'))}}>Logout</Nav.Link>
    </Nav>
  </Navbar>
        }
  
  <br />
 
</>
       
    )
    ;
}
export default NavBar;