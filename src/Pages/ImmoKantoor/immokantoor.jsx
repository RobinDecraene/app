import React from 'react';
import style from './immokantoor.module.css';
import { useAuthContext } from '../../contexts/AuthContainer';
import ImmoKantoorDetail from '../../Components/Detail/ImmoKantoor/immokantoor.detail';
import ImmokantoorPanden from '../../Components/Detail/ImmoKantoor/ImmokantoorPanden.detail';
import { Link } from 'react-router-dom';
import ROUTES from '../../Consts/routes';


const ImmoKantoor = () => {
  const {logout} = useAuthContext();

  return (
    <section className={style.makelaar}>
      <ImmoKantoorDetail/>

      <div className={style.makelaarOnder}>
        <h2>Mijn panden</h2>
          <ImmokantoorPanden/>
      </div>

      <h3>Voeg een makelaar toe</h3>

      <form action="" className={style.makelaarForm}>
      <div>
            <label htmlFor="email">Email</label>
            <input className={style.inputMakelaar} type="text" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="wachtwoord">Wachtwoord</label>
            <input className={style.inputMakelaar} type="password" name="wachtwoord" id="paswoord" />
          </div>

            <button className={style.secondaire}>Voeg toe</button>
      </form>
      <Link to={ROUTES.auth}>
        <button className={style.secondaire} onClick={logout}>Uit loggen</button>
      </Link>

  </section>
  );


};

export default ImmoKantoor;