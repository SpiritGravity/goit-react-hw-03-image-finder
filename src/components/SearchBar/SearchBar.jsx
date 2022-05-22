import {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    state = {
        searchImages: '',
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
    return(
        <>
        <header className="searchBar">
            <form className="searchForm" onSubmit={this.handleSubmit}></form>
        </header>
    </>
    )
}
};

export default SearchBar;