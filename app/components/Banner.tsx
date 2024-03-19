// components/Banner.tsx

import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative py-1 mt-16"> {/* Adicionando mt-16 para compensar a altura do header */}
      <img src="/images/banner.png" alt="Banner" className="w-full filter brightness-90 opacity-70" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Div para o texto centralizado acima da imagem */}
        <div className="text-black text-center">
          <p className="text-xl font-semibold">Reclaim your space!</p>
          <p className="text-xl font-semibold">Reclaim your peace!</p>
        </div>
        {/* Div para o botão centralizado abaixo da imagem */}
        <div className="text-center mt-10">
          <button className="bg-customRed hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md">
            GET A FREE ESTIMATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
