import './App.css';
import UserRoutes from './routes/UserRoutes';

function App() {
  const pathToRedirectForRoot = window.sessionStorage.getItem('token') ? '/' : '/dashboard';

  return (
    <UserRoutes pathToRedirectForRoot={pathToRedirectForRoot} />
  );
}

export default App;