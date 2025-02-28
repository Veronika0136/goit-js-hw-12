import axios from 'axios';

export function getAllImages(massege) {
  const baseURL = 'https://pixabay.com/api/';

  const params = {
    key: '49074776-667ebd81d42a28579e0443e2e',
    q: `${massege}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(baseURL, { params }).then(res => res.data.hits);
}
