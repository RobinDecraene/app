import React, { useState } from 'react';
import style from '../Login/login.module.css';
import useMutation from '../../../hooks/useMutation';
import { useAuthContext } from '../../../contexts/AuthContainer';
import Login from '../Login/login';

const Registreer = ({ onLogin }) => {
  const { error, mutate } = useMutation();
  const { handleLogin } = useAuthContext();
  const [showLogin, setShowLogin] = useState(false);

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
    setShowLogin(true);
    };
  

  if (showLogin) {
    return(
    <Login onLogin={handleLogin} />
    )
  
    } else return (
  <section className={style.login}>
    <h1 className={style.h1Login}>Welkom bij Immo</h1>
    <form className={style.formLogin} onSubmit={handleSubmit}>
      {error && <p>{error}</p>}

      <div className={style.formRow}>
        <div>
          <label htmlFor="first_name">Voornaam</label>
          <input className={style.inputLogin} type="text" name="first_name" id="first_name" value={data.first_name}
            onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="last_name">Naam</label>
          <input className={style.inputLogin} type="text" name="last_name" id="last_name" value={data.last_name}
            onChange={handleChange} />
        </div>
      </div>

      <div className={style.widht}>
        <label htmlFor="email">Email</label>
        <input className={style.inputLogin} type="text" name="email" id="email" value={data.email}
          onChange={handleChange} />
      </div>

      <div className={style.widht}>
        <label htmlFor="phone_number">Telefoonnummer</label>
        <input className={style.inputLogin} type="tel" name="phone_number" id="phone_number" value={data.phone_number}
          onChange={handleChange} />
      </div>

      <div className={style.widht}>
        <label htmlFor="password">Wachtwoord</label>
        <input className={style.inputLogin} type="password" name="password" id="password" value={data.password}
          onChange={handleChange} />
      </div>

      <div className={style.widht}>
        <label htmlFor="date_of_birth">Verjaardag</label>
        <input className={style.inputLogin} type="date" name="date_of_birth" id="date_of_birth" value={data.date_of_birth}
          onChange={handleChange} />
      </div>

      <div className={style.widht}>
        <label htmlFor="postcode">Postcode</label>
        <input className={style.inputLogin} type="number" name="postcode" id="postcode" value={data.postcode}
          onChange={handleChange} />
      </div>

      <div className={style.widht}>
        <label htmlFor="avatar">Profielfoto</label>
        <input className={style.inputLogin} type="text" name="avatar" id="avatar" value={data.avatar}
          onChange={handleChange} />
      </div>

      <button type="submit" className={style.secondaire}>Registreer</button>
      <p>Nog geen account? <button className={style.tertaireBtn} onClick={handleButtonClick}>Log in</button></p>
    </form>
  </section>
  );


};

export default Registreer;