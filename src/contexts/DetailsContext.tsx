import React, { createContext, useState, useCallback } from 'react';

const DetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [details, setDetails] = useState<IDetails | null>(null);

  const getDetails = useCallback((id: number): void => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const config = {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    };

    fetch(url, config)
      .then(async res => {
        const json = await res.json();
        setDetails(json);
      })
      .catch(err => console.warn(err));
  }, []);

  const clearDetails = useCallback(() => {
    setDetails(null);
  }, []);

  return (
    <DetailsContext.Provider value={{ details, getDetails, clearDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

interface IContext {
  details: IDetails | null;
  getDetails: (id: number) => void;
  clearDetails: () => void;
}

export const DetailsContext = createContext<IContext>({
  details: null,
  getDetails: () => {},
  clearDetails: () => {},
});

export { DetailsProvider };
