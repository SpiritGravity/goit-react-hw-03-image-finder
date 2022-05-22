import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SeachBar.css';

class SearchBar extends Component {
  state = {
    searchImages: '',
  };

  searchNameImages = event => {
    this.setState({ searchImages: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchImages.trim() === '') {
      alert('Введите слово для поиска');
      return;
    }

    this.props.onSubmit(this.state.searchImages);
    this.setState({ searchImages: '' });
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <header className="searchBar">
          <form className="searchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="searchForm-button">
              <span className="searchForm-button-label">Search</span>
            </button>

            <input
              className="searchForm-input"
              type="text"
              name="searchImages"
              value={this.state.searchImages}
              onChange={this.searchNameImages}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
export default SearchBar;