import React, { useState } from 'react';
import style from './login.module.css';
import useMutation from '../../../hooks/useMutation';
import Registreer from '../Registreren/registreren';
import { useAuthContext } from '../../../contexts/AuthContainer';

const Login = ({ onLogin }) => {
  const { error, mutate } = useMutation();
  const { handleLogin } = useAuthContext();
  const [showRegistreer, setShowRegistreer] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/auth`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };

  const handleButtonClick = () => {
    setShowRegistreer(true);
    };
  

    if (showRegistreer) {
      return(
      <Registreer onLogin={handleLogin} />
      )
    
      } else return (
    <section className={style.login}>
      <h1 className={style.h1Login}>Welkom terug!</h1>
      <form className={style.formLogin} onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
        <div>
          <label htmlFor="email">Email</label>
          <input className={style.inputLogin} type="email" name="email" id="email" value={data.email} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="wachtwoord">Wachtwoord</label>
          <input className={style.inputLogin} type="password" name="password" id="paswoord" value={data.password} onChange={handleChange}/>
        </div>

          <button type="submit" className={style.secondaire}>Log in</button>
          <p>Nog geen account? <button className={style.tertaireBtn} onClick={handleButtonClick}>Registreer u hier</button></p>
      </form>
    </section>
  );


};

export default Login;
