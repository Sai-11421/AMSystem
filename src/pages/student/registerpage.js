import React, { useState } from 'react';
import { firestore } from '../../firebase/firebase-utils'
import '../register.css'

const Registerpage = (props) => {
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [idnumber, setidnumber] = useState('');
    const [password, setpassword] = useState('');
    const [gender, setgender] = useState('');

    const registerUser = (e) => {
        e.preventDefault()
        firestore.collection('Students').doc().set({
            'name': name,
            'username': username,
            'email': email,
            'idnumber': idnumber,
            'password': password,
            'gender': gender
        }).then((res) => {
            alert('Student Registered Successfully')
            props.history.push('/')
        })
            .catch((err) => console.log(err))
    }

    return (
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className="register" style={{ marginLeft: '70%', marginTop:'15%' }}>
                <div className="title"> <u>Student Registration</u></div><br /><br />
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your name" required onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Enter your username" required onChange={(e) => setusername(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your Email" required onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">ID number</span>
                            <input type="text" placeholder="Enter your ID number" required onChange={(e) => setidnumber(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="Enter your Password" required onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" placeholder="Confirm your Password" required />
                        </div>
                    </div><br />
                    <div className="gender-details">
                        <input type="radio" name="Gender" id="dot-1" onChange={(e) => e.target.checked ? setgender('male') : setgender('')} />
                        <input type="radio" name="Gender" id="dot-2" onChange={(e) => e.target.checked ? setgender('female') : setgender('')} />
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label htmlFor="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male<br /><br /></span>
                            </label>
                            <label htmlFor="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female<br /><br /></span>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <center>
                            <input type="submit" value="Register" onClick={(e) => registerUser(e)} style={{ cursor: 'pointer', marginBottom: '20px' }} />
                            <p>Already have an account? <span onClick={() => { props.history.push('/login') }} style={{ cursor: 'pointer', textDecoration: 'underline', marginBottom: '20px' }}>Login</span></p>
                            <p style={{ fontSize: 'medium', color: '#000000' }}>Not a Student? <span onClick={() => { props.history.push('/teacher-register') }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Signup as a teacher</span></p>
                        </center>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default Registerpage;