import React from 'react';
import { Link } from 'react-router-dom';
import useGetPeople from '../hooks/use-get-people';

const Home: React.FC = () => {
  const getPeople = useGetPeople();
  console.log(getPeople);
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to="/setting">Setting</Link>
        {getPeople.people.map((p) => (
          <div key={p.firstName}>{p.firstName + p.lastName}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
