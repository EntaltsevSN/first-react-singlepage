import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusComment: {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvmzRL7lUOwopGWA9gRnNo2pFvoJ8dHNvn-su1fzko27G7UqM',
        name: '',
        text: '',
        isRated: false
      }
    };
    this.removeComment = this.removeComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  removeComment(e) {
    e.preventDefault();

    this.props.action.removeComment(this.props.index);
  }

  

  editComment(e) {
    e.preventDefault();
  
    let comment = e.target.closest('.comment');
    let commentID = comment.getAttribute('id');
    let focusComment = this.state.focusComment;

    focusComment.avatar = comment.children[0].children[0].getAttribute('src');
    focusComment.name = comment.children[1].children[0].innerHTML;
    focusComment.text = comment.children[1].children[1].innerHTML;
    focusComment.isRated = (comment.children[1].children[2]) ? true : false;
    
    document.querySelector('.btn--edit').setAttribute('id', commentID);
    document.querySelector('.btn--edit').classList.toggle('is-visible');   
    document.querySelector('.btn--add').classList.toggle('is-hidden');
    document.querySelector('.comment-form__title').innerHTML = `Изменить комментарий`;

    this.props.action.focusComment(focusComment);
  }

  render() {
    return (
      <article className="comment" id={this.props.index}>
        <figure className="comment__avatar">
          <img className="comment__image" src={this.props.data.avatar} />
        </figure>
        <section className="comment__body">
          <h4 className="comment__author">{this.props.data.name}</h4>
          <div className="comment__text">{this.props.data.text}</div>
          {this.props.data.isRated
            && <div className="comment__rating">{this.props.data.name} оценил эту статью</div>
          }
        </section>
        <div className="comment__options">
          <a href="#" className="comment__link comment__link--edit" onClick={this.editComment}>
            <i className="fas fa-edit"></i>
          </a>
          <a href="#" className="comment__link" onClick={this.removeComment}>
            <i className="fas fa-trash-alt"></i>
          </a>
        </div>
      </article>
    )
  }
}

export default Comment;