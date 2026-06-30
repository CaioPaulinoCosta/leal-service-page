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
    {
      name: "Dalçoquio",
      logo: "https://i.imgur.com/C9ZIKsR.png",
    },
    {
      name: "Construlopes & Gimenez",
      logo: "https://i.imgur.com/o8oTiO6.png",
    },
    {
      name: "RNI",
      logo: "https://i.imgur.com/Umgmaso.png",
    },
    {
      name: "Construcasa Bordignon",
      logo: "https://i.imgur.com/QJo5sdL.png",
    },
    {
      name: "Thai Toyota",
      logo: "https://i.imgur.com/56FPLne.png",
    },
    {
      name: "CIEE",
      logo: "https://i.imgur.com/kTXlbxD.png",
    },
    {
      name: "Randon Magnetic",
      logo: "https://i.imgur.com/rnXA4hL.png",
    },
    {
      name: "Ford Iguaçu Caminhões",
      logo: "https://i.imgur.com/nkxOptc.png",
    },
    {
      name: "Prosegur",
      logo: "https://i.imgur.com/XtDze0I.png",
    },
    {
      name: "Ourimadeiras",
      logo: "https://i.imgur.com/6voOxFE.png",
    },
    {
      name: "Coc",
      logo: "https://i.imgur.com/PKNkVnR.png",
    },
    {
      name: "Presermed",
      logo: "https://i.imgur.com/hRClx5A.png",
    },
    {
      name: "Eurochem",
      logo: "https://i.imgur.com/YoHCtXV.png",
    },
    {
      name: "Meta Saúde Ocupacional",
      logo: "https://i.imgur.com/CCbvlxs.png",
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
                className={`max-w-full w-auto h-auto transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110 ${index <= 7 ? 'max-h-10' : 'max-h-16'}`}
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
