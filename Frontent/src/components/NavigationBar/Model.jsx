import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Model() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [log, setLog] = useState();
    const history = useNavigate();
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
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ background: '#453f69', border: '0' }}>
                <Modal.Title className='text-white text-center'>Course Hub</Modal.Title>
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
    )
}

export default Model