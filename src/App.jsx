import React, { useEffect } from 'react';
import usePageTitle from './hooks/usePageTitle';
import './App.css';

const App = () => {
  const { getTitle, setTitle } = usePageTitle();

  useEffect(() => {
    console.log('Current title:', getTitle());

    // Example of setting the title
    setTitle('This is new title');

    // Verify title was set
    console.log('Updated title:', getTitle());
  }, [getTitle, setTitle]);
};

export { usePageTitle };
export default App;
