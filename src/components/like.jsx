import React from 'react';

const propTypes = {
  likeCount: React.PropTypes.number,
  handleLikeClick: React.PropTypes.func,
};

class Like extends React.Component {
  render() {
    return (
      <div className="like-button">
        <p>{this.props.likeCount}</p>
        <button onClick={this.props.handleLikeClick} >Like</button>
      </div>
    );
  }
}

Like.propTypes = propTypes;

export default Like;
