import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="overlay" onClick={this.handleOverlayClick}>
        <div>
          <img src={this.props.image} alt={this.props.tags} className="modal" />
        </div>
      </div>
    );
  }
}

export default  Modal;