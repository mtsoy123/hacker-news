class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (url, options = {}) => {
    return fetch(url, options)
    .then((res) => res.ok ? res.json() : Promise.reject(res.status))
  }

  getStoryId() {
    return this._checkResponse(`${this._baseUrl}/newstories.json?print=pretty`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getItem(id) {
    return this._checkResponse(`${this._baseUrl}/item/${id}.json?print=pretty`)
  }

  getLatestStories(amount) {
    return this.getStoryId()
    .then((res) => {

      const ids = res.slice(0, amount)
      const urls = ids.map((item) => {
        return this.getItem(item)
      })
      return Promise.all(urls)
    })
  }

  getComments(kidsArray) {
    /*let commentsUrls = [];

    const fetchComments = (commentsArr) => {
      commentsUrls.push(commentsArr.map((item) => {
        const tempItem = this.getItem(item)
        .then((res) => {
          if (Object.keys(res).includes('kids')) {
            fetchComments(res.kids)
          }
          return res
        })

        return tempItem
      }))
    }*/

    const commentsUrls = kidsArray.map((item) => {
      return this.getItem(item).then((res) => {
        if (Object.keys(res).includes('kids')) {
          return this.getItem(res.kids)
        }
      })
    })

    return Promise.all(commentsUrls)
  }
}

export const api = new Api({
  baseUrl: 'https://hacker-news.firebaseio.com/v0/',
  headers: {
    'Content-Type': 'application/json'
  }
});
