const WorkWithUs = () => {
  const benefits = [
    { icon: "fas fa-graduation-cap", text: "Treinamento Contínuo" },
    { icon: "fas fa-heart", text: "Ambiente Acolhedor" },
    { icon: "fas fa-chart-line", text: "Oportunidades de Crescimento" },
  ];

  return (
    <section className="section bg-gradient-to-br from-primary to-[#00264d] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte do Nosso Time
          </h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Na Leal Service, valorizamos cada colaborador e investimos no
            desenvolvimento profissional de nossa equipe. Oferecemos
            oportunidades de crescimento, ambiente de trabalho positivo e
            benefícios competitivos.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center min-w-[150px] border border-white/20"
              >
                <i
                  className={`${benefit.icon} text-secondary text-3xl mb-3`}
                ></i>
                <span className="font-medium text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>

          <a
            href="/trabalhe-conosco"
            className="bg-secondary text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-3"
          >
            Enviar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
