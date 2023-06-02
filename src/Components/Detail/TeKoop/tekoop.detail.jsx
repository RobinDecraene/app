import style from '../../../Pages/TeKoop/tekoop.module.css';
import { useAuthContext } from '../../../contexts/AuthContainer';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../Global/Loading/loading';


export const TeKoopDetail = ({ selectedSoortPanden, sortOrder }) => {
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
      pand.soort_betaling === "Te koop" &&
      (selectedSoortPanden.length === 0 || selectedSoortPanden.includes(pand.soort_pand))
    );
  })
  .sort((a, b) => {
    if (sortOrder === "asc") {
      return a.prijs - b.prijs;
    } else if (sortOrder === "desc") {
      return b.prijs - a.prijs;
    } else {
      return 0; // Maintain the original order if no sorting order is specified
    }
  });

  

  return <div className={style.pandenTeKoop}>
    {filterPanden.map(pand => {
      return <div  className={style.teKoopCards} 
      key={pand._id}>
        <a href={`/pand/${pand._id}`}>
      <img className={style.teKoopCardsImg} src={`/images/panden/${pand.foto}`} alt="img" />
      <div className={style.teKoopCardsBottom}>
        <p className={style.bold}>{user ? (
              pand.adres
            ) : (
              `${pand.soort_pand} ${pand.soort_betaling}`
            )} - {pand.postcode}</p>
            <p className={style.orange}>{pand.kantoor}</p>
        <div className={style.teKoopCardsTekst}>
          <div className={style.teKoopCardsTekst}>
            <img className={style.teKoopCardsBed} src="/images/bed.png" alt="bed" />
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

export default TeKoopDetail;