import { Route, Routes } from 'react-router';
import './App.scss';
import { LogIn, ForgotPassword, ForgotPasswordEmail } from '@/pages';

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

