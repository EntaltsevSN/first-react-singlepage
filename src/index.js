import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Body from './body/body.js';

import './index.css';
import './header/header.css';
import './footer/footer.css';
import './body/body.css';
import './article/article.css';
import './comments/comments.css';
import './comment/comment.css';
import './comment-form/comment-form.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: (localStorage.getItem('comments')) ? JSON.parse(localStorage.getItem('comments')) : [],
      focusComment: {
        name: '',
        text: '',
        isRated: false
      }
    };

    this.action = {
      addNewComment: this.addNewComment.bind(this),
      removeComment: this.removeComment.bind(this),
      editComment: this.editComment.bind(this),
      focusComment: this.focusComment.bind(this)
    }
  }

  addNewComment(comment) {
    let commentsList = this.state.comments;
     
    commentsList.push({
      avatar: comment.newCommentAvatar,
      name: comment.newCommentAuthor,
      text: comment.newCommentText,
      isRated: comment.newCommentRate
    });

    localStorage.setItem('comments', JSON.stringify(commentsList));

    this.setState({ comments: commentsList });
  }

  removeComment(index) {
    let commentsList = this.state.comments;

    for(let i = 0; i < commentsList.length; i++) {
      if(index === i) {
        commentsList.splice(i, 1);
      }
    }

    localStorage.setItem('comments', JSON.stringify(commentsList));

    this.setState({ comments: commentsList });
  }

  editComment(comment, index) {
    let commentsList = this.state.comments;

    for(let i = 0; i < commentsList.length; i++) {      
      if(i === index) {
        commentsList[i].avatar = comment.newCommentAvatar;
        commentsList[i].name = comment.newCommentAuthor;
        commentsList[i].text = comment.newCommentText;
        commentsList[i].isRated = comment.newCommentRate;
      }
    }

    document.querySelector('.btn--edit').classList.toggle('is-visible');   
    document.querySelector('.btn--add').classList.toggle('is-hidden');  
    document.querySelector('.comment-form__title').innerHTML = `Новый комментарий`; 

    localStorage.setItem('comments', JSON.stringify(commentsList));

    this.setState({ comments: commentsList });
  }

  focusComment(comment) {
    let focusComment = this.state.focusComment;

    focusComment.avatar = comment.avatar;
    focusComment.name = comment.name;
    focusComment.text = comment.text;
    focusComment.isRated = comment.isRated;

    this.setState({ focusComment });
  }

  render() {    
    return(
      [
        <Header key="0" />,
        <Body key="1" comments={this.state.comments} focusComment={this.state.focusComment} action={this.action} />,
        <Footer key="2" />
      ]
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);