import { useRoutes } from 'react-router';
import { routes } from './routes';
// import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_BASE_URL}/ping`)
  //     .then((response) => response.text())
  //     .then((body) => console.log(body));
  // }, []);
  const element = useRoutes(routes);
  return element;
}

export default App;
