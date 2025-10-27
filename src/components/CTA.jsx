const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-[#00264d] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Transformar sua Operação?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como nossos serviços de facilities
          podem otimizar sua empresa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contato"
            className="bg-secondary text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-3"
          >
            Solicitar Orçamento
          </a>
          <a
            href="/trabalhe-conosco"
            className="bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-3 backdrop-blur-sm"
          >
            Trabalhe Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
