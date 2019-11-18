import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: {
        title: `Я выбираю Skillbox!`,
        body: `<p>Платформа <strong>"Skillbox"</strong> позволяет каждому студенту раскрыть себя как профессионала в процессе прохождения курсов. Интересная структура подачи обучающих материалов, отзывчивость наставников, богатство разнообразных домашних заданий даёт возможность закрепить знания и использовать их постоянно.</p>
        <p>Мой выбор курса пал на <strong>"JavaScript с нуля"</strong>, так как это отличная возможность изучить JavaScript со всех сторон, в том числе и получить знания самых современных технологий, использующих JavaScript. Особенно интересным и богатым из модулей оказался модуль <strong>"React"</strong>, который открывает мир современных сайтов по-новому.</p>`,
        rating: 0
      }
    }

    this.getArticleRating = this.getArticleRating.bind(this);
  }

  getArticleRating() {
    let rating = 0;

    this.props.comments.map(comment => {
      if(comment.isRated) {
        rating++;
      }
    })

    return rating;
  }

  render() {
    return (
      <article className="article">
        <header className="article__header">
        <h2 className="article__title">{this.state.article.title}</h2>
        </header>
        <section className="article__body" dangerouslySetInnerHTML={{ __html: this.state.article.body}} />
        <footer className="article__footer">
          <i className="fas fa-heart"></i> {this.getArticleRating()}
        </footer>
      </article>
    );
  }
}

export default Article;