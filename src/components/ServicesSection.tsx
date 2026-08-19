import React from 'react';
import { Building2, Home, TrendingUp, KeyRound, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/metaData';

interface ServicesSectionProps {
  onOpenWhatsAppWithContext: (text: string) => void;
  onOpenValuation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenWhatsAppWithContext,
  onOpenValuation,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-700" />;
      case 'Home':
        return <Home className="w-6 h-6 text-blue-700" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-700" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-blue-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="servicos" className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-slate-50/50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            O que fazemos por você em Feira de Santana
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Seja para comprar seu imóvel na planta, encontrar uma opção pronta para morar, alugar com facilidade ou anunciar seu patrimônio pelo valor justo de mercado, oferecemos assessoria completa em cada etapa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 transition-all hover:shadow-xl group h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shrink-0">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors min-h-[32px] flex items-center">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal min-h-[72px]">
                  {service.description}
                </p>

                {/* Highlights Bullet Points */}
                {service.highlights && (
                  <div className="pt-2 space-y-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                {service.id === 'avaliacao-venda' ? (
                  <button
                    onClick={onOpenValuation}
                    className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-700/10 cursor-pointer"
                  >
                    <span>{service.ctaText || 'Avaliar meu Imóvel'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      onOpenWhatsAppWithContext(
                        `Olá! Gostaria de consultar informações sobre: *${service.title}* na Meta Imobiliária.`
                      )
                    }
                    className="w-full py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-700 hover:text-white text-blue-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-blue-200 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.758.459 3.472 1.332 4.982l-1.415 5.166 5.283-1.385c1.455.795 3.101 1.213 4.768 1.213 5.507 0 9.97-4.463 9.97-9.97 0-5.506-4.463-9.969-9.969-9.969zm5.733 14.127c-.24.675-1.395 1.29-1.92 1.335-.48.045-1.11.21-3.645-.84-2.73-1.14-4.47-3.93-4.605-4.11-.135-.18-1.11-1.47-1.11-2.805 0-1.335.69-1.995.96-2.265.27-.27.585-.345.78-.345.195 0 .39 0 .555.015.18.015.42-.075.66.51.24.585.825 2.01.885 2.145.06.135.105.3.015.48-.09.18-.135.285-.27.435-.135.15-.285.345-.405.465-.135.135-.27.285-.12.54.15.255.675 1.11 1.455 1.8 1.005.885 1.845 1.17 2.1 1.29.255.12.405.105.555-.065.15-.18.645-.75.825-1.005.18-.255.36-.21.6-.12.24.09 1.53.72 1.785.855.255.135.42.21.48.315.06.105.06.615-.18 1.29z"/>
                    </svg>
                    <span>{service.ctaText || 'Falar no WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Office Callout Box */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl border border-blue-800 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-white shadow-xl">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-blue-300 font-bold text-xs uppercase tracking-widest">
              Atendimento Humanizado & Corretores Qualificados
            </span>
            <h3 className="text-2xl font-black text-white">
              Quer uma orientação personalizada sobre o seu imóvel?
            </h3>
            <p className="text-sm text-slate-200 max-w-xl">
              Nossa equipe com registro CRECI J - 3158 está pronta para sanar suas dúvidas, simular condições de financiamento e te acompanhar em cada etapa.
            </p>
          </div>

          <button
            onClick={() =>
              onOpenWhatsAppWithContext(
                "Olá, equipe Meta Imobiliária (CRECI J - 3158)! Gostaria de agendar um atendimento direto no WhatsApp."
              )
            }
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-lg transition-all"
          >
            Falar com Corretor Qualificado
          </button>
        </div>

      </div>
    </section>
  );
};


