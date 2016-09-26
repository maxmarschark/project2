import React from 'react';
import request from 'superagent';
import Review from './review.jsx';
import firebase from '../../firebase.config.js';

  const propTypes = {
    posts: React.PropTypes.array.isRequired,
    handlePublish: React.PropTypes.func,
    handleDelete: React.PropTypes.func,
  };

  class ReviewList extends React.Component {
    constructor() {
      super();
      this.state = {
        authorList: [],
        restList: [],
        reviewList: [],
      }
    }
    componentDidMount() {
      this.reviewRequest();
    }

    reviewRequest() {
      const url = 'https://restaurantreview-ae4cc.firebaseio.com/reviews.json'
      request.get(url).then((reviews) => {
        const listOfReviews = reviews.body;
        let authorList = [];
        let restList = [];
        let reviewList = [];
        if (listOfReviews) {
          authorList = Object.keys(listOfReviews).map((id) => {
            return (
              listOfReviews[id].user
            );
          });
          restList = Object.keys(listOfReviews).map((id) => {
            return (
              listOfReviews[id].restName
            );
          });
          reviewList = Object.keys(listOfReviews).map((id) => {
            return (
              listOfReviews[id].review
            );
          });
        }
        this.setState({ authorList, restList, reviewList });
      })
      console.log(this.state.authorList);
    }
    buildReview() {
      return (
        this.state.authorList.map((author, index) => {
          return (
            <div>
              author: {author}<br />
              Restaraunt: {this.state.restList[index]}<br />
              Review: {this.state.reviewList[index]}
            </div>
          )
        })
      )
    }
    render() {
      return (
        <div className="renderReview">{this.buildReview()}</div>
      )
      // const postElements = this.props.review.map((post, idx) => {
      //   return (
      //     <li key={idx}>
      //       <Review
      //         handleDelete={this.props.handleDelete}
      //         handlePublish={this.props.handlePublish}
      //         content={post.content}
      //         author={post.author}
      //         likeCount={post.likeCount}
      //         id={post.id}
      //       />
      //     </li>
      //   );
      // });
      // return (
      //   <ul>
      //     {reviewElements}
      //   </ul>
      // );
    }
  }

  ReviewList.propTypes = propTypes;

  export default ReviewList;
