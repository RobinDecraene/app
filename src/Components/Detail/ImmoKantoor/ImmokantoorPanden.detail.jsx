import style from '../../../Pages/ImmoKantoor/immokantoor.module.css';
import { useAuthContext } from '../../../contexts/AuthContainer';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../Global/Loading/loading';


export const ImmokantoorPanden = () => {
  const { user } = useAuthContext();
  const {
    isLoading,
    error,
    // invalidate,
    data: panden,
  } = useFetch("/panden");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }


  const filterPanden = panden
  .filter((pand) => {
    return (
      pand.kantoor === user.kantoor
    );
  });

  
  return <div className={style.pandenMakelaar} >
    {filterPanden.map(pand => {
      return <div  className={style.makelaarCards} 
      key={pand._id}>
        <a href={`/pand/${pand._id}`}>
      <img className={style.makelaarCardsImg} src={`/images/panden/${pand.foto}`} alt="img" />
      <div className={style.makelaarCardsBottom}>
        <p>{pand.adres} - {pand.postcode}</p>
        <div className={style.makelaarCardsTekst}>
          <div className={style.makelaarCardsTekst}>
            <img className={style.makelaarCardsBed} src="/images/bed.png" alt="bed" />
            <p>{pand.slaapkamers}</p>
          </div>
          <p>€ {pand.prijs}</p>
          <p>{pand.groote} m²</p>
        </div>
      </div>
      </a>
    </div>
    })}
   
              
   </div>
}

export default ImmokantoorPanden;