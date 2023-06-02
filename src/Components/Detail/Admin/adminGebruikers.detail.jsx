import React from 'react';
import style from '../../../Pages/Admin/admin.module.css';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../Global/Loading/loading';

const AdminGebruikers = () => {
  const {
    isLoading,
    error,
    // invalidate,
    data: gebruikers,
  } = useFetch("/gebruikers");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <div className={style.adminPanden}>
    {gebruikers.map(gebruiker => {
      return <div  className={style.adminCards} 
      key={gebruiker._id}>
        <a href={`/gebruiker/${gebruiker._id}`}>
            <div>
              <img className={style.adminCardsImgGebruiker} src={gebruiker.avatar} alt="img" />
              <div className={style.adminCardsBottom}>
                <p>{gebruiker.first_name} {gebruiker.last_name}</p>
                <p>{gebruiker.soort_gebruiker}</p>
              </div>
            </div>
        </a>
    </div>
    })}
   
              
   </div>
};

export default AdminGebruikers;