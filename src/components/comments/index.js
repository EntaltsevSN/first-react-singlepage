import React from 'react';

const Comments = props => {
  const { comments, removeComment } = props;

  let setFormOptions = (id, name, text, isRated) => {
    document.querySelector('.comment-form').setAttribute('id', id);
    document.querySelector('[data-option="name"]').value = name;
    document.querySelector('[data-option="text"]').value = text;
    document.querySelector('[data-option="isRated"]').checked = isRated;
    document.querySelector('.btn--add').classList.toggle('is-hidden');
    document.querySelector('.btn--edit').classList.toggle('is-visible');
  }

  return (
    <section className="comments">
      <h3 className="comments__title">Комментарии</h3>
      <section className="comments__list">{
        (comments !== undefined)
          && comments.map(comment => {
            return(
              <article className="comment" key={comment.id} id={comment.id}>
                <figure className="comment__avatar">
                  <img className="comment__image" src={comment.avatar} />
                </figure>
                <section className="comment__body">
                  <h4 className="comment__author">{comment.name}</h4>
                  <div className="comment__text">{comment.text}</div>
                  {comment.isRated && <div className="comment__rating">{comment.name} оценил эту статью</div>}
                </section>
                <div className="comment__options">
                  <a href="#" className="comment__link comment__link--edit" onClick={e => {
                    e.preventDefault();

                    setFormOptions(comment.id, comment.name, comment.text, comment.isRated);
                  }}>
                    <i className="fas fa-edit"></i>
                  </a>
                  <a href="#" className="comment__link" onClick={e => {
                    e.preventDefault();
                    console.log(comment.id);
                    removeComment(comment.id);
                  }}>
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </div>
              </article>
            )
          })
      }</section>
    </section>
  );
}

export default Comments;