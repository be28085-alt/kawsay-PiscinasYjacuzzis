import logo from "@/assets/logo-kawsay.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Piscinas", href: "#proyectos" },
    { label: "Jacuzzis", href: "#jacuzzis" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio">
          <img src={logo} alt="Kawsay Piscinas y Jacuzzis" className="h-12 md:h-14" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-water text-primary-foreground px-5 py-2.5 rounded-lg font-body text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Cotizar ahora
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-gradient-water text-primary-foreground px-5 py-2.5 rounded-lg font-body text-sm font-semibold"
              >
                Cotizar ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
