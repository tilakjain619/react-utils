import { useEffect, useState } from 'react';

/**
 * Custom hook to get and set the document title.
 * @returns {Object} - An object with getTitle and setTitle functions.
 */
const usePageTitle = () => {
  const [title, setTitleState] = useState(document.title);

  const getTitle = () => {
    return document.title;
  };

  const setTitle = (newTitle) => {
    document.title = newTitle;
    setTitleState(newTitle);
  };

  useEffect(() => {
    setTitleState(document.title);
  }, []);

  return { getTitle, setTitle };
};

export default usePageTitle;
