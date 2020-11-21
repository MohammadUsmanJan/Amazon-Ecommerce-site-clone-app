import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login.js';
import {StateProvider} from './StateProvider'
import {useStateValue} from './StateProvider'
// import {auth} from './Firebase'

function App() {

  // const [{} , dispatch] = useStateValue();  
  // useEffect >>>> Powerful
  // Piece of code which runs based on given condition
  

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {          // listner which runs every time user changes
  //     if(authUser){
  //       // the user is logged in

  //       dispatch({
  //         type:"SET_USER",
  //         user: authUser
  //       })
  //     }else {
  //       // the user is logged out

  //       dispatch({
  //         type: "SET_USER",
  //         user: null
  //       })
  //     }
  //   })

  //     //Any cleanup operation go here...
  //     unsubscribe();
  //   } , []);
    
  return (
  <StateProvider >
  <Router>
    <div className="app"> 
      <Switch>
        <Route path = "/checkout">
           <Checkout/>
        </Route>
        <Route path = "/login">
          <Login/>
        </Route>
        <Route path = "/">
        <Header/>
        <Home/>

        </Route>
        </Switch>
    </div>
  </Router>
  </StateProvider >
  );
}

export default App;
 