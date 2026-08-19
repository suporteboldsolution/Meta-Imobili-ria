import React from 'react';
import heroImg from '../assets/images/meta_hero_feira_residence_1786458987093.jpg';

interface HeroProps {
  onOpenWhatsAppWithContext?: (message: string) => void;
  onOpenValuation?: () => void;
  onOpenAiConsultant?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className="relative bg-slate-50 text-slate-900 overflow-hidden min-h-[calc(100vh-5rem)] flex items-center justify-center pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200">
      {/* Background Image with Light Overlay Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImg}
          alt="Meta Imobiliária Feira de Santana"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/85 to-blue-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Hero Copy */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight font-sans tracking-tight">
              Mais que Imóveis, Realizamos Sonhos em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800">
                Feira de Santana - BA
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl font-normal leading-relaxed mx-auto">
              A <strong className="text-slate-900 font-bold">Meta Imobiliária (CRECI J - 3158)</strong> conta com corretores qualificados para te orientar na escolha ideal — desde lançamentos na planta, imóveis prontos para morar e opções para alugar até a avaliação do seu patrimônio com transparência e segurança.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

