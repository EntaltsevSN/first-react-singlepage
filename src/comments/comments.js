import React from 'react';
import Comment from '../comment/comment.js';

class Comments extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {   
    return (
      <section className="comments">
        <h3 className="comments__title">Комментарии</h3>
        <section className="comments__list">{
          (this.props.comments.length > 0)
            ? this.props.comments.map((comment, id) => <Comment key={id} index={id} data={comment} action={this.props.action} comments={this.props.comments} />) : <p>К этой статье ещё не оставляли комментарии</p>
        }</section>
      </section>
    )
  }
}

export default Comments;