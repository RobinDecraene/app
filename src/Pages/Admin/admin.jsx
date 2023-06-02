import React from 'react';
import style from './admin.module.css';
import { useAuthContext } from '../../contexts/AuthContainer';


import { Link } from 'react-router-dom';
import AdminPanden from '../../Components/Detail/Admin/adminPanden.detail';
import AdminGebruikers from '../../Components/Detail/Admin/adminGebruikers.detail';

const Admin = () => {
  const {logout} = useAuthContext();
  const { user } = useAuthContext();

  return (
    <section className={style.admin}>
    <div className={style.adminBoven}>
      <div className={style.adminBovenSectie}>
        <img src={user.avatar} alt="img" />
        <h1>{user.first_name}</h1>
      </div>

      <button className={style.primaireBtn}>Voeg categorie toe</button>
    </div>

    <div className={style.adminOnder}>
    <h2>Panden</h2>
    <AdminPanden/>

    </div>

    <div className={style.adminOnder}>
      <h2>Immo kantoren</h2>

      <div className={style.adminPanden}>

      <div className={style.adminCards}>
        <div>
          <img className={style.adminCardsImg} src="/images/house.jpg" alt="img" />
          <div className={style.adminCardsBottom}>
            <p>Immo kantoor</p>
            <button className={style.primaireBtn}>Bewerk</button>
          </div>
        </div>
      </div>

      </div>
    </div>

    <div className={style.adminOnder}>
      <h2>Gebruikers</h2>

      <AdminGebruikers/>
    </div>


  <Link to={"/auth"}>
    <button className={style.secondaire} onClick={logout}>Uit loggen</button>
  </Link>

  </section>
  );


};

export default Admin;