import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newCommentAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvmzRL7lUOwopGWA9gRnNo2pFvoJ8dHNvn-su1fzko27G7UqM&s',
      newCommentAuthor: '',
      newCommentText: '',
      newCommentRate: false
    }

    this.addNewComment = this.addNewComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }

  addNewComment(e) {
    e.preventDefault();

    let newComment = this.state;

    this.props.action.addNewComment(newComment);

    this.setState({ 
      newComment,
      newCommentAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvmzRL7lUOwopGWA9gRnNo2pFvoJ8dHNvn-su1fzko27G7UqM&s',
      newCommentAuthor: '',
      newCommentText: '',
      newCommentRate: false
    });
  }

  editComment(e) {
    e.preventDefault();

    let comment = this.state;
    let id = Number(e.target.getAttribute('id'));

    this.props.action.editComment(comment, id);

    this.setState({
      newCommentAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvmzRL7lUOwopGWA9gRnNo2pFvoJ8dHNvn-su1fzko27G7UqM&s',
      newCommentAuthor: '',
      newCommentText: '',
      newCommentRate: false
    })
  }

  componentWillReceiveProps () {
    let focusComment = this.state;

    focusComment.newCommentAvatar = this.props.focusComment.avatar;
    focusComment.newCommentAuthor = this.props.focusComment.name;
    focusComment.newCommentText = this.props.focusComment.text;
    focusComment.newCommentRate = this.props.focusComment.isRated;

    this.setState({ focusComment });
  }

  render() {
    console.log(this.state.newCommentAvatar);
    return (
      <form className="comment-form" onSubmit={this.addNewComment}>
        <h3 className="comment-form__title">Новый комментарий</h3>
        <div className="comment-form__group">
          <label className="comment-form__label">Выберите аватар:</label>
          <ul className="comment-form__list">
            <li className="comment-form__item">
              <input 
                type="radio" 
                className="comment-form__radio" 
                id="avatar1" 
                name="avatar" 
                onChange={e => this.setState({ newCommentAvatar: e.target.parentNode.children[1].children[0].getAttribute('src') })}
              />
              <label className="comment-form__label comment-form__label--avatar" htmlFor="avatar1"
              >
                <img className="comment-form__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvmzRL7lUOwopGWA9gRnNo2pFvoJ8dHNvn-su1fzko27G7UqM" />
              </label>
            </li>
            <li className="comment-form__item">
              <input 
                type="radio" 
                className="comment-form__radio" 
                id="avatar2" 
                name="avatar" 
                onChange={e => this.setState({ newCommentAvatar: e.target.parentNode.children[1].children[0].getAttribute('src') })}
              />
              <label className="comment-form__label comment-form__label--avatar" htmlFor="avatar2"
              >
                <img className="comment-form__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZdDOMdIklNwhwywjfIW61tCNxMRoa7xaAT32J07blsh0ZXzE" />
              </label>
            </li>
            <li className="comment-form__item">
              <input 
                type="radio" 
                className="comment-form__radio" 
                id="avatar3" 
                name="avatar" 
                onChange={e => this.setState({ newCommentAvatar: e.target.parentNode.children[1].children[0].getAttribute('src') })}
              />
              <label className="comment-form__label comment-form__label--avatar" htmlFor="avatar3"
              >
                <img className="comment-form__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRzM_B0kFnIYIVvIBd5xQP4cbNiWemVKX_jj0Rr--Kne06ybR" />
              </label>
            </li>
            <li className="comment-form__item">
              <input 
                type="radio" 
                className="comment-form__radio" 
                id="avatar4" 
                name="avatar" 
                onChange={e => this.setState({ newCommentAvatar: e.target.parentNode.children[1].children[0].getAttribute('src') })}
              />
              <label className="comment-form__label comment-form__label--avatar" htmlFor="avatar4"
              >
                <img className="comment-form__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3eIaY-WvsHtZOGRDnRfOnRAitKgCwy3n-WlvOliDweyk12oS" />
              </label>
            </li>
            <li className="comment-form__item">
              <input 
                type="radio" 
                className="comment-form__radio" 
                id="avatar5" 
                name="avatar" 
                onChange={e => this.setState({ newCommentAvatar: e.target.parentNode.children[1].children[0].getAttribute('src') })}
              />
              <label className="comment-form__label comment-form__label--avatar" htmlFor="avatar5"
              >
                <img className="comment-form__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6O5kMcloxGsa4B_cqDg6Br3BIe6O9Pi-F6CP52TgA4NnkgIa6" />
              </label>
            </li>
            <li className="comment-form__item">
              <input 
                type="radio" 
                className="comment-form__radio" 
                id="avatar6" 
                name="avatar" 
                onChange={e => this.setState({ newCommentAvatar: e.target.parentNode.children[1].children[0].getAttribute('src') })}
              />
              <label className="comment-form__label comment-form__label--avatar" htmlFor="avatar6"
              >
                <img className="comment-form__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaHmYCx5J4tzO1c7OSThTK5U99OsZgx2sD9VhnjTb3SeCPjrM" />
              </label>
            </li>
          </ul>
        </div>
        <div className="comment-form__group">
          <label className="comment-form__label">Ваше имя:</label>
          <input 
            type="text" 
            className="comment-form__input" 
            placeholder="Иванов Иван" 
            value={this.state.newCommentAuthor}
            onChange={e => {
              this.setState({ newCommentAuthor: e.target.value });
              console.log(this.state);
            }}
          />
        </div>
        <div className="comment-form__group">
          <label className="comment-form__label">Текст комментария:</label>
          <textarea 
            className="comment-form__textarea" 
            placeholder="Ваше сообщение"
            value={this.state.newCommentText}
            onChange={e => this.setState({ newCommentText: e.target.value }) }
          >
          </textarea>
        </div>
        <div className="comment-form__group comment-form__group--plain">
          <label className="comment-form__label">Понравилась ли Вам статья?</label>
          <input 
            type="checkbox"
            name="like"
            id="like" 
            className="comment-form__checkbox" 
            checked={(this.state.newCommentRate) ? true : false}
            onChange={e => this.setState({ newCommentRate: (e.target.checked) ? true : false }) }
          />
          <label className="comment-form__label comment-form__label--checkbox" htmlFor="like"></label>
        </div>
        <input className="btn btn--primary btn--add" type="submit" value="Добавить" />
        <a href="#" className="btn btn--primary btn--edit" onClick={this.editComment}>Изменить</a>
      </form>
    )
  }
}

export default CommentForm;