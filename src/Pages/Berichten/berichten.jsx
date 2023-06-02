import React from 'react';
import style from './berichten.module.css';
import BerichtenDetail from '../../Components/Detail/Berichten/berichten.detail';
import ROUTES from '../../Consts/routes';
import { Link } from 'react-router-dom';


const Berichten = () => {
  return (
    <section className={style.berichten}>
      <div className={style.berichtArrow}>
        <Link to={ROUTES.ImmoKantoor}>
          <img src="/images/arrow.png" alt="arrow" />
        </Link>
        
        <h1>Berichten</h1>
      </div>

      <BerichtenDetail/>

  </section>
  );


};

export default Berichten;