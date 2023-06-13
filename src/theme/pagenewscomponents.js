export function PageNewsContainer({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 10px;
          padding-top: 20vh;

          @media only screen and (max-width: 1100px) {
            padding-top: 12vh;
          }

          @media only screen and (max-width: 960px) {
            grid-template-columns: 1fr 1fr 1fr;
            padding-top: 11vh;
          }

          @media only screen and (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            padding-top: 10vh;
          }

          @media only screen and (max-width: 480px) {
            grid-template-columns: 1fr;
            padding-top: 11vh;
          }
        }
      `}</style>
    </>
  );
}
