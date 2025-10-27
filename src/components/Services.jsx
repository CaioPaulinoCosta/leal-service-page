const Services = () => {
  const services = [
    {
      icon: "fas fa-shield-alt",
      title: "Portaria e Recepção",
      description:
        "Profissionais treinados para recepcionar, controlar acesso e garantir a segurança do seu ambiente com cordialidade e eficiência.",
      features: [
        "Controle de Acesso",
        "Atendimento Personalizado",
        "Monitoramento",
      ],
    },
    {
      icon: "fas fa-broom",
      title: "Limpeza e Conservação",
      description:
        "Serviços especializados de limpeza para manter seu ambiente sempre higienizado, organizado e com aparência profissional.",
      features: ["Produtos Ecológicos", "Higienização", "Personalização"],
    },
    {
      icon: "fas fa-leaf",
      title: "Jardinagem",
      description:
        "Cuidamos da manutenção de áreas verdes, deixando seu ambiente mais agradável, bonito e valorizado.",
      features: ["Paisagismo", "Manutenção", "Irrigação"],
    },
    {
      icon: "fas fa-tools",
      title: "Zeladoria",
      description:
        "Manutenção preventiva e corretiva para garantir o funcionamento adequado e a conservação das instalações.",
      features: ["Manutenção", "Reparos", "Conservação"],
    },
  ];

  return (
    <section
      id="servicos"
      className="section bg-light-gray relative overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-primary"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Nossos Serviços
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary mt-2"></span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Soluções completas em facilities para sua empresa ou condomínio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-custom transition-all duration-300 hover:-translate-y-3 hover:shadow-xl relative overflow-hidden group"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>

              <div className="text-5xl text-primary mb-6">
                <i className={service.icon}></i>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>

              <p className="text-gray leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-light-gray text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
