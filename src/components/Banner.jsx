function Banner() {
    return (
        <div className="banner">
            <div className="texto-banner">
            <h2>CREANDO VIDA<br></br> EN CADA MACETA</h2>
            <p className="p-desktop">Descubre nuestra amplia variedad de macetas hechas a mano, perfectas para realzar la belleza de tus plantas y decorar tus espacios. Calidad, diseño y amor por la naturaleza en cada pieza.<br></br>¡Dale vida a tu hogar con nosotros!</p>
            <p className="p-mobile">Descubre nuestra amplia variedad de macetas hechas a mano, perfectas para realzar la belleza de tus plantas y decorar tus espacios</p>
            </div>
            <figure>                  
            <picture >
                <source media="(max-width: 378px)" srcSet="./banner-cel-2.jpg"/>
                <source media="(max-width: 576px)" srcSet="./banner.jpg"/>
                <source media="(max-width: 768px)" srcSet="./banner.jpg"/>
                <source media="(max-width: 991px)" srcSet="./banner.jpg"/>
                <img src="./banner.jpg" alt="banner de portada imagen de macetas"/>
            </picture>
          </figure>
        </div>
    );
  }
  
  export default Banner;