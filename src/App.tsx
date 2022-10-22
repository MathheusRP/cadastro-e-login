
// import './App.css';
import { Rotas } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />

    <AuthProvider>
      <Rotas/>
    </AuthProvider>
  </>
  );
}

export default App;
