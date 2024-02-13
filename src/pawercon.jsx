import pawercon from "./assets/CARTEL-PAWER-WEB.png"
import Maps from "./maps"
import Paquetes from "./paquetes";
import Stars from "./stars";
import ilustracionPawer from './assets/Ilustracion-pawer.jpg'
import imgPixel from './assets/TakiIconFinal.png'
import bordesBajos from './assets/Recurso2-lineas.png'
import estrellita from './assets/Recurso3-fugaz.png'
import hotel1 from './assets/imgHotel1.jpg'
import hotel2 from './assets/imgHotel2.webp'
import hotel3 from './assets/imgHotel3.jpg'
import hotel4 from './assets/imgHotel4.jpg'
import hotel5 from './assets/imgHotel5.jpg'
import hotel6 from './assets/imgHotel6.jpg'
import hotel7 from './assets/imgHotel7.jpg'
import hotel8 from './assets/imgHotel8.jpg'
import mercadoFurry from './assets/Recurso1-mercado.png'
import { useState } from "react";

function Pawercon() {  

    const [linkSevilla, setLinkSevilla] = useState('https://www.sevillapalace.com.mx');
    const [linkArtista, setLinkArtista] = useState('https://forms.gle/zdkFbYzEk1csMmCh9');

    const clickArtista = () =>{
        window.open(linkArtista)
    }

    const ClickSevilla = () => {
        window.open(linkSevilla)
    }

    const Lineas = () => {
        return(
            <>
            <img src={bordesBajos} alt="" id="bordesBajos" />
            <br />
            <br />
            <br />
            </>
        )
    }

    const Estrellita = () =>{
        return(
            <>
            <img src={estrellita} id="estrellita"/>
            </>
        )
    }

    return ( 
        <>

        <div className="pawerconPAGE">
            <div id="contenedorImgPawer">
            <img src={pawercon} alt=""  id="imagen-Pawercon"/>
            </div>
        <div className="Parrafos">
            <div className="ParrafosIMG">
                <img src={ilustracionPawer} alt="" id="imagenPawerRecortar"/>
                <p> Ilustración por Uchu Haiku Art, 2024</p>
            </div>
            <div className="ParrafosTxt">
            <h1><img src={imgPixel} id="pixelIMG" />¿QUE ES PAWERCON?</h1>
            <p> PAWERCON es una nueva convención en Ciudad de México hecha por el Instituto 
                Mexicano del Furry para la comunidad furry del centro del país, para 
                proporcionarle nuevas e increíbles experiencias a través de espacios seguros, 
                actividades de entretenimiento y un ambiente ameno. La edición de  Mayo del 
                2024 es la primera edición de este evento.</p>
            <p>    PAWERCON es un evento exclusivo para mayores de edad debido al principio de 
                no poner en riesgo la integridad de nadie, y dejar a todos disfrutar del amplio 
                abanico de posibilidades que ofrecemos, siempre con responsabilidad. </p>
            <p>     ¿Que nos hace diferentes a los demás? Que damos siempre propuestas nuevas y 
                buscamos la satisfacción de todos nuestros invitados, sean artistas, sean 
                asistentes, sean staff, y quien sea que desee simplemente vivir nuevas aventuras. </p>
            <br /> <br />
            <h1><img src={imgPixel} id="pixelIMG" />¿QUE ES SPACE OPERA?</h1>
            <p> El Space Opera, es un subgénero de la ciencia ficción que abarca un amplio 
                espectro de medios tales como novelas, películas, series, videojuegos, entre 
                otros, cuya principal trama ocurre alrededor de una guerra desarrollada en el 
                espacio exterior, donde facciones de mundos o galaxias diferentes con ideales 
                radicalmente opuestos, libran un conflicto armado de gran escala</p>
            <p> Las tramas del space opera suelen incluir arquetipos cliché como villanos y 
                heroes muy marcados, viajes a través del espacio, grandes navíos, planetas y 
                seres  exóticos y surreales, grandes potencias totalitarias, y tecnología muy 
                avanzada</p>
            <p> Algunos exponentes del género son: Star Wars, Star Trek, Dune, Guardianes de 
                la Galaxia, Starfox, El Quinto Elemento, Final Space, Cowboy Bebop, Halo, etc.  </p>
                <Estrellita/>
            </div>
        </div>

        <Lineas/>
        
        <div className="Fechas">
        <h1><img src={imgPixel} id="pixelIMG2" />FECHAS Y HORARIOS</h1>
        <p>La convención tiene una duración de tres días: 17, 18 y 19 de Mayo del 2024</p>
        </div>
        <br /><br />
        <div className="FechasCardsContainer">
            <div className="cardFecha">
                <div className="cardTitulo">
                <h3>VIERNES</h3>
                <h1>17 DE MAYO</h1>
                <h2>12:00 Hrs.</h2>
                <br />
                </div>
                <div>
                <p> Se realizarán los preregistros a 
                    partir de las 12:00 p.m. y podrán 
                    asistir tanto a una comida grupal 
                    como a una Pool Party que es 
                    EXCLUSIVA para los asistentes que 
                    también cuenten con una habitación 
                    dentro del hotel</p>
                </div>
            </div>

            <div className="cardFecha">
            <div className="cardTitulo">
                <h3>SÁBADO</h3>
                <h1>18 DE MAYO</h1>
                <h2>15:00 - 00:00 Hrs.</h2>
            </div>
            <div>
                <br />
                <p> Se realizará la INAUGURACIÓN 
                    formal del evento a las 3:00 p.m. Se 
                    abrirá al público la venta de arte en 
                    la sección Mi Mercado Furro, habrá 
                    muchas actividades durante el día, 
                    incluyendo el Drink & Draw 
                    promocionado por Shibentos y El 
                    Pulquerrimo Naranjoso, conciertos 
                    en vivo, y el rave durante la noche 
                    que durará hasta las 12:00 a.m</p>
            </div>
            </div>

            <div className="cardFecha">
            <div className="cardTitulo">
                <h3>DOMINGO</h3>
                <h1>19 DE MAYO</h1>
                <h2>10:00 - 18:00 Hrs.</h2>
            </div>
            <div>
                <br />
                <p> Habrá más actividades y conciertos 
                    a partir de las 10:00 a.m. entre las 
                    que destacan el Concurso de 
                    Lipsync, el Desfile de Moda Furry, 
                    Espacial y Alternativa, La Gran 
                    Subasta y la Clausura a las 6:00 
                    p.m.</p>
            </div>
            </div>

        </div>
        <br /> <br />

        <div className="Itinerario">
        <h1><img src={imgPixel} id="pixelIMG2" />ITINERARIO DE ACTIVIDADES</h1>
        <p><strong>PRÓXIMO A ANUNCIARSE</strong></p>
        </div>
        <br /><br /><br /><br />

        <div className="Sede">
        <h1><img src={imgPixel} id="pixelIMG2" />SEDE Y UBICACIÓN</h1>
        <p> La sede de la convención será el Hotel Sevilla Palace, ubicado en Avenida Paseo de la Reforma 105, Colonia 
            Tabacalera, Alcaldía Cuahutemoc, Ciudad de México, México. C.P. 06030</p>
            <Maps/>
        <p>Las actividades y el desarrollo del evento se llevarán a cabo en el Salón Murillo y Salón Goya del respectivo hotel.</p>
        <div className="tituloGaleria">
        <h1>HOTEL SEVILLA PALACE</h1>
        </div>
        <div className="galeria">
        <img src={hotel1} className="imagenes"/>
        <img src={hotel2} className="imagenes"/>
        <img src={hotel3} className="imagenes"/>
        <img src={hotel4} className="imagenes"/>
        <img src={hotel5} className="imagenes"/>
        <img src={hotel6} className="imagenes"/>
        <img src={hotel7} className="imagenes"/>
        <img src={hotel8} className="imagenes"/>
        </div>
        <div className="tituloGaleria">
        <h2>Fotos: Hotel Sevilla Palace</h2>
        <a onClick={ClickSevilla} ><p>Sitio web: <strong>https://www.sevillapalace.com.mx</strong></p></a>
        </div>
        </div>
        <br />
        <br />

        <Lineas/>
        <div className="Itinerario">
        <h1><img src={imgPixel} id="pixelIMG2" />PAQUETES</h1>
        </div>
        <Paquetes/>
        <div className="Itinerario">
        <h1><img src={imgPixel} id="pixelIMG2" />REGISTRO</h1>
        <h2>¡ÚNETE AHORA A LA FLOTA!</h2>
        <p><strong>DISPONIBLE A PARTIR DE MARZO</strong></p>
        </div>

        <div className="mercadoFurrTitulo">
        <h1><img src={imgPixel} id="pixelIMG2" />REGISTRO PARA ARTISTAS Y VENDEDOES</h1>
        </div>

        <div className="mercadoFurry">
            <div className="mercadoFurryIMG">
            <img src={mercadoFurry} />
            </div>
            <div className="mercadoFurryTxt">
            <p> "MI MERCADO FURRO" es el nombre que recibe el área donde artistas, vendedores, 
                marcas y colectivos podrán exhibir y ofrecer su mercancía.</p>
            <p> "MI MERCADO KINKY" es una sección similar a la primera, pero será exclusiva para 
                material NSFW.</p>
            <p> Cada artista sólo puede participar en una de las dos secciones, y sólo pueden llevar un 
                asistente.</p>
            <p> No importa si eres un artista, una marca o un colectivo ¡PUEDES PARTICIPAR!</p>
            <p> El pago por las mesas se realizará posterior al registro y se mandará por correo. </p>
            </div>
        </div>
        <div className="registroMercado">
            <h2>Link del Registro</h2>
            <a onClick={linkArtista}><strong>https://forms.gle/zdkFbYzEk1csMmCh9</strong></a>
        </div>

        </div>
        <Stars/>
        </>
     );
}

export default Pawercon;