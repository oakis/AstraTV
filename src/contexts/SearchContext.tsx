import React, { createContext, useState } from 'react';

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
        const json = await res.json();
        console.log(json);
        setResults(json);
      })
      .catch(err => console.warn(err));
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
