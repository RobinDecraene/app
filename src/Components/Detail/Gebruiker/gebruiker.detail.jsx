import React, { useState } from 'react';
import style from '../../../Pages/Gebruiker/gebruiker.module.css';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../Global/Loading/loading';
import BewerkGebruiker from '../../../Pages/BewerkGebruiker/bewerkgebruiker';



const GebruikerDetail = () => {
  const { id } = useParams();
  const [showBewerkGebruiker, setShowBewerkGebruiker] = useState(false);

  const {
    isLoading,
    error,
    invalidate,
    data: gebruiker,
    } = useFetch(`/gebruikers/${id}`);

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
    
      } else return ( <div className={style.gebruiker}>
        <div className={style.arrow}>
        <Link to={"/admin"} >
            <img  src="/images/arrow.png" alt="pijl" />
        </Link>
        </div>

      <div className={style.gebruikerBoven}>
        <div className={style.gebruikerBovenSectie}>
          <img className={style.gebruikerImg} src={gebruiker.avatar} alt="img" />
          <div>
            <h1>{gebruiker.first_name} {gebruiker.last_name}</h1>
            <p>{gebruiker.postcode}</p>
          </div>
        </div>
        <button className={style.primaireBtn} onClick={handleButtonClick}>
          Bewerk profiel
        </button>

      </div>

      <div className={style.gebruikerOnder}>
        <h2>Favorieten</h2>

          <div className={style.gebruikerCards}>
            <div>
              <img className={style.gebruikerCardsImg} src="/images/house.jpg" alt="img" />
              <div className={style.gebruikerCardsBottom}>
                <p>Adres</p>
                <div className={style.gebruikerCardsTekst}>
                  <div className={style.gebruikerCardsTekst}>
                    <img className={style.gebruikerCardsBed} src="/images/bed.png" alt="bed" />
                    <p>1</p>
                  </div>
                  <p>prijs</p>
                  <p>grootte</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
      
  )

};

export default GebruikerDetail;