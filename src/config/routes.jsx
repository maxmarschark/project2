import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';
import Dashboard from '../components/dashboard.jsx';
import Review from '../components/review.jsx';
import ReviewList from '../components/reviewList.jsx';
// import Like from '../components/like.jsx';
import requireAuth from '../utils/auth.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        <Route path="review" component={Review} />
        <Route path="reviewlist" component={ReviewList} />
        {/* <Route path="signout" component={Dashboard} /> */}
        {/* <Route path="like" compenent={Like} /> */}
      </Route>
    </Router>
  );
};

export default Routes;
