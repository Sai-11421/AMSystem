import React from "react";
import './pages/styles.css'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage'
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import TeacherRegistration from "./pages/TeacherRegistration";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./pages/TeacherDashboard"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/teacher-register' component={TeacherRegistration} />
        <Route path='/teacherLogin' component={TeacherLogin} />
        <Route path='/teacher-dashboard' component={TeacherDashboard} />
      </Switch>
    </div>
  );
}

export default App;
