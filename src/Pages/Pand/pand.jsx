import React, { useState } from 'react';
import style from './pand.module.css';
import { useAuthContext } from '../../contexts/AuthContainer';
import PandDetail from '../../Components/Detail/Pand/pand.detail';
import useMutation from '../../hooks/useMutation';


const Pand = () => {
  const {user} = useAuthContext();
  const {  mutate } = useMutation();


  const [data, setData] = useState({
      naam: '',
      voornaam: '',
      email: '',
      telefoonnummer: '',
      bericht: '',
  });


  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/berichten`, {
      method: "POST",
      data,
      onSuccess: () => {
        console.log('succes')
      },
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={style.pand}>
      <PandDetail/>

      {user ? (
        <div className={style.pandOnder}>
        <h1>Neem contact op</h1>
        <form action="" className={style.formPand} onSubmit={handleSubmit}>
        <div className={style.formRow}>
          <div >
            <label htmlFor="naam">Naam</label>
            <input className={style.inputPand} type="text" name="naam" id="naam" value={data.naam} onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="voornaam">Voornaam</label>
            <input className={style.inputPand} type="text" name="voornaam" id="voornaam" value={data.voornaam} onChange={handleChange}/>
          </div>
        </div>

        <div className={style.widht}>
          <label htmlFor="email">Email</label>
          <input className={style.inputPand} type="text" name="email" id="email" value={data.email} onChange={handleChange}/>
        </div>

        <div className={style.widht}>
          <label htmlFor="telefoonnummer">Telefoonnummer</label>
          <input className={style.inputPand} type="tel" name="telefoonnummer" id="telefoonnummer" value={data.telefoonnummer} onChange={handleChange}/>
        </div>

        <div className={style.widht}>
          <label htmlFor="bericht">Bericht</label>
          <textarea  name="bericht" id="bericht" value={data.bericht} onChange={handleChange}/>
        </div>

          <button type="submit" className={style.secondaire}>Verzend</button>
        </form>
      </div>
      ) : (
        <div>

        </div>
      )}
      

  </section>
  )




};

export default Pand;