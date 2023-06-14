// Geciktirme fonksiyonu. Verilen süre kadar bekler.
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Temel veri çekme fonksiyonu. Verilen API yolundan veri çeker.
// Örnek: fetchData("/movie/popular", { query: "" })
async function fetchData(path, { query = "" } = {}) {
  await delay(1000);

  try {
    const res = await fetch(
      `${process.env.THEMOVIEDB_BASEURL}${path}?api_key=${process.env.THEMOVIEDB_APIKEY}&${query}`
    );

     // HTTP hata durumlarını kontrol etme
     if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    return res.json();
  } catch (error) {
    throw new Error(`Error happened while fetching data from ${path}`);
  }
}

// Film türlerini çeker.
// Örnek istek: https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY
export async function fetchGenres() {
  const res = await fetchData("/genre/movie/list");
  return res.genres;
}

// Popüler filmleri çeker.
// Örnek istek: https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY
export async function fetchPopularMovies() {
  const res = await fetchData("/movie/popular");
  return res.results;
}

// En yüksek puanlı filmleri çeker.
// Örnek istek: https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY
export async function fetchTopRatedMovies() {
  const res = await fetchData("/movie/top_rated");
  return res.results;
}

// Tek bir filmi, film ID'sine göre çeker.
// Örnek istek: https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY
export async function fetchSingleMovie(movieId) {
  const res = await fetchData(`/movie/${movieId}`);
  return res;
}

// Belirli bir türe ait filmleri çeker, tür ID'sine göre.
// Örnek istek: https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=28
export async function fetchMoviesByGenre(genreId) {
  const res = await fetchData(`/discover/movie`, {
    query: `with_genres=${genreId}`,
  });
  return res.results;
}
