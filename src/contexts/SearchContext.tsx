import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [results, setResults] = useState<ISearch[]>([]);

  const searchTvShows = (str: string): void => {
    const url = `https://api.tvmaze.com/search/shows?q=${str}`;
    const config = {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    };

    fetch(url, config)
      .then(async res => {
        try {
          const json = await res.json();
          if (json === null || json.length === 0) {
            setResults([]);
          } else {
            setResults(json);
          }
        } catch (error) {
          Alert.alert('Error', 'Something went wrong.');
        }
      })
      .catch(() => {
        Alert.alert('Error', 'Something went wrong.');
      });
  };

  return (
    <SearchContext.Provider value={{ results, searchTvShows }}>
      {children}
    </SearchContext.Provider>
  );
};

interface IContext {
  results: ISearch[];
  searchTvShows: (str: string) => void;
}

export const SearchContext = createContext<IContext>({
  results: [],
  searchTvShows: () => {},
});

export { SearchProvider };
