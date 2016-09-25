import React from 'react';
import Like from '../components/like.jsx';
import {Link} from 'react-router';


const Dashboard = () => {
  return (
    <div>
        <Link to="/review" id="LeaveReview">Leave A Review</Link>
    </div>
  );
}

export default Dashboard;
