import React from 'react';
import Like from '../components/like.jsx';
import {Link} from 'react-router';


const Dashboard = () => {
  return (
    <div>
        <h1>Restaurant Review</h1>
        <Link to="/review">Leave A Review</Link>
    </div>
  );
}

export default Dashboard;
