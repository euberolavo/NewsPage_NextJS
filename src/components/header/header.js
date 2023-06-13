import React from 'react';
import Link from 'next/link';

import { HeaderContainer, HeaderImage } from '../../theme/headercomponents';

export default function Header() {
  return (
    <>
      <HeaderContainer as="header">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <HeaderImage
            as="img"
            src="https://i.imgur.com/rF1c0Jk.png"
            alt="TecPB News"
          />
        </Link>
      </HeaderContainer>
    </>
  );
}
