import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WorkWithUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar envio do formulário
    console.log("Form data:", formData);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary text-primary px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Carreiras
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Faça Parte do Nosso Time
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Junte-se a uma empresa que valoriza pessoas e promove crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Company Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-custom border border-gray-100">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-light-gray">
                  <div className="text-3xl text-secondary">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Por que a LEAL SERVICE?
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-gray leading-relaxed">
                    Há 26 anos no mercado, a{" "}
                    <strong className="text-primary">LEAL SERVICE</strong> se
                    consolidou como referência em serviços de facilities.
                    Acreditamos que nosso maior patrimônio são as pessoas que
                    fazem parte da nossa equipe.
                  </p>

                  {/* Benefits Grid */}
                  <div className="space-y-4">
                    {[
                      {
                        icon: "fas fa-graduation-cap",
                        title: "Desenvolvimento Contínuo",
                        description:
                          "Programas de treinamento e capacitação para seu crescimento profissional",
                      },
                      {
                        icon: "fas fa-heart",
                        title: "Ambiente Humanizado",
                        description:
                          "Valorizamos o bem-estar e promovemos um clima organizacional positivo",
                      },
                      {
                        icon: "fas fa-chart-line",
                        title: "Oportunidades Reais",
                        description:
                          "Plano de carreira e chances de crescimento dentro da empresa",
                      },
                      {
                        icon: "fas fa-handshake",
                        title: "Valorização",
                        description:
                          "Reconhecemos e recompensamos talento, dedicação e resultados",
                      },
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-light-gray rounded-lg transition-all duration-300 hover:bg-gray-100"
                      >
                        <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                          <i className={benefit.icon}></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-gray text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-2xl p-8 shadow-custom border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-3">
                  <i className="fas fa-file-alt text-secondary"></i>
                  Candidate-se
                </h3>
                <p className="text-gray">
                  Envie seu currículo e venha fazer parte do nosso time
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                    <i className="fas fa-user text-secondary w-4"></i>
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                      <i className="fas fa-envelope text-secondary w-4"></i>
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                      <i className="fas fa-phone text-secondary w-4"></i>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                    <i className="fas fa-briefcase text-secondary w-4"></i>
                    Cargo de Interesse
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300 appearance-none bg-white"
                  >
                    <option value="">Selecione um cargo</option>
                    <option value="porteiro">Porteiro/Recepcionista</option>
                    <option value="faxineiro">Auxiliar de Limpeza</option>
                    <option value="jardineiro">Jardineiro</option>
                    <option value="zelador">Zelador</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                    <i className="fas fa-history text-secondary w-4"></i>
                    Experiência Profissional
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                    placeholder="Descreva brevemente sua experiência profissional..."
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                    <i className="fas fa-file-upload text-secondary w-4"></i>
                    Anexar Currículo
                  </label>
                  <div className="border-2 border-dashed border-light-gray rounded-xl p-8 text-center transition-all duration-300 hover:border-secondary hover:bg-secondary/5 cursor-pointer">
                    <i className="fas fa-cloud-upload-alt text-4xl text-secondary mb-4"></i>
                    <p className="font-semibold text-primary mb-1">
                      Arraste ou clique para enviar arquivo
                    </p>
                    <span className="text-gray text-sm">
                      PDF, DOC, DOCX (Máx. 5MB)
                    </span>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-yellow-400 text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <i className="fas fa-paper-plane"></i>
                  Enviar Candidatura
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkWithUsPage;
