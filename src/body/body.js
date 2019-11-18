import React from 'react';
import Article from '../article/article.js';
import Comments from '../comments/comments.js';
import CommentForm from '../comment-form/comment-form.js';

class Body extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <main role="main" className="body">
        <section className="container">
          <Article comments={this.props.comments} />
          <Comments comments={this.props.comments} action={this.props.action} />
          <CommentForm focusComment={this.props.focusComment} action={this.props.action} />
        </section>
      </main>
    );
  }
}

export default Body;