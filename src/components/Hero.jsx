import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Portaria e Recepção",
      subtitle:
        "Profissionais treinados para segurança e atendimento de excelência 24 horas",
      background:
        "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568670/carrosel_portaria_niimit.png",
    },
    {
      title: "Limpeza e Conservação",
      subtitle:
        "Serviços especializados para ambientes sempre impecáveis e higienizados",
      background:
        "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568669/carrosel_limpeza_njl7gk.png",
    },
    {
      title: "Jardinagem",
      subtitle:
        "Cuidamos das suas áreas verdes com expertise, dedicação e paisagismo",
      background:
        "https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568669/carrosel_jardinagem_ozo4tv.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Carousel Slides */}
      <div className="absolute inset-0 z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            style={{
              background: `linear-gradient(rgba(0, 23, 52, 0.7), rgba(0, 23, 52, 0.7)), url('${slide.background}') center/cover`,
            }}
          >
            <div className="flex items-center justify-center h-full text-center animate-fadeInUp">
              <div className="max-w-4xl px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-shadow">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed text-shadow">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 border border-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary/20 hover:border-secondary backdrop-blur-md opacity-70 hover:opacity-100"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 border border-white/30 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-secondary/20 hover:border-secondary backdrop-blur-md opacity-70 hover:opacity-100"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? "bg-secondary scale-125 border-2 border-white"
                : "bg-white/40"
              }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
