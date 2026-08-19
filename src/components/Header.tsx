import React, { useState } from 'react';
import { Instagram, MapPin, Menu, X, Sparkles, MessageCircle, Home, Award } from 'lucide-react';
import { STORE_INFO } from '../data/metaData';

interface HeaderProps {
  onOpenAiConsultant: () => void;
  onOpenValuation: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAiConsultant,
  onOpenValuation,
  onOpenWhatsApp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Bairros', href: '#bairros' },
    { label: 'Avalie seu Imóvel', href: '#avaliacao' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <img 
              src="/logo_meta.png" 
              alt="Meta Imobiliária" 
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold text-slate-700 hover:text-blue-700 transition-colors uppercase tracking-wider py-1 border-b-2 border-transparent hover:border-blue-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Profile Badge */}
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 hover:text-blue-700 hover:border-blue-300 transition-all"
              title={`Siga no Instagram ${STORE_INFO.instagramHandle}`}
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span className="font-semibold">{STORE_INFO.instagramHandle}</span>
            </a>

            {/* WhatsApp CTA */}
            <button
              onClick={onOpenWhatsApp}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.758.459 3.472 1.332 4.982l-1.415 5.166 5.283-1.385c1.455.795 3.101 1.213 4.768 1.213 5.507 0 9.97-4.463 9.97-9.97 0-5.506-4.463-9.969-9.969-9.969zm5.733 14.127c-.24.675-1.395 1.29-1.92 1.335-.48.045-1.11.21-3.645-.84-2.73-1.14-4.47-3.93-4.605-4.11-.135-.18-1.11-1.47-1.11-2.805 0-1.335.69-1.995.96-2.265.27-.27.585-.345.78-.345.195 0 .39 0 .555.015.18.015.42-.075.66.51.24.585.825 2.01.885 2.145.06.135.105.3.015.48-.09.18-.135.285-.27.435-.135.15-.285.345-.405.465-.135.135-.27.285-.12.54.15.255.675 1.11 1.455 1.8 1.005.885 1.845 1.17 2.1 1.29.255.12.405.105.555-.065.15-.18.645-.75.825-1.005.18-.255.36-.21.6-.12.24.09 1.53.72 1.785.855.255.135.42.21.48.315.06.105.06.615-.18 1.29z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            aria-label="Alternar menu mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenValuation();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider"
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span>Anuncie ou Avalie seu Imóvel</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.758.459 3.472 1.332 4.982l-1.415 5.166 5.283-1.385c1.455.795 3.101 1.213 4.768 1.213 5.507 0 9.97-4.463 9.97-9.97 0-5.506-4.463-9.969-9.969-9.969zm5.733 14.127c-.24.675-1.395 1.29-1.92 1.335-.48.045-1.11.21-3.645-.84-2.73-1.14-4.47-3.93-4.605-4.11-.135-.18-1.11-1.47-1.11-2.805 0-1.335.69-1.995.96-2.265.27-.27.585-.345.78-.345.195 0 .39 0 .555.015.18.015.42-.075.66.51.24.585.825 2.01.885 2.145.06.135.105.3.015.48-.09.18-.135.285-.27.435-.135.15-.285.345-.405.465-.135.135-.27.285-.12.54.15.255.675 1.11 1.455 1.8 1.005.885 1.845 1.17 2.1 1.29.255.12.405.105.555-.065.15-.18.645-.75.825-1.005.18-.255.36-.21.6-.12.24.09 1.53.72 1.785.855.255.135.42.21.48.315.06.105.06.615-.18 1.29z"/>
              </svg>
              <span>Falar no WhatsApp: {STORE_INFO.phone}</span>
            </button>

            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Instagram {STORE_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

