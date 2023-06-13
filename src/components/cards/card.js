import React from 'react';
import Link from 'next/link';

export default function Card({
  children,
  title,
  image,
  author,
  date,
  index,
  ...props
}) {

  const handleClick = () => {
        console.log('Card clicado!');
  };

  return (
    <>
    <Link href={`/news/${index}`} passHref>
      <h2>{title}</h2>
      <p>{author}</p>
      <img src={image} alt={title} />
      {/* <p>{children}</p> */}
      <p>{date}</p>
    </Link>
    </>
  );
}
