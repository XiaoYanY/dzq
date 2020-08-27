import * as React from 'react';

const Home = () => {
  const [whatIsIt] = React.useState(() => {
    try {
      return Object.preventExtensions(10);
    } catch (e) {
      return e.message.toString();
    }
  });

  return (
    <div>
      <div>It should return number: {whatIsIt}</div>
    </div>
  );
};

export default Home;
