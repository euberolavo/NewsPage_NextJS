import { useEffect, useState } from 'react';
import Card from '../src/components/cards/card';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Erro ao obter as Notícias', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Notícias Listadas</h1>
      <ul>
        {news.map((article, index) => (
          <Card title={article.title} image={article.image} author={article.source.name} date={article.publishedAt} index={index}>
            <li key={index}>
              <h3>{article.description}</h3>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default News;
