import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import SignIn from './pages/Sign-In/sign-in';
import User from './pages/User/user';
import { Provider, useSelector } from 'react-redux';
import store from './Redux/store';

function App() {
 
  const ProtectedRoute = ({children}) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); //Vérification du token dans le slicer

    if(!isAuthenticated) {
      return <Navigate to="/sign-in" />;
    }

    return children;
  }

  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" 
          element={<ProtectedRoute><User /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
