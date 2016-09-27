import React from 'react';
import {Link} from 'react-router';
import Review from '../components/review.jsx';
import ReviewList from './reviewList.jsx';


const Dashboard = () => {

  return (
    <div>
        <Link to="/login" id="Home">Home</Link>
        <Link to="/review" id="LeaveReview">Leave A Review</Link>
        <Link to="/reviewlist" id="ViewReview">View Past Reviews</Link>
    </div>
  );
}

export default Dashboard;
