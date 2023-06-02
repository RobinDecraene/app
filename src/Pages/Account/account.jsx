import React, { useState } from 'react';
import style from './account.module.css';
import { useAuthContext } from '../../contexts/AuthContainer';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import BewerkGebruiker from '../BewerkGebruiker/bewerkgebruiker';
import Loading from '../../Components/Global/Loading/loading';
import ROUTES from '../../Consts/routes';


const Account = () => {
  const {logout} = useAuthContext();
  const { user } = useAuthContext();
  const [showBewerkGebruiker, setShowBewerkGebruiker] = useState(false);

  const {
    isLoading,
    error,
    invalidate,
    } = useFetch(`/gebruikers`);

  const handleButtonClick = () => {
    setShowBewerkGebruiker(true);
    };
  
    const handleUpdate = () => {
    invalidate();
    };

    if (error) {
      return <p>{error}</p>;
    }
  
    if (isLoading) {
      return <Loading />;
    }
  

    if (showBewerkGebruiker) {
      return(
      <BewerkGebruiker onUpdate={handleUpdate} />
      )
    
      } else return (
    <section>
    <div className={style.account}>
      <div className={style.accountBoven}>
        <div className={style.accountBovenSectie}>
          <img className={style.accountImg} src={user.avatar} alt="img" />
          <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <p>{user.postcode}</p>
          </div>
        </div>
        <button className={style.primaireBtn} onClick={handleButtonClick}>
          Bewerk profiel
        </button>

      </div>

      <div className={style.accountOnder}>
        <h2>Mijn favorieten</h2>

          <div className={style.accountCards}>
            <div>
              <img className={style.accountCardsImg} src="/images/house.jpg" alt="img" />
              <div className={style.accountCardsBottom}>
                <p>Adres</p>
                <div className={style.accountCardsTekst}>
                  <div className={style.accountCardsTekst}>
                    <img className={style.accountCardsBed} src="/images/bed.png" alt="bed" />
                    <p>1</p>
                  </div>
                  <p>prijs</p>
                  <p>grootte</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    <Link to={ROUTES.auth}>
      <button className={style.secondaire} onClick={logout}>Uit loggen</button>
    </Link>

  </div>
      
      
      
    </section>
  )

};

export default Account;