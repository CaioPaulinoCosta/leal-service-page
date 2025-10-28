import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import Layout from "../components/Layout";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  // Funções de formatação e validação
  const formatName = (text) => {
    return text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/\s+/g, " ")
      .trim();
  };

  const formatPhone = (phone) => {
    // Remove tudo que não é número
    const numbers = phone.replace(/\D/g, "");

    // Formata: (00) 00000-0000
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(
        6
      )}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeText = (text) => {
    // Remove possíveis scripts e tags HTML
    return text
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&#39;")
      .replace(/"/g, "&#34;")
      .replace(
        /\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|SCRIPT|JAVASCRIPT)\b/gi,
        ""
      )
      .trim();
  };

  const hasSpamKeywords = (text) => {
    const spamKeywords = [
      "viagra",
      "cialis",
      "casino",
      "lottery",
      "prize",
      "winner",
      "credit",
      "loan",
      "mortgage",
      "insurance",
      "investment",
      "million",
      "billion",
      "dollar",
      "profit",
      "money",
      "rich",
      "free",
      "win",
      "won",
      "click",
      "subscribe",
      "buy now",
      "limited time",
      "act now",
      "urgent",
      "immediate",
    ];

    const lowerText = text.toLowerCase();
    return spamKeywords.some((keyword) => lowerText.includes(keyword));
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações antes do envio
    if (!validateEmail(formData.email)) {
      showNotification("error", "Por favor, insira um email válido.");
      return;
    }

    if (hasSpamKeywords(formData.message) || hasSpamKeywords(formData.name)) {
      showNotification("error", "Mensagem contém conteúdo não permitido.");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      showNotification(
        "error",
        "Por favor, insira um telefone válido com DDD."
      );
      return;
    }

    setIsLoading(true);

    try {
      // Formatar dados antes do envio
      const formattedData = {
        from_name: formatName(formData.name),
        from_email: formData.email.toLowerCase().trim(),
        phone: formatPhone(formData.phone),
        company: formData.company ? formatName(formData.company) : "",
        service: formData.service,
        message: sanitizeText(formData.message),
      };

      const templateParams = {
        ...formattedData,
        // Adiciona timestamp para evitar spam
        timestamp: new Date().toISOString(),
      };

      const result = await emailjs.send(
        "service_warwglk",
        "template_va9doun",
        templateParams,
        "YGOJQoN7AD7ODxyQs"
      );

      showNotification(
        "success",
        "Mensagem enviada com sucesso! Retornaremos em breve."
      );

      // Reset do formulário
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("ERRO DETALHADO:", error);
      showNotification("error", "Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    // Aplica formatações específicas para cada campo
    switch (name) {
      case "name":
      case "company":
        formattedValue = formatName(value);
        break;
      case "phone":
        formattedValue = formatPhone(value);
        break;
      case "email":
        formattedValue = value.toLowerCase();
        break;
      case "message":
        // Limita o tamanho da mensagem
        if (value.length > 500) {
          return;
        }
        break;
      default:
        break;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validações específicas no blur
    if (name === "email" && value && !validateEmail(value)) {
      showNotification("warning", "Formato de email inválido.");
    }

    if (name === "phone" && value && value.replace(/\D/g, "").length < 10) {
      showNotification("warning", "Telefone incompleto.");
    }
  };

  return (
    <>
      <Layout title="Contato"></Layout>
      <div className="min-h-screen bg-white relative">
        <Header />

        {/* Notification Toast */}
        {notification.show && (
          <div
            className={`fixed top-24 right-6 z-50 transform transition-all duration-500 ${
              notification.show
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div
              className={`relative flex items-center p-4 rounded-2xl shadow-2xl min-w-80 max-w-md border-l-4 ${
                notification.type === "success"
                  ? "bg-green-50 border-green-500 text-green-800"
                  : notification.type === "warning"
                  ? "bg-yellow-50 border-yellow-500 text-yellow-800"
                  : "bg-red-50 border-red-500 text-red-800"
              }`}
            >
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  notification.type === "success"
                    ? "bg-green-100"
                    : notification.type === "warning"
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }`}
              >
                {notification.type === "success" ? (
                  <i className="fas fa-check text-green-600"></i>
                ) : notification.type === "warning" ? (
                  <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                ) : (
                  <i className="fas fa-exclamation text-red-600"></i>
                )}
              </div>
              <div className="ml-3">
                <p className="font-semibold">
                  {notification.type === "success"
                    ? "Sucesso!"
                    : notification.type === "warning"
                    ? "Atenção!"
                    : "Erro!"}
                </p>
                <p className="text-sm mt-1">{notification.message}</p>
              </div>
              <button
                onClick={() =>
                  setNotification({ show: false, type: "", message: "" })
                }
                className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}

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
                          (14) 3322-1783
                        </div>
                        <div className="font-semibold text-dark">
                          (14) 99860-4140
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-light-gray rounded-xl border-l-4 border-secondary transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
                    <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">
                        E-mail
                      </h4>
                      <div className="text-gray font-medium">
                        leallservice@hotmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-light-gray rounded-xl border-l-4 border-secondary transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
                    <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                      <i className="fas fa-globe"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">
                        Website
                      </h4>
                      <div className="text-gray font-medium">
                        www.lealservicefacilities.com.br
                      </div>
                    </div>
                  </div>

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
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        maxLength={100}
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
                        maxLength={100}
                        className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                        <i className="fas fa-phone text-secondary w-4"></i>
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        maxLength={15}
                        className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                        <i className="fas fa-envelope text-secondary w-4"></i>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        maxLength={100}
                        className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                      <i className="fas fa-concierge-bell text-secondary w-4"></i>
                      Serviço de Interesse *
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
                      <option value="recrutamento">
                        Recrutamento e Seleção
                      </option>
                      <option value="treinamento">Treinamentos</option>
                      <option value="consultoria">Consultoria em RH</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                      <i className="fas fa-comment text-secondary w-4"></i>
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      maxLength="500"
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                      placeholder="Descreva sua necessidade..."
                    ></textarea>
                    <div className="text-right text-sm text-gray mt-2">
                      <span>{formData.message.length}</span>/500 caracteres
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-secondary to-yellow-400 text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 ${
                      isLoading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-lg hover:-translate-y-1"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray text-sm flex items-center justify-center gap-2">
                    <i className="fas fa-shield-alt text-secondary"></i>
                    Seus dados estão protegidos e criptografados
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
