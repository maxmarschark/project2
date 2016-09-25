import React from 'react';
import request from 'superagent';
import like from './like.jsx';
import firebase from '../../firebase.config.js';

const propTypes = {
  content: React.PropTypes.string,
  author: React.PropTypes.string,
  likeCount: React.PropTypes.number,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  id: React.PropTypes.string,
};

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      localRestName: '',
      localReview: '',
    };
    this.handleEditOfAuthor = this.handleEditOfAuthor.bind(this);
    this.handleEditOfContent = this.handleEditOfContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    // this.handleLikeClick = this.handleLikeClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
    this.publishReview = this.publishReview.bind(this);
  }
  componentWillReceiveProps() {
    this.setState({
      localRestName: '',
      localReview: '',
    });
  }
  handleEditOfAuthor(e) {
    const newAuthor = e.target.value;
    this.setState({
      localRestName: newAuthor,
    });
  }
  handleEditOfContent(e) {
    const newContent = e.target.value;
    this.setState({
      localReview: newContent,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      author: this.state.localRestName,
      content: this.state.localReview,
    });
    this.setState({ saved: true });
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  // handleLikeClick() {
  //   let localLikeCount = this.props.likeCount;
  //   localLikeCount += 1;
  //   this.props.handlePublish({
  //     likeCount: localLikeCount,
  //     id: this.props.id,
  //     author: this.state.localRestName,
  //     content: this.state.localReview,
  //   });
  // }
  publishReview() {
    console.log('review is being published');
    const userId = firebase.auth().currentUser.uid;
    const url = 'https://restaurantreview-ae4cc.firebaseio.com/reviews.json';
    request.post(url).send({ user: userId, restName: this.state.localRestName, review: this.state.localReview }).catch((err) => {
      console.log(err);
    });
  }
  isSaved() {
    return this.props.author === this.state.localRestName &&
          this.props.content === this.state.localReview;
  }
  render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
        <div className="active-buttons">
          <button onClick={this.handleDeleteClick}>x</button>
          <LikeButton
            handleLikeClick={this.handleLikeClick}
            likeCount={this.props.likeCount}
          />
        </div>
      );
    }
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'} >
        <div className="reviews" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="author"
            placeholder="Your Restaraunt"
            onChange={this.handleEditOfAuthor}
          />
          <input
            type="text"
            name="content"
            placeholder="Your Review"
            onChange={this.handleEditOfContent}
          />
          <input
            type="submit"
            value="Publish Review"
            className="hidden"
            onClick={this.publishReview}
          />
        </div>
        {activeButtons}
      </div>
    );
  }
}

Review.propTypes = propTypes;

export default Review;
