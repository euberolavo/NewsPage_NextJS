import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import {
  PageDetailsContainer,
  PageDetailsImage,
  PageDetailsTitle,
  PageDetailsContent,
  PageDetailsDate,
  PageDetailsAuthor
} from '../../src/theme/pagedeailscomponents';
import Header from '../../src/components/header/header';

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
    <>
      <Header />
      <PageDetailsContainer as="article">
        <PageDetailsImage
          as="img"
          src={article.urlToImage}
          alt={article.title}
        />
        <PageDetailsTitle as="h2">{article.title}</PageDetailsTitle>
        <PageDetailsAuthor as="p">Autor: {article.author}</PageDetailsAuthor>
        <PageDetailsDate as="p">Data de Publicação: {article.publishedAt}</PageDetailsDate>
        <PageDetailsContent as="p">{article.content}</PageDetailsContent>
      </PageDetailsContainer>
    </>
  );
}
