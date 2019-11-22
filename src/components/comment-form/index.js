import React from 'react';

const CommentForm = ({comments, addComment, editComment}) => {
  let avatar, name, text, isRated;

  avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvmzRL7lUOwopGWA9gRnNo2pFvoJ8dHNvn-su1fzko27G7UqM';

  return (
    <form className="comment-form">
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
              onChange={e => avatar = e.target.parentNode.children[1].children[0].getAttribute('src')}
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
              onChange={e => avatar = e.target.parentNode.children[1].children[0].getAttribute('src')}
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
              onChange={e => avatar = e.target.parentNode.children[1].children[0].getAttribute('src')}
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
              onChange={e => avatar = e.target.parentNode.children[1].children[0].getAttribute('src')}
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
              onChange={e => avatar = e.target.parentNode.children[1].children[0].getAttribute('src')}
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
              onChange={e => avatar = e.target.parentNode.children[1].children[0].getAttribute('src')}
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
          data-option="name"
          value={name}
          onChange={e => {
            name = e.target.value

            console.log(name);
          }}
        />
      </div>
      <div className="comment-form__group">
        <label className="comment-form__label">Текст комментария:</label>
        <textarea 
          className="comment-form__textarea" 
          placeholder="Ваше сообщение"
          data-option="text"
          value={text}
          onChange={e => text = e.target.value}
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
          data-option="isRated" 
          value={isRated}
          onChange={e => isRated = (e.target.checked) ? true : false}
        />
        <label className="comment-form__label comment-form__label--checkbox" htmlFor="like"></label>
      </div>
      <input className="btn btn--primary btn--add" type="submit" value="Добавить" onClick={e => {
        e.preventDefault();        

        addComment(comments.length, avatar, name, text, isRated);
        
        document.querySelector('[data-option="name"]').value = '';
        document.querySelector('[data-option="text"]').value = '';
        document.querySelector('[data-option="isRated"]').checked = false;

      }} />
      <a href="#" className="btn btn--primary btn--edit" onClick={e => {
        e.preventDefault();

        console.log(name);

        editComment(Number(document.querySelector('.comment-form').getAttribute('id')), avatar, name, text, isRated);
        
        document.querySelector('[data-option="name"]').value = '';
        document.querySelector('[data-option="text"]').value = '';
        document.querySelector('[data-option="isRated"]').checked = false;
      }}>Изменить</a>
    </form>
  )
}

export default CommentForm;