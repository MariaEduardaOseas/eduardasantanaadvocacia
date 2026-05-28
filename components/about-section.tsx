export function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Eduarda Santana"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-background p-6 lg:p-8 border border-border">
              <span className="block font-[var(--font-cormorant)] text-4xl lg:text-5xl text-primary font-semibold">15+</span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Anos de<br />Experiência</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">Sobre</span>
            </div>

            {/* Heading */}
            <h2 className="font-[var(--font-cormorant)] text-3xl lg:text-5xl font-medium leading-tight text-foreground mb-8">
              Compromisso com a excelência jurídica
            </h2>

           {/* Description */}
<div className="space-y-6 text-muted-foreground leading-relaxed">
  <p>
    Eduarda Santana é advogada com atuação nas áreas de Direito Civil e Direito
    de Família, oferecendo assessoria jurídica estratégica, personalizada e
    pautada na excelência técnica.
  </p>

  <p>
    Sua atuação é direcionada à condução de demandas judiciais e consultivas
    com seriedade, discrição e comprometimento, sempre buscando soluções
    seguras e eficientes para cada cliente.
  </p>

  <p>
    Com abordagem humanizada e atendimento próximo, desenvolve cada caso de
    forma individualizada, compreendendo as particularidades envolvidas e
    prezando pela transparência em todas as etapas do acompanhamento jurídico.
  </p>

  <p>
    No Direito de Família, atua com sensibilidade e firmeza em questões que
    exigem atenção técnica e emocional, enquanto no Direito Civil trabalha com
    foco na proteção de direitos, prevenção de conflitos e segurança jurídica.
  </p>
</div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="block font-[var(--font-cormorant)] text-3xl lg:text-4xl text-primary font-semibold">500+</span>
                <span className="text-xs tracking-wider uppercase text-muted-foreground">Casos<br />Resolvidos</span>
              </div>
              <div>
                <span className="block font-[var(--font-cormorant)] text-3xl lg:text-4xl text-primary font-semibold">98%</span>
                <span className="text-xs tracking-wider uppercase text-muted-foreground">Índice de<br />Sucesso</span>
              </div>
              <div>
                <span className="block font-[var(--font-cormorant)] text-3xl lg:text-4xl text-primary font-semibold">OAB</span>
                <span className="text-xs tracking-wider uppercase text-muted-foreground">São Paulo<br />123.456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
