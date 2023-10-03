import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const Contacto = () => {
  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adicione um efeito de rolagem suave
    });
  };

  return (
    <div style={{marginTop: '300px'}}> 
      <div id="contacto" className='flex items-start p-10 mt- ml-10'>
        {/* Botão de rolar para o topo */}
        <button
          className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={24} />
        </button>

        {/* Logotipo */}
        <img src='/Assets/logo.png' alt='Logo' className='w-50 h-40 mb-7' />

        <div className='ml-auto mr-10'> {/* Adicionei uma margem direita */}
          {/* Ícones de mídia social */}
          <div className='flex space-x-8'>
            <a href='https://www.facebook.com/profile.php?id=100027116396343' target='_blank' rel='noopener noreferrer'>
              <FaFacebook size={48} />
            </a>
            <a href='https://www.instagram.com/joao_teixeira03/?next=%2F' target='_blank' rel='noopener noreferrer'>
              <FaInstagram size={48} />
            </a>
            <a href='https://www.linkedin.com/in/jo%C3%A3o-teixeira-037773228/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={48} />
            </a>
          </div>

          {/* Informações de contato */}
          <div className='flex flex-col space-y-4 mt-4'>
            <div className='flex items-center'>
              <div className='text-xl text-gray-600'>Telefone:</div>
              <div>
                <a href='tel:256941336'>256941663</a>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='text-xl text-gray-600'>Telemóvel:</div>
              <div>
                <a href='tel:912520841'>912520841</a>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='text-xl text-gray-600'>Email:</div>
              <div>
                <a href='mailto:aptarouca@gmail.com'>aptarouca@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Contacto;
