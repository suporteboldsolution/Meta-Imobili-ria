import React, { useState } from 'react';
import { Send, Bot, MessageCircle, RefreshCw } from 'lucide-react';
import { STORE_INFO } from '../data/metaData';

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsAppWithContext: (message: string) => void;
}

interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
}

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsAppWithContext,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'assistant',
      text: 'Olá! Seja muito bem-vindo à Meta Imobiliária (CRECI J - 3158)! Sou o Atendente Virtual VIP da Meta. Como posso ajudá-lo hoje sobre imóveis na planta, prontos para morar e lançamentos em Feira de Santana - BA?',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = [
    'Quais os bairros em expansão em Feira de Santana?',
    'Vale a pena comprar imóvel na planta com parcelas?',
    'Como funciona a avaliação de imóvel com a Meta?',
    'Quais documentos preciso para simular financiamento?',
  ];

  const handleAsk = async (questionText: string) => {
    if (!questionText.trim() || loading) return;

    const userMsg = questionText.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputQuery('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMsg,
          topic: 'Consultoria Geral Meta',
          clientContext: { source: 'Meta Website AI Modal' },
        }),
      });

      const data = await response.json();
      const reply = data.reply || data.fallbackReply || 'Agradecemos o contato. Nossos corretores qualificados da Meta Imobiliária (CRECI J - 3158) em Feira de Santana - BA estão prontos para atendê-lo!';

      setMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: `Tivemos uma pequena oscilação temporária. Entre em contato diretamente pelo Instagram ${STORE_INFO.instagramHandle} para atendimento humano imediato!`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full flex flex-col h-[80vh] shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-700 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-700" />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Atendente Virtual Meta VIP</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-blue-700 font-bold">
                Inteligência Artificial & Consultoria Feira de Santana - BA
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 text-lg font-bold"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue-700 text-white font-medium rounded-tr-none shadow-md'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm font-normal'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 text-blue-700 p-3 rounded-2xl text-xs flex items-center gap-2 shadow-sm font-medium">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Consultando inteligência imobiliária da Meta...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
            Perguntas Frequentes:
          </span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(q)}
              disabled={loading}
              className="text-[11px] font-medium bg-slate-100 hover:bg-blue-700 hover:text-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-col gap-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(inputQuery);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Digite sua dúvida sobre imóveis na planta ou prontos em Feira de Santana..."
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-700 font-medium"
            />
            <button
              type="submit"
              disabled={loading || !inputQuery.trim()}
              className="p-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold disabled:opacity-50 transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span>Deseja atendimento humano direto?</span>
            <button
              onClick={() => {
                onClose();
                onOpenWhatsAppWithContext(
                  'Olá, equipe Meta Imobiliária! Gostaria de continuar a conversa com um consultor humano no WhatsApp.'
                );
              }}
              className="text-blue-700 hover:text-blue-800 font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chamar no WhatsApp ({STORE_INFO.phone})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

