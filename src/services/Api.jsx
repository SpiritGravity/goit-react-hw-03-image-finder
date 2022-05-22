function fetchImages(query, page) {
    const API_KEY = '27160934-473c64884c6d78e81a1115d4e';
    const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  
    return fetch(URL).then(response => response.json());
  }
  
  const API = {
    fetchImages,
  };
  
  export default API;