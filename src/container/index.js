import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Article from '../components/article';
import Comments from '../components/comments';
import CommentForm from '../components/comment-form';
import Footer from '../components/footer';

import { addComment, editComment, removeComment } from '../actions';

let App = props => {
  const { comments, addComment, editComment, removeComment } = props;

  console.log(comments);

  return (
    <div className="layout">
      <Header />
      <main role="main" className="body">
        <section className="container">
          <Article key="article" comments={comments} />
          <Comments key="comments" comments={comments} removeComment={removeComment} />
          <CommentForm key="commentForm" comments={comments} addComment={addComment} editComment={editComment} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => { return { comments: state } }

const mapDispatchToProps = dispatch => {
  return {
    addComment: (avatar, name, text, isRated) => dispatch(addComment(avatar, name, text, isRated)),
    editComment: (id, avatar, name, text, isRated) => dispatch(editComment(id, avatar, name, text, isRated)),
    removeComment: (id) => dispatch(removeComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;