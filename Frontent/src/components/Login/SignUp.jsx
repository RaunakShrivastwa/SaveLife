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
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cPassword, setCPassword] = useState();

    const goLogin = async (e) => {
        try {
            // Make a request to your Node.js backend endpoint for GitHub authentication
            const response = await axios.get(e.target.id);
            if (response && response.data && response.data.authenticationURL) {
                // Redirect the user to the GitHub authentication page
                window.location.href = 'http://localhost:8000/user/auth/github/callback';
            }
        } catch (error) {
            console.error('Error authenticating with GitHub:', error);
        }
    }

    const handleData = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            email: email,
            password: password,
            cPassword: cPassword,
            image: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
        }
        const User = await axios.post(`http://localhost:8000/user/add`, body)
    }
    return (
        <MDBContainer className=" py-5 gradient-form overflow-hidden">

            <MDBRow>

                <MDBCol className="mb-5 col-md-6 col-sm-12">
                    <div className="">

                        <div className="text-center">
                            <span class='mt-2 logo1'>
                                <span class='p-3'>Save<span class='text-danger'>Life</span></span>
                            </span>
                            <h4 className="mt-1 mb-3 pb-1"><img width='20px' src="https://cdn-icons-png.flaticon.com/128/12503/12503107.png" alt="" /><span>Join With Us</span></h4>
                        </div>

                        <p>Lets Add Account/Register</p>

                        <form onSubmit={(e) => { handleData(e) }}>
                            <MDBInput wrapperClass='mb-2' value={name} onChange={(e) => { setName(e.target.value) }} label='User Name' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-2' value={email} onChange={(e) => { setEmail(e.target.value) }} label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-2' value={password} onChange={(e) => { setPassword(e.target.value) }} label='Password' id='form2' type='password' />
                            <MDBInput wrapperClass='mb-2' value={cPassword} onChange={(e) => { setCPassword(e.target.value) }} label='Conform Password' id='form1' type='password' />
                            <div className="text-center pt-1 mb-3 pb-1">
                                <MDBBtn className="mb-1 w-100 gradient-custom-2">Sign in</MDBBtn>
                            </div>
                        </form>
                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">I have an account?</p>

                            <Link className='' to='/login'>
                                <MDBBtn outline className='mx-2' color='danger'>
                                    Sign In
                                </MDBBtn>
                            </Link>

                        </div>

                    </div>

                </MDBCol>

                <MDBCol className="mb-5 col-sm-12 col-md-6 d-none d-sm-block">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 rounded">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Course HUB is your one-stop platform for mastering web development skills and securing a rewarding career in IT. Our
                                diverse range of courses, from foundational HTML/CSS to advanced frameworks, ensures a holistic learning experience. With affordable and free
                                options available, we prioritize accessibility without compromising quality. Join us to kickstart your journey towards becoming a proficient web
                                developer and seizing lucrative job opportunities in the tech industry. Don't just learn; launch your IT career with Course HUB today

                            </p>

                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default SignUp