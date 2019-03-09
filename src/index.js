import Article from "./Articles";

export function initialize(element) {
  const article = new Article();

  article.getArticles()
    .then(articlesJson => {
      articlesJson.articles.forEach(article => {
        const articleElement = document.createElement("div");
        console.log(article);
        articleElement.innerHTML = article.body;

        element.appendChild(articleElement);
      });
    });
}

window.initializeArticles = initialize;