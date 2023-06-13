import React from 'react';
import Link from 'next/link';

import { CardTitle, CardContainer, CardImage, CardAuthor } from '../../theme/cardscomponents';

export default function Card({ title, image, author, date, index }) {
  return (
    <>
      <Link
        href={`/index/${index}`}
        style={{ textDecoration: 'none' }}
      >
        <CardContainer as="article">
          <CardImage as="img" src={image} alt={title} />
          <CardTitle as="h1">{title}</CardTitle>
          <CardAuthor as="p">{author}</CardAuthor>
          {/* <p>{date}</p> */}
        </CardContainer>
      </Link>
    </>
  );
}
