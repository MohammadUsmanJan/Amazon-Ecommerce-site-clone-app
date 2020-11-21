import React ,{useState} from 'react'
import './Login.css'
import {Link , useHistory} from "react-router-dom"
import {auth}  from './Firebase'


function Login() {
 
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
  


    const login = event =>{
        event.preventDefault()          // this Stops the refresh
        // do login logic

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
          // logged in , redirect to homepage...
        })
        .catch((e) => alert(e.message))
    }




    const register = event =>{
        event.preventDefault()           // this Stops the refresh
        // do register logic
        
        auth.createUserWithEmailAndPassword(email,password)
        .then(aut => {
          // create a user and logged in , redirect to homepage...
        })
        .catch(e => alert(e.message))
    }





    return (
        <div className = "login">
          <Link to = "/">
            <img className = "login_logo" 
                src = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d825aa26de3150009a4616c%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416"
                alt = " "
            />
          </Link> 

          <div className = "login_container">
              <h1>Sign in</h1>
              <form>
                <h5>Email</h5>
                  <input type = 'email' value = {email} onChange = {event => setEmail(event.target)}/>
                <h5>Password</h5>
                   <input type ="password" value = {password} onChange = {event => setPassword(event.target)}/>
                <button onClick = {login} type = "submit" className = "login_signInButton">Sign In</button>
                <br/>
                <button onClick = {register} type = "submit" className = "login_register">Create your Amazon Account</button>
              </form>
            </div>   
        </div>
    )
}

export default Login
