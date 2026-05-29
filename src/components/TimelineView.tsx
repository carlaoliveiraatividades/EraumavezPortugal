import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HISTORICAL_ERAS } from "../data";
import { HistoricalEra, HistoricalEvent, Achievement } from "../types";
import { Calendar, Award, Sparkles, BookOpen, ChevronRight, HelpCircle, ArrowUpRight } from "lucide-react";
import { playClickSound, playSuccessSound } from "../audio";

interface TimelineViewProps {
  onUnlockAchievement: (id: string) => void;
  achievements: Achievement[];
}

export default function TimelineView({ onUnlockAchievement, achievements }: TimelineViewProps) {
  const [selectedEraId, setSelectedEraId] = useState<string>("fundacao");
  const [activeEventIdx, setActiveEventIdx] = useState<number>(0);

  const selectedEra = HISTORICAL_ERAS.find(era => era.id === selectedEraId) || HISTORICAL_ERAS[0];
  const activeEvent = selectedEra.events[activeEventIdx] || selectedEra.events[0];

  // If a child clicks or selects an era, play sound
  const handleEraClick = (eraId: string) => {
    setSelectedEraId(eraId);
    setActiveEventIdx(0);
    playClickSound();
  };

  const handleEventClick = (index: number) => {
    setActiveEventIdx(index);
    playClickSound();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-2 space-y-8 font-sans">
      
      {/* Title with Bento vibe */}
      <div className="text-center space-y-2 bg-white border-4 border-[#046A38] p-6 rounded-[32px] shadow-sm">
        <span className="bg-[#E0F2FE] text-[#0369A1] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-[#7DD3FC] inline-block">
          ⏳ Passeio Centenário
        </span>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          A Linha do Tempo de Portugal
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium">
          Explora os séculos e segue a fantástica caravela do tempo! Descobre de onde fomos e onde estamos!
        </p>
      </div>

      {/* Eras Selector Navigation Buttons as Bento Pills */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#FFD93D]">
        {HISTORICAL_ERAS.map((era) => {
          const isSelected = era.id === selectedEraId;
          return (
            <button
              key={era.id}
              onClick={() => handleEraClick(era.id)}
              className={`px-5 py-4 rounded-[24px] border-4 text-xs font-black flex items-center gap-2 whitespace-nowrap transition-all ${
                isSelected
                  ? "bg-[#FFD93D] border-[#B45309] text-amber-950 shadow-md scale-102"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span className="text-xl">{era.badge.split(" ")[0]}</span>
              <div className="text-left font-sans">
                <p className="leading-none text-[11px] font-black">{era.title}</p>
                <span className="text-[9px] text-slate-500 font-extrabold block mt-1">{era.years}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main timeline visual layout card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left column: Era presentation, fun fact & timeline years */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Era Header Details Box - Styled as big bento cardboard */}
          <motion.div 
            key={selectedEra.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-6 rounded-[32px] border-4 border-slate-700/20 ${selectedEra.color} space-y-4 shadow-sm`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-widest bg-white/90 p-1.5 rounded-lg border-2 border-slate-200 text-slate-600">
                {selectedEra.century}
              </span>
              <span className="text-xs font-black bg-white/50 px-2.5 py-1 rounded-full">{selectedEra.badge}</span>
            </div>
            
            <h3 className="text-2xl font-black text-slate-800">{selectedEra.title}</h3>
            <p className="text-sm leading-relaxed font-semibold text-slate-700">
              {selectedEra.description}
            </p>

            <div className="bg-white p-4 rounded-2xl border-4 border-dashed border-[#FFD93D] space-y-1 shadow-sm">
              <span className="text-[10px] font-black text-amber-800 uppercase flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                Curiosidade Real:
              </span>
              <p className="text-xs text-amber-950/90 leading-relaxed font-bold italic font-serif">
                "{selectedEra.funFact}"
              </p>
            </div>
          </motion.div>

          {/* Graphical Stepper for Milestone Years */}
          <div className="bg-white border-4 border-slate-700/20 rounded-[32px] p-6 shadow-sm space-y-6">
            <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">
              Caminho do Saber: Clica nos Anos!
            </h4>

            <div className="relative flex items-center justify-between px-4 pb-4">
              {/* Central vector connector line */}
              <div className="absolute left-6 right-6 top-5 h-2 bg-slate-100 rounded-full z-0" />
              <div 
                className="absolute left-6 top-5 h-2 bg-[#FFD93D] rounded-full z-0 transition-all duration-500"
                style={{ width: `${(activeEventIdx / (selectedEra.events.length - 1)) * 100}%` }}
              />

              {/* Step indicator year circles - styled with thick border */}
              {selectedEra.events.map((evt, idx) => {
                const isActive = idx === activeEventIdx;
                const isPassed = idx < activeEventIdx;
                
                return (
                  <button
                    key={evt.year}
                    onClick={() => handleEventClick(idx)}
                    className="relative z-10 focus:outline-none"
                  >
                    <div className={`w-11 h-11 rounded-full border-4 flex items-center justify-center font-bold text-xs shadow transition-all ${
                      isActive 
                        ? "bg-[#FFD93D] border-[#B45309] text-amber-950 scale-120 ring-4 ring-yellow-250" 
                        : isPassed 
                          ? "bg-[#E0F2FE] border-[#0369A1] text-[#0369A1]" 
                          : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                    }`}>
                      {evt.icon}
                    </div>
                    <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-tight ${
                      isActive ? "text-slate-900 font-black scale-102" : "text-slate-400 font-extrabold"
                    }`}>
                      {evt.year}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Specific Event detail readout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.year}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#FFFBEB] border-4 border-[#FFD93D] rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="text-4xl bg-white p-3 rounded-2xl border-2 border-amber-200 shadow-sm shrink-0">
                  {activeEvent.icon}
                </div>
                <div className="space-y-1.5 leading-tight">
                  <span className="text-[11px] font-black text-amber-950 bg-amber-200 p-1 rounded-md">
                    Ano {activeEvent.year}
                  </span>
                  <h4 className="text-base font-black text-amber-950 mt-1">{activeEvent.title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                    {activeEvent.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right column: Famous People who lived during selected era */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">
            Personagens Destacadas:
          </h4>

          <div className="space-y-3.5">
            {selectedEra.figures.map((figure) => (
              <motion.div
                key={figure.name}
                whileHover={{ y: -3 }}
                className="bg-white border-4 border-slate-100 rounded-[24px] p-4 shadow-sm flex gap-4 items-center relative overflow-hidden group"
              >
                {/* Visual side graphic strip matching Bento colors */}
                <div className="absolute top-0 bottom-0 left-0 w-2 bg-[#DA291C]" />

                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-2xl flex items-center justify-center border-2 border-amber-200 shrink-0 shadow">
                  {figure.icon}
                </div>
                
                <div className="space-y-0.5 leading-snug">
                  <h5 className="font-extrabold text-slate-900 text-sm">{figure.name}</h5>
                  <span className="text-[9px] font-black text-[#046A38] bg-emerald-50 rounded px-1.5 py-0.5">{figure.role}</span>
                  <p className="text-[11px] text-slate-500 leading-normal font-semibold mt-1">
                    {figure.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Micro game-unlocked encouragement details */}
          <div className="bg-[#E0F2FE] rounded-3xl p-5 border-4 border-[#7DD3FC] text-center space-y-2 relative overflow-hidden">
            <span className="text-[10px] bg-white text-[#0369A1] font-black px-3 py-1 rounded-full border border-sky-200 inline-block">
              Super Dica Histórica
            </span>
            <p className="text-xs text-[#0369A1] font-bold leading-relaxed">
              Queres conversar diretamente com o Rei <b>D. Afonso Henriques</b> ou com <b>Luís de Camões</b>? Vai à página correspondente para os interrogares!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
