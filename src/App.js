import React from "react";
import "react-bulma-components";
import "./App.css";
import "moment-timezone";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/NavMain";
import Index from "./pages/index/Index";

import Profile from "./pages/profile/Profile";
import Register from "./pages/login&register/Register";
import Login from "./pages/login&register/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import CourseInfo from "./pages/courseInfo/CourseInfo";
import CourseContent from "./pages/courseContent/CourseContent";
import UserSettings from "./pages/user_settings/UserSettings";
import Footer from "./components/Footer";
import LessonDisplay from "./pages/lessonDisplay/LessonDisplay";
import Explore from "./pages/explore/Explore";
import UserManagement from "./pages/dashboard/components/UserManagement";
import CourseManagement from "./pages/dashboard/components/CourseManagement";
function App() {
  return (
    <div className="App has-background-white-bis">
      <Navbar />
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/profile/:user/settings" component={UserSettings} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/course-info" component={CourseInfo} />
        <Route path="/course-content" component={CourseContent} />
        <Route path="/lesson" component={LessonDisplay} />
        <Route path="/course" component={Courses} />
        <Route path="/explore" component={Explore} />
        <Route path="/usermanagement" component={UserManagement} />
        <Route path="/coursemanagement" component={CourseManagement} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
