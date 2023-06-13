import { useEffect, useState } from 'react';
import Card from '../src/components/cards/card';
import { PageNewsContainer } from '../src/theme/pagenewscomponents';
import Header from '../src/components/header/header';

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
      <Header />
      <PageNewsContainer as="div">
        {news?.map((article, index) => (
          <div key={index}>
            <Card
              title={article.title}
              image={article.urlToImage}
              author={article.author}
              date={article.publishedAt}
              index={index}
            >
              <li>
                <h3>{article.description}</h3>
              </li>
            </Card>
          </div>
        ))}
      </PageNewsContainer>
    </div>
  );
}

export default News;
