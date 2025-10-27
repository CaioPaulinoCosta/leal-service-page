const Advantages = () => {
  const advantages = [
    {
      icon: "fas fa-chart-line",
      title: "Aumento de Lucros e Redução de Custos",
      description:
        "Ao terceirizar serviços não essenciais, sua empresa pode direcionar recursos para atividades estratégicas, reduzindo custos com folha de pagamento, encargos trabalhistas e infraestrutura.",
    },
    {
      icon: "fas fa-briefcase",
      title: "Foco no Negócio Principal",
      description:
        "Delegue atividades secundárias para especialistas e concentre seus esforços no core business da sua empresa, aumentando a eficiência e a competitividade.",
    },
    {
      icon: "fas fa-users",
      title: "Profissionais Qualificados",
      description:
        "Acesso a mão de obra especializada, treinada e com experiência comprovada, sem os custos e a burocracia do processo de recrutamento e seleção.",
    },
  ];

  return (
    <section id="vantagens" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Vantagens da Terceirização
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary mt-2"></span>
          </h2>
          <p className="text-gray text-lg">
            Descubra como a terceirização pode beneficiar sua empresa
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-custom border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="bg-primary text-secondary w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                <i className={advantage.icon}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
