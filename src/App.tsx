import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { NeighborhoodsSection } from './components/NeighborhoodsSection';
import { ValuationForm } from './components/ValuationForm';
import { Footer } from './components/Footer';
import { AiConsultantModal } from './components/AiConsultantModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { STORE_INFO } from './data/metaData';
import { X } from 'lucide-react';

export default function App() {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [valuationModalOpen, setValuationModalOpen] = useState(false);

  const openWhatsAppWithText = (customText?: string) => {
    const defaultText =
      'Olá, Meta Imobiliária (CRECI J - 3158)! Vim pelo site institucional e gostaria de atendimento sobre imóveis e consultoria em Feira de Santana/BA.';
    const encoded = encodeURIComponent(customText || defaultText);
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`;
    try {
      const openedWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!openedWindow || openedWindow.closed || typeof openedWindow.closed === 'undefined') {
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Navigation Header */}
      <Header
        onOpenAiConsultant={() => setAiModalOpen(true)}
        onOpenValuation={() => setValuationModalOpen(true)}
        onOpenWhatsApp={() => openWhatsAppWithText()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
          onOpenValuation={() => setValuationModalOpen(true)}
          onOpenAiConsultant={() => setAiModalOpen(true)}
        />

        {/* Services & Value Proposition */}
        <ServicesSection
          onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
          onOpenValuation={() => setValuationModalOpen(true)}
        />

        {/* Neighborhoods of Feira de Santana */}
        <NeighborhoodsSection
          onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
        />

        {/* Property Valuation / Listing Section */}
        <ValuationForm
          onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
        onOpenValuation={() => setValuationModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton
        onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
        onOpenAiConsultant={() => setAiModalOpen(true)}
      />

      {/* AI Assistant Modal */}
      <AiConsultantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
      />

      {/* Valuation Modal overlay when triggered from header */}
      {valuationModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white border border-slate-200 rounded-2xl max-w-3xl w-full p-2 my-8 shadow-2xl">
            <button
              onClick={() => setValuationModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full border border-slate-300 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
            <ValuationForm
              onOpenWhatsAppWithContext={(text) => openWhatsAppWithText(text)}
              isModal={true}
              onCloseModal={() => setValuationModalOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
}

