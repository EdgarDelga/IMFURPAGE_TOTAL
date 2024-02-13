import AlferezA from "./assets/PAQUETES/ALFEREZ/Rangos Pawercon_2 Alferez B.png"
import ComandanteA from "./assets/PAQUETES/COMANDANTE/Rangos Pawercon_3 Comandante B.png"
import CapitanA from "./assets/PAQUETES/CAPITAN/Rangos Pawercon_4 Capitan A-08.png"
import AlferezB from "./assets/PAQUETES/ALFEREZ/Rangos_Alferez_B.png"
import ComandanteB from "./assets/PAQUETES/COMANDANTE/Rangos_Comandante_B.png"
import CapitanB from "./assets/PAQUETES/CAPITAN/Rangos_Capitan_B.png"
import estancia from './assets/PawerconEstancia.png'
import { useState } from "react"

function Paquetes() {

    const [precios, setprecios] = useState('Precios');

   const [animacion, setAnimacion] = useState('');
   const clickAlferez = () => {setAnimacion(' animacionAlferez'); setprecios(" Precios");};

   const [animacion2, setAnimacion2] = useState('');
   const clickComandante = () => {setAnimacion2(' animacionAlferez'); setprecios(" Precios");};

   const [animacion3, setAnimacion3] = useState('');
   const clickCapitan = () => {setAnimacion3(' animacionAlferez'); setprecios(" Precios");};


    return ( 
        <>
        
    <div className="cardsContainer">

        <div>
            <img src={AlferezA} alt="Alferez" id="alferezIcon"/>
        </div>

        <div>
            <img src={ComandanteA} alt="Comandante" id="comandanteIcon" />
        </div>

        <div>
            <img src={CapitanA} alt="Capitan" id="capitanIcon"/>
        </div>

    </div>

    <div className="cardsContainer2">
        
        <div className="orden-elementos">
            <h1 className={precios + animacion} id="cardAlferez">$850 MXN</h1>
            <img src={AlferezB} alt="Elementos Alferez" className={animacion} id="cardAlferez" onClick={clickAlferez} />
        </div>

        <div  className="orden-elementos">
            <h1 className={precios + animacion2} id="cardComandante">$1100 MXN</h1>
            <img src={ComandanteB} alt="Elementos Comandante" className={animacion2} id="cardComandante" onClick={clickComandante}/>
        </div>

        <div  className="orden-elementos">
            <h1 className={precios + animacion3} id="cardCapitan">$1600 MXN</h1>
            <img src={CapitanB} alt="Elementos Capitan" className={animacion3} id="cardCapitan" onClick={clickCapitan}/>
            
        </div>
        
    </div>

    <div className={"estancia" + animacion3 + animacion + animacion2}>
            <div>
            <img src={estancia}/>
            <p> Ninguno de los paquetes incluye la estadía. 
                La estadía es indispensable para asistir a 
                la Pool Party.</p>
            </div>
            <div>
                <h3>HABITACIÓN</h3>
                <h2>DOBLE</h2>
                <h1>$3500 MXN</h1>
                <p>3 PERSONAS</p>
                <p>3 NOCHES <br />(17, 18 y 19 DE MAYO)</p>
            </div>
            <div>
                <h3>HABITACIÓN</h3>
                <h2>SENCILLA</h2>
                <h1>$2500 MXN</h1>
                <p>2 PERSONAS</p>
                <p>3 NOCHES <br />(17, 18 y 19 DE MAYO)</p>
            </div>
        </div>
      
        </>
     );
}

export default Paquetes;