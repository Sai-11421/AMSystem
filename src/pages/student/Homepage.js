import React, { useState, useEffect } from 'react';
import { Card, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { firestore } from '../../firebase/firebase-utils'

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
           
        </>
    );
};

export default Homepage;