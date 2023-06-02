import React from 'react';
import Login from './Login/login';
// import Registreer from './Registreren/registreren';
import { useAuthContext } from '../../contexts/AuthContainer';

const Auth = () => {
  const { handleLogin } = useAuthContext();

  return (
    
      <div>
        <Login onLogin={handleLogin} />
      </div>
  );
};

export default Auth;