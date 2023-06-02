import React from 'react';
import style from './bericht.module.css';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Global/Loading/loading';
import { Link, useParams } from 'react-router-dom';
import ROUTES from '../../Consts/routes';

const Bericht = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    // invalidate,
    data: bericht,
  } = useFetch(`/berichten/${id}`);
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className={style.bericht}>
      <div className={style.berichtArrow}>
        <Link to={ROUTES.berichten}>
          <img src="/images/arrow.png" alt="arrow" />
        </Link>
        
        <h1>{bericht.pand}</h1>
      </div>

      <div className={style.berichtVeld}>
        <p className={style.donker}><span>{bericht.bericht}</span>
        <span></span>
        <span>Email: {bericht.email}</span>
        GSM nummer: {bericht.telefoonnummer}</p>
        
      </div>
      <div className={style.sendmessage}>
        <input className={style.inputBericht} type="text" name="antwoordbalk" id="antwoordbalk" />
        <button className={style.primaireBtn}>Verstuur</button>
      </div>
      
      

  </section>
  );


};

export default Bericht;