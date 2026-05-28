"use client"

import { useState } from "react"
import { Scale, Users, FileText, Home, Heart, Briefcase } from "lucide-react"

const practiceAreas = [
  {
    icon: Users,
    title: "Direito de Família",
    description: "Divórcio, guarda de filhos, pensão alimentícia, união estável, regulamentação de visitas e mediação familiar.",
    details: [
      "Divórcio judicial e extrajudicial",
      "Guarda compartilhada e unilateral",
      "Pensão alimentícia",
      "Regulamentação de visitas",
      "União estável",
      "Mediação familiar"
    ]
  },
  {
    icon: FileText,
    title: "Inventário e Sucessões",
    description: "Planejamento sucessório, inventário judicial e extrajudicial, testamentos e partilha de bens.",
    details: [
      "Inventário judicial",
      "Inventário extrajudicial",
      "Testamentos",
      "Planejamento sucessório",
      "Partilha de bens",
      "Holding familiar"
    ]
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Contratos de compra e venda, locação, usucapião, regularização de imóveis e disputas de propriedade.",
    details: [
      "Compra e venda de imóveis",
      "Contratos de locação",
      "Usucapião",
      "Regularização de imóveis",
      "Disputas de propriedade",
      "Due diligence imobiliária"
    ]
  },
  {
    icon: Scale,
    title: "Contratos",
    description: "Elaboração, análise e revisão de contratos civis, comerciais e prestação de serviços.",
    details: [
      "Elaboração de contratos",
      "Revisão contratual",
      "Rescisão de contratos",
      "Contratos empresariais",
      "Contratos de prestação de serviços",
      "Negociação contratual"
    ]
  },
  {
    icon: Heart,
    title: "Direitos da Personalidade",
    description: "Interdição, curatela, tutela, emancipação e questões relacionadas à capacidade civil.",
    details: [
      "Interdição",
      "Curatela",
      "Tutela",
      "Emancipação",
      "Alteração de nome",
      "Retificação de registros"
    ]
  },
  {
    icon: Briefcase,
    title: "Responsabilidade Civil",
    description: "Indenizações por danos morais e materiais, acidentes, erro médico e relações de consumo.",
    details: [
      "Danos morais",
      "Danos materiais",
      "Acidentes",
      "Erro médico",
      "Relações de consumo",
      "Danos estéticos"
    ]
  }
]

export function PracticeAreasSection() {
  const [activeArea, setActiveArea] = useState<number | null>(null)

  return (
    <section id="areas" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">Especialidades</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-[var(--font-cormorant)] text-3xl lg:text-5xl font-medium text-foreground mb-6">
            Áreas de Atuação
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Atendimento especializado em diversas áreas do Direito Civil e Família, 
            com foco em soluções personalizadas para cada cliente.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon
            const isActive = activeArea === index

            return (
              <div
                key={area.title}
                className={`group relative p-8 lg:p-10 border transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? "border-primary bg-card" 
                    : "border-border hover:border-primary/50 bg-card/50"
                }`}
                onClick={() => setActiveArea(isActive ? null : index)}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 mb-6 transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                }`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-cormorant)] text-xl lg:text-2xl font-medium text-foreground mb-4">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isActive ? "max-h-96 opacity-100 mt-6 pt-6 border-t border-border" : "max-h-0 opacity-0"
                }`}>
                  <ul className="space-y-2">
                    {area.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs tracking-wider uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {isActive ? "Ver menos" : "Saiba mais"}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
