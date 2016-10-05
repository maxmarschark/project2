import React from 'react';
import {Link} from 'react-router';
import Review from '../components/review.jsx';
import ReviewList from './reviewList.jsx';


const Dashboard = () => {

  return (
    <div>
        <Link to="/login" id="dash-nav">Home</Link>
        <Link to="/review" id="dash-nav">Leave A Review</Link>
        <Link to="/reviewlist" id="dash-nav">View Past Reviews</Link>
    </div>
  );
}

export default Dashboard;
