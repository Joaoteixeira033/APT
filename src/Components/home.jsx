import React from 'react';

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* Conteúdo */}
      <div className='flex justify-between w-2/3'>
        {/* Texto à esquerda */}
        <div className='w-1/2 p-4' style={{ marginTop: '1500px', marginRight: '200px' }}>
          <h1 className='text-3xl font-bold text-[grey]'>Bem-Vindo</h1>
          <p className='text-lg'>
            A satisfação dos nossos clientes é uma das nossas maiores preocupações. Estamos sempre
            empenhados em superar as suas expectativas, oferecendo produtos de qualidade e um
            atendimento personalizado. Valorizamos o relacionamento com os nossos clientes e
            procuramos construir parcerias duradouras.
          </p>
        </div>
        {/* Imagem à direita */}
        <div className='w-1/2' style={{marginTop: '750px'}}>
          <img
            src='/Assets/img.jpeg'
            alt='Imagem'
            className='w-full h-auto'
            style={{ marginTop: '800px', minWidth: '300px', maxHeight: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
