function getArticlesFromAPI(page = 1) {
  return fetch(
    `https://support.zendesk.com/api/v2/help_center/en-us/articles.json?page=${page}`
  ).then(function (response) {
    return response.json();
  });
}

const api = {
  getArticlesFromAPI: getArticlesFromAPI
};

export default api;