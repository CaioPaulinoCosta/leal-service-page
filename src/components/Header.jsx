import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Vantagens", href: "#vantagens" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-custom"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <a href="/" className="flex items-center gap-2 md:gap-4 no-underline flex-shrink">
              <img
                src="https://res.cloudinary.com/dxvwk3bhs/image/upload/v1761568673/leal_logo_escudo_ypirta.png"
                alt="leal-logo"
                className="h-12 sm:h-16 md:h-20 w-auto flex-shrink-0 object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary m-0 leading-tight whitespace-nowrap">
                  LEAL SERVICE
                </h1>
                <span className="text-secondary font-semibold text-xs md:text-sm">
                  FACILITIES
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-dark font-medium no-underline transition-all duration-300 relative py-2 group"
                  >
                    {item.name}
                    {/* Borda inferior no hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col space-y-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-custom transition-all duration-300 ${
            isMenuOpen
              ? "max-h-96 opacity-100 py-5"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 list-none m-0 p-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-dark font-medium no-underline transition-all duration-300 hover:text-primary py-2 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {/* Borda inferior no hover para mobile também */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
