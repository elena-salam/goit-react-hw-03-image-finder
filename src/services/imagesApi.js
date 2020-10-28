import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, perPage=12) => {

  return axios.get(
  `https://pixabay.com/api/?q=${searchQuery}&page=1
  &key=18108257-442a69c668d0345c031d8f80c&image_type=photo
  &orientation=horizontal&per_page=${perPage}`,

).then(response =>response.data.hits)
 
}
export default {fetchImagesWithQuery};

// return fetch (`https://pixabay.com/api/?q=${searchQuery}&page=${page}
// &key=18108257-442a69c668d0345c031d8f80c&image_type=photo
// &orientation=horizontal&per_page=12`).then (res => res.json())
// .then (data => data.hits)


