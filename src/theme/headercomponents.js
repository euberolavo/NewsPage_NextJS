export function HeaderContainer({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          box-shadow: 0px 0px 2px 2px #7a8685;
          background: linear-gradient(#576162, #ffffff);
          z-index: 999;

          position: fixed;
          top: 0;
          left: 0;
          width: 100%;

          
        }
      `}</style>
    </>
  );
}

export function HeaderImage({ src, alt, as, ...props }) {
  const Tag = as;
  return (
    <>
      <Tag src={src} alt={alt}></Tag>
      <style jsx>{`
        ${Tag} {
          width: 20%;
          margin: 2rem;
          margin-left: 43%;

          @media only screen and (max-width: 480px) {
            width: 40%;
            margin-left: 30%;
          }

        }

        
      `}</style>
    </>
  );
}
