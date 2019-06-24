export const API_HOST = 'http://api.nytimes.com/svc/mostpopular/v2/'
export const API_KEY = 'AR2SkZwGqPpLIlIo9zb6Ap7B9GgVfHto'
export const customFetch = (api) =>
  fetch(`${API_HOST}${api}?api-key=${API_KEY}`).then(res => res.json())
export const fetchMostViewed = ({ section = 'all-sections', period = '7' }) =>
  customFetch(`mostviewed/${section}/${period}.json`)