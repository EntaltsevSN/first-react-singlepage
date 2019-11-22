import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <figure className="header__logo">
          <img className="header__image" src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png" />
          <figcaption className="header__title">Entaltsev Blog</figcaption>
        </figure>
      </header>
    );
  }
}

export default Header;