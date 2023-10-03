import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importe os estilos do carrossel

const ImgPassar = () => {
  const carouselProps = {
    showThumbs: false, // Ocultar miniaturas
    showStatus: false, // Ocultar status (número de slide atual)
    interval: 2000, // Definir intervalo de transição em milissegundos (3 segundos no exemplo)
    infiniteLoop: true, // Permitir loop infinito
    autoPlay: true, // Iniciar a reprodução automática
  };

  const imageStyles = {
    maxWidth: '50%', // Diminuir o tamanho da imagem para 50% do contêiner
    maxHeight: '600px', // Altura máxima da imagem
  };

  return (
    <div style={{marginTop: '10spx'}}>
      <Carousel {...carouselProps}>
        <div>
          <img src='/Assets/Ecolabel.png' alt='Imagem 1' style={imageStyles} />
        </div>
        <div>
          <img src='/Assets/Marcas.png' alt='Imagem 2' style={imageStyles} />
        </div>
        <div>
          <img src='/Assets/img_4.jpeg' alt='Imagem 3' style={imageStyles} />
        </div>
      </Carousel>
    </div>
  );
};

export default ImgPassar;
