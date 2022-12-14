import React, { useState, useEffect } from 'react';
import '../styles.css'
import logo from '../../assets/rgukt.png'
import { firestore } from '../../firebase/firebase-utils'


const LoginPage = (props) => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const [students, setstudents] = useState([]);
    const [error, seterror] = useState('');

    useEffect(() => {
        let data = []
        firestore.collection('Students').get()
            .then((querySnapshot) => {
                querySnapshot.docs.map((doc) => {
                    data = [...data, doc.data()]
                    setstudents(data)
                })
            })
    }, []);

    const loginUser = (e) => {
        e.preventDefault()
        let student = students.filter((s) => s.username === username && s.password === password)
        if (student.length !== 0) {
            seterror('')
            props.history.push('/')
            localStorage.setItem('username', username)
            alert('Logged in successfully')
        } else {
            seterror('Invalid username/password')
        }
    }
    return (
        <div>
            <div className="nav">
                <div>
                    <img alt='logo' src={logo} style={{ height: '270px', margin: '150px 400px' }} />
                    <h5 style={{ color: '#000', marginTop: '-100px', marginLeft: '280px' }}><b>ATTENDANCE MANAGEMENT SYSTEM</b></h5>
                </div>
                <div className="main">
                    <p id="sign">Student Sign in</p>
                    <form className="form1">
                        <input className="un" type="text" align="center" placeholder="Username" onChange={(e) => setusername(e.target.value)} />
                        <input className="pass" type="password" align="center" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                        <p style={{ color: 'tomato', fontSize: '16px', textAlign: 'center', marginBottom: '20px' }}>{error}</p>

                        <div className="button">
                            <center>
                                <input type="submit" value="Sign in " onClick={(e) => loginUser(e)} style={{ cursor: 'pointer', marginBottom: '20px' }} />
                                <p style={{ fontSize: 'medium', color: '#000000' }}>Don't have an account? <span onClick={() => { props.history.push('/register') }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Signup</span></p><br />
                                <p style={{ fontSize: 'medium', color: '#000000' }}>Not a student? <span onClick={() => { props.history.push('/teacher-login') }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Login in as teacher</span></p>
                            </center>
                        </div>

                    </form>
                </div >
            </div>
            <div>
            </div >
        </div >
    );
};

export default LoginPage;