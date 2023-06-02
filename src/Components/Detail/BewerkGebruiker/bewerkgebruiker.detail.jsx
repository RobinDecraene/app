import { useState } from "react";
import style from '../../../Pages/BewerkGebruiker/bewerkgebruiker.module.css';

const BewerkGebruikerDetail = ({ onSubmit, initialData = {} }) => {
  const [data, setData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
  date_of_birth: "",
  postcode: "",
  avatar: "",
  ...initialData,
  });

  const handleChange = (e) => {
  setData({
  ...data,
  [e.target.name]: e.target.value,
  });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  onSubmit(data);
  };

  return (
  <form action="" className={style.formPand} onSubmit={handleSubmit}>
    <div className={style.formRow}>
      <div>
        <label htmlFor="first_name">Voornaam</label>
        <input className={style.inputPand} type="text" name="first_name" id="first_name" value={data.first_name}
          onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="last_name">Naam</label>
        <input className={style.inputPand} type="text" name="last_name" id="last_name" value={data.last_name}
          onChange={handleChange} />
      </div>
    </div>

    <div className={style.widht}>
      <label htmlFor="email">Email</label>
      <input className={style.inputPand} type="text" name="email" id="email" value={data.email} onChange={handleChange} />
    </div>

    <div className={style.widht}>
      <label htmlFor="phone_number">Telefoonnummer</label>
      <input className={style.inputPand} type="tel" name="phone_number" id="phone_number" value={data.phone_number}
        onChange={handleChange} />
    </div>

    <div className={style.widht}>
      <label htmlFor="password">Wachtwoord</label>
      <input className={style.inputPand} type="password" name="password" id="password" value={data.password}
        onChange={handleChange} />
    </div>

    <div className={style.widht}>
      <label htmlFor="date_of_birth">Verjaardag</label>
      <input className={style.inputPand} type="date" name="date_of_birth" id="date_of_birth" value={data.date_of_birth}
        onChange={handleChange} />
    </div>

    <div className={style.widht}>
      <label htmlFor="postcode">Postcode</label>
      <input className={style.inputPand} type="number" name="postcode" id="postcode" value={data.postcode}
        onChange={handleChange} />
    </div>

    <div className={style.widht}>
      <label htmlFor="avatar">Profielfoto</label>
      <input className={style.inputPand} type="text" name="avatar" id="avatar" value={data.avatar}
        onChange={handleChange} />
    </div>

    <button type="submit" className={style.secondaire}>Bewerk profiel</button>

  </form>
  );
};

export default BewerkGebruikerDetail;