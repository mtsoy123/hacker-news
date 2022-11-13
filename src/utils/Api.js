/*const urls = []

let requests = urls.map(url => fetch(url))

Promise.all(requests)*/

class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (url, options = {}) => {
    return fetch(url, options)
    .then((res) => res.ok ? res.json() : Promise.reject(res.status))
  }

  getNewsId() {
    return this._checkResponse(`${this._baseUrl}/newstories.json?print=pretty`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getNews(id) {

    return this._checkResponse(`${this._baseUrl}/item/${id}.json?print=pretty`)
  }





  getLatestNews(amount) {
    return this.getNewsId()
    .then((res) => {
      const ids = res.slice(0, amount)

      const urls = ids.map((item, index) => {
        return this.getNews(item)
      })

      return Promise.all(urls)
    })
  }
}

export const api = new Api({
  // baseUrl: 'http://localhost:3001',
  baseUrl: 'https://hacker-news.firebaseio.com/v0/',
  headers: {
    'Content-Type': 'application/json'
  }
});
