import React from 'react';

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

export const getServerSideProps = async ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return {
    props: {
      statusCode
    }
  };
};

export default Error;
