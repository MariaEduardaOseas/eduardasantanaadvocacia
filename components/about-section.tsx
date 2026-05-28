export function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Imagem */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/IMG_2454.jpeg"
                alt="Eduarda Santana"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div>

            <h2 className="font-[var(--font-cormorant)] text-3xl lg:text-5xl font-medium leading-tight text-foreground mb-8">
              Advocacia estratégica e atendimento personalizado
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Atuação jurídica voltada ao Direito Civil e Direito de Família,
                com foco em soluções seguras, atendimento próximo e condução estratégica.
              </p>

              <p>
                Cada caso é acompanhado de forma individualizada, priorizando
                discrição, transparência e excelência técnica.
              </p>

              <p>
                No Direito de Família, atua com sensibilidade e firmeza.
                No Direito Civil, trabalha com foco na proteção de direitos e prevenção de conflitos.
              </p>
            </div>

           
