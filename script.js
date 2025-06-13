const apiKey = "3f72d8db";

async function searchMovies(query) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
  const data = await response.json();
  if (data.Search) {
    displayMovies(data.Search);
  } else {
    document.getElementById("movieList").innerHTML = `<p>No results found.</p>`;
  }
}

function manualSearch() {
  const query = document.getElementById("searchInput").value;
  searchMovies(query);
}

function displayMovies(movies) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300'}" alt="${movie.Title}">
      <div class="info">
        <h4>${movie.Title}</h4>
        <p>${movie.Year}</p>
      </div>
    `;
    movieList.appendChild(movieCard);
  });
}
