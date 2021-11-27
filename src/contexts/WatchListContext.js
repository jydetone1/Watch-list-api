import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const WatchListContext = createContext();

const WatchListContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('watchLists')) || [];

  const [watchlists, setWatchLists] = useState(initialState);
  const [editItem, setEditItem] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  useEffect(() => {
    localStorage.setItem('watchLists', JSON.stringify(watchlists));
  }, [watchlists]);

  const addWatchList = (title) => {
    showAlert(true, 'success', 'item added to the list');
    setWatchLists([...watchlists, { title, id: uuidv4(), completed: false }]);
  };

  const removeWatchList = (id) => {
    showAlert(true, 'danger', 'item removed');
    setWatchLists(watchlists.filter((watch) => watch.id !== id));
  };

  const clearWatchList = () => {
    showAlert(true, 'danger', 'empty list');
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
    showAlert(true, 'success', 'value changed');
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

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message });
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
        showAlert,
        alert,
        editItem,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
