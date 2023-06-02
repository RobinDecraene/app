import React from 'react';
import style from '../../../Pages/Admin/admin.module.css';
import Loading from '../../Global/Loading/loading';
import useFetch from '../../../hooks/useFetch';


const AdminPanden = () => {
  const {
    isLoading,
    error,
    // invalidate,
    data: panden,
  } = useFetch("/panden");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <div className={style.adminPanden}>
    {panden.map(pand => {
      return <div  className={style.adminCards} 
      key={pand._id}>
        <a href={`/pand/${pand._id}`}>
      <img className={style.adminCardsImg} src={`/images/panden/${pand.foto}`} alt="img" />
      <div className={style.adminCardsBottom}>
        <p>{pand.adres} - {pand.postcode}</p>
        <div className={style.adminCardsTekst}>
          <div className={style.adminCardsTekst}>
            <img className={style.adminCardsBed} src="/images/bed.png" alt="bed" />
            <p>{pand.slaapkamers}</p>
          </div>
          <p>€ {pand.prijs}</p>
          <p>{pand.groote} m²</p>
        </div>
      </div>
      </a>
    </div>
    })}
   
              
   </div>
};

export default AdminPanden;