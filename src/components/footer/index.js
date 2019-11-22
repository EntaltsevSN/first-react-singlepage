import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      developer: {
        firstName: 'Станислав',
        lastName: 'Ентальцев'
      }
    }
  }

  render() {
    return (
      <footer className="footer">
        <section className="footer__copyright">
          <p>&copy 2019. Первый сайт на React</p>
          <p>
            Разработал 
            <strong>{this.state.developer.firstName} {this.state.developer.lastName}</strong>
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;