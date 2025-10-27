const HomeSection = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Conteúdo do lado esquerdo */}
      <div className="lg:col-span-1 flex items-center justify-center p-8 lg:p-20 bg-gradient-to-br from-primary to-[#00264d] relative z-10">
        <div className="max-w-2xl w-full">
          {/* Badge de experiência */}
          <div className="inline-block bg-secondary text-primary px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide mb-8 shadow-lg shadow-yellow-500/30">
            26 Anos de Experiência
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Excelência em Facilities e Serviços Terceirizados
          </h1>

          {/* Descrição */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Soluções completas em portaria, limpeza, jardinagem e zeladoria para
            empresas e condomínios. Conte com nossa experiência de 26 anos para
            otimizar sua operação.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#servicos"
              className="bg-secondary text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 text-center"
            >
              Nossos Serviços
            </a>
            <a
              href="/contato"
              className="bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-1 text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* Imagem do lado direito */}
      <div
        className="lg:col-span-1 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568672/leal_7_ustd97.png')",
        }}
      />

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center opacity-80 animate-bounce z-20">
        <span className="block text-sm font-medium mb-2">Descubra mais</span>
        <div className="w-5 h-5 border-r-2 border-b-2 border-white transform rotate-45 mx-auto"></div>
      </div>
    </section>
  );
};

export default HomeSection;
