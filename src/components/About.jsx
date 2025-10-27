import { useEffect, useRef } from "react";

const About = () => {
  const countersRef = useRef([]);

  const stats = [
    { number: 26, label: "Anos de Experiência" },
    { number: 15, label: "Clientes Atendidos" },
    { number: 50, label: "Profissionais" },
    { number: 24, label: "Horas Disponível" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  const startCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    let current = 0;
    const increment = Math.ceil(target / 50);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 40);
  };

  return (
    <section id="sobre" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Nossa História e Valores
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary mt-2"></span>
          </h2>
          <p className="text-gray text-lg">
            Conheça a trajetória de excelência da Leal Service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Há 26 anos no mercado, a{" "}
              <strong className="text-primary">Leal Service</strong> se
              consolidou como referência em serviços de facilities, atendendo
              empresas e condomínios com profissionalismo, responsabilidade e
              comprometimento.
            </p>

            <p className="text-lg leading-relaxed">
              Nossa missão é proporcionar{" "}
              <strong className="text-primary">
                tranquilidade e segurança
              </strong>{" "}
              para nossos clientes, oferecendo soluções personalizadas que
              atendem às necessidades específicas de cada negócio, sempre com
              foco na qualidade e na satisfação.
            </p>

            <div className="bg-light-gray p-6 rounded-lg border-l-4 border-secondary mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Por que escolher a Leal Service?
              </h3>
              <ul className="space-y-3">
                {[
                  "26 anos de experiência no mercado de facilities",
                  "Equipe altamente qualificada e treinada",
                  "Serviços personalizados para cada cliente",
                  "Atendimento 24 horas por dia",
                  "Compromisso com qualidade e segurança",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-[#00264d] text-white text-center p-8 rounded-xl shadow-custom transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  ref={(el) => (countersRef.current[index] = el)}
                  data-target={stat.number}
                  className="text-4xl md:text-5xl font-bold text-secondary mb-2"
                >
                  0
                </div>
                <div className="font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
