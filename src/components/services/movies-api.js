const API_KEY = "api_key=8db882c37308459587a4ba7946577e74";
const BASE_URL = "https://api.themoviedb.org/3/";

async function FetchWithErrorHandling(url = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendMovies() {
  return FetchWithErrorHandling(`${BASE_URL}trending/movie/day?${API_KEY}`);
}

export function fetchSearchMovies(value, page) {
  return FetchWithErrorHandling(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${value}`
  );
}

export function fetchGetMovieDetails({ movieId }) {
  return FetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?${API_KEY}&language=en-US`
  );
}

export function fetchGetMovieCast({ movieId }) {
  return FetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?${API_KEY}&language=en-US`
  );
}

export function fetchGetMovieReviews({ movieId }) {
  return FetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1`
  );
}
