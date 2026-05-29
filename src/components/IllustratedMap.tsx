import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MAP_HOTSPOTS } from "../data";
import { MapHotspot, Achievement } from "../types";
import { MapPin, Info, Sparkles, Navigation, Globe } from "lucide-react";
import { playClickSound, playWaveSound, playSuccessSound } from "../audio";

interface IllustratedMapProps {
  onUnlockAchievement: (id: string) => void;
  achievements: Achievement[];
}

export default function IllustratedMap({ onUnlockAchievement, achievements }: IllustratedMapProps) {
  const [selectedSpot, setSelectedSpot] = useState<MapHotspot | null>(null);

  const handleSpotClick = (spot: MapHotspot) => {
    setSelectedSpot(spot);
    // Alternate sound effects
    if (spot.id === "sagres" || spot.id === "lisboa") {
      playWaveSound();
    } else {
      playClickSound();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-2 space-y-6">
      {/* Title block with bento header style */}
      <div className="text-center space-y-2 bg-white border-4 border-[#0369A1] p-6 rounded-[32px] shadow-sm">
        <span className="bg-[#E0F2FE] text-[#0369A1] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#7DD3FC] inline-block">
          🗺️ Explora Portugal
        </span>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          Mapa do Tempo e do Território
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium">
          Clica nos pontos luminosos das cidades e locais históricos para fazeres viagens no tempo e descobrires os seus segredos mais divertidos!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* The Stylized Portugal Map Container (Lego/Carto style) with thick borders */}
        <div className="lg:col-span-7 bg-[#E0F2FE] rounded-[32px] border-4 border-[#7DD3FC] p-4 md:p-6 shadow-sm relative overflow-hidden flex flex-col justify-center items-center min-h-[480px]">
          {/* Compass Rose decoration */}
          <div className="absolute right-6 top-6 opacity-30 w-24 h-24 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-sky-950 animate-spin-slow animate-[spin_40s_linear_infinite]">
              <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="currentColor" />
              <circle cx="50" cy="50" r="10" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
            <div className="text-center font-black text-[10px] text-sky-950 uppercase tracking-widest mt-1">NORTE</div>
          </div>

          {/* Sea waves background illustrations */}
          <div className="absolute bottom-4 left-6 space-y-1 opacity-20 pointer-events-none animate-pulse">
            <div className="text-xs">🌊 ⛵ 🌊</div>
            <div className="text-xs">🌊 Caravelas ao largo 🌊</div>
          </div>
          
          {/* Giant Sea Monster Adamastor sketch on the west ocean */}
          <div className="absolute left-6 top-1/4 opacity-10 pointer-events-none">
            <div className="text-4xl">🐉</div>
            <div className="text-[10px] font-bold text-sky-950">Mar Oculto</div>
          </div>

          {/* Golden Spain/Border shield on the East */}
          <div className="absolute right-0 top-1/3 bottom-12 w-6 bg-amber-50 rounded-l-full border-l-4 border-y-4 border-amber-300 flex items-center justify-center opacity-70 pointer-events-none">
            <div className="rotate-90 text-[10px] uppercase font-bold tracking-widest text-amber-900/45 select-none">
              REINO DE CASTELA
            </div>
          </div>

          {/* Interactive Portugal Map Outline & Pins */}
          <div className="relative w-72 h-[420px] bg-[#E2F8E8] rounded-[50px_40px_100px_40px]/[60px_50px_120px_50px] border-4 border-[#86EFAC] shadow-inner flex items-center justify-center">
            
            {/* Mountain sketches on land */}
            <div className="absolute top-1/4 right-8 opacity-20 text-xl pointer-events-none">🏔️</div>
            <div className="absolute top-1/2 right-12 opacity-20 text-xl pointer-events-none">⛰️</div>
            <div className="absolute bottom-1/4 right-10 opacity-20 text-xl pointer-events-none">🌳</div>

            {/* River Tejo line representation */}
            <svg className="absolute w-full h-full pointer-events-none opacity-45" viewBox="0 0 288 420">
              {/* Tejo river */}
              <path d="M280,240 Q160,250 82,285" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
              {/* Douro river */}
              <path d="M280,100 Q180,95 105,100" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
              {/* Guadiana river */}
              <path d="M190,300 Q195,360 160,420" fill="none" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            </svg>

            {/* Pins on the Map */}
            {MAP_HOTSPOTS.map((spot) => {
              const isSelected = selectedSpot?.id === spot.id;
              return (
                <motion.button
                  key={spot.id}
                  onClick={() => handleSpotClick(spot)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none focus:scale-135 group"
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Glowing Pulse Ring */}
                  <span className={`absolute inline-flex h-10 w-10 -left-3 -top-3 rounded-full opacity-60 animate-ping ${isSelected ? "bg-red-400" : spot.color}`} />
                  
                  {/* Pin Circle Button */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border-3 border-white shadow-md text-sm cursor-pointer z-10 relative ${
                    isSelected ? "bg-[#DA291C] text-white font-bold" : spot.color + " text-white"
                  }`}>
                    {spot.id === "guimaraes" ? "👑" : spot.id === "lisboa" ? "⛵" : spot.id === "sagres" ? "🗺️" : spot.id === "porto" ? "🍇" : spot.id === "coimbra" ? "📚" : "🛡️"}
                  </div>

                  {/* Pin label pop over on hover/active */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-blue-950/90 text-white rounded-lg px-2.5 py-1 text-[9px] font-extrabold shadow border border-blue-900 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {spot.name}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Informative / Details Sidebar Panel - Styled like heavy bento */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {selectedSpot ? (
              <motion.div
                key={selectedSpot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white border-4 border-[#0369A1] rounded-[32px] p-6 shadow-sm space-y-5 relative"
              >
                {/* Floating sparkle detail */}
                <div className="absolute right-4 top-4 text-2xl animate-spin-slow">✨</div>

                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md ${selectedSpot.color} text-white border-2 border-white`}>
                    {selectedSpot.id === "guimaraes" ? "🏰" : selectedSpot.id === "lisboa" ? "⛵" : selectedSpot.id === "sagres" ? "🧭" : "🗺️"}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-450 tracking-wider">Histórias do Mapa</span>
                    <h3 className="text-lg font-black text-[#0369A1] mt-0.5">
                      {selectedSpot.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border-2 border-slate-100 space-y-2">
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-wide block">💡 O que aconteceu aqui:</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                    {selectedSpot.description}
                  </p>
                </div>

                <div className="bg-[#FFFBEB] rounded-2xl p-4 border-4 border-dashed border-[#FFD93D] space-y-2">
                  <span className="text-[11px] font-black text-amber-900 uppercase tracking-wide block flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                    Facto Real Super Secreto:
                  </span>
                  <p className="text-xs text-[#046A38] leading-relaxed font-bold">
                    {selectedSpot.fact}
                  </p>
                </div>

                {/* Micro interaction allowing some reward on explore */}
                {selectedSpot.id === "sagres" && !achievements.find(a => a.id === "explorador_tempo")?.unlocked && (
                  <button
                    onClick={() => {
                      onUnlockAchievement("explorador_tempo");
                      playSuccessSound();
                    }}
                    className="w-full bg-[#FFD93D] hover:bg-yellow-400 text-amber-950 font-black text-xs py-2.5 px-4 rounded-xl shadow-md border-b-4 border-amber-700 transition-transform active:translate-y-1 block text-center"
                  >
                    🔍 Desvendar Mistérios de Sagres (+120 XP!)
                  </button>
                )}

                <div className="pt-2 flex justify-between items-center text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">
                  <span>Coordenadas: X:{selectedSpot.x} Y:{selectedSpot.y}</span>
                  <span>Portugal Continental</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white border-4 border-dashed border-[#7DD3FC] rounded-[32px] p-8 text-center space-y-4 shadow-sm"
              >
                <div className="text-5xl animate-bounce">🎈</div>
                <h3 className="text-lg font-black text-[#0369A1]">Navega com o teu dedo!</h3>
                <p className="text-xs text-blue-950/70 max-w-xs mx-auto leading-relaxed font-bold">
                  Toca em qualquer selo dourado ou luminoso no mapa das terras de Portugal para carregar o pergaminho de curiosidades secretas!
                </p>
                <div className="flex items-center justify-center gap-1.5 bg-[#FFFBEB] border-2 border-[#FFD93D] rounded-full px-4 py-1.5 w-max mx-auto text-[10px] font-black text-amber-950">
                  <Globe className="w-3.5 h-3.5 text-[#0369A1]" />
                  REINO DE PORTUGAL E ALGARVE
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
