import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase-utils'
import { Tabs, Tab, Form, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import AttendanceModal from './AttendanceModal';

const TeacherDashboard = (props) => {
    const [showModal, setshowModal] = useState(false);
    const [teacherData, setteacherData] = useState({});
    const [isLoading, setisLoading] = useState(false);
    const [students, setstudents] = useState(['S170232', 'S170253', 'S170233', 'S170242', 'S170223', 'S170938', 'S171086', 'S171038', 'S170148', 'S170002', 'S171115']);

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

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;


    return (
        <>
            <div style={{ display: 'flex', marginBottom: '50px', marginTop: '20px', marginLeft: '120%', width: '100%', justifyContent: 'space-between' }}>
                <h5 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Record the attendance ({today})</h5>
                <Button style={{ fontSize: '12px' }} variant="outline-warning" onClick={() => props.history.push('/modify-attendance')}>Modify Attendance</Button>
            </div>
            <div className='container' style={{ marginLeft: '120%', marginTop: '10%', width: '100%' }}>

                <center>
                    {isLoading && !teacherData.sections ? <Spinner animation='border' role='status' /> : null}
                </center>
                <Tabs
                    style={{ marginTop: '20px', float: 'left' }}
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    {teacherData ? teacherData.sections ? teacherData.sections.split(',').map((section) =>
                        <Tab eventKey={section} style={{ padding: '50px' }} title={`Section ${section}`} key={section}>
                            {students.map((student) => <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '-40px', justifyContent: 'space-between' }}>
                                <Form.Check defaultChecked={true} label={student} />&nbsp;&nbsp;
                                <Button variant="outline-light" style={{ float: 'right', fontSize: 'small' }} onClick={() => setshowModal(true)}>View attendance</Button>
                            </div>)}
                        </Tab>) : null : null}
                </Tabs>
                <Button style={{ float: 'right', marginTop: '-10%', padding: '10px 20px', borderRadius: '20px' }} onClick={() => { alert('Attendance Recorded Successfully'); window.location.reload(true) }} >Submit</Button>
                <AttendanceModal show={showModal} setshow={setshowModal} />
            </div >
        </>
    );
};

export default TeacherDashboard;