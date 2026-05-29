import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QUIZ_QUESTIONS } from "../data";
import { Achievement, QuizQuestion } from "../types";
import { Trophy, Check, X, Shield, Award, Compass, Sparkles, Anchor, RefreshCw, Feather, Heart } from "lucide-react";
import { playClickSound, playSuccessSound, playFailSound, playWaveSound, playAchievementSound } from "../audio";

interface GamesDashboardProps {
  onUnlockAchievement: (id: string) => void;
  achievements: Achievement[];
  onAddPoints: (pts: number) => void;
}

export default function GamesDashboard({ onUnlockAchievement, achievements, onAddPoints }: GamesDashboardProps) {
  const [activeGame, setActiveGame] = useState<"quiz" | "ocean" | "poetry">("quiz");

  return (
    <div className="max-w-5xl mx-auto px-4 py-2 space-y-6">
      
      {/* Game Selector Tab Banner with Bento styling */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-[32px] border-4 border-[#046A38] shadow-sm">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
          <Compass className="w-6 h-6 text-[#046A38] animate-spin-slow" />
          Sala das Descobertas
        </h2>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => { playClickSound(); setActiveGame("quiz"); }}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-[18px] text-xs font-black flex items-center justify-center gap-2 border-3 transition-all ${
              activeGame === "quiz" 
                ? "bg-[#FFD93D] border-[#B45309] text-amber-950 shadow-sm font-black" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800"
            }`}
          >
            👑 Quiz do Reino
          </button>
          
          <button
            onClick={() => { playClickSound(); setActiveGame("ocean"); }}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-[18px] text-xs font-black flex items-center justify-center gap-2 border-3 transition-all ${
              activeGame === "ocean" 
                ? "bg-[#E0F2FE] border-[#0369A1] text-sky-950 shadow-sm font-black" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800"
            }`}
          >
            ⛵ Rota das Caravelas
          </button>
          
          <button
            onClick={() => { playClickSound(); setActiveGame("poetry"); }}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-[18px] text-xs font-black flex items-center justify-center gap-2 border-3 transition-all ${
              activeGame === "poetry" 
                ? "bg-[#F3E8FF] border-[#7E22CE] text-purple-950 shadow-sm font-black" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800"
            }`}
          >
            ✍️ Enigma dos Poetas
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeGame === "quiz" && (
          <motion.div key="quiz" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <QuizGame onUnlockAchievement={onUnlockAchievement} achievements={achievements} onAddPoints={onAddPoints} />
          </motion.div>
        )}

        {activeGame === "ocean" && (
          <motion.div key="ocean" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <OceanGame onUnlockAchievement={onUnlockAchievement} achievements={achievements} onAddPoints={onAddPoints} />
          </motion.div>
        )}

        {activeGame === "poetry" && (
          <motion.div key="poetry" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
            <PoetryGame onUnlockAchievement={onUnlockAchievement} achievements={achievements} onAddPoints={onAddPoints} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ==========================================
   GAME 1: O QUIZ DO REINO
   ========================================== */
function QuizGame({ onUnlockAchievement, achievements, onAddPoints }: { onUnlockAchievement: (id: string) => void, achievements: Achievement[], onAddPoints: (pts: number) => void }) {
  const [selectedEra, setSelectedEra] = useState<string>("fundacao");
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const filterQuestions = QUIZ_QUESTIONS.filter(q => q.eraId === selectedEra);
  const currentQuestion = filterQuestions[currentIdx];

  const handleEraChange = (era: string) => {
    setSelectedEra(era);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
    playClickSound();
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);

    if (selectedOption === currentQuestion.correctAnswer) {
      playSuccessSound();
      setScore(prev => prev + 1);
      onAddPoints(25);
    } else {
      playFailSound();
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < filterQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      playClickSound();
    } else {
      setShowSummary(true);
      if (selectedEra === "fundacao" && score >= 2) {
        // Unlock kingly crown achievement!
        onUnlockAchievement("coroa_afonso");
      }
    }
  };

  const handleResetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
    playClickSound();
  };

  return (
    <div className="bg-white border-4 border-[#FFD93D] rounded-[32px] p-6 md:p-8 space-y-6 shadow-sm">
      
      {/* Era chooser pills */}
      <div className="space-y-2">
        <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">Escolhe o século ou tema:</span>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "fundacao", name: "🏰 Fundação", color: "bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-300" },
            { id: "descobrimentos", name: "⛵ Descobrimentos", color: "bg-sky-100 hover:bg-sky-200 text-sky-950 border-sky-300" },
            { id: "crise_restauracao", name: "👑 Restauração", color: "bg-rose-100 hover:bg-rose-200 text-rose-950 border-rose-300" },
            { id: "revolucao_republica", name: "🚂 República", color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-950 border-emerald-300" },
            { id: "democracia", name: "🕊️ Democracia", color: "bg-purple-100 hover:bg-purple-200 text-purple-950 border-purple-300" }
          ].map((era) => (
            <button
              key={era.id}
              onClick={() => handleEraChange(era.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all shrink-0 ${
                selectedEra === era.id 
                  ? "bg-amber-500 border-amber-600 text-white shadow-sm" 
                  : era.color
              }`}
            >
              {era.name}
            </button>
          ))}
        </div>
      </div>

      {!showSummary && currentQuestion ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-white rounded-xl px-4 py-2 border border-amber-100">
            <span className="text-xs font-black text-amber-900 uppercase">
              Quiz do Reino de Portugal
            </span>
            <span className="text-xs font-extrabold text-amber-600">
              Pergunta {currentIdx + 1} de {filterQuestions.length}
            </span>
          </div>

          {/* Question Text */}
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-black text-blue-950 leading-snug">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {currentQuestion.options.map((opt, oIdx) => {
              const remainsUnanswered = !isAnswered;
              const isSelected = selectedOption === oIdx;
              const isCorrectOpt = oIdx === currentQuestion.correctAnswer;
              
              let optStyles = "bg-white border-2 border-slate-100";
              if (remainsUnanswered && isSelected) {
                optStyles = "bg-amber-100 border-amber-400 text-amber-950 ring-2 ring-amber-200";
              } else if (isAnswered) {
                if (isCorrectOpt) {
                  optStyles = "bg-green-100 border-green-500 text-green-950 ring-2 ring-green-200 font-extrabold";
                } else if (isSelected) {
                  optStyles = "bg-rose-100 border-rose-400 text-rose-950 ring-2 ring-rose-200";
                } else {
                  optStyles = "bg-slate-50 border-slate-100 opacity-60";
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(oIdx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl text-xs font-bold leading-normal transition-all duration-150 ${optStyles}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                      isAnswered && isCorrectOpt 
                        ? "bg-green-500 text-white" 
                        : isAnswered && isSelected 
                          ? "bg-rose-500 text-white" 
                          : isSelected 
                            ? "bg-amber-400 text-amber-950" 
                            : "bg-slate-100 text-slate-700"
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="flex-1">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanatory text & feedback bubble */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border ${
                  selectedOption === currentQuestion.correctAnswer 
                    ? "bg-green-50 border-green-200 text-green-950" 
                    : "bg-amber-50 border-amber-200 text-amber-950"
                } space-y-1.5`}
              >
                <div className="flex items-center gap-1.5">
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <Check className="w-5 h-5 text-green-600 stroke-[3]" />
                  ) : (
                    <X className="w-5 h-5 text-rose-600 stroke-[3]" />
                  )}
                  <span className="font-black text-sm uppercase">
                    {selectedOption === currentQuestion.correctAnswer ? "Exato! Fantástico!" : "Coragem, aprende com o erro!"}
                  </span>
                </div>
                <p className="text-xs leading-relaxed font-semibold">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Action bar */}
          <div className="flex justify-end pt-2">
            {!isAnswered ? (
              <button
                onClick={handleConfirmAnswer}
                disabled={selectedOption === null}
                className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs py-3 px-6 rounded-xl shadow-md border-b-4 border-amber-700 transition-transform active:translate-y-1 disabled:opacity-50"
              >
                Confirmar Resposta 📜
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 px-6 rounded-xl shadow-md border-b-4 border-emerald-800 transition-transform active:translate-y-1"
              >
                {currentIdx + 1 < filterQuestions.length ? "Seguinte Pergunta ➡️" : "Ver Resultados 🏆"}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Card */
        <div className="text-center p-6 space-y-6 max-w-md mx-auto bg-white border-2 border-amber-200 rounded-3xl shadow-sm">
          <div className="text-6xl animate-bounce">🏆</div>
          <div className="space-y-1">
            <h3 className="text-xl font-black text-blue-950">Fim do Teste do Reino!</h3>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Pontuação Final no nível: {selectedEra.toUpperCase()}
            </p>
          </div>

          <div className="w-28 h-28 rounded-full bg-amber-50 border-4 border-amber-400 flex items-center justify-center text-3xl font-black text-amber-950 mx-auto shadow-inner">
            {score}/{filterQuestions.length}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
            {score === 3 
              ? "Incrível! Mereces as espadas douradas da guarda do Rei! Acertaste em tudo!" 
              : score === 2 
                ? "Muito bem, jovem fidalgo! Tens um excelente saber das nossas histórias!" 
                : "Bom esforço! Torna a responder e de certeza que vais conseguir a pontuação perfeita!"}
          </p>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleResetQuiz}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs py-2.5 px-4 rounded-xl border border-slate-200 flex items-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4" /> Tentar de Novo
            </button>
            
            {selectedEra === "fundacao" && score >= 2 && !achievements.find(a => a.id === "coroa_afonso")?.unlocked && (
              <p className="text-[10px] text-green-700 font-bold bg-green-50 p-2 rounded-xl border border-green-200 block text-center mt-2 w-full animate-bounce">
                🎉 Desbloqueaste a Coroa de D. Afonso Henriques! Vai ao Armário!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


/* ==========================================
   GAME 2: DESAFIO DAS CARAVELAS (NAVIGATION)
   ========================================== */
function OceanGame({ onUnlockAchievement, achievements, onAddPoints }: { onUnlockAchievement: (id: string) => void, achievements: Achievement[], onAddPoints: (pts: number) => void }) {
  const [step, setStep] = useState<number>(0);
  const [hp, setHp] = useState<number>(3);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  const [log, setLog] = useState<string>("Sais de Belém com as velas cheias! Próximo destino: contornar o temível Cabo da Boa Esperança.");

  const handleChoice = (isSafe: boolean, successLog: string, failLog: string) => {
    playClickSound();
    
    if (isSafe) {
      setLog(successLog);
      playWaveSound();
      const nextStep = step + 1;
      
      if (nextStep >= 3) {
        setIsGameWon(true);
        onUnlockAchievement("mestre_caravela");
        onAddPoints(150);
        playAchievementSound();
      } else {
        setStep(nextStep);
      }
    } else {
      setLog(failLog);
      playFailSound();
      const newHp = hp - 1;
      if (newHp <= 0) {
        setHp(0);
        setIsGameOver(true);
      } else {
        setHp(newHp);
      }
    }
  };

  const handleRestart = () => {
    setStep(0);
    setHp(3);
    setIsGameOver(false);
    setIsGameWon(false);
    setLog("Sais de Belém com as velas cheias! Próximo destino: contornar o temível Cabo da Boa Esperança.");
    playClickSound();
  };

  const currentScenario = [
    {
      title: "Desafio 1: O Cabo das Tormentas 🌊",
      question: "Uma tempestade terrível abana a ti e ao Bartolomeu Dias! Ondas do tamanho de castelos ameaçam quebrar as caravelas. O que fazes?",
      choices: [
        { text: "Navegar em direção ao mar alto longe das rochas costeiras (Manobra Segura)", safe: true, success: "Excelente! Afastaste-te das rochas e conseguiste passar o cabo com segurança!", fail: "Bateste nas falésias e danificaste a caravela!" },
        { text: "Aproximar o barco o mais possível para ver o farol (Arriscado)", safe: false, success: "", fail: "As correntes empurraram o navio contra os recifes! Perdeste 1 coração." }
      ]
    },
    {
      title: "Desafio 2: O Gigante Adamastor 🐉",
      question: "Uma enorme nuvem preta e assustadora ganha a forma do temível monstro marítimo Adamastor! Ele grita para que voltes para Lisboa. O que fazes?",
      choices: [
        { text: "Entrar em pânico e atirar as especiarias ao mar para lhe agradar", safe: false, success: "", fail: "O monstro riu-se da tua fraqueza e soprou um furacão nas velas!" },
        { text: "Olhar para o astrolábio, inspirar fundo e recitar uma poesia de bravura", safe: true, success: "Maravilhoso! Adamastor encolheu de vergonha perante a vossa coragem marítima!", fail: "" }
      ]
    },
    {
      title: "Desafio 3: A Entrada no Oceano Índico 🏝️",
      question: "Chegas ao Oceano Índico com muito calor e ventos que sopram no sentido errado. Para chegar a Calecute antes que termine a comida, o que deves fazer?",
      choices: [
        { text: "Seguir a rota das correntes quentes e usar as velas triangulares (Bolinar)", safe: true, success: "Sublime! Conquistaste a rota espiritual e as caravelas ancoram finalmente na Índia!", fail: "" },
        { text: "Esperar pacientemente três meses para que o vento mude de direção naturalmente", safe: false, success: "", fail: "Os biscoitos de viagem apodreceram e a tripulação ficou enfraquecida!" }
      ]
    }
  ][step];

  return (
    <div className="bg-white border-4 border-[#7DD3FC] rounded-[32px] p-6 md:p-8 space-y-6 shadow-sm">
      
      <div className="flex justify-between items-center bg-white rounded-xl px-4 py-2.5 border border-sky-100 flex-wrap gap-2">
        <span className="text-xs font-black text-sky-950 uppercase flex items-center gap-1">
          <Anchor className="w-4 h-4 text-sky-700 animate-pulse" />
          Aventuras do Alto Mar
        </span>
        
        {/* Hearts and Status indicators */}
        <div className="flex gap-4 text-xs font-extrabold">
          <div className="flex items-center gap-1.5 bg-rose-50 text-rose-700 px-2.5 py-1 rounded-lg border border-rose-100">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart key={i} className={`w-4 h-4 ${i < hp ? "fill-current text-rose-600" : "text-slate-300"}`} />
            ))}
          </div>
          <span className="bg-sky-50 text-sky-800 px-2.5 py-1 rounded-lg border border-sky-100">
            Escala: {step + 1}/3
          </span>
        </div>
      </div>

      {!isGameOver && !isGameWon && currentScenario ? (
        <div className="space-y-6">
          <div className="bg-sky-100/50 p-6 rounded-2xl border-2 border-dashed border-sky-300 flex justify-center items-center h-48 relative overflow-hidden">
            {/* Custom Sea Scene visualization */}
            <div className="absolute inset-0">
               <svg viewBox="0 0 400 200" className="w-full h-full opacity-15">
                 <path d="M0,150 Q100,100 200,150 T400,150" fill="none" stroke="#000" strokeWidth="4" />
                 <path d="M0,165 Q100,120 200,165 T400,165" fill="none" stroke="#000" strokeWidth="4" />
               </svg>
            </div>
            
            {/* Caravela movement layout */}
            <motion.div 
              animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-8xl relative z-10 select-none cursor-pointer"
            >
              ⛵
            </motion.div>
            
            {step === 1 && (
              <div className="text-8xl right-10 absolute animate-pulse">🐉</div>
            )}
            {step === 2 && (
              <div className="text-7xl right-12 bottom-10 absolute">🕌</div>
            )}
            
            <div className="absolute bottom-2 left-4 text-[10px] font-black text-sky-950 uppercase tracking-wider bg-white/70 px-2 py-0.5 rounded border">
              Coordenadas: {step === 0 ? "Atlântico Sul" : step === 1 ? "Cabo da Boa Esperança" : "Oceano Índico"}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-black text-sky-950">{currentScenario.title}</h3>
            <p className="text-xs leading-relaxed text-slate-700 font-semibold bg-white p-4 rounded-xl border border-sky-100">
              {currentScenario.question}
            </p>
          </div>

          {/* User's Choice option buttons */}
          <div className="grid grid-cols-1 gap-3">
            {currentScenario.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice.safe, choice.success, choice.fail)}
                className="w-full text-left bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 p-4 rounded-2xl text-xs font-bold font-semibold transition-all duration-150 transform active:translate-y-0.5"
              >
                {choice.text}
              </button>
            ))}
          </div>

          {/* Historic text scroll log */}
          <div className="p-3.5 bg-slate-900 text-sky-300 rounded-xl font-mono text-[11px] leading-relaxed shadow border border-slate-800">
            📜 <span className="font-sans font-medium">{log}</span>
          </div>
        </div>
      ) : isGameOver ? (
        /* Game Over screen */
        <div className="text-center p-8 space-y-5 max-w-sm mx-auto bg-white border-3 border-rose-200 rounded-3xl shadow">
          <div className="text-7xl animate-pulse">⚓☠️</div>
          <h3 className="text-lg font-black text-rose-950">A Caravela Naufragou!</h3>
          <p className="text-xs text-slate-600 font-semibold leading-relaxed">
            As forças do Adamastor e as tempestades marítimas derrotaram o teu navio! Mas não desistas, o verdadeiro navegador aprende ao cruzar mares perigosos.
          </p>
          <button
            onClick={handleRestart}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs py-3 px-6 rounded-xl shadow-md border-b-4 border-sky-700 active:translate-y-1 block"
          >
            Içar Velas Novamente ⛵
          </button>
        </div>
      ) : (
        /* Won Screen */
        <div className="text-center p-8 space-y-6 max-w-md mx-auto bg-white border-4 border-green-300 rounded-3xl shadow">
          <div className="text-7xl animate-bounce">🍛🕌🏆</div>
          <div>
            <span className="bg-green-100 text-green-800 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full border border-green-200 inline-block">
              VITÓRIA MARÍTIMA!
            </span>
            <h3 className="text-xl font-black text-green-950 mt-2">Chegaste à Índia!</h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
            Grandioso capitão! Decidiste com sabedoria, superaste o gigante Adamastor e as tuas caravelas estão ancoradas em Calecute prontas para trazer toneladas de canela e pimenta!
          </p>
          <div className="bg-sky-50 p-3.5 rounded-xl border border-sky-100 text-[11px] text-sky-950 leading-relaxed font-bold">
            🎉 Recebeste a Medalha de <b>Navegador dos Sete Mares</b> no teu Armário e ganhaste <b>+150 XP!</b>
          </div>
          <button
            onClick={handleRestart}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 px-6 rounded-xl shadow-md border-b-4 border-emerald-800 active:translate-y-1 block"
          >
            Voltar a Navegar do Início 🧭
          </button>
        </div>
      )}

    </div>
  );
}


/* ==========================================
   GAME 3: POESIA ENIGMÁTICA (POETRY PUZZLE)
   ========================================== */
function PoetryGame({ onUnlockAchievement, achievements, onAddPoints }: { onUnlockAchievement: (id: string) => void, achievements: Achievement[], onAddPoints: (pts: number) => void }) {
  const [poemIdx, setPoemIdx] = useState<number>(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [solved, setSolved] = useState<boolean>(false);
  const [pointsGiven, setPointsGiven] = useState<boolean>(false);

  const poems = [
    {
      author: "Luís de Camões",
      context: "O amor é difícil de definir, escreveu o nosso grande poeta de um olho só!",
      verseLines: [
        "Amor é fogo que arde sem se ver,",
        "É ferida que dói e não se __________."
      ],
      correctAnswer: "sente",
      options: ["cura", "sente", "vê", "cala"],
      trivia: "Estes versos são conhecidos por quase todos os portugueses e mostram o sofrimento mágico do amor."
    },
    {
      author: "Fernando Pessoa",
      context: "Incentivando toda a gente a ter um espírito brilhante e a sonhar alto!",
      verseLines: [
        "Tudo vale a pena",
        "Se a alma não for __________."
      ],
      correctAnswer: "pequena",
      options: ["zangada", "escura", "pequena", "cansada"],
      trivia: "Escrito na grande obra 'Mensagem', Pessoa diz que o tamanho dos nossos sonhos dita a nossa grandeza!"
    }
  ];

  const currentPoem = poems[poemIdx];

  const handleWordSelect = (word: string) => {
    if (solved) return;
    setSelectedWord(word);
    playClickSound();
  };

  const checkAnswer = () => {
    if (selectedWord === currentPoem.correctAnswer) {
      playSuccessSound();
      setSolved(true);
      if (!pointsGiven) {
        onAddPoints(50);
        setPointsGiven(true);
      }
      
      // If we solve both, trigger the poet achievement!
      if (poemIdx === 1) {
        onUnlockAchievement("poeta_estrelas");
      }
    } else {
      playFailSound();
      setSelectedWord(null);
    }
  };

  const nextPoem = () => {
    if (poemIdx + 1 < poems.length) {
      setPoemIdx(prev => prev + 1);
      setSelectedWord(null);
      setSolved(false);
      setPointsGiven(false);
      playClickSound();
    } else {
      // Loop or block
      setPoemIdx(0);
      setSelectedWord(null);
      setSolved(false);
      setPointsGiven(false);
      playClickSound();
    }
  };

  return (
    <div className="bg-white border-4 border-[#C084FC] rounded-[32px] p-6 md:p-8 space-y-6 shadow-sm">
      
      <div className="flex justify-between items-center bg-white rounded-xl px-4 py-2 border border-purple-100">
        <span className="text-xs font-black text-purple-950 uppercase flex items-center gap-1">
          <Feather className="w-4 h-4 text-purple-700" />
          Enigma Versificado
        </span>
        <span className="text-xs font-extrabold text-purple-600">
          Escritor: {currentPoem.author}
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-xs text-slate-500 italic text-center font-bold">
          "{currentPoem.context}"
        </p>

        {/* The Scroll of Poetry */}
        <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 md:p-8 shadow-inner font-serif text-center max-w-md mx-auto space-y-3 relative overflow-hidden">
          {/* Scroll design decoration backgrounds */}
          <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-amber-100 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-amber-100 to-transparent" />
          
          <div className="text-amber-700/50 text-xs tracking-widest font-black uppercase mb-2">📜 Pergaminho das Linhas Ocultas 📜</div>
          
          <p className="text-sm md:text-base italic text-slate-800 leading-relaxed font-bold">
            {currentPoem.verseLines[0]}
          </p>
          
          <p className="text-sm md:text-base italic text-slate-800 leading-relaxed font-bold flex items-center justify-center gap-2 flex-wrap">
            <span>{currentPoem.verseLines[1].split("__________")[0]}</span>
            <span className={`inline-block border-b-3 border-dashed px-4 py-1 font-sans font-black text-sm transition-all text-purple-700 ${
              solved ? "bg-purple-100 border-purple-400 rounded-xl" : "border-slate-400 min-w-[80px]"
            }`}>
              {selectedWord || "???"}
            </span>
            <span>{currentPoem.verseLines[1].split("__________")[1]}</span>
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-4">
        <div className="flex gap-2.5 justify-center flex-wrap">
          {currentPoem.options.map((word) => (
            <button
              key={word}
              disabled={solved}
              onClick={() => handleWordSelect(word)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold border-2 transition-all hover:scale-105 active:scale-95 ${
                selectedWord === word
                  ? "bg-purple-500 text-white border-purple-600 shadow-md"
                  : "bg-white border-purple-200 text-purple-950 hover:bg-purple-100/50"
              } disabled:opacity-50`}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Solver actions */}
        <div className="flex justify-center gap-3">
          {!solved ? (
            <button
              disabled={!selectedWord}
              onClick={checkAnswer}
              className="bg-purple-500 hover:bg-purple-600 text-white font-extrabold text-xs py-3 px-6 rounded-xl shadow-md border-b-4 border-purple-700 active:translate-y-1 disabled:opacity-50"
            >
              Provar Rima Real ✍️
            </button>
          ) : (
            <div className="space-y-4 w-full">
              {/* Success feedback */}
              <div className="bg-green-50 rounded-2xl border border-green-200 p-4 text-center text-xs text-green-950 leading-relaxed max-w-sm mx-auto font-bold space-y-1">
                <p>✨ Incrível! Completo, rimado e correto! ✨</p>
                <p className="text-[10px] text-slate-500 font-medium italic font-serif mt-1">
                  "{currentPoem.trivia}"
                </p>
              </div>

              {poemIdx === 1 && !achievements.find(a => a.id === "poeta_estrelas")?.unlocked && (
                <div className="bg-amber-100 border border-amber-300 text-amber-950 font-bold p-3 rounded-2xl max-w-xs mx-auto text-center text-[10px] animate-bounce">
                  🏆 Ganhaste a Estrela de <b>Poeta das Estrelas</b> (+100 XP)!
                </div>
              )}

              <button
                onClick={nextPoem}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 px-6 rounded-xl shadow-md border-b-4 border-emerald-800 active:translate-y-1 mx-auto block"
              >
                {poemIdx + 1 < poems.length ? "Próximo Enigma Literário ➡️" : "Voltar ao Primeiro Poema Enigmático 📜"}
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
