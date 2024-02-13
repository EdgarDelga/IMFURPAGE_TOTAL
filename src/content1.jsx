import React from 'react'
import styleCont1 from './styleCont1.css'



export default function Content1() {


  return (
    
    <>
    
    <div className="container" id='contAnimacion'>
        <div className="row padding" id='INICIO'>

            <div className="col-6 space-1" id='paddingleft'>
               <p className='orden txt' id='titulo1'><strong>¿QUIENES SOMOS? </strong></p>
               <p className='txt' id='titulo2'> INSTITUTO MEXICANO DEL FURRY </p>
               <p className='orden txt' id='contenido1'>
               El <strong>Instituto Mexicano del Furry</strong> es una Organización No Gubernamental (<strong>ONG</strong>) con sede en <strong>Ciudad de México</strong> creada con el fin de ayudar a la integración
               y crecimiento social, cultural y artístico de las personas pertenecientes al <strong>Furry Fandom en México.</strong> 
               </p>
               <p className="orden txt" id='contenido1'>
               Nos encargamos de organizar eventos de 
               entretenimiento, como también de índole  cultural con la finalidad de apoyar a nuestros artistas locales, así como difundir y legitimar esta amplia 
               subcultura a la cual pertenecemos llamada <strong>Furry.</strong> 
               </p>
               <p className='txt space-100' id='hashtag'>#SOY<strong id='stronghashtag'>IMFUR</strong></p>
            
            </div>

            <div className="col-6">

                <img src="./src/assets/Recurso 4.png" alt="IMFUR LOGO" className='orden'/>
                

            </div>

        </div>
    </div>

            <div id='margen1'>

            <img src="./src/assets/Recurso 5.png" alt="Margenes" width="98%" />

            </div>
    <div className="contenedores">    
        <div className="padding contenedorDefs" id='textos3'>
            <div className="width-titulos3" id='mision'>
               <p className='txt titulos3 space-100'><strong>MISIÓN</strong></p>
               <p className='txt fs-5 space-1 fuente-Italica'>Leales a nuestros valores y objetivos. Nuestra misión es brindarle a nuevos y veteranos miembros 
                                                              de esta familia “Furry”, un <strong>espacio seguro de convivencia;</strong> Así como promover el movimiento <strong>artístico y social</strong> que representa.</p> 
            </div>
            <div className="width-titulos3" id='vision'>
               <p className='txt titulos3 space-100'><strong>VISIÓN</strong></p>
               <p className='txt fs-5 space-1 fuente-Italica'>Congruentes a nuestra misión. Nuestra visión es <strong>crear eventos de reunión</strong> tales como 
               <strong> fiestas y convenciones</strong> para los miembros de nuestra comunidad. Los cuales reflejen la <strong>calidad de los servicios y productos</strong> que como 
               organización ofrecemos y nos posicionen como una de las organizaciones destacadas y referentes de esta industria. </p>
            </div>
            <div className="width-titulos3" id='valores'>
               <p className='txt titulos3 space-100'><strong>VALORES</strong></p>
               <p className='txt fs-5 space-1 fuente-Italica'>  Cooperación 
                                                                Eficacia 
                                                                Evolución 
                                                                Excelencia 
                                                                Integridad 
                                                                Respeto 
                                                                Tolerancia 
                                                                Unidad</p>
            </div>
        </div>
    
    </div>

    <div id='margen1'>

        <img src="./src/assets/Recurso 6.png" alt="Margen Eventos" className='eventos1' id='EVENTOS'/>

    </div>
    </>

    )
}
