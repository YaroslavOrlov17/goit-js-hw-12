import axios from 'axios';

const API_KEY = '16437496-6d56e114a2cb1088922bcb1d6';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 100,
    page: page,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
