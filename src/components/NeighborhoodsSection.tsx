import React, { useState } from 'react';
import { Compass, ArrowUpRight, CheckCircle2, MessageCircle, MapPin, Sparkles, Building } from 'lucide-react';
import { NEIGHBORHOODS } from '../data/metaData';

interface NeighborhoodsSectionProps {
  onOpenWhatsAppWithContext: (message: string) => void;
}

export const NeighborhoodsSection: React.FC<NeighborhoodsSectionProps> = ({
  onOpenWhatsAppWithContext,
}) => {
  return (
    <section id="bairros" className="py-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            Atendemos Todas as Regiões de Feira de Santana
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Somos especialistas no mercado imobiliário feirense. Conheça os principais vetores de crescimento e bairros da cidade para encontrar a localização perfeita para morar ou investir.
          </p>
        </div>

        {/* Neighborhood Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEIGHBORHOODS.map((hood) => (
            <div
              key={hood.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-400 transition-all shadow-md hover:shadow-xl group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={hood.image}
                    alt={hood.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Title & Vibe Bottom Left */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block text-[10px] font-bold text-blue-200 uppercase tracking-widest bg-slate-900/60 px-2.5 py-0.5 rounded backdrop-blur-sm mb-1">
                      {hood.vibe}
                    </span>
                    <h3 className="text-2xl font-black text-white drop-shadow-md">{hood.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                    {hood.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {hood.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Destaques da região:</div>
                    {hood.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() =>
                    onOpenWhatsAppWithContext(
                      `Olá, equipe Meta Imobiliária! Gostaria de ver opções de imóveis/casas na região de *${hood.name}* em Feira de Santana - BA.`
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-700/20 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.758.459 3.472 1.332 4.982l-1.415 5.166 5.283-1.385c1.455.795 3.101 1.213 4.768 1.213 5.507 0 9.97-4.463 9.97-9.97 0-5.506-4.463-9.969-9.969-9.969zm5.733 14.127c-.24.675-1.395 1.29-1.92 1.335-.48.045-1.11.21-3.645-.84-2.73-1.14-4.47-3.93-4.605-4.11-.135-.18-1.11-1.47-1.11-2.805 0-1.335.69-1.995.96-2.265.27-.27.585-.345.78-.345.195 0 .39 0 .555.015.18.015.42-.075.66.51.24.585.825 2.01.885 2.145.06.135.105.3.015.48-.09.18-.135.285-.27.435-.135.15-.285.345-.405.465-.135.135-.27.285-.12.54.15.255.675 1.11 1.455 1.8 1.005.885 1.845 1.17 2.1 1.29.255.12.405.105.555-.065.15-.18.645-.75.825-1.005.18-.255.36-.21.6-.12.24.09 1.53.72 1.785.855.255.135.42.21.48.315.06.105.06.615-.18 1.29z"/>
                  </svg>
                  <span>Ver Opções em {hood.name.split('&')[0].trim()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* City Highlight Callout Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
              <span>Procura em outro bairro de Feira de Santana?</span>
            </span>
            <h3 className="text-xl font-black text-white">
              Atendemos 100% de Feira de Santana - BA
            </h3>
            <p className="text-xs text-blue-100 max-w-xl">
              Fale com nossos consultores para buscar imóveis no bairro de sua preferência ou agendar uma avaliação gratuita do seu patrimônio.
            </p>
          </div>

          <button
            onClick={() =>
              onOpenWhatsAppWithContext(
                'Olá! Gostaria de consultar imóveis em um bairro específico de Feira de Santana com a equipe da Meta Imobiliária.'
              )
            }
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-lg transition-all shrink-0"
          >
            Falar no WhatsApp com Consultor
          </button>
        </div>

      </div>
    </section>
  );
};

