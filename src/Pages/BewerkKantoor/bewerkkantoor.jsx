import React from 'react';
import style from './bewerkkantoor.module.css';


const BewerkKantoor = () => {
  return (
    <section className={style.account}>
      <div className={style.accountBoven}>
        <div className={style.accountBovenSectie}>
          <img src="" alt="img" />
          <div>
            <h1>Voornaam naam</h1>
            <p>Postcode</p>
          </div>
        </div>

        <button className={style.primaireBtn}>Bewerk profiel</button>
      </div>

      <div className={style.accountOnder}>
        <h2>Mijn favorieten</h2>

        <div>
          <img src="" alt="img" />
          <img src="" alt="img" />
        </div>
      </div>

      <button className={style.secondaire}>Uit loggen</button>


    </section>

  );


};

export default BewerkKantoor;