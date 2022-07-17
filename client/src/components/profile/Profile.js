import React, { useState } from "react";
import './profileCss.css';
import image from "./logo1.png"
import {useParams} from 'react-router-dom';
import Grid from "../Grid";
import axios from "axios";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
function Profile(props) {
  const params = useParams();
  const [user,setUser] = useState([]);

  if(user.length === 0){
    axios.post('/app/getUser',{"email":params.email})
    .then((res)=>{
      setUser(res.data);
      // console.log(res.data)
    })
  }
  const first = user[0] 

  


  return (user.length&&
    <div >
    <div className="profilecard" style={{"marginBottom":"50px"}}>
      <div className="top">
        <h2 className="name">{first.name}</h2>
        <img className="circle-img" src={image} alt="logo.png" />
      </div>
      <div className="bottom">
        <p className="info">
        <EmailIcon/>{` `}
        {first.email}</p>
        <p className="info">
        <CallIcon/>{` `}{first.mobileNum}</p>
      </div>
    </div><div style={{"width":"50rem","height":"2rem","margin":"auto"}}>
    <Grid documentList = {user}/></div>
    </div>
  );
}

export default Profile;
