/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INITIAL_ACHIEVEMENTS } from "./data";
import { Achievement } from "./types";
import { playClickSound, playAchievementSound } from "./audio";
import TimelineView from "./components/TimelineView";
import IllustratedMap from "./components/IllustratedMap";
import ChatCharacters from "./components/ChatCharacters";
import GamesDashboard from "./components/GamesDashboard";
import RewardCabinet from "./components/RewardCabinet";
import { Clock, Map, MessageCircle, Trophy, BookOpen, Compass, Sparkles, Volume2 } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"timeline" | "map" | "chat" | "games" | "rewards">("timeline");
  const [points, setPoints] = useState<number>(0);
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);

  // Load progress on mount
  useEffect(() => {
    try {
      const savedPoints = localStorage.getItem("portugal_hist_points");
      const savedAchievements = localStorage.getItem("portugal_hist_achievements");

      if (savedPoints) {
        setPoints(parseInt(savedPoints, 10));
      }
      if (savedAchievements) {
        setAchievements(JSON.parse(savedAchievements));
      }
    } catch (e) {
      console.warn("Could not load from localStorage:", e);
    }
  }, []);

  // Save progress on updates
  const saveProgress = (newPoints: number, newAch: Achievement[]) => {
    try {
      localStorage.setItem("portugal_hist_points", String(newPoints));
      localStorage.setItem("portugal_hist_achievements", JSON.stringify(newAch));
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  };

  const handleAddPoints = (pts: number) => {
    const nextPoints = points + pts;
    setPoints(nextPoints);
    saveProgress(nextPoints, achievements);
  };

  const handleUnlockAchievement = (id: string) => {
    let changed = false;
    const updatedAchievements = achievements.map((ach) => {
      if (ach.id === id && !ach.unlocked) {
        ach.unlocked = true;
        changed = true;
        // Gaining XP
        setPoints((prev) => {
          const nextPts = prev + ach.points;
          localStorage.setItem("portugal_hist_points", String(nextPts));
          return nextPts;
        });
        playAchievementSound();
      }
      return ach;
    });

    if (changed) {
      setAchievements(updatedAchievements);
      saveProgress(points, updatedAchievements);
    }
  };

  const handleTabChange = (tab: "timeline" | "map" | "chat" | "games" | "rewards") => {
    playClickSound();
    setActiveTab(tab);
  };

  // Level calculations for header HUD display
  const currentLevel = Math.floor(points / 100) + 1;
  const levelTitle = currentLevel >= 5 ? "Duque" : currentLevel >= 4 ? "Conde" : currentLevel >= 3 ? "Navegador" : currentLevel >= 2 ? "Fidalgo" : "Grão-Vassalo";

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#2D3436] flex flex-col justify-between selection:bg-amber-200">
      
      {/* Upper Navigation / Kid HUD Header display */}
      <header className="bg-white border-b-6 border-[#FFD93D] sticky top-0 z-50 shadow-sm px-4 py-3.5 rounded-b-[32px] mx-0 md:mx-4 mt-0 md:mt-2">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo / Badge Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#DA291C] rounded-full flex items-center justify-center text-3xl shadow-lg ring-4 ring-[#046A38] animate-bounce shrink-0">
              🏰
            </div>
            <div className="leading-none text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-black text-[#046A38] tracking-tight flex items-center justify-center md:justify-start gap-1.5">
                Era uma vez <span className="text-[#DA291C]">Portugal...</span>
                <Sparkles className="w-5 h-5 text-[#FFD93D] animate-pulse shrink-0" />
              </h1>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 block mt-0.5 tracking-wide uppercase">
                Viagem Ilustrada & Quiz de História para Crianças
              </span>
            </div>
          </div>

          {/* Level and Point Cabinet HUD with Bento aesthetic */}
          <div className="flex items-center gap-4 bg-white border-4 border-[#86EFAC] rounded-3xl px-4 py-2 shadow-sm">
            <div className="text-center">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Grau Real</span>
              <p className="text-xs font-black text-[#046A38] leading-none mt-0.5">{levelTitle}</p>
            </div>
            
            <div className="w-1 h-6 bg-slate-200 rounded-full" />
            
            <div className="text-center font-sans">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Nível</span>
              <p className="text-sm font-black text-[#DA291C] leading-none mt-0.5">{currentLevel}</p>
            </div>

            <div className="w-1 h-6 bg-slate-200 rounded-full" />

            <div className="flex items-center gap-1.5 font-bold">
              <div className="w-7 h-7 bg-[#FFD93D] rounded-full flex items-center justify-center text-sm shadow-inner border border-yellow-600 animate-pulse">🪙</div>
              <span className="text-sm font-black text-[#046A38]">
                {points} XP
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Main viewport Container with transitions */}
      <main className="flex-1 py-6 md:py-8 font-sans">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
          >
            {activeTab === "timeline" && (
              <TimelineView 
                onUnlockAchievement={handleUnlockAchievement} 
                achievements={achievements} 
              />
            )}
            
            {activeTab === "map" && (
              <IllustratedMap 
                onUnlockAchievement={handleUnlockAchievement} 
                achievements={achievements} 
              />
            )}
            
            {activeTab === "chat" && (
              <ChatCharacters 
                onUnlockAchievement={handleUnlockAchievement} 
                achievements={achievements}
                onAddPoints={handleAddPoints}
              />
            )}
            
            {activeTab === "games" && (
              <GamesDashboard 
                onUnlockAchievement={handleUnlockAchievement} 
                achievements={achievements}
                onAddPoints={handleAddPoints}
              />
            )}

            {activeTab === "rewards" && (
              <RewardCabinet 
                achievements={achievements} 
                points={points} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Primary Mobile-Friendly Sticky Navigation HUD Dock */}
      <nav className="bg-white border-t-6 border-[#FFD93D] py-3.5 px-4 bottom-0 sticky z-40 shadow-lg select-none rounded-t-[32px] mx-0 md:mx-4 mb-0 md:mb-2">
        <div className="max-w-xl mx-auto flex justify-between items-center gap-2">
          
          <button
            onClick={() => handleTabChange("timeline")}
            className={`flex-1 flex flex-col items-center justify-center p-2 rounded-2xl border-3 transition-all ${
              activeTab === "timeline" 
                ? "bg-[#046A38] border-[#046A38] text-white font-black scale-102 shadow-md shadow-[#046A38]/20" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            <Clock className="w-5 h-5 stroke-[2.5]" />
            <span className="text-[10px] font-black mt-1">Linha do Tempo</span>
          </button>

          <button
            onClick={() => handleTabChange("map")}
            className={`flex-1 flex flex-col items-center justify-center p-2 rounded-2xl border-3 transition-all ${
              activeTab === "map" 
                ? "bg-[#0369A1] border-[#0369A1] text-white font-black scale-102 shadow-md shadow-[#0369A1]/20" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            <Map className="w-5 h-5 stroke-[2.5]" />
            <span className="text-[10px] font-black mt-1">Tempo e Mapa</span>
          </button>

          <button
            onClick={() => handleTabChange("chat")}
            className={`flex-1 flex flex-col items-center justify-center p-2 rounded-2xl border-3 transition-all ${
              activeTab === "chat" 
                ? "bg-[#DA291C] border-[#DA291C] text-white font-black scale-102 shadow-md shadow-[#DA291C]/20" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            <MessageCircle className="w-5 h-5 stroke-[2.5]" />
            <span className="text-[10px] font-black mt-1">Falar com Heróis</span>
          </button>

          <button
            onClick={() => handleTabChange("games")}
            className={`flex-1 flex flex-col items-center justify-center p-2 rounded-2xl border-3 transition-all ${
              activeTab === "games" 
                ? "bg-[#FFD93D] border-[#B45309] text-amber-950 font-black scale-102 shadow-md shadow-amber-400/30" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            <Compass className="w-5 h-5 stroke-[2.5]" />
            <span className="text-[10px] font-black mt-1">Jogar e Quiz</span>
          </button>

          <button
            onClick={() => handleTabChange("rewards")}
            className={`flex-1 flex flex-col items-center justify-center p-2 rounded-2xl border-3 transition-all ${
              activeTab === "rewards" 
                ? "bg-[#F472B6] border-[#BE185D] text-white font-black scale-102 shadow-md shadow-[#F472B6]/20" 
                : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            <Trophy className="w-5 h-5 stroke-[2.5]" />
            <span className="text-[10px] font-black mt-1">Recompensas</span>
          </button>

        </div>
      </nav>

      {/* Humble Footer */}
      <footer className="py-4 px-4 text-center border-t border-amber-200/40 bg-[#FFF9E6]">
        <p className="text-[10px] text-amber-800/60 font-extrabold tracking-wider uppercase">
          Escrito com Orgulho em Português de Portugal para a Próxima Geração de Descobridores! 🇵🇹🎒
        </p>
      </footer>
    </div>
  );
}
