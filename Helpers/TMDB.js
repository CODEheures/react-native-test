
export default class TMDB {
  static API_TOKEN = '3bb8a20d0e82dfe22716286f32a3d9e3'

  static getBySearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie/?language=fr-FR&api_key=' + this.API_TOKEN + '&query=' + encodeURIComponent(text) + '&page=' + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  }

  static getImageFromAPI (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }
}
