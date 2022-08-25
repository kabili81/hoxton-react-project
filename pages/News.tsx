import { useEffect, useState } from "react";

type Article = {
  id: number;
  image: string;
  title: string;
  description: string;
  }

export function News() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3005/articles`)
    .then(resp => resp.json())
    .then((articlesFromServer) => {
      setArticles(articlesFromServer)
    })
  }, [])
  return (
    <main className="main">
      <ul className="article-list">
        {articles.map((article) => (
         <>
         
          <article key={article.id}>
          <img src={article.image} /> <h2>{article.title}</h2> <p>{article.description}</p>
          </article>
         
         </>
        ))}
      </ul>
    </main>
  );
}
