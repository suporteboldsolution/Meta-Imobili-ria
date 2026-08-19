import React from 'react';
import { Instagram, Phone, MapPin, Home, Clock, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '../data/metaData';

interface FooterProps {
  onOpenWhatsAppWithContext: (message: string) => void;
  onOpenValuation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWhatsAppWithContext,
  onOpenValuation,
}) => {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <img 
                src="/logo_meta.png" 
                alt="Meta Imobiliária" 
                className="h-14 sm:h-16 w-auto object-contain" 
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md font-normal">
              A Meta Imobiliária (CRECI J - 3158) é sua parceira para encontrar o imóvel ideal em Feira de Santana - BA. Atendimento humanizado e orientação ética com corretores qualificados.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-700">
              <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 font-bold">
                {STORE_INFO.creci}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 font-semibold">
                CNPJ: {STORE_INFO.cnpj}
              </span>
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-pink-50 border border-pink-200 text-pink-700 font-semibold hover:bg-pink-100 transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>{STORE_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links / Navegação */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-semibold">
              <li>
                <a href="#hero" className="hover:text-blue-700 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-700 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#bairros" className="hover:text-blue-700 transition-colors">Bairros Atendidos</a>
              </li>
              <li>
                <button
                  onClick={onOpenValuation}
                  className="hover:text-blue-700 transition-colors text-left font-semibold cursor-pointer"
                >
                  Avalie seu Imóvel
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Physical Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-blue-800 uppercase tracking-widest">
              Atendimento & Contato
            </h4>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">{STORE_INFO.fullName}</div>
                  <div>{STORE_INFO.address}</div>
                  <div>{STORE_INFO.city} - {STORE_INFO.state}, CEP {STORE_INFO.zipCode}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-700 shrink-0" />
                <button
                  onClick={() =>
                    onOpenWhatsAppWithContext(
                      'Olá, equipe Meta Imobiliária! Gostaria de atendimento via WhatsApp.'
                    )
                  }
                  className="hover:text-blue-700 font-bold transition-colors"
                >
                  {STORE_INFO.phone}
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-700 shrink-0" />
                <div>{STORE_INFO.openingHours}</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 font-bold hover:bg-blue-100 transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                <span>Ver no Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {STORE_INFO.fullName} • CNPJ: {STORE_INFO.cnpj}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Feira de Santana - Bahia</span>
            <span>•</span>
            <a href={STORE_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
              {STORE_INFO.instagramHandle}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

