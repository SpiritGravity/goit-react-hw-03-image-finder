import { Component } from 'react';
import styles from './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import API from '../services/Api';


export class App extends Component {
  state = {
    searchImage: '',
    page: 1,
    isLoading: false,
    gallery: [],
    largeImage: '',
    showModal: false,
    currentHitsPerPages: null,
  };
  componentDidUpdate(_, prevState) {
    const { searchImages, page } = this.state;

    const prevSearch = prevState.searchImages;
    const prevPage = prevState.page;
    if (prevSearch !== searchImages || prevPage !== page) {
      this.setState({ isLoading: true });

      API.fetchImages(searchImages, page)
        .then(({ hits }) => {
          const images = hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            }
          );

          if (images.length > 0) {
            this.setState(prevState => {
              return {
                gallery: [...prevState.gallery, ...images],

                currentHitsPerPage: hits.length,
              };
            });
          } else {
            alert(`По запросу ${searchImages} ничего не найдено.`);
          }
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleFormSubmit = nextSearchImages => {
    this.setState({
      searchImages: nextSearchImages,
      page: 1,
      gallery: [],
      currentHitsPerPage: null,
    });
  };

  render () {
    const {
      gallery,
      isLoading,
      currentHitsPerPages,
      error,
      showModal,
      largeImage,
    } = this.state;

    return(
<div className="app">
<SearchBar onSubmit={this.handleFormSubmit} />

</div>
    )

  }
}

export default App;