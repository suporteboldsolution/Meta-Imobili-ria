import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Gemini client initialization helper
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "Meta Imobiliaria" });
});

// AI Real Estate Assistant Consultation route
app.post("/api/ai-consultant", async (req, res) => {
  try {
    const { question, topic, clientContext } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(503).json({
        error: "Gemini API Key não configurada no servidor.",
        fallbackResponse:
          "Olá! Bem-vindo à Meta Imobiliária (CRECI J - 3158). Nossa equipe de corretores qualificados em Feira de Santana - BA está pronta para realizar o seu sonho do imóvel próprio. Entre em contato conosco pelo Instagram @ametaimobiliaria para atendimento personalizado!",
      });
    }

    const systemPrompt = `Você é o Consultor Virtual VIP da Meta Imobiliária (CRECI J - 3158), atuante em Feira de Santana - BA e região metropolitana.
Slogan da empresa: "Mais que imóveis, realizamos sonhos e construímos futuros."
Sua empresa é especialista em imóveis na planta, prontos para morar, locação e aluguel de imóveis, lançamentos em condomínios fechados, e consultoria para compra, aluguel, venda e avaliação de imóveis na região de Feira de Santana (Bairro SIM, Santa Mônica, Mangabeira, Papagaio, Centro, Tomba e arredores).

Sua personalidade é extremamente atenciosa, transparente, profissional e acolhedora (focada em atendimento humanizado e na realização da conquista da casa própria com segurança e corretores qualificados).

Orientações para as respostas:
1. Responda em Português do Brasil com tom profissional e encorajador.
2. Destaque o crescimento e o potencial de Feira de Santana - BA (vetores de expansão como o Bairro SIM e Mangabeira, condomínios fechados com segurança, planejamento de parcelamento para imóveis na planta e chaves na mão).
3. Seja transparente e conciso (máximo 3 parágrafos curtos).
4. Convide sempre o cliente para tirar dúvidas, solicitar simulação de financiamento ou seguir o perfil no Instagram @ametaimobiliaria.
5. Se o cliente perguntar sobre busca de imóveis específicos em catálogo, explique com cordialidade que a Meta trabalha com consultoria humanizada e personalizada, orientando o cliente passo a passo desde a simulação até a entrega das chaves.`;

    const userPrompt = `Contexto do cliente: ${JSON.stringify(clientContext || {})}
Tópico: ${topic || "Dúvida Geral"}
Pergunta: ${question}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Estou à disposição para auxiliá-lo na realização do seu sonho em Feira de Santana - BA!";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Erro na consulta IA Meta Imobiliária:", error);
    return res.status(500).json({
      error: "Não foi possível processar a consulta no momento.",
      fallbackReply:
        "Tivemos uma pequena oscilação. Entre em contato diretamente com nossos consultores da Meta Imobiliária via Instagram @ametaimobiliaria para atendimento imediato!",
    });
  }
});

// Vite server / Static files middleware setup
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Meta Imobiliária] Servidor rodando em http://0.0.0.0:${PORT}`);
  });
}

setupServer();
