import React, { useState, useEffect } from 'react';
import { Navbar, Container, Table } from 'react-bootstrap'
import { firestore } from '../../firebase/firebase-utils'
import 'bootstrap/dist/css/bootstrap.min.css'

const Homepage = () => {
    const [studentData, setstudentData] = useState({});

    useEffect(() => {
        let username = localStorage.getItem('username')
        firestore.collection('Students').where('username', '==', username).get()
            .then((querySnapshot) => {
                querySnapshot.docs.map((doc) => {
                    setstudentData(doc.data())
                })
            })
    }, []);

    return (
        <>
            <Navbar fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">Online Attendance Management System</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{ float: 'right' }}>
                        <Navbar.Text >
                            Signed in as: <a href="#login">{studentData.name}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='container' style={{ marginTop: '100px', marginLeft: '60%' }}>
                <center>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Subjects</th>
                                <th>No.of days attended</th>
                                <th>Total No.of working days</th>
                                <th>Attendance Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cloud Computing</td>
                                <td>28</td>
                                <td>40</td>
                                <td>70%</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Human Computer Interaction</td>
                                <td>30</td>
                                <td>35</td>
                                <td>85.71%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Soft Skills</td>
                                <td>15</td>
                                <td>20</td>
                                <td>75%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Artificial Intelligence</td>
                                <td>32</td>
                                <td>40</td>
                                <td>80%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Cloud Computing Lab</td>
                                <td>32</td>
                                <td>40</td>
                                <td>80%</td>
                            </tr>
                        </tbody>
                    </Table>
                </center>
            </div>
        </>
    );
};

export default Homepage;