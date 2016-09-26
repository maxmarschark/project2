import React from 'react';
import Like from '../components/like.jsx';
import {Link} from 'react-router';
import Review from '../components/review.jsx';
import ReviewList from './reviewList.jsx';


const Dashboard = () => {

  return (
    <div>
        <Link to="/review" id="LeaveReview">Leave A Review</Link>
        <div>
          {/* <Review
            handlePublish={this.handlePublish}
            handleDelete={this.httpDeleteReview}
          />
          <ReviewList
            handlePublish={this.handlePublish}
            handleDelete={this.httpDeleteReview}
            review={this.state.review}
          /> */}
        </div>
    </div>
  );
}

export default Dashboard;
