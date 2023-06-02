import React from 'react';
import style from '../../../Pages/ImmoKantoor/immokantoor.module.css';
import { useAuthContext } from '../../../contexts/AuthContainer';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Consts/routes';


const ImmoKantoorDetail = () => {
  const { user } = useAuthContext();

    
    return <div className={style.makelaar}>
      <div className={style.makelaarBoven}>
        <div className={style.makelaarBovenSectie}>
          <img className={style.makelaarImg} src="/images/admin.png" alt="img" />
          <div>
            <h1>{user.kantoor}</h1>
          </div>
        </div>
          <div className={style.colom}>
            <Link to={ROUTES.bewerkkantoor}>
              <button className={style.primaireBtn}>Bewerk Kantoor</button>
            </Link>
            <Link to={ROUTES.berichten}>
              <button className={style.primaireBtn}>Berichten</button>
            </Link>

          </div>

      </div>
    </div>
};

export default ImmoKantoorDetail;