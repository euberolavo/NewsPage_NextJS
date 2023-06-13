export function CardTitle({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: black;
          font-size: 80%;
        }
      `}</style>
    </>
  );
}

export function CardContainer({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          width: 90%;
          padding: 10px;
          margin:5px
          box-sizing: border-box;

        }
      `}</style>
    </>
  );
}

export function CardImage({ src, alt, as, ...props }) {
  const Tag = as;
  return (
    <>
      <Tag src={src} alt={alt}></Tag>
      <style jsx>{`
        ${Tag} {
          display: inline-block;
          margin-bottom: 8px;
          margin-left: 0px;
          margin-top: 0px;
          max-width: 100%;
          width: 100%;
          max-height: 200px !important;
          object-fit: cover;
          object-position: top;
        }
      `}</style>
    </>
  );
}

export function CardAuthor({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: black;
          font-size: 50%;
        }
      `}</style>
    </>
  );
}
