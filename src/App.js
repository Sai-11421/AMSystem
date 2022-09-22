import React from "react";
import './pages/styles.css'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/student/Homepage'
import LoginPage from "./pages/student/loginpage";
import RegisterPage from "./pages/student/registerpage";
import TeacherRegistration from "./pages/teacher/TeacherRegistration";
import TeacherLogin from "./pages/teacher/TeacherLogin";
import TeacherDashboard from "./pages/teacher/TeacherDashboard"
import ModifyAttendance from "./pages/teacher/ModifyAttendance"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/teacher-register' component={TeacherRegistration} />
        <Route path='/teacher-login' component={TeacherLogin} />
        <Route path='/teacher-dashboard' component={TeacherDashboard} />
        <Route path='/modify-attendance' component={ModifyAttendance}/>
      </Switch>
    </div>
  );
}

export default App;
