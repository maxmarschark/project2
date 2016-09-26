import React from 'react';
import Review from './review.jsx';

const propTypes = {
  posts: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
};

class ReviewList extends React.Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <li key={idx}>
          <Review
            handleDelete={this.props.handleDelete}
            handlePublish={this.props.handlePublish}
            content={post.content}
            author={post.author}
            likeCount={post.likeCount}
            id={post.id}
          />
        </li>
      );
    });
    return (
      <ul>
        {reviewElements}
      </ul>
    );
  }
}

ReviewList.propTypes = propTypes;

export default ReviewList;
