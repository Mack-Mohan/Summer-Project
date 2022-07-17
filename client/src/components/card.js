import React,{useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";
import image from "../logo.png"
import image1 from "../logo1.png"
function ProfileCard(props){
    const document = props.document;
return(
  <div style={{"height":"20px"}}>
<Card style={{"textAlign":"center"}} border="dark" >
<Card.Header style={{ "textAlign":"left"}}>
<p ><Card.Img src={image} style={{"width":"3rem", "textAlign":"left"}} />
   <Link to= {`/profile/${document.email}`} style={{"marginRight":"50px","textDecoration":"none"}}  >
   {document.name}
        </Link> 
    </p>
</Card.Header>
<Card.Img variant="top" src={image1} alt="image" className="mx-auto mt-4"  style={{"width":"15rem" , "borderRadius":"50%"} } />
<Card.Body>
  <h2 className='display-2 bold'>{document.title}</h2>
  <Card.Text className='display-6'>
   {document.description}  
  </Card.Text>
  <hr/>
  <Link to= {`/video/${document.video}`} style={{"marginRight":"50px"}} className="btn btn-lg btn-dark ml-auto">View video</Link>
  <Link to= {`/pdf/${document.pdf}`} style={{"marginLight":"50px"}} className="btn btn-lg btn-dark">View the paper</Link>
</Card.Body>
</Card></div>
    )};

    export default ProfileCard;