import React, { useState } from 'react';
import style from './tekoop.module.css';
import TeKoopDetail from '../../Components/Detail/TeKoop/tekoop.detail';


const TeKoop = () => {
  const [selectedSoortPanden, setSelectedSoortPanden] = React.useState([]);
  const [sortOrder, setSortOrder] = useState(null);


  const handleSoortPandChange = (value) => {
    if (selectedSoortPanden.includes(value)) {
      setSelectedSoortPanden(selectedSoortPanden.filter((item) => item !== value));
    } else {
      setSelectedSoortPanden([...selectedSoortPanden, value]);
    }
  };

  const handleGoedkoopstChange = (event) => {
    if (event.target.checked) {
      setSortOrder("asc");
    } else {
      setSortOrder(null);
    }
  };

  const handleDuurstChange = (event) => {
    if (event.target.checked) {
      setSortOrder("desc");
    } else {
      setSortOrder(null);
    }
  };


  return (
    <section className={style.tekoop}>
      <div className={style.filter}>
        <div className={style.sorterenOp}>
          <h2>Sorteren op</h2>
          <div>
            <input type="checkbox" name="relevantie" id="relevantie" />
            <label htmlFor="relevantie">Relevantie</label>
          </div>

          <div>
            <input type="checkbox" name="nieuwst" id="nieuwst" />
            <label htmlFor="nieuwst">Nieuwst</label>
          </div>

          <div>
            <input type="checkbox" name="goedkoopst" id="goedkoopst" onChange={handleGoedkoopstChange}/>
            <label htmlFor="goedkoopst">Goedkoopst</label>
          </div>

          <div>
            <input type="checkbox" name="duurst" id="duurst" onChange={handleDuurstChange}/>
            <label htmlFor="duurst">Duurst</label>
          </div>

          <div>
            <input type="checkbox" name="postcode" id="postcode" />
            <label htmlFor="postcode">Postcode</label>
          </div>

        </div>

        <div className={style.soortPand}>
          <h2>Soort pand</h2>
          <div>
            <input type="checkbox" name="appartement" id="appartement" checked={selectedSoortPanden.includes("Appartement")}  onChange={() => handleSoortPandChange("Appartement")}/>
            <label htmlFor="appartement">Appartement</label>
          </div>
          
          <div>
            <input type="checkbox" name="huis" id="huis" checked={selectedSoortPanden.includes("Huis")} onChange={() => handleSoortPandChange("Huis")}/>
            <label htmlFor="huis">Huis</label>
          </div>
        </div>

        <div className={style.prijs}>
          <h2>Prijs</h2>
          <label htmlFor="min">Min</label>
          <input className={style.inputTekoop} type="number" name="min" id="min" />

          <label htmlFor="max">Max</label>
          <input className={style.inputTekoop} type="number" name="max" id="max" />
        </div>
        
        <div className={style.slaapkamers}> 
          <h2>Slaapkamers</h2>
          <label htmlFor="minKamer">Min</label>
          <input className={style.inputTekoop} type="number" name="minKamer" id="minKamer" />

          <label htmlFor="maxKamer">Max</label>
          <input className={style.inputTekoop} type="number" name="maxKamer" id="maxKamer" />
        </div>

      </div>

      <div>
        <TeKoopDetail selectedSoortPanden={selectedSoortPanden} sortOrder={sortOrder}/>
      </div>
      
    </section>

  );
};

export default TeKoop;