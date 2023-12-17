import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import '../../static/login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginOrSignup() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate();
  const goLogin = async (e) => {
    try {
      // Make a request to your backend to initiate GitHub authentication
      window.location.href = e.target.id;
    } catch (error) {
      console.error('Error initiating GitHub authentication:', error);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password
    };
    try {
      const user = await axios.post('http://localhost:8000/user/login', body);
      console.log("Login User ", user);
      if (user.status === 200) {
        localStorage.setItem('Log', JSON.stringify(user.data));
        history(`/start/${user.data._id}`);
      } else {
        console.log("Login failed");
      }
    } catch (err) {
      const para = document.getElementById('info');
      para.style.display = 'block';
      console.log("there is an error ", err);
    }
  };


  return (
    <MDBContainer className=" py-5 gradient-form overflow-hidden">

      <MDBRow>

        <MDBCol className="mb-5 col-md-6 col-sm-12">
          <div className="">

            <div className="text-center p-2">

              <span class='mt-2 logo1'>
                <span class='p-3'>Save<span class='text-danger'>Life</span></span>
              </span>
              {/* <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
                style={{ width: '100px' }} alt="logo" /> */}
              <h4 className="mt-1 mb-5 pb-1"><img width='20px' src="https://cdn-icons-png.flaticon.com/128/12503/12503107.png" alt="" /><span>Welcome, to Save<span className='text-danger'>Life</span> </span></h4>
            </div>

            <p>Please login to your account</p>
            <form onSubmit={(e) => { handleLogin(e) }}>
              <p id='info' style={{ width: '100%', display: 'none' }} className='text-center text-danger'><strong>Invalide Credential</strong></p>
              <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => { setEmail(e.target.value) }} label='Email address' id='form1' type='email' />
              <MDBInput wrapperClass='mb-3' value={password} onChange={(e) => { setPassword(e.target.value) }} label='Password' id='form2' type='password' />
              <div className="text-center pt-1 mb-3 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>
            </form>
            <div className='d-flex justify-content-around align-items-center mb-4'>
              {/* for the google */}
              <img className='' id='http://localhost:8000/user/auth/google' onClick={(e) => { goLogin(e) }} width='30px' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />

              {/* for the github */}

              <img className='' id='http://localhost:8000/user/auth/github' onClick={(e) => { goLogin(e) }} width='30px' src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt="" />


              {/* for the linked */}
              <img className='' width='30px' src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" />

              {/* for the facebook */}
              <img className='' width='30px' src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" />

              {/* for the Leetcode */}
              <img className='' width='30px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTExIiB2aWV3Qm94PSIwIDAgOTUgMTExIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLWZ1bGwgdy1hdXRvIG1heC13LW5vbmUiPjxwYXRoIGQ9Ik02OC4wMDYzIDgzLjA2NjRDNzAuNSA4MC41NzY0IDc0LjUzNjYgODAuNTgyOSA3Ny4wMjIzIDgzLjA4MDlDNzkuNTA4IDg1LjU3OSA3OS41MDE1IDg5LjYyMjYgNzcuMDA3OCA5Mi4xMTI3TDY1LjkzNDYgMTAzLjE3QzU1LjcxODcgMTEzLjM3MSAzOS4wNiAxMTMuNTE5IDI4LjY3MTggMTAzLjUxM0MyOC42MTE3IDEwMy40NTYgMjMuOTg2MSA5OC45MjAxIDguNzI2NTMgODMuOTU3Qy0xLjQyNTI4IDc0LjAwMjkgLTIuNDM2NjUgNTguMDc0OSA3LjExNjQ4IDQ3Ljg0NjRMMjQuOTI4MiAyOC43NzQ1QzM0LjQwOTUgMTguNjIxOSA1MS44ODcgMTcuNTEyMiA2Mi43Mjc1IDI2LjI3ODlMNzguOTA0OCAzOS4zNjJDODEuNjQ0NCA0MS41Nzc2IDgyLjA3MjMgNDUuNTk4NSA3OS44NjA2IDQ4LjM0MjlDNzcuNjQ4OCA1MS4wODczIDczLjYzNSA1MS41MTU5IDcwLjg5NTQgNDkuMzAwM0w1NC43MTgyIDM2LjIxNzNDNDkuMDQ4OCAzMS42MzI1IDM5LjEzMTQgMzIuMjYyMiAzNC4yMzk0IDM3LjUwMDZMMTYuNDI3NCA1Ni41NzI3QzExLjc3NjcgNjEuNTUyMiAxMi4yODYxIDY5LjU3NCAxNy42NDU2IDc0LjgyOTJDMjguODUxIDg1LjgxNjkgMzcuNDg2OSA5NC4yODQ2IDM3LjQ5NjkgOTQuMjk0MkM0Mi44OTc3IDk5LjQ5NiA1MS42MzA0IDk5LjQxODQgNTYuOTMzMSA5NC4xMjM0TDY4LjAwNjMgODMuMDY2NFoiIGZpbGw9IiNGRkExMTYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQxLjEwNjcgNzIuMDAxNEMzNy41ODU4IDcyLjAwMTQgMzQuNzMxNCA2OS4xNDIxIDM0LjczMTQgNjUuNjE1QzM0LjczMTQgNjIuMDg3OSAzNy41ODU4IDU5LjIyODYgNDEuMTA2NyA1OS4yMjg2SDg4LjEyNDVDOTEuNjQ1NCA1OS4yMjg2IDk0LjQ5OTcgNjIuMDg3OSA5NC40OTk3IDY1LjYxNUM5NC40OTk3IDY5LjE0MjEgOTEuNjQ1NCA3Mi4wMDE0IDg4LjEyNDUgNzIuMDAxNEg0MS4xMDY3WiIgZmlsbD0iI0IzQjNCMyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDkuOTExOCAyLjAyMzM1QzUyLjMxNzMgLTAuNTUyMzIgNTYuMzUxNyAtMC42ODY4OTQgNTguOTIyOCAxLjcyMjc3QzYxLjQ5NCA0LjEzMjQ0IDYxLjYyODQgOC4xNzM4NSA1OS4yMjI5IDEwLjc0OTVMMTYuNDI3NiA1Ni41NzI5QzExLjc3NjggNjEuNTUyIDEyLjI4NjEgNjkuNTczOCAxNy42NDUzIDc0LjgyOTJMMzcuNDA4OCA5NC4yMDkxQzM5LjkyNDkgOTYuNjc2NCAzOS45NjggMTAwLjcyIDM3LjUwNSAxMDMuMjRDMzUuMDQyIDEwNS43NjEgMzEuMDA1NiAxMDUuODA0IDI4LjQ4OTUgMTAzLjMzN0w4LjcyNTkzIDgzLjk1NjdDLTEuNDI1MjkgNzQuMDAyMSAtMi40MzY2NSA1OC4wNzQxIDcuMTE2OSA0Ny44NDYzTDQ5LjkxMTggMi4wMjMzNVoiIGZpbGw9ImJsYWNrIi8+PC9zdmc+" alt="" />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>

              <Link className='' to='/signUP'>
                <MDBBtn outline className='mx-2' color='danger'>
                  Sign Up
                </MDBBtn>
              </Link>

            </div>

          </div>

        </MDBCol>

        <MDBCol className="mb-5 col-sm-12 col-md-6 d-none d-sm-block">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 rounded">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a Faimly</h4>
              <p class="small mb-0">Welcome to Our Health App tailored for seniors, offering personalized routines for exercise, medication reminders, and dietary guidance to fit your lifestyle.

                Effortlessly track daily activities, monitor vital health metrics, and receive insightful feedback to stay motivated toward your health goals.

                Never miss a dose with intuitive medication reminders, while accessing nutrition advice curated for senior wellness, promoting a balanced diet.

                Engage with articles, expert insights, and educational resources, empowering informed decisions about your health.

                The user-friendly interface ensures easy navigation and accessibility, making it inclusive for all users.

                Connect with a vibrant community, sharing experiences, tips, and motivation to support a healthier lifestyle.

                Experience a holistic approach to senior health, integrating routines seamlessly into daily life for long-term well-being.

                Benefit from expert insights and ongoing support on your wellness journey.

                Join a thriving community, share experiences, and find motivation to achieve your health goals.

                Embrace a healthier tomorrow—download Our Health App today and start your journey toward a vibrant life
              </p>

            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginOrSignup;