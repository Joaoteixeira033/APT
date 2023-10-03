import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-grey'>
      <div className='flex items-center'>
        <img src='/Assets/logo.png' alt='Logo' className='w-60 h-50 mr-4 mt-20 ml-2' />
      </div>
      <div id="quemSomos" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-80'>
        <h1 className='text-3xl font-bold text-[grey]'>Quem Somos?</h1>
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' style={{ marginTop: '600px' }}>
        <p className='text-lg'>
          A nossa Empresa está localizada em Ribeira-Tropeço Arouca. Teve início em 2002 e é uma Empresa que se dedica à importação e comércio de 
          materiais de revestimento e tratamento para madeiras.É com grande prazer que apresento uma pequena perceção da nossa
          Empresa APT (António Pedro Teixeira Lda). Estamos no mercado há mais de
          duas décadas, consolidando a nossa posição como uma empresa confiável e respeitada no
          setor. Além disso, é com orgulho que informo que o APT está entre as 5% melhores empresas
          de Portugal no segmento de Pequenas e Médias Empresas (PME). Essa conquista é resultado
          do nosso compromisso com a excelência, da qualidade dos nossos produtos e serviços, e do
          reconhecimento dos nossos clientes.
        </p>
      </div>
      <div className='hidden md:flex'>
        {/* Menu de navegação para telas maiores */}
        <ul className='flex space-x-4'>
          <li className='p-4'>
            <a>Home</a>
          </li>
          <li className='p-4'>
            <a href='#quemSomos' onClick={closeMenu}>Sobre</a>
          </li>
          <li className='p-4'>
            <a href='#contacto' onClick={closeMenu}>Contacto</a>
          </li>
        </ul>
      </div>
      <div className='md:hidden'>
        {/* Ícone do menu para telas menores */}
        <AiOutlineMenu size={20} onClick={toggleMenu} />
        {menuOpen && (
          // Menu expansível para telas menores
          <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-green-400 bg-[green]'>
            <ul className='pt-24 uppercase'>
              <div className='flex items-center'>
                <img src='/Assets/logo.png' alt='Logo' className='w-20 h-10 mr-4 mt-0 ml-2' />
              </div>
              <li className='p-4'>
                <a onClick={closeMenu}>-Home- </a>
              </li>
              <li className='p-4'>
                <a href='#quemSomos' onClick={closeMenu}>-Sobre-</a>
              </li>
              <li className='p-4'>
                <a href='#contacto' onClick={closeMenu}>-Contacto-</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
