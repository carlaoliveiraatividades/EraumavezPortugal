import { motion } from "motion/react";
import { Achievement } from "../types";
import { Award, Shield, Key, Sparkles, Trophy, Check, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { playClickSound, playSuccessSound } from "../audio";

interface RewardCabinetProps {
  achievements: Achievement[];
  points: number;
}

export default function RewardCabinet({ achievements, points }: RewardCabinetProps) {
  // Let's create a custom Knight Shield Designer for kids!
  const [shieldColor, setShieldColor] = useState("bg-red-600 border-red-700 text-yellow-300");
  const [shieldSymbol, setShieldSymbol] = useState("🛡️");
  const [shieldBgLabel, setShieldBgLabel] = useState("Vermelho Real");
  const [shieldName, setShieldName] = useState("Escudo do Pequeno Cavaleiro");
  
  // Audio effect when a kid changes shield design
  const changeShield = (color: string, label: string) => {
    playClickSound();
    setShieldColor(color);
    setShieldBgLabel(label);
  };

  const changeSymbol = (symbol: string) => {
    playClickSound();
    setShieldSymbol(symbol);
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const currentLevel = Math.floor(points / 100) + 1;
  const nextLevelPoints = currentLevel * 100;
  const progressPercent = Math.min(100, ((points % 100) / 100) * 100);

  return (
    <div className="space-y-8 max-w-5xl mx-auto px-4 py-2">
      {/* Level Header Banner with Bento styling */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#FFD93D] rounded-[32px] p-6 md:p-8 text-amber-950 overflow-hidden border-4 border-[#B45309] shadow-sm"
      >
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-10 w-64 h-64 bg-white rounded-full pointer-events-none" />
        <div className="absolute left-4 top-4 text-4xl animate-bounce">✨</div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-amber-900 shadow-md text-4xl font-black shrink-0">
              {currentLevel}
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-amber-900">O Teu Grau Real</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mt-0.5 text-slate-900">
                {currentLevel >= 5 ? "Duque de Ourique" : currentLevel >= 4 ? "Conde de Guimarães" : currentLevel >= 3 ? "Navegador de Sagres" : currentLevel >= 2 ? "Fidalgo Aprendiz" : "Grão-Vassalo Iniciante"}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <Trophy className="w-5 h-5 text-amber-900" />
                <span className="font-black text-amber-950 text-sm">
                  {points} Pontos Reais de Experiência
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-64 space-y-2 shrink-0">
            <div className="flex justify-between text-xs font-black text-amber-950">
              <span>Nível {currentLevel}</span>
              <span>Nível {currentLevel + 1} ({points}/{nextLevelPoints} XP)</span>
            </div>
            <div className="w-full h-4 bg-amber-900/20 rounded-full overflow-hidden p-0.5 border border-amber-900/10">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-amber-950 rounded-full"
              />
            </div>
            <p className="text-center text-[11px] font-black text-amber-900">
              Faltam {nextLevelPoints - points} XP para o próximo nível de nobreza!
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Achievements Grid List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#046A38]" />
              Conquistas e Medalhas ({unlockedCount}/{achievements.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-4 rounded-[24px] border-4 flex gap-4 items-center transition-all ${
                  achievement.unlocked 
                    ? "bg-white border-[#046A38] shadow-sm hover:scale-102" 
                    : "bg-slate-50 border-slate-250 opacity-60 filter grayscale"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-md border-2 border-white ${
                  achievement.unlocked ? achievement.badgeColor : "bg-slate-205 text-slate-400 shadow-none border"
                }`}>
                  {achievement.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-slate-900 text-sm leading-tight">
                      {achievement.title}
                    </h4>
                    {achievement.unlocked && (
                      <span className="bg-green-150 text-green-700 p-0.5 rounded-full">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-650 leading-snug font-medium">
                    {achievement.description}
                  </p>
                  <span className="inline-block text-[10px] font-black bg-[#FFFBEB] text-[#B45309] px-2 py-0.5 rounded-md border-2 border-[#FFD93D] mt-1">
                    +{achievement.points} XP Reais
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Knight Shield Designer Panel with red Bento styling */}
        <div className="bg-white border-4 border-[#DA291C] rounded-[32px] p-6 space-y-6 relative flex flex-col justify-between shadow-sm">
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#DA291C] bg-red-50 px-3 py-1 rounded-full border-2 border-red-200">
                Criatividade Real
              </span>
              <h3 className="text-lg font-black text-slate-800 mt-2">
                O Teu Escudo de Cavaleiro
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Personaliza o teu brasão de armas com as descobertas que fazes!
              </p>
            </div>

            {/* Simulated 3D Shield */}
            <motion.div 
              layoutId="knights_shield"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="my-4 flex justify-center items-center"
            >
              <div className={`w-40 h-48 rounded-t-full rounded-b-[40%] border-[6px] flex flex-col items-center justify-center shadow-md transition-all transform hover:scale-105 duration-300 relative ${shieldColor}`}>
                <div className="text-6xl animate-pulse">{shieldSymbol}</div>
                <div className="absolute bottom-4 text-center w-full px-2">
                  <span className="text-[9px] font-black uppercase tracking-widest leading-none bg-black/20 text-white rounded px-1">
                    PORTUGAL
                  </span>
                </div>
                {/* Five Quinas mini details (traditional cross points) */}
                <div className="absolute top-4 left-4 text-[10px] opacity-20">🛡️</div>
                <div className="absolute top-4 right-4 text-[10px] opacity-20">🛡️</div>
              </div>
            </motion.div>

            {/* Input Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-black text-slate-700 block uppercase tracking-wider">
                Nome do teu Brasão:
              </label>
              <input
                type="text"
                value={shieldName}
                onChange={(e) => {
                  setShieldName(e.target.value.substring(0, 32));
                }}
                className="w-full bg-white border-3 border-slate-200 rounded-xl px-3 py-1.5 text-xs font-black text-slate-800 focus:outline-none focus:border-red-400"
              />
            </div>

            {/* BG Selection */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-black text-slate-700 block uppercase tracking-wider">
                Fundo Real: <span className="text-[#DA291C] font-black">({shieldBgLabel})</span>
              </span>
              <div className="flex gap-2 flex-wrap">
                <button 
                  onClick={() => changeShield("bg-[#DA291C] border-[#B45309] text-yellow-300", "Vermelho Real")}
                  className={`w-6 h-6 rounded-full bg-red-600 border-2 border-white ring-2 ring-red-800 focus:scale-110`}
                />
                <button 
                  onClick={() => changeShield("bg-[#046A38] border-[#166534] text-amber-200", "Verde Esperança")}
                  className={`w-6 h-6 rounded-full bg-emerald-600 border-2 border-white ring-2 ring-emerald-800 focus:scale-110`}
                />
                <button 
                  onClick={() => changeShield("bg-[#0369A1] border-[#075985] text-yellow-200", "Azul Mar")}
                  className={`w-6 h-6 rounded-full bg-indigo-600 border-2 border-white ring-2 ring-indigo-800 focus:scale-110`}
                />
                <button 
                  onClick={() => changeShield("bg-[#FFD93D] border-[#B45309] text-amber-950", "Dourado Império")}
                  className={`w-6 h-6 rounded-full bg-amber-450 border-2 border-white ring-2 ring-amber-600 focus:scale-110`}
                />
              </div>
            </div>

            {/* Symbol Selection */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-black text-slate-700 block uppercase tracking-wider">
                Símbolo do Brasão:
              </span>
              <div className="flex gap-3">
                {["👑", "⛵", "⚔️", "🏰", "🦉"].map((sym) => (
                  <button
                    key={sym}
                    onClick={() => changeSymbol(sym)}
                    className={`text-2xl p-1.5 bg-white hover:bg-red-50 rounded-xl border-2 border-slate-200 hover:scale-110 transition-transform ${shieldSymbol === sym ? "ring-2 ring-red-500 bg-red-50 border-red-300" : ""}`}
                  >
                    {sym}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 text-[10px] font-black text-red-900 text-center border-t-2 border-red-100 bg-red-50/70 -mx-6 -mb-6 p-4 rounded-b-[28px]">
            🎉 Mostra este escudo com D. Afonso Henriques ou com a Rainha e descobre se eles aprovam as tuas armas secretas!
          </div>
        </div>
      </div>
    </div>
  );
}
