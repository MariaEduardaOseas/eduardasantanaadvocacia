export function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/IMG_2454.jpeg"
                alt="Eduarda Santana"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                Sobre
              </span>
            </div>

            <h2 className="font-[var(--font-cormorant)] text-3xl lg:text-5xl font-medium leading-tight text-foreground mb-8">
              Advocacia estratégica e atendimento personalizado
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Atuação jurídica voltada ao Direito Civil e Direito de Família,
                com foco em soluções seguras, atendimento próximo e condução
                estratégica de cada demanda.
              </p>

              <p>
                Cada caso é acompanhado de forma individualizada, priorizando
                discrição, transparência e excelência técnica em todas as etapas
                do atendimento.
              </p>

              <p>
                No Direito de Família, oferece suporte jurídico humanizado para
                questões que exigem sensibilidade e firmeza. No Direito Civil,
                atua na proteção de direitos e prevenção de conflitos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

