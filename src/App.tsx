import { Route, Routes } from 'react-router';
import LogIn from './pages/auth/logIn/LogIn';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import ForgotPasswordEmail from './pages/ForgotPasswordEmail';
import './App.scss';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LogIn />} />
      <Route path='/email' element={<ForgotPasswordEmail />} />

      <Route path='/forgot-password' element={<ForgotPassword />} />
    </Routes>
  );
};

export default App;

