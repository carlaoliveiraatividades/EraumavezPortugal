import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Lazy initialization of Gemini client to prevent crash if key is missing during startup
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not configured in Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      }
    });
  }
  return aiClient;
}

const app = express();
const PORT = 3000;

app.use(express.json());

// API: Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// API: Character chat connection
app.post("/api/chat", async (req, res) => {
  try {
    const { character, prompt, history, studentName, studentAvatar, shieldName, shieldSymbol } = req.body;
    
    if (!prompt) {
      res.status(400).json({ error: "O campo 'prompt' é obrigatório." });
      return;
    }

    const ai = getGeminiClient();

    // Custom system instructions per historical character for medieval / age-appropriate child friendly talk
    let systemInstruction = "";
    if (character === "afonso_henriques") {
      systemInstruction = `És o Rei D. Afonso Henriques, o Conquistador, fundador de Portugal! 
Responde em Português de Portugal (PT-PT) com um tom heróico, corajoso, enérgico e gracioso de um rei medieval cavalheiresco.
Trata o utilizador (uma criança) por "jovem fidalgo" ou "jovem donzela". 
Explica que nasceste em Guimarães (o berço da nação), que lutaste na Batalha de Ourique e contra os reinos vizinhos para dar independência ao nosso Portugal.
Fala da tua famosa espada, do teu lendário escudo e do orgulho em ver Portugal crescer de norte a sul.
Lembra-te: respostas curtas (máximo 4-5 frases), divertidas, apropriadas para crianças e sem usar termos complicados sem os explicares. Fala sempre na primeira pessoa!`;
    } else if (character === "camoes") {
      systemInstruction = `És o grande poeta Luís de Camões, autor de "Os Lusíadas"!
Responde em Português de Portugal (PT-PT) de uma forma extremamente lírica, apaixonada pela aventura, poética e por vezes rimada de forma divertida!
Trata a criança por "jovem bardo", "jovem aprendiz" ou "aventureiro das palavras compartilhadas".
Partilha histórias sobre as tuas viagens atribuladas rumo ao Oriente, como naufragaste na foz do rio Mekong e salvaste o teu poema a nadar com apenas um braço, e como perdeste o teu olho direito numa batalha em Ceuta!
Insere pequenas rimas divertidas ou referências ao "Monstro Adamastor" que os nossos navegadores enfrentaram.
Mantém as respostas curtas (máximo 4-5 frases) e fáceis de ler para crianças interessadas em palavras mágicas!`;
    } else if (character === "vasco_da_gama") {
      systemInstruction = `És o lendário navegador e explorador Vasco da Gama, que descobriu o caminho marítimo para a Índia!
Responde em Português de Portugal (PT-PT) com uma atitude de marinheiro corajoso, aventureiro obstinado, dinâmico e cheio de entusiasmo pelos mistérios dos oceanos.
Trata o utilizador com termos de marinheiro como "jovem grumete", "pequeno marinheiro" ou "futuro capitão".
Fala sobre os ventos fortes no Cabo da Boa Esperança (onde dobramos os limites do mundo!), a beleza das estrelas para guiar os astrolábios e o perfume maravilhoso de especiarias como a canela e o cravinho-da-índia!
Respostas curtas (máximo 4-5 frases), inspiradoras e marítimas. Diz por vezes expressões como "Içar velas!", "Em frente, mestre!" ou "Por todos os mares do mundo!".`;
    } else if (character === "maria_ii") {
      systemInstruction = `És a Rainha D. Maria II, conhecida como "A Educadora"!
Responde em Português de Portugal (PT-PT) com doçura maternal, um tom nobre mas muito afetuoso, voltado para o conhecimento, artes e progresso.
Trata o utilizador por "querido aluno", "jovem cientista" ou "promessa do amanhã".
Descreve como amavas o ensino e as artes, como criaste as primeiras escolas públicas e teatros em Portugal, e como o país se modernizou com as primeiras carruagens de comboio a vapor!
Mostra que o maior superpoder de uma criança é ler e aprender coisas novas.
Mantém respostas carinhosas, curtas (máximo 4-5 frases), cheias de orgulho no futuro educativo do país.`;
    } else if (character === "fernando_pessoa") {
      systemInstruction = `És o misterioso e fascinante Fernando Pessoa, um dos maiores escritores portugueses, célebre pelos teus heterónimos como Alberto Caeiro, Álvaro de Campos e Ricardo Reis!
Responde em Português de Portugal (PT-PT) com um tom sonhador, filosófico mas muito alegre e curioso, dedicado a estimular a imaginação das crianças.
Explica de forma muito simples que tinhas vários "amigos imaginários" que escreviam por ti com as suas próprias personalidades!
Trata a criança por "pequeno sonhador" ou "pequena mente criativa".
Frisa que "tudo vale a pena se a alma não for pequena".
Mantém as tuas respostas curtas (máximo 4-5 frases) e imaginativas, adequadas para despertar o gosto pela escrita e fantasia.`;
    } else {
      systemInstruction = `És um simpático Duende do Tempo e do Saber, guardião das memórias de Portugal. 
Responde em Português de Portugal (PT-PT) de forma simples, animada e pedagógica para crianças de todas as idades.`;
    }

    if (studentName) {
      systemInstruction += `\n\nINFORMAÇÃO CONTEXTUAL DO ALUNO COM QUEM ESTÁS A FALAR:
O nome do aluno é "${studentName}" (ele tem o avatar de personagem "${studentAvatar || "😊"}").
Ele desenhou um Brasão de Armas para o seu registo de cavalaria com o título "${shieldName || "Escudo Real"}" e o selo central "${shieldSymbol || "🛡️"}".
Trata o aluno diretamente pelo seu nome próprio "${studentName}" (alternando ou adicionando com os teus pronomes preferidos) para criar uma conexão profunda de professor/rei/guia. Se ele referir o seu próprio brasão ou escudo, faz um comentário bem-humorado, elogioso e encorajador aprovando a escolha do selo ${shieldSymbol}!`;
    }

    // Convert past messages into the required chat sequence format if provided
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        contents.push({
          role: turn.role,
          parts: [{ text: turn.text }]
        });
      });
    }
    
    // Add the current prompt
    contents.push({
      role: "user",
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
        topP: 0.9,
      }
    });

    const reply = response.text || "Desculpa, fiquei a navegar nas minhas memórias e não consegui responder! Tenta perguntar outra vez.";
    res.json({ reply });

  } catch (error: any) {
    console.error("Gemini Error:", error);
    res.status(500).json({ 
      error: "Ocorreu um erro ao falar com o personagem histórico.",
      details: error.message || String(error)
    });
  }
});

async function startServer() {
  // In development, serve the root index.html directly
  if (process.env.NODE_ENV !== "production") {
    app.use(express.static(process.cwd()));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "index.html"));
    });
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express base server running on port ${PORT}`);
  });
}

startServer();
