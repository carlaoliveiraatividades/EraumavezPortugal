import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HISTORICAL_CHARACTERS } from "../data";
import { HistoricalCharacter, Achievement } from "../types";
import { Send, Volume2, VolumeX, Sparkles, AlertCircle, HelpCircle, User, Award, Loader2 } from "lucide-react";
import { playClickSound, playSuccessSound } from "../audio";

interface ChatCharactersProps {
  onUnlockAchievement: (id: string) => void;
  achievements: Achievement[];
  onAddPoints: (pts: number) => void;
}

interface Message {
  role: "user" | "model";
  text: string;
}

export default function ChatCharacters({ onUnlockAchievement, achievements, onAddPoints }: ChatCharactersProps) {
  const [selectedCharKey, setSelectedCharKey] = useState<string>("afonso_henriques");
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speakSupported, setSpeakSupported] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const selectedChar = HISTORICAL_CHARACTERS.find(c => c.key === selectedCharKey) || HISTORICAL_CHARACTERS[0];

  // Detect speechSynthesis support on mount
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSpeakSupported(true);
    }
  }, []);

  // Initialize character's first greeting message if empty
  const getCharMessages = () => {
    if (!messages[selectedCharKey]) {
      return [{ role: "model" as const, text: selectedChar.greeting }];
    }
    return messages[selectedCharKey];
  };

  const currentCharMessages = getCharMessages();

  // Scroll to bottom on updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentCharMessages]);

  // Handle TTS
  const speakText = (text: string) => {
    if (!speakSupported) return;
    try {
      window.speechSynthesis.cancel();
      if (isSpeaking) {
        setIsSpeaking(false);
        return;
      }

      const cleanText = text.replace(/[*#_\[\]]/g, ""); // strip markdown formatting
      const utterance = new SpeechSynthesisUtterance(cleanText);
      const voices = window.speechSynthesis.getVoices();
      
      // Attempt to find European Portuguese (pt-PT), fallback to any pt
      let ptVoice = voices.find(v => v.lang === "pt-PT");
      if (!ptVoice) {
         ptVoice = voices.find(v => v.lang.startsWith("pt"));
      }
      
      if (ptVoice) {
        utterance.voice = ptVoice;
      }
      
      // Personas tuning
      if (selectedCharKey === "afonso_henriques") {
        utterance.pitch = 0.9; // Kingly brave pitch
        utterance.rate = 1.0;
      } else if (selectedCharKey === "camoes") {
        utterance.pitch = 1.0;
        utterance.rate = 0.95;
      } else {
        utterance.pitch = 1.1; // Friendly pitch
        utterance.rate = 1.0;
      }

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("Speech Synthesis Error:", e);
      setIsSpeaking(false);
    }
  };

  // Stop talking when character shifts
  useEffect(() => {
    if (speakSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [selectedCharKey]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    playClickSound();
    setApiError(null);
    setInputMessage("");

    // Append user message
    const formattedUserMsg: Message = { role: "user", text: textToSend };
    const updatedMessages = [...currentCharMessages, formattedUserMsg];
    
    setMessages(prev => ({
      ...prev,
      [selectedCharKey]: updatedMessages
    }));

    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          character: selectedCharKey,
          prompt: textToSend,
          history: currentCharMessages.slice(1) // exclude first auto-greeting
        })
      });

      if (!response.ok) {
        const errDetails = await response.json();
        throw new Error(errDetails.error || "Erro de servidor ao contactar o personagem.");
      }

      const data = await response.json();
      
      // Append model response
      const modelReply: Message = { role: "model", text: data.reply };
      setMessages(prev => ({
        ...prev,
        [selectedCharKey]: [...updatedMessages, modelReply]
      }));

      // Grant conversational points of discovery
      onAddPoints(15);
      
      // Auto trigger conversation achievement
      if (!achievements.find(a => a.id === "conversa_imperio")?.unlocked) {
        onUnlockAchievement("conversa_imperio");
        playSuccessSound();
      }

      // Auto speak response for maximum accessibility/appeal
      speakText(data.reply);

    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "Não consegui ligar-me ao baú do tempo. Certifica-te que configuraste a GEMINI_API_KEY no menu correspondente.");
    } finally {
      setIsLoading(false);
    }
  };

  // Suggestive buttons for kids to click immediately
  const getPredefinedPrompts = () => {
    if (selectedCharKey === "afonso_henriques") {
      return [
        "Quem é D. Teresa?",
        "Qual é o poder da tua espada?",
        "O que aconteceu em Ourique?",
        "Como foi a fundação de Portugal?"
      ];
    } else if (selectedCharKey === "camoes") {
      return [
        "Como perdeste o olho em combate?",
        "Como salvaste o teu poema do naufrágio?",
        "Quem é o gigante Adamastor?",
        "Diz uma bela rima poética!"
      ];
    } else if (selectedCharKey === "vasco_da_gama") {
      return [
        "Como é navegar numa caravela real?",
        "Como foi o teu encontro na Índia?",
        "Que especiarias trouxeste?",
        "O vento já soprou contra Ti?"
      ];
    } else if (selectedCharKey === "maria_ii") {
      return [
        "Por que te chamam A Educadora?",
        "Como trouxeste o comboio a vapor?",
        "Que idade tinhas ao ser Rainha?",
        "Como podemos ser mais sábios?"
      ];
    } else {
      return [
        "Quem são os teus heterónimos?",
        "Por que escreves com outros nomes?",
        "O que gostas de comer na Baixa?",
        "Diz-me uma frase sobre os sonhos!"
      ];
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-2 space-y-6">
      
      {/* Bento styled top heading container */}
      <div className="text-center space-y-2 bg-white border-4 border-[#DA291C] p-6 rounded-[32px] shadow-sm">
        <span className="bg-[#FEE2E2] text-[#DA291C] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-red-200 inline-block">
          ✨ Personagens Animadas
        </span>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          Conversa Secreta com os Heróis
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium">
          Graças à magia da escrita interativa, podes fazer perguntas diretas a reis, rainhas, poetas e navegadores portugueses de outros séculos!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: Avatar selector selector list with Bento borders*/}
        <div className="md:col-span-4 space-y-3.5 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 gap-3 md:gap-0 font-sans">
          <span className="hidden md:block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1">
            Escolhe o teu Interlocutor:
          </span>
          {HISTORICAL_CHARACTERS.map((char) => {
            const isSelected = selectedCharKey === char.key;
            return (
              <button
                key={char.key}
                onClick={() => {
                  playClickSound();
                  setSelectedCharKey(char.key);
                }}
                className={`w-full text-left p-3 rounded-[24px] flex items-center gap-3 border-4 transition-all shrink-0 min-w-[200px] md:min-w-0 ${
                  isSelected 
                    ? "bg-white border-[#DA291C] shadow-md scale-102" 
                    : "bg-white border-slate-100 hover:border-slate-300"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${char.color} flex items-center justify-center text-3xl shadow shrink-0 border-2 border-white`}>
                  {char.avatar}
                </div>
                <div className="overflow-hidden leading-tight">
                  <h4 className="font-extrabold text-slate-900 text-sm truncate">{char.name}</h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider truncate mt-0.5">{char.title}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: The Interactive Scroll Dialogue Panel */}
        <div className="md:col-span-8 flex flex-col justify-between bg-amber-50 border-4 border-amber-300 rounded-[32px] shadow-sm p-5 md:p-6 min-h-[460px] relative">
          
          {/* Animated Avatar Face of the Speaker with speech status */}
          <div className="flex items-center justify-between border-b-2 border-amber-200 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={isSpeaking ? { scale: [1, 1.15, 1], y: [0, -5, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
                className={`w-14 h-14 rounded-full bg-gradient-to-tr ${selectedChar.color} flex items-center justify-center text-4xl shadow-md border-3 border-white shrink-0`}
              >
                {selectedChar.avatar}
              </motion.div>
              <div>
                <h3 className="font-black text-amber-950 text-base leading-none">{selectedChar.name}</h3>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">{selectedChar.title}</span>
              </div>
            </div>

            {/* Speach Readback controls */}
            {speakSupported && (
              <button
                onClick={() => speakText(currentCharMessages[currentCharMessages.length - 1].text)}
                className={`p-2.5 rounded-full border-2 transition-all ${
                  isSpeaking 
                    ? "bg-amber-500 border-amber-600 text-white animate-bounce" 
                    : "bg-white border-amber-200 text-amber-900 hover:bg-amber-100"
                }`}
                title="Ouvir a voz Real"
              >
                {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            )}
          </div>

          {/* Messages Log area */}
          <div className="flex-1 overflow-y-auto max-h-[240px] pr-2 space-y-4 font-sans text-sm">
            {currentCharMessages.map((msg, idx) => {
              const isMe = msg.role === "user";
              return (
                <div key={idx} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    isMe 
                      ? "bg-emerald-600 text-white rounded-br-none shadow border border-emerald-700 font-bold" 
                      : "bg-white text-slate-800 rounded-bl-none shadow border border-amber-100 font-medium"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              );
            })}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-400 p-3 rounded-2xl rounded-bl-none border border-amber-100 flex items-center gap-2 font-bold italic shadow">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                  {selectedChar.name} está a escrever...
                </div>
              </div>
            )}

            {apiError && (
              <div className="p-3 rounded-xl bg-rose-50 border-2 border-rose-200 text-rose-800 text-xs flex gap-2 font-bold leading-relaxed items-center">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{apiError}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick interactive shortcut buttons for children */}
          <div className="mt-4 pt-3 border-t border-amber-200/50">
            <p className="text-[10px] font-black uppercase text-amber-800 tracking-wider mb-2 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              Sugestões de Perguntas:
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-2 shrink-0">
              {getPredefinedPrompts().map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="bg-white/80 border border-amber-200/80 hover:bg-amber-100 text-[10px] font-extrabold text-amber-950 px-2.5 py-1.5 rounded-xl whitespace-nowrap shadow-sm hover:border-amber-400 transition-colors disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Message input fields bar */}
          <div className="flex items-center gap-2 mt-2 pt-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={isLoading}
              placeholder={`Pergunta-me o que quiseres, jovem...`}
              className="flex-1 bg-white border-2 border-amber-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-amber-950 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 disabled:opacity-50 shadow-inner"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-2xl border-b-4 border-amber-700 transition-all flex items-center justify-center shadow-md disabled:opacity-50 disabled:scale-100 active:translate-y-0.5 shrink-0"
            >
              <Send className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
