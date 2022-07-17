import './App.css';
import React, {createContext, useEffect, useReducer, useState} from 'react';
import { BrowserRouter, Navigate, Route ,Routes} from 'react-router-dom';
import SignUp from './components/signuppage/signUP';
import LoginPage from './components/loginPage/loginpage';
import AddPaper from './components/AddPaper';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile.js';
import Player from './components/Player';
import PdfViewer from './components/pdfViewer';
import Grid from './components/Grid';
import axios from "axios";
import { reducer, InitialState } from './reduxer.js';

export const UserContext = createContext();

function App() {
  
	const [ state, dispatch ] = useReducer(reducer, InitialState);
  const [documentList,setDocumentList] = useState([]);

  if(documentList.length==0){
    
      axios.get('/app/getList')
      .then((res)=>{
        setDocumentList(res.data);
        console.log('i am touched')
      })
    
    

  }

  useEffect(()=>{
    fetch('/auth/',{
      method:'get',
      headers:{
        'Content-Type': 'application/json',
        "Authorization":"Bearer " + localStorage.getItem('jwt')
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      if(result.error){
        console.log(result.error)
        // alert(result.error)
      }else{
        dispatch({type:'DATA',payload:result})
        dispatch({type:'LOGGED'})
      }
    }).catch(err=>console.log(err))
  },[])



function handleSubmit(e,user){
    e.preventDefault();
  fetch('/auth/signup',{
    method:'put',
    headers:{
      'Content-Type': 'application/json'
    },body:JSON.stringify({
      name:user.name,email:user.email,pass:user.password,number:user.number
    })
  }).then(res=>res.json())
  .then((result)=>{
    if(result.message){
      alert(result.message)
    }
    else{
      alert(result.error)
    }
    console.log(result)}).catch(err=>{
      alert(err.error)
      console.log(err)})
  console.log(user);
}

function handleLogin(e,user){
  e.preventDefault();
  fetch('/auth/login',{
    method:'put',
    headers:{
      'Content-Type': 'application/json'
    },body:JSON.stringify({
      email:user.email,pass:user.password
    })
  }).then(res=>res.json())
  .then(result=>{if(result.message){
    console.log(result)
    alert(result.message)
  }else{
    alert(result.error)
  }

      localStorage.setItem('jwt',result.token);
  }).catch(err=>{
    alert(err.error)
    console.log(err)})


 

  
}




  return (
    <UserContext.Provider value={{ state, dispatch }}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path="/home" 
      element ={
      <Grid 
        documentList = {documentList}
      />}
      />

<Route exact path="/profile/:email" 
      element ={
      <Profile 
      />}
      />
      <Route exact path="/signup" 
      element ={
      <SignUp 
        handleSubmit = {handleSubmit}
      />
      } />
      <Route exact path="/login" 
      element ={
        <LoginPage handleLogin= {handleLogin}/>
      } />
      <Route exact path="/addpaper" 
            element ={<AddPaper />
            } />
        
<Route exact path="/video/:name" 
      element ={<Player 
        // name= {sadf}
      />
      } />

<Route exact path="/pdf/:name" 
      element ={<PdfViewer 
      />
      } />

      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;