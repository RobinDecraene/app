import React from 'react';
import style from './bewerkgebruiker.module.css';
import ROUTES from '../../Consts/routes';
import { useAuthContext } from '../../contexts/AuthContainer';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import BewerkGebruikerDetail from '../../Components/Detail/BewerkGebruiker/bewerkgebruiker.detail';

const BewerkGebruiker = ({ onUpdate }) => {
  const {user} = useAuthContext();

  const navigate = useNavigate();
  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    mutate(`${process.env.REACT_APP_API_URL}/gebruikers/${user._id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        onUpdate();
        navigate(`/gebruikers/${user._id}`);
      },
    });
  };

  console.log({error});

  return (
    <section className={style.bewerkGebruiker} >
      <a href={`${ROUTES.account.to}${user._id}`} className={style.arrow}>
        <img src="/images/arrow.png" alt="" />
      </a>

      <h1>Bewerk profiel</h1>
      {error && <p>{error}</p>}
      <BewerkGebruikerDetail
      onSubmit={handleSubmit}
      isDisabled={isLoading}
      label="Save"
      initialData={user}/>

    </section>
  );

};



export default BewerkGebruiker;