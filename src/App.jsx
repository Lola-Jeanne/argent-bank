import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import SignIn from './pages/Sign-In/sign-in';
import User from './pages/User/user';

function App() {

  // const isAuthenticated = () => {
  //   return !!localStorage.getItem("authToken");
  // }

  // const ProtectedRoute = ({children}) =>{
  //   return isAuthenticated() ? children : <Navigate to={"/sign-in"} />;
  // };
 
  const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("authToken"); //Vérification du token

    if(!token) {
      return <Navigate to="/sign-in" />;
    }

    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" 
        element={<ProtectedRoute><User /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
