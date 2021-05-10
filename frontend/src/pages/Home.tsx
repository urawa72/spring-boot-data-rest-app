import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to="/users">Users</Link>
      </div>
      <div>
        <Link to="/setting">Setting</Link>
      </div>
    </>
  );
};

export default Home;
