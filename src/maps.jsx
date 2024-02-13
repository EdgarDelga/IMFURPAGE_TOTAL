function Maps() {
    return ( 

        <>
        <div className="mapa-contenedor">
        <iframe 
                className="mapa"
                tittle="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.527884942479!2d-99.15890868854943!3d19.432794340597592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d2b12053a1%3A0xe63cc34359ce01b0!2sHotel%20Sevilla%20Palace!5e0!3m2!1ses-419!2smx!4v1706758885865!5m2!1ses-419!2smx"
                width="100%" 
                height="500" 
                style= {{border:0}}  
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">    
                </iframe>
        </div>
        </>

     );
}

export default Maps;