import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Blog from './components/Blog/Blog';
import Appointment from './components/Appointment/Appointment';
import LoginOrSignup from './components/Login/LoginOrSignup';
import signUp from './components/Login/SignUp'

import NavBar from './components/NavigationBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const [log, setLog] = useState();
  useEffect(() => {
    const userDataString = localStorage.getItem('Log');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setLog(userData)
    } else {
      console.log('User data not found in localStorage');
    }
  }, []);
  return (
   <>
      <Router>
        <NavBar log1={log}/>
        <Routes>          
           <Route
            path="/"
            element={
              log ? (
                <Navigate to={`/start/${log?._id}`} />
              ) : (
                <LoginOrSignup />
              )
            }
          />
           {/* <Route  exact path='/home' Component={Home}/> */}
           <Route exact path='/start/:user' Component={Home} />
           <Route exact path='/about' Component={About} />
           <Route exact path='/service' Component={Service} />
           <Route exact path='/blog' Component={Blog} />
           <Route exact path='/ment' Component={Appointment} />
           <Route exact path='/signup' Component={signUp} />
           <Route exact path='/login' Component={LoginOrSignup} />
           <Route exact path='/footer' Component={Footer} />
           

        </Routes>
      </Router>
   
   </>
  )
}

export default App