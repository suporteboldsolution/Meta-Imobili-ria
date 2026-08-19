import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, MessageCircle, Building2, Tag, ChevronDown, Check } from 'lucide-react';

interface ValuationFormProps {
  onOpenWhatsAppWithContext: (message: string) => void;
  isModal?: boolean;
  onCloseModal?: () => void;
}

const PROPERTY_OPTIONS = [
  { value: 'Apartamento', label: 'Apartamento / Cobertura' },
  { value: 'Casa Residencial', label: 'Casa Residencial / Sobrado' },
  { value: 'Terreno / Lote', label: 'Terreno / Lote em Condomínio' },
  { value: 'Imóvel na Planta', label: 'Imóvel na Planta / Lançamento' },
  { value: 'Ponto Comercial', label: 'Comercial / Sala / Galpão' },
];

export const ValuationForm: React.FC<ValuationFormProps> = ({
  onOpenWhatsAppWithContext,
  isModal = false,
  onCloseModal,
}) => {
  const [objective, setObjective] = useState<string>('Comprar');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('Apartamento');
  const [neighborhood, setNeighborhood] = useState<string>('Bairro SIM - Feira de Santana/BA');
  const [description, setDescription] = useState<string>('');
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Olá, Meta Imobiliária (CRECI J - 3158)! Gostaria de atendimento:
- *Objetivo:* ${objective}
- *Nome:* ${fullName}
- *Tipo de Imóvel:* ${PROPERTY_OPTIONS.find((opt) => opt.value === propertyType)?.label || propertyType}
- *Bairro / Região:* ${neighborhood}
- *Descrição / Detalhes:* ${description || 'Nenhum detalhe adicional informado.'}`;

    setTimeout(() => {
      onOpenWhatsAppWithContext(message);
      if (onCloseModal) onCloseModal();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="avaliacao" className={`py-16 ${isModal ? 'bg-white' : 'bg-slate-50'} text-slate-900 border-b border-slate-200`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
            Comprar, Alugar, Vender ou Anunciar Imóveis
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Diga o que você precisa ou descreva o imóvel ideal. Nossa equipe entrará em contato diretamente via WhatsApp com as melhores opções de Feira de Santana - BA.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white p-8 rounded-2xl border border-emerald-300 text-center space-y-4 shadow-lg">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Solicitação Enviada com Sucesso!</h3>
            <p className="text-xs text-slate-600">
              Redirecionando para o WhatsApp da Meta Imobiliária...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-xl">
            
            {/* Objective Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Qual o seu objetivo? *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'Comprar', label: 'Quero Comprar' },
                  { id: 'Alugar', label: 'Quero Alugar' },
                  { id: 'Vender / Anunciar', label: 'Anunciar Imóvel' },
                  { id: 'Avaliação / Consultoria', label: 'Avaliação de Imóvel' },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setObjective(item.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      objective === item.id
                        ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Ana Maria Silva"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Tipo de Imóvel
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-3.5 text-sm text-slate-900 font-medium flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 shadow-sm transition-all hover:bg-slate-100/80 cursor-pointer"
                >
                  <span className="truncate">
                    {PROPERTY_OPTIONS.find((opt) => opt.value === propertyType)?.label || propertyType}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-30 mt-1.5 w-full bg-white border border-slate-200 rounded-xl shadow-2xl py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {PROPERTY_OPTIONS.map((option) => {
                      const isSelected = propertyType === option.value;
                      return (
                        <button
                          type="button"
                          key={option.value}
                          onClick={() => {
                            setPropertyType(option.value);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50 text-blue-800 font-bold'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <span className="truncate">{option.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Bairro ou Região de Interesse
                </label>
                <input
                  type="text"
                  required
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  placeholder="Ex: SIM, Mangabeira, Papagaio..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Descrição do que você procura ou deseja anunciar *
              </label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Procuro apartamento para alugar no bairro SIM até R$ 2.000 / Quero anunciar meu imóvel para venda ou locação..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-700/20"
            >
              <MessageCircle className="w-4 h-4 fill-white text-blue-700" />
              <span>Enviar Descrição e Falar no WhatsApp</span>
            </button>

          </form>
        )}

      </div>
    </section>
  );
};


