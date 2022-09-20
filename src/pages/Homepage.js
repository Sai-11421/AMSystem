import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import { firestore } from '../firebase/firebase-utils'

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
        <div className='container'>
            <Card style={{ padding: '40px', minWidth: '700px', minHeight: '400px', marginTop: '-50%' }}>
                {studentData.idnumber}<br />
                {studentData.name}<br />
                {studentData.email}<br /><br />
                <h5 style={{ textDecoration: 'underline', marginBottom: '20px' }}>E4 SEM1 Attendance Statistics</h5>
                Cloud Computing - 84.5%<br />
                Artificial Intelligence - 90%<br />
                Deep Learning - 82%<br/>
                Human Computer Interaction - 76%<br/>
                Soft Skills - 78%
            </Card>
        </div>
    );
};

export default Homepage;