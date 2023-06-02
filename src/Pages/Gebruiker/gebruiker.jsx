import React from 'react';
import style from './gebruiker.module.css';
import { Link } from 'react-router-dom';
import BewerkGebruikerDetail from '../../Components/Detail/BewerkGebruiker/bewerkgebruiker.detail';


const Gebruiker = () => {
  
  return(
    <section>
      <BewerkGebruikerDetail/>
    </section>
  )

};

export default Gebruiker;