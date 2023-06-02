import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import style from './header.module.css';
import ROUTES from '../../../Consts/routes';
import { useAuthContext } from '../../../contexts/AuthContainer';

const Header = () => {
  
  const {user} = useAuthContext();
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className={style.widthNav}>
          <a href="/" className={style.logo}>Immo</a>
          <div>
            <Link to={ROUTES.tekoop} className={location.pathname === ROUTES.tekoop ? style.activeNav : ''}>Te koop</Link>
            <Link to={ROUTES.tehuur} className={location.pathname === ROUTES.tehuur ? style.activeNav : ''}>Te huur</Link>
            {user?.soort_gebruiker === "Admin" ? (
                <Link to={ROUTES.admin} className={location.pathname === ROUTES.admin ? style.activeNav : ''}>Admin</Link>
              ) : user?.soort_gebruiker === "Makelaar" ? (
                <Link to={ROUTES.ImmoKantoor} className={location.pathname === ROUTES.ImmoKantoor ? style.activeNav : ''}>Mijn Kantoor</Link>
              ) : (
                <>
                  {user ? (
                    <Link to={`${ROUTES.account.to}${user._id}`} className={location.pathname.startsWith(ROUTES.account.to) ? style.activeNav : ''}>Mijn profiel</Link>
                  ) : (
                    <Link to={ROUTES.auth} className={location.pathname === ROUTES.auth ? style.activeNav : ''}>Inloggen</Link>
                  )}
                </>
              )}

          </div>

        </div>

      </nav>

    </header>
  );
};

export default Header;