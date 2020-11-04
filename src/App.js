import './App.css';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  console.log('token value: ', window.sessionStorage.getItem('token'));
  // correction here \/
  //const pathToRedirectForRoot = window.sessionStorage.getItem('token') == null ? '/login' : '/dashboard';

  return (
    <div>
      <AdminRoutes />
    </div>
  );
}

export default App;