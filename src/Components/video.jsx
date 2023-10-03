import React from 'react';

const Video = () => {
  return (
    <div className='flex justify-center items-center h-screen' style={{marginTop: '400px'}}>
      {/* Conteúdo */}
      <div className='flex justify-between w-2/3'>
        {/* Vídeo à esquerda */}
        <div className='w-1/2'>
          <video controls width='100%'>
            <source src='/Assets/IKI DECOR (português).mp4' type='video/mp4' />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
        {/* Texto à direita */}
        <div className='w-1/2 p-4'>
          <h1 className='text-3xl font-bold text-[grey]'>IKI DECOR</h1>
          <p className='text-lg'>
            Aqui está representado um exemplo da capacidade de um dos nosso produto, a suas funcionalidades e o quão fácil é a sua aplicação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
