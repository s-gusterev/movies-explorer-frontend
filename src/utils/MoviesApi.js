class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getCardsMovies() {
    return fetch(`${this._baseUrl}`).then(this._checkResponse);
  }
}

const moviesApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});
export default moviesApi;
