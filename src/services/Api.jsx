function fetchImages(query, page) {
    const API_KEY = '25313098-4fe256b98efcc708221cd816f';
    const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  
    return fetch(URL).then(response => response.json());
  }
  
  const API = {
    fetchImages,
  };
  
  export default API;