import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import Layout from "../components/Layout";

const WorkWithUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");

  // Funções de formatação e validação
  const formatName = (text) => {
    return text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/\s+/g, " ")
      .trim();
  };

  const formatPhone = (phone) => {
    const numbers = phone.replace(/\D/g, "");

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

  const validateFileType = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return allowedTypes.includes(file.type);
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
    if (!formData.resume) {
      showNotification("error", "Por favor, anexe seu currículo.");
      return;
    }

    if (!validateEmail(formData.email)) {
      showNotification("error", "Por favor, insira um email válido.");
      return;
    }

    if (
      hasSpamKeywords(formData.experience) ||
      hasSpamKeywords(formData.name)
    ) {
      showNotification("error", "Conteúdo contém palavras não permitidas.");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      showNotification(
        "error",
        "Por favor, insira um telefone válido com DDD."
      );
      return;
    }

    if (formData.experience.length < 10) {
      showNotification(
        "error",
        "Por favor, descreva melhor sua experiência profissional."
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
        position: formData.position,
        experience: sanitizeText(formData.experience),
        resume_name: formData.resume?.name || "",
        resume_size: formData.resume?.size || 0,
        timestamp: new Date().toISOString(),
      };

      console.log("Dados formatados:", formattedData);

      // Criar FormData para enviar o arquivo
      const formDataToSend = new FormData();
      Object.keys(formattedData).forEach((key) => {
        formDataToSend.append(key, formattedData[key]);
      });
      formDataToSend.append("resume", formData.resume);

      // Enviar via EmailJS
      const result = await emailjs.send(
        "service_warwglk",
        "template_rz8pay9",
        formDataToSend,
        "YGOJQoN7AD7ODxyQs"
      );

      console.log("SUCESSO - Candidatura enviada:", result);
      showNotification(
        "success",
        "Candidatura enviada com sucesso! Analisaremos seu currículo em breve."
      );

      // Reset do formulário
      resetForm();
    } catch (error) {
      console.error("ERRO DETALHADO:", error);
      showNotification("error", "Erro ao enviar candidatura. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      // Validar tamanho do arquivo (5MB)
      if (files[0].size > 5 * 1024 * 1024) {
        showNotification("error", "Arquivo muito grande. Tamanho máximo: 5MB.");
        return;
      }

      // Validar tipo do arquivo
      if (!validateFileType(files[0])) {
        showNotification(
          "error",
          "Tipo de arquivo não permitido. Use PDF, DOC ou DOCX."
        );
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      setFileName(files[0].name);
    } else {
      let formattedValue = value;

      // Aplica formatações específicas para cada campo
      switch (name) {
        case "name":
          formattedValue = formatName(value);
          break;
        case "phone":
          formattedValue = formatPhone(value);
          break;
        case "email":
          formattedValue = value.toLowerCase();
          break;
        case "experience":
          // Limita o tamanho da experiência
          if (value.length > 1000) {
            return;
          }
          break;
        default:
          break;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    }
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

    if (name === "experience" && value && value.length < 10) {
      showNotification(
        "warning",
        "Descreva melhor sua experiência (mínimo 10 caracteres)."
      );
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: null,
    });
    setFileName("");
  };

  return (
    <>
      <Layout title="Trabalhe Conosco"></Layout>
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
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
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
                Carreiras
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Faça Parte do Nosso Time
              </h2>
              <p className="text-gray text-lg max-w-2xl mx-auto">
                Junte-se a uma empresa que valoriza pessoas e promove
                crescimento
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                      <i className="fas fa-briefcase text-secondary w-4"></i>
                      Cargo de Interesse *
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
                      Experiência Profissional *
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows="4"
                      maxLength="1000"
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                      placeholder="Descreva brevemente sua experiência profissional..."
                    ></textarea>
                    <div className="text-right text-sm text-gray mt-2">
                      <span>{formData.experience.length}</span>/1000 caracteres
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-semibold text-primary mb-3">
                      <i className="fas fa-file-upload text-secondary w-4"></i>
                      Anexar Currículo *
                    </label>
                    <div className="relative border-2 border-dashed border-light-gray rounded-xl p-8 text-center transition-all duration-300 hover:border-secondary hover:bg-secondary/5 cursor-pointer">
                      {fileName ? (
                        <div className="text-center">
                          <i className="fas fa-file text-4xl text-secondary mb-4"></i>
                          <p className="font-semibold text-primary mb-1 truncate">
                            {fileName}
                          </p>
                          <span className="text-green-600 text-sm">
                            <i className="fas fa-check mr-1"></i>
                            Arquivo selecionado
                          </span>
                        </div>
                      ) : (
                        <div className="text-center">
                          <i className="fas fa-cloud-upload-alt text-4xl text-secondary mb-4"></i>
                          <p className="font-semibold text-primary mb-1">
                            Arraste ou clique para enviar arquivo
                          </p>
                          <span className="text-gray text-sm">
                            PDF, DOC, DOCX (Máx. 5MB)
                          </span>
                        </div>
                      )}
                      <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required
                      />
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
                        Enviar Candidatura
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

export default WorkWithUsPage;
