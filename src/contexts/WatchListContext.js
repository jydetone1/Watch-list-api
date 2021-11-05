import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const WatchListContext = createContext();

const WatchListContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('watchLists')) || [];

  const [watchlists, setWatchLists] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('watchLists', JSON.stringify(watchlists));
  }, [watchlists]);

  const [editItem, setEditItem] = useState(null);

  const addWatchList = (title) => {
    setWatchLists([...watchlists, { title, id: uuidv4(), completed: false }]);
  };

  const removeWatchList = (id) => {
    setWatchLists(watchlists.filter((watch) => watch.id !== id));
  };

  const clearWatchList = () => {
    setWatchLists([]);
  };

  const findWatchList = (id) => {
    const list = watchlists.find((watch) => watch.id === id);
    setEditItem(list);
  };

  const editWatchList = (title, id, completed) => {
    const newWatchLists = watchlists.map((watch) =>
      watch.id === id ? { title, id, completed } : watch
    );
    setWatchLists(newWatchLists);
    setEditItem(null);
  };

  const watchCompleted = (watch) => {
    setWatchLists(
      watchlists.map((item) => {
        if (item.id === watch.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <WatchListContext.Provider
      value={{
        watchlists,
        addWatchList,
        removeWatchList,
        clearWatchList,
        findWatchList,
        editWatchList,
        watchCompleted,
        editItem,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
