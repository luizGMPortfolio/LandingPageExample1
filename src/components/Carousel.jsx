import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import img from '../assets/logoAqui.png'

const Carousel = () => {
    const settings = {
      dots: true, // Exibe os pontos de navegação
      infinite: true, // Permite navegação infinita
      speed: 600, // Velocidade da transição em milissegundos
      slidesToShow: 4, // Quantidade de slides exibidos simultaneamente
      slidesToScroll: 4, // Quantidade de slides para rolar por vez
      autoplay: true, // Ativa o slide automático
      autoplaySpeed: 3000 // Intervalo de tempo entre os slides em milissegundos
    };
  
    return (
      <Slider {...settings}>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
        <div className='slide'>
            <img src={img} alt="" />
        </div>
      </Slider>
    );
  };
  
  export default Carousel;