const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold mb-2">LEAL SERVICE</h3>
            <span className="text-secondary font-semibold">FACILITIES</span>
            <p className="mt-4 text-gray-300 max-w-xs">
              Há 26 anos oferecendo serviços de facilities com qualidade e
              comprometimento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Sobre", "Serviços", "Vantagens", "Clientes"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-phone text-secondary w-4"></i>
                <span>(14) 3322-1783</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-mobile-alt text-secondary w-4"></i>
                <span>(14) 99860-4140</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-envelope text-secondary w-4"></i>
                <span>leallservice@hotmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <i className="fas fa-map-marker-alt text-secondary w-4 mt-1"></i>
                <span>R. PARANÁ - 526, SALA 02 - CENTRO<br/>CEP: 19900-020 - Ourinhos - SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2023 LEAL SERVICE FACILITIES. Todos os direitos reservados.
            CNPJ: 04.121.081/0001-39
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
