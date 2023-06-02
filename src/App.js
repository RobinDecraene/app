import React from 'react';
import AuthContainer from './contexts/AuthContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Components/Global/Header/header';
import Footer from './Components/Global/Footer/footer';
import ROUTES from './Consts/routes';
import TeKoop from './Pages/TeKoop/tekoop';

import TeHuur from './Pages/TeHuur/tehuur';
import Pand from './Pages/Pand/pand';
import Account from './Pages/Account/account';
import Admin from './Pages/Admin/admin';
import Berichten from './Pages/Berichten/berichten';
import Bericht from './Pages/Bericht/bericht';
import BewerkGebruiker from './Pages/BewerkGebruiker/bewerkgebruiker';
import BewerkKantoor from './Pages/BewerkKantoor/bewerkkantoor';
import BewerkPand from './Pages/BewerkPand/bewerkpand';
import NotFound from './Pages/NotFound/notfound';
import Auth from './Pages/Auth/auth';
import Gebruiker from './Pages/Gebruiker/gebruiker';
import ImmoKantoor from './Pages/ImmoKantoor/immokantoor';

function App() {
  return (
    
    <AuthContainer>
     
      <div>
        <Header/>
        <Routes>
        <Route path={ROUTES.auth} element={<Auth/>}/>

          <Route path={ROUTES.tekoop} element={<TeKoop/>}/>
          <Route path={ROUTES.tehuur} element={<TeHuur/>}/>
          <Route path={ROUTES.pand.path} element={<Pand/>}/>

          <Route path={ROUTES.account.path} element={<Account/>}/>
          <Route path={ROUTES.ImmoKantoor} element={<ImmoKantoor/>}/>
          <Route path={ROUTES.admin} element={<Admin/>}/>
          <Route path={ROUTES.gebruiker.path} element={<Gebruiker/>}/>

          <Route path={ROUTES.berichten} element={<Berichten/>}/>
          <Route path={ROUTES.bericht.path} element={<Bericht/>}/>

          <Route path={ROUTES.bewerkgebruiker.path} element={<BewerkGebruiker/>}/>
          <Route path={ROUTES.bewerkkantoor.path} element={<BewerkKantoor/>}/>
          <Route path={ROUTES.bewerkpand.path} element={<BewerkPand/>}/>

          <Route path="/" element={<Navigate to={ROUTES.tekoop} />} />
          <Route path={ROUTES.notFound} element={<NotFound/>}/>

        </Routes>
        <Footer/>
      </div>
    </AuthContainer>);
}

export default App;
