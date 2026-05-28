import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 lg:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-medium tracking-wide text-foreground uppercase">
                  Eduarda Santana
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Advocacia
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Escritório boutique especializado em Direito Civil e Direito de Família,
              oferecendo atendimento personalizado e estratégias jurídicas sob medida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-6 tracking-wider uppercase">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#areas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-6 tracking-wider uppercase">
              Especialidades
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Direito de Família</li>
              <li className="text-sm text-muted-foreground">Inventário e Sucessões</li>
              <li className="text-sm text-muted-foreground">Direito Imobiliário</li>
              <li className="text-sm text-muted-foreground">Contratos</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Eduarda Santana Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            OAB/SP 123.456
          </p>
        </div>
      </div>
    </footer>
  )
}
