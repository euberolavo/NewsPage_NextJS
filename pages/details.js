import { useEffect, useState } from 'react';
import Card from '../src/components/cards/card';

function Details() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        setDetails(data.articles[1]);
      } catch (error) {
        console.error('Erro ao obter as Notícias', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Detalhes</h1>
      <ul>
        <Card
          title={details.title}
          image={details.urlToImage}
          author={details.author}
          date={details.publishedAt}
        >
        </Card>
            <h3>{details.content}</h3>
      </ul>
    </div>
  );
}

export default Details;
