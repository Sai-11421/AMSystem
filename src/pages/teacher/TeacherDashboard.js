import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase-utils'
import { Tabs, Tab, Form, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const TeacherDashboard = () => {
    const [teacherData, setteacherData] = useState({});
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true)
        let teacherUsername = localStorage.getItem('teacher-username');
        firestore.collection('Teachers').where('username', '==', teacherUsername).get()
            .then((querySnapshot) => {
                querySnapshot.docs.map((doc) => {
                    setteacherData(doc.data())
                    setisLoading(false)
                })
            })
    }, []);



    return (
        <div className='container'>
            <h4 style={{ textAlign: 'center', textTransform: 'uppercase', textDecoration: 'underline', marginBottom: '50px' }}>Record the attendance </h4>
            <center>
                {isLoading && !teacherData.sections ? <Spinner animation='border' role='status' /> : null}
            </center>
            <Tabs
                style={{ marginTop: '10%', float: 'left' }}
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                {teacherData ? teacherData.sections ? teacherData.sections.split(',').map((section) =>
                    <Tab eventKey={section} style={{ padding: '50px' }} title={`Section ${section}`} key={section}>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170232
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170253
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170938
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170251
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170261
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170223
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170242
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170233
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170233
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170233
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170233
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170233
                        </div>
                        <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px' }}>
                            <Form.Check defaultChecked={true} />&nbsp;&nbsp;S170233
                        </div>
                    </Tab>) : null : null}
            </Tabs>
            <Button style={{ float: 'right' }} onClick={() => { alert('Attendance Recorded Successfully'); window.location.reload(true) }} >Submit</Button>
        </div >
    );
};

export default TeacherDashboard;