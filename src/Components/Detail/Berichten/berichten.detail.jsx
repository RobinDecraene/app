import React from 'react';
import style from '../../../Pages/Berichten/berichten.module.css';
import useFetch from '../../../hooks/useFetch';
import { useAuthContext } from '../../../contexts/AuthContainer';
import Loading from '../../Global/Loading/loading';



const BerichtenDetail = () => {
  const { user } = useAuthContext();
  const {
    isLoading,
    error,
    // invalidate,
    data: berichten,
  } = useFetch("/berichten");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }


  const filterberichten = berichten
  .filter((bericht) => {
    return (
      bericht.kantoor === user.kantoor
    );
  });

  
  return <div className={style.berichtenCards} >
    {filterberichten.map(bericht => {
      return <div  className={style.berichtenCard} 
      key={bericht._id}>
        <a href={`/bericht/${bericht._id}`}>
        <div className={style.berichtenCardDetails}>
          <div>
            <h2>{bericht.pand}</h2>
            <p>{bericht.bericht.split(' ').slice(0, 10).join(' ')}...</p>
          </div>

            <p>{bericht.voornaam} {bericht.naam}</p>
        </div>


      </a>
    </div>
    })}
   
              
   </div>



};

export default BerichtenDetail;