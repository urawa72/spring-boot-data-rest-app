import { useEffect, useState } from 'react';
import axios from 'axios';

interface Person {
  firstName: string;
  lastName: string;
}

interface GetPeopleState {
  error: Error | null;
  loading: boolean;
  people: Person[];
}

const useGetPeople = (): GetPeopleState => {
  const [state, setState] = useState<GetPeopleState>({
    error: null,
    loading: true,
    people: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/people`);
        console.log(res);
        setState({
          ...state,
          loading: false,
          people: res.data._embedded.people,
        });
      } catch (error) {
        setState({ ...state, error, loading: false });
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ...state };
};

export default useGetPeople;
