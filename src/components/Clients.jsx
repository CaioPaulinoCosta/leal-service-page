const Clients = () => {
  const clients = [
    {
      name: "Alliance",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568691/Alliance_bkesp0.png",
    },
    {
      name: "Unimed",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568698/Unimed_sev5hf.png",
    },
    {
      name: "TECMAES",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568696/Tecmaes_vmpb57.png",
    },
    {
      name: "ASPEN",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568692/Aspen_mu7azp.png",
    },
    {
      name: "MOINHO_NACIONAL",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568693/Moinho_Nacional_ntspfx.png",
    },
    {
      name: "PREFEITURA_OURINHOS",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568694/Prefeitura_Ourinhos_ucfzbi.png",
    },
    {
      name: "PREFEITURA_PIRAJU",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568694/Prefeitura_Piraju_i7qmvf.png",
    },
    {
      name: "SANTA_PAULA",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568695/Santa_Paula_q8lof4.png",
    },
    {
      name: "MARVI",
      logo: "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568692/Marvi_u2pkk9.png",
    },
  ];

  return (
    <section id="clientes" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Nossos Parceiros
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary mt-2"></span>
          </h2>
          <p className="text-gray text-lg">
            Empresas que confiam em nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-custom transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex items-center justify-center relative group"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a5276] to-[#2980b9] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>

              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-16 w-auto h-auto transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
