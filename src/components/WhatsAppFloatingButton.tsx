import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send, PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data/metaData';
import metaLogo from '../assets/images/logo_meta.png';

interface WhatsAppFloatingButtonProps {
  onOpenWhatsAppWithContext: (message: string) => void;
  onOpenAiConsultant: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  onOpenWhatsAppWithContext,
  onOpenAiConsultant,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);

  const quickMessages = [
    'Olá! Gostaria de informações sobre imóveis na planta em Feira de Santana.',
    'Quero saber mais sobre os lançamentos em Feira de Santana.',
    'Procuro opções de imóveis para alugar em Feira de Santana.',
    'Tenho interesse em avaliar/anunciar meu imóvel com a Meta Imobiliária.',
    'Gostaria de simular financiamento imobiliário com um corretor qualificado.',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Quick Popup Box */}
      {popupOpen && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 max-w-sm w-full shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <img 
                src={metaLogo} 
                alt="Meta Imobiliária" 
                className="w-9 h-9 object-contain rounded-full bg-white p-0.5" 
              />
              <div>
                <div className="text-xs font-bold text-white">Meta Imobiliária</div>
                <div className="text-[10px] text-emerald-400 font-medium">Online no WhatsApp</div>
              </div>
            </div>

            <button
              onClick={() => setPopupOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
            Olá! Como a Meta Imobiliária (CRECI J - 3158) pode te ajudar em Feira de Santana - BA hoje? Escolha uma opção:
          </div>

          <div className="space-y-1.5">
            {quickMessages.map((msg, i) => (
              <button
                key={i}
                onClick={() => {
                  setPopupOpen(false);
                  onOpenWhatsAppWithContext(msg);
                }}
                className="w-full text-left text-[11px] font-medium bg-slate-950 hover:bg-emerald-600 hover:text-white text-slate-300 p-2.5 rounded-xl border border-slate-800 transition-colors flex items-center justify-between gap-2"
              >
                <span className="line-clamp-1">{msg}</span>
                <Send className="w-3 h-3 shrink-0 text-emerald-400" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-center">
            <span className="text-[10px] text-slate-500">Feira de Santana - BA</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setPopupOpen(!popupOpen)}
        className="relative group p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-emerald-400/30"
        aria-label="Abrir atendimento no WhatsApp Meta Imobiliaria"
      >
        {/* Logo Oficial do WhatsApp */}
        <svg className="w-7 h-7 fill-white shrink-0" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.758.459 3.472 1.332 4.982l-1.415 5.166 5.283-1.385c1.455.795 3.101 1.213 4.768 1.213 5.507 0 9.97-4.463 9.97-9.97 0-5.506-4.463-9.969-9.969-9.969zm5.733 14.127c-.24.675-1.395 1.29-1.92 1.335-.48.045-1.11.21-3.645-.84-2.73-1.14-4.47-3.93-4.605-4.11-.135-.18-1.11-1.47-1.11-2.805 0-1.335.69-1.995.96-2.265.27-.27.585-.345.78-.345.195 0 .39 0 .555.015.18.015.42-.075.66.51.24.585.825 2.01.885 2.145.06.135.105.3.015.48-.09.18-.135.285-.27.435-.135.15-.285.345-.405.465-.135.135-.27.285-.12.54.15.255.675 1.11 1.455 1.8 1.005.885 1.845 1.17 2.1 1.29.255.12.405.105.555-.065.15-.18.645-.75.825-1.005.18-.255.36-.21.6-.12.24.09 1.53.72 1.785.855.255.135.42.21.48.315.06.105.06.615-.18 1.29z"/>
        </svg>
      </button>

    </div>
  );
};
