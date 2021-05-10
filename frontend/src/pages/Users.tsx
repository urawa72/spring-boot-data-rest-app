import React from 'react';
import { Link } from 'react-router-dom';
import useGetPeople from '../hooks/use-get-people';

const Users: React.FC = () => {
  const getPeople = useGetPeople();
  return (
    <>
      <h1>Users</h1>
      <div>
        {getPeople.people.map((p) => (
          <div key={p.firstName + p.lastName}>
            {p.firstName} {p.lastName}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default Users;
