class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // Проверяем ответ от сервера
  _checkResponse(res) {
    if (res.ok) {
      // Если все ок - получаем первоначальный ответ от сервера
      return res.json(); // Читаем ответ в формате json
    }
    return Promise.reject(`Ошибка: ${res.status}`); // Если не ок возвращаем отклоненный промис с описанием ошибки
  }

  // Получение карточек
  getCardsMovies() {
    return fetch(`${this._baseUrl}`).then(this._checkResponse);
  }
}

const moviesApi = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});
export default moviesApi;
