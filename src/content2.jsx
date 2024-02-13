import img1 from "./assets/posada-carrusel.png"
import img2 from "./assets/merry-chrispaws-slider.jpg"
import img3 from "./assets/fursommar-slider.jpg"
import img4 from "./assets/furrada-bienestar-1-slider.jpg"
import img5 from "./assets/pawercon-slider.jpg"
import Yulius from "./assets/Yulius-2.jpg"
import fotogrupalFursommar from "./assets/fursommar-grupalfoto.jpg"
import fotogrupalFurrada from "./assets/SEGUNDA-FURRADA.jpg"
import { useEffect,  useRef, useState } from "react"

function Carrusel({cont2}) {

    if(cont2){
        return null;
    }
    

const [hidden1, setHidden1] = useState(true);
const [hidden2, setHidden2] = useState(true);
const [hidden3, setHidden3] = useState(true);
const [hidden4, setHidden4] = useState(true);
const [hidden5, setHidden5] = useState(true);

const hide = () => {
 setHidden1(true); 
 setHidden2(true); 
 setHidden3(true); 
 setHidden4(true); 
 setHidden5(true); 
}

const info1 = () =>{
    hide();
    setHidden1(false);
}

const info2 = () =>{
    hide();
    setHidden2(false);
}

const info3 = () =>{
    hide();
    setHidden3(false);
}

const info4 = () =>{
    hide();
    setHidden4(false);
}

const info5 = () =>{
    hide();
    setHidden5(false);
}



return (

<>

        <div id="carouselExampleCaptions" className="carousel slide">

        <div className="carousel-inner" >
            <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <button onClick={info1} className="btn btn btn-danger font-Weight">Más información</button>
            </div>
            </div>
            <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <button onClick={info2} className="btn btn-danger font-Weight">Más información</button>
            </div>
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <button onClick={info3} className="btn btn-danger font-Weight">Más información</button>
            </div>
            </div>
            <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <button onClick={info4} className="btn btn-danger font-Weight">Más información</button>
            </div>
            </div>
            <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <button onClick={info5} className="btn btn-danger font-Weight">Más información</button>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={hide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={hide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-indicators">
            <button onClick={info1} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button onClick={info2} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button onClick={info3} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button onClick={info4} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button onClick={info5} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        </div>


        <div className="">

            <div id="contenedor-eventos carrusel-txt1" hidden={hidden1}>
                    <div id="contenedor-contenido1">

                        <div className=" space-1" id="cont-eventos">
                            
                            <p className='orden txt' id='titulo1'><strong>POSADA FURRY</strong></p>
                            <p className='txt' id='titulo2'>DOMINGO 12 DE DICIEMBRE</p>
                            <p className='orden txt' id='contenido1'>
                            El <strong>Instituto Mexicano del Furry</strong> es una Organización No Gubernamental (<strong>ONG</strong>) con sede en <strong>Ciudad de México</strong> creada con el fin de ayudar a la integración
                            y crecimiento social, cultural y artístico de las personas pertenecientes al <strong>Furry Fandom en México.</strong> 
                            </p>
                            <p className="orden txt" id='contenido1'>
                            Nos encargamos de organizar eventos de 
                            entretenimiento, como también de índole  cultural con la finalidad de apoyar a nuestros artistas locales, así como difundir y legitimar esta amplia 
                            subcultura a la cual pertenecemos llamada <strong>Furry.</strong> 
                            </p>
                        
                        </div>

                        <div className="space-1" id="cont-eventos">
                            <img src={img2} alt="Contenido"  width="80%" className="imagenes-eventos"/>
                            <p className="txt" id='pie-de-pagina'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt sapiente id similique explicabo
                            </p>
                        </div>
                    </div>
            </div>

            <div id="contenedor-eventos carrusel-txt2" hidden={hidden2}>
                    <div id="contenedor-contenido1">

                        <div className=" space-1" id="cont-eventos">
                            
                            <p className='orden txt' id='titulo1'><strong>MERRY CHRISPAWS</strong></p>
                            <p className='txt' id='titulo2'>10 DE DICIEMBRE DE 2022</p>
                            <p className='orden txt' id='contenido1'>
                            <strong>Merry Chrispaws</strong> se realizó el <strong>10 de Diciembre del 2022 en el Hotel Sevilla</strong> como sede, ubicado en la Ciudad de México.
                            </p>
                            <p className="orden txt" id='contenido1'>
                            La temática tiene inspiración en el invierno y el Art Deco como estilo predominante, queriendo transmitir el sentido de una <strong>elegante velada invernal</strong> a los asistentes. 
                            </p>
                            <p className="orden txt" id='contenido1'>
                            La mascota se llama <strong>Yulius</strong>, haciendo referencia a las festividades del Yule. Tuvo una duración de <strong>7 horas, de las 4:00 p.m. a las 11:00 p.m.,</strong>
                            y contó con un mercado de  <strong>15 artistas, paneles, conciertos en vivo y comida dentro del evento.</strong> Se ofreció un surtido de botanas y bebidas. 
                            </p>
                            <p className="orden txt" id='contenido1'>
                            Éste fué el <strong>primer evento "formal" y "grande" del IMFUR.</strong> Y contó con una asistencia de aproximadamente <strong>180 personas.</strong>
                            </p>
                        
                        </div>

                        <div className="space-1" id="cont-eventos">
                            <img src={Yulius} alt="Contenido"  width="50%" className="imagenes-eventos"/>
                            <p className="txt" id='pie-de-pagina'>
                            Poster del evento con la Mascota "Yulius" <br /> Arte hecho por: "Uchu Haiku"
                            </p>

                        </div>
                    </div>
            </div>

            <div id="contenedor-eventos carrusel-txt3" hidden={hidden3}>
                    <div id="contenedor-contenido1">

                        <div className=" space-1" id="cont-eventos" >
                            
                            <p className='orden txt' id='titulo1'><strong>FURSOMMAR</strong></p>
                            <p className='txt' id='titulo2'>1 de Julio de 2023</p>
                            <p className='orden txt' id='contenido1'>
                            Fursommar <strong>"La diversión no espera a la noche", </strong>fue un evento realizado el <strong>1 de Julio del 2023</strong> en el Hotel Sevilla ubicado en la <strong>Ciudad de México.</strong>
                            </p>
                            <p className="orden txt" id='contenido1'>
                            La temática del evento estuvo inspirada en la festividad sueca
                            llamada<strong>midsommar,</strong> así como en la famosa película homónima del año 2019. La mascota es un oso pardo llamado <strong>"Bjorn".</strong>
                            </p>
                            <p className="orden txt" id='contenido1'>
                            Tuvo una duración de <strong>9 horas, de las 3:00 p.m. a las 12:00 a.m.,</strong> y contó con un mercado de <strong>26 artistas seleccionados, </strong>
                            torneo de <strong>Just Dance, concurso de talentos, conciertos en vivo y comida dentro del evento.</strong> Se sirvió un platillo típico de Suecia denominado 
                            "kotbullar" así como un surtido de snacks y bebidas.
                            </p>
                            <p className='orden txt' id='contenido1'>
                            <strong>El evento tuvo una asistencia de más de 240 personas.</strong>
                            </p>
                        </div>

                        <div className="space-1" id="cont-eventos">
                            <img src={fotogrupalFursommar} alt="Contenido"  width="80%" className="imagenes-eventos"/>
                            <p className="txt" id='pie-de-pagina'>
                            Fotografía conmemorativa con los asistentes. <br/> Cortesía de SnepSnaps.
                            </p>
                        </div>
                    </div>
            </div>

            <div id="contenedor-eventos carrusel-txt4" hidden={hidden4}>
                    <div id="contenedor-contenido1">

                        <div className=" space-1" id="cont-eventos">
                            
                            <p className='orden txt' id='titulo1'><strong>LAS FURRADAS DEL BIENESTAR</strong></p>
                            <p className='txt' id='titulo2'>Fechas Variables</p>
                            <p className='orden txt' id='contenido1'>
                            Las <strong>Furradas del Bienestar</strong> son eventos públicos y recurrentes, cuyo principal punto de encuentro es el <strong>Parque Rufino Tamayo,</strong> a un costado del 
                            Museo Tamayo de Arte Contemporáneo, en Ciudad de México. Ha habido <strong>4 ediciones hasta ahora</strong> desde Julio del 2023, una de ellas realizada en 
                            León, Guanajuato, con diversos motivos como Kermes, Rosca de Reyes, Amor y Amistad, etc.  </p>

                            <p className="orden txt" id='contenido1'>
                            El objetivo de dichos encuentros es <strong>activar la oferta artística y cultural </strong> 
                            de la comunidad así como hacerla <strong>accesible y divertida</strong> a todos los habitantes de la Ciudad y cercanías.
                            </p>
                        
                        </div>

                        <div className="space-1" id="cont-eventos" >
                            <img src={fotogrupalFurrada} alt="Contenido"  width="80%" className="imagenes-eventos"/>
                            <p className="txt" id='pie-de-pagina'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt sapiente id similique explicabo
                            </p>
                        </div>
                    </div>
            </div>

            <div id="contenedor-eventos carrusel-txt5" hidden={hidden5}>
                    <div id="contenedor-contenido1">

                        <div className=" space-1" id="cont-eventos">
                            
                            <p className='orden txt' id='titulo1'><strong>PAWERCON</strong></p>
                            <p className='txt' id='titulo2'>Proximamente</p>
                            <p className='orden txt' id='contenido1'></p>
                            <p className="orden txt" id='contenido1'></p>
                        
                        </div>

                        <div className="space-1" id="cont-eventos">
                            <img src={img5} alt="Contenido"  width="80%" className="imagenes-eventos"/>
                            <p className="txt" id='pie-de-pagina'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt sapiente id similique explicabo
                            </p>
                        </div>
                    </div>
            </div>


        </div>

</>

);
}

export default Carrusel;
