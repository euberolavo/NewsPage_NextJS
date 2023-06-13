import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function NewsDetailPage() {
  const router = useRouter();
  const { index } = router.query;
  const [news, setNews] = useState([]);
  const article = news[index];

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

  if (!article) {
    return <div>Artigo não encontrado.</div>;
  }

  return (
    <div>
      <h1>Detalhes da Notícia</h1>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>Autor: {article.author}</p>
      <p>Data de Publicação: {article.publishedAt}</p>
      <p>Conteúdo: {article.content}</p>
    </div>
  );
}