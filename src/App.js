import './App.css';
import UserRoutes from './routes/UserRoutes';

function App() {
  console.log('token value: ', window.sessionStorage.getItem('token'));
  // correction here \/
  const pathToRedirectForRoot = window.sessionStorage.getItem('token') == null ? '/login' : '/dashboard';

  return (
    <UserRoutes pathToRedirectForRoot={pathToRedirectForRoot} />
  );
}

export default App;