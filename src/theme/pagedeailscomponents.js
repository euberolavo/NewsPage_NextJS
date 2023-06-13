export function PageDetailsContainer({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(1fr 1fr 60px 1fr 1fr );
          gap: 10px;
          width: 100%;
          padding: 10px;
          margin: 5px;
          box-sizing: border-box;
          padding-top: 20vh;

          @media only screen and (max-width: 1100px) {
            padding-top: 12vh;
          }

          @media only screen and (max-width: 960px) {
            padding-top: 11vh;
          }

          @media only screen and (max-width: 768px) {
            grid-template-columns: repeat(1,1fr) 200px repeat(1,1fr);
            padding-top: 10vh;
          }

          @media only screen and (max-width: 480px) {
            grid-template-columns: repeat( 1fr);
            padding-top: 11vh;
          }
        }
      `}</style>
    </>
  );
}

export function PageDetailsImage({ src, alt, as, ...props }) {
  const Tag = as;
  return (
    <>
      <Tag src={src} alt={alt}></Tag>
      <style jsx>{`
        ${Tag} {
          grid-column-start: 2;
          grid-column-end: 5;
          grid-row-start: 1;
          grid-row-end: 3;

          display: inline-block;
          margin-bottom: 8px;
          margin-left: 10%;
          margin-top: 0px;
          max-width: 80%;
          width: 80%;
          max-height: 50rem;
          object-fit: cover;
          object-position: top;

          justify-content: center;
        }

        @media only screen and (max-width: 1100px) {
          max-height: 200px;
        }

        @media only screen and (max-width: 768px) {
            grid-column-start: 1;
            grid-column-end: 6;
        }

      `}</style>
    </>
  );
}

export function PageDetailsTitle({children, as }) {
    const Tag = as;
    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
          ${Tag} {
            grid-column-start: 2;
            grid-column-end: 5;
            grid-row-start: 3;
            grid-row-end: 4;
  
            display: inline-block;
            margin-bottom: 8px;
            margin-left: 10%;
            margin-top: 0px;
            max-width: 80%;
            width: 80%;
            max-height: 50rem;
            object-fit: cover;
            object-position: top;
  
          }
  
          @media only screen and (max-width: 1100px) {
            max-height: 200px;
          }
  
          @media only screen and (max-width: 960px) {
          }
  
          @media only screen and (max-width: 768px) {
          }
  
          @media only screen and (max-width: 480px) {
          }
        `}</style>
      </>
    );
  }

  export function PageDetailsContent({children, as }) {
    const Tag = as;
    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
          ${Tag} {
            grid-column-start: 2;
            grid-column-end: 5;
            grid-row-start: 4;
            grid-row-end: 5;
  
            display: inline-block;
            margin-bottom: 8px;
            margin-left: 10%;
            margin-top: 0px;
            max-width: 80%;
            width: 80%;
            max-height: 50rem;
            object-fit: cover;
            object-position: top;
  
          }
  
          @media only screen and (max-width: 1100px) {
            max-height: 200px;
          }
  
          @media only screen and (max-width: 960px) {
          }
  
          @media only screen and (max-width: 768px) {
          }
  
          @media only screen and (max-width: 480px) {
          }
        `}</style>
      </>
    );
  }

  export function PageDetailsAuthor({children, as }) {
    const Tag = as;
    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
          ${Tag} {
            grid-column-start: 4;
            grid-column-end: 5;
            grid-row-start: 5;
            grid-row-end: 5;
  
            display: inline-block;
            margin-bottom: 8px;
            margin-left: 10%;
            margin-top: 0px;
            max-width: 80%;
            width: 80%;
            max-height: 50rem;
            object-fit: cover;
            object-position: top;
  
          }
  
          @media only screen and (max-width: 1100px) {
            max-height: 200px;
          }
  
          @media only screen and (max-width: 960px) {
          }
  
          @media only screen and (max-width: 768px) {
          }
  
          @media only screen and (max-width: 480px) {
          }
        `}</style>
      </>
    );
  }

  export function PageDetailsDate({children, as }) {
    const Tag = as;
    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
          ${Tag} {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 5;
            grid-row-end: 5;
  
            display: inline-block;
            margin-bottom: 8px;
            margin-left: 10%;
            margin-top: 0px;
            max-width: 80%;
            width: 80%;
            max-height: 50rem;
            object-fit: cover;
            object-position: top;
  
          }
  
          @media only screen and (max-width: 1100px) {
            max-height: 200px;
          }
  
          @media only screen and (max-width: 960px) {
          }
  
          @media only screen and (max-width: 768px) {
          }
  
          @media only screen and (max-width: 480px) {
          }
        `}</style>
      </>
    );
  }
