const API_KEY = '16437496-6d56e114a2cb1088922bcb1d6';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 21,
    });

    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}
