import logo from "./assets/Recurso 1.png"
import facebook from "./assets/Recurso 10.png"
import tg from "./assets/Recurso 9.png"
import frase from "./assets/Recurso 7.png"

function Footer() {
    return (  
        <>
        <div id='margen2'>

            <img src="./src/assets/Recurso 5.png" alt="Margenes" width="98%" />

        </div>


        <div className="footer-Container">

                <div className="footer-Element">

                    <div className="element">
                        <img src={logo} alt="Logo IMFUR" width="100%"/>
                    </div>
                    <div className="element" id="columnas-footer">
                        <a href="" className="text1 etiquetas-footer">Solicita una credencial</a>
                        <a href="" className="text1 etiquetas-footer">Quejas y sugerencias</a>
                        <p className="txt-footer">Sigenos en:</p>
                        <img src={facebook} alt="Icono FB" className="iconos-footer" />
                    </div>
                    <div className="element">
                        <p className="txt-footer">Únete a la comunidad</p>
                        <div>
                        <img src={facebook} alt="Icono FB" className="iconos-footer" />
                        <img src={tg} alt="Icono TG" className="iconos-footer"/>
                        </div>
                    </div>
                    <div className="element">
                        <img src={frase} alt="Frase IMFUR" width="60%"  />
                    </div>

                </div>

        </div>
        
        </>
    );
}

export default Footer;