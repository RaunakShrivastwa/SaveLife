import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';


function NavBar({ log1 }) {
    const [show, setShow] = useState(false);
    const [log, setLog] = useState();
    const [email, setEmail] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useNavigate();

    useEffect(() => {
        const userDataString = localStorage.getItem('Log');
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setLog(userData)
        } else {
            console.log('User data not found in localStorage');
        }
    }, []);

    const submitData = async () => {
        handleClose()
        try {
            console.log("storage ", log.email);
            console.log("body ", email);
            if (log.email != email) {
                alert("Invalide Email")
            } else {
                localStorage.removeItem('Log');
                await axios.get('http://localhost:8000/user/logout');
                history('/login');
            }
        } catch (err) {
            console.log("There is error ", err);
        }
    }

    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const targetOffset = targetSection.offsetTop;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    };
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow ng fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand title" to="home" onClick={scrollToSection}>Save<span className='text-danger'>Life</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="#"></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled" aria-disabled="true"></Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <Link className='me-5 text-white d-flex justify-content-around align-items-center text-decoration-none ' to="about" onClick={scrollToSection}>About Us</Link>
                            <Link className='me-5 text-white d-flex justify-content-around align-items-center  text-decoration-none ' to='service' onClick={scrollToSection}>Services</Link>
                            <Link className='me-5 text-white d-flex justify-content-around align-items-center  text-decoration-none ' to="blog" onClick={scrollToSection}>Blog</Link>
                            <Link className='me-5 text-white d-flex justify-content-around align-items-center  text-decoration-none ' to='appointment' onClick={scrollToSection}>Appointment</Link>

                            <Link onClick={handleShow} className=' text-decoration-none '>
                                <img title={`Be active ${log1?.name}`} style={{ borderRadius: '50%' }} width='40px' src={log1?.image} alt="" />
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>

            {/* for the Logout Model */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ background: '#453f69', border: '0' }}>
                    <span class='mt-2 logo1'>
                        <span class='p-3'>Save<span class='text-danger'>Life</span></span>
                    </span>
                    <div className='' style={{ height: '100%' }}><p className='text-white'>Thanks {log1?.name} using Our Service ,if
                     You have Any Feedback Post Below</p><small>{log1?.email}</small> </div>
                </Modal.Header>
                <Modal.Body style={{ background: '#2d3668' }}>
                    <Form>
                        <Form.Group className="mb-3 text-white" controlId="exampleForm.ControlInput1" style={{ background: '#2d3668' }}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                style={{ background: '#2d3668', color: 'white' }}
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            style={{ background: '#2d3668', color: 'white' }}
                        >
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control required style={{ background: '#2d3668', color: 'white' }} as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ background: '#453f69', border: '0' }}>
                    <Button className='shadow' style={{ background: '#453f69', border: '0' }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button className='shadow' style={{ background: '#453f69', border: '0' }} onClick={submitData}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavBar