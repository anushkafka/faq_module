export default class Articles {
  getArticles() {
    return fetch('https://support.zendesk.com/api/v2/help_center/en-us/articles.json')
      .then(function (response) {
        return response.json();
      });
  }
}