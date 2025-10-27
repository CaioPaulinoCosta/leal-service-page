import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Implementar envio do formulário
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary text-primary px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Contato
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Entre em Contato Conosco
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Estamos prontos para atender suas necessidades em facilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-custom border border-gray-100">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-light-gray">
                <div className="text-3xl text-secondary">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Fale Conosco
                </h3>
              </div>

              <div className="space-y-6">
                {/* Telefones */}
                <div className="flex items-start gap-6 p-6 bg-light-gray rounded-xl border-l-4 border-secondary transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">
                      Telefones
                    </h4>
                    <div className="space-y-1">
                      <div className="font-semibold text-dark">
                        (14) 3326-1899
                      </div>
                      <div className="font-semibold text-dark">
                        (14) 99833-4166
                      </div>
                    </div>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-6 p-6 bg-light-gray rounded-xl border-l-4 border-secondary transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">
                      E-mail
                    </h4>
                    <div className="text-gray font-medium">
                      lealiservice@hotmail.com
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-6 p-6 bg-light-gray rounded-xl border-l-4 border-secondary transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">
                      Website
                    </h4>
                    <div className="text-gray font-medium">
                      www.patriciapaulinorh.com.br
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-6 p-6 bg-light-gray rounded-xl border-l-4 border-secondary transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">
                      Endereço
                    </h4>
                    <div className="space-y-1 text-gray font-medium">
                      <div>Jardim Paulista</div>
                      <div>CEP: 19907-080</div>
                      <div>Ourinhos - SP</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-[#00264d] rounded-xl text-white text-center">
                <h4 className="text-lg font-bold mb-2">
                  Horário de Atendimento
                </h4>
                <p className="mb-4 opacity-90">
                  24 horas por dia, 7 dias por semana
                </p>
                <div className="inline-flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full">
                  <i className="fas fa-clock"></i>
                  <span className="font-semibold">Plantão 24h</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-custom border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-3">
                  <i className="fas fa-paper-plane text-secondary"></i>
                  Solicite um Orçamento
                </h3>
                <p className="text-gray">
                  Preencha o formulário abaixo e retornaremos em breve
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div>
                    <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                      <i className="fas fa-building text-secondary w-4"></i>
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                    <i className="fas fa-concierge-bell text-secondary w-4"></i>
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300 appearance-none bg-white"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="portaria">Portaria e Recepção</option>
                    <option value="limpeza">Limpeza e Conservação</option>
                    <option value="jardinagem">Jardinagem</option>
                    <option value="zeladoria">Zeladoria</option>
                    <option value="recrutamento">Recrutamento e Seleção</option>
                    <option value="treinamento">Treinamentos</option>
                    <option value="consultoria">Consultoria em RH</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                    <i className="fas fa-comment text-secondary w-4"></i>
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                  <div className="text-right text-sm text-gray mt-2">
                    <span>{formData.message.length}</span>/500 caracteres
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-yellow-400 text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <i className="fas fa-paper-plane"></i>
                  Enviar Mensagem
                </button>

                <p className="text-center text-gray text-sm flex items-center justify-center gap-2">
                  <i className="fas fa-shield-alt text-secondary"></i>
                  Seus dados estão protegidos
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
