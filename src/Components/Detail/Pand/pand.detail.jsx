import React from 'react';
import {  useParams } from "react-router-dom";
import style from '../../../Pages/Pand/pand.module.css';
import Loading from '../../Global/Loading/loading';
import useFetch from '../../../hooks/useFetch';
import { useAuthContext } from '../../../contexts/AuthContainer';


const PandDetail = () => {
  const { id } = useParams();
  const {user} = useAuthContext();

  const {
    isLoading,
    error,
    // invalidate,
    data: pand,
  } = useFetch(`/panden/${id}`);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

      return <div className={style.pandBove}
      key={pand._id}>
        <a href={pand.soort_betaling === 'Te koop' ? '/tekoop' : '/tehuur'} className={style.pandArrow}>
          <img src="/images/arrow.png" alt="pijl" />
        </a>
        <div>
          <img className={style.pand} src={`/images/panden/${pand.foto}`} alt="huis" />
          <h1>{user ? (
              pand.adres
            ) : (
              `${pand.soort_pand} ${pand.soort_betaling}`
            )} - {pand.postcode}</h1>
            <p>{pand.kantoor}</p>
            <p>{pand.datum}</p>
          <div className={style.pandDetails}>
            <div className={style.pandBoveImg}>
              <img src="/images/bed.png" alt="" />
              <p>{pand.slaapkamers}</p>
            </div>
            <p>€ {pand.prijs}</p>
            <p>{pand.groote} m²</p>
            <p>Makelaar</p>
          </div>
          <div className={style.beschrijving}>
              <h1>Beschrijving</h1>
              <p>{pand.beschrijving}</p>
            </div>
        </div>
      </div>

};

export default PandDetail;