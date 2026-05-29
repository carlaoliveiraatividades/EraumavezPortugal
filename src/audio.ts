/**
 * Helper utility to synthesize educational game sounds using the browser's Web Audio API.
 * This ensures audio works without containing external binary mp3 dependencies!
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  // Resume context if suspended (browser security restriction, needs gesture)
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playClickSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.warn("Audio click feedback blocked:", e);
  }
}

export function playSuccessSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const now = ctx.currentTime;
    
    // Play a delightful high chime (C6 then G6)
    const notes = [523.25, 783.99, 1046.50]; // C5, G5, C6
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + index * 0.08);
      
      gain.gain.setValueAtTime(0, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.08 + 0.15);
      
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.2);
    });
  } catch (e) {
    console.warn("Audio success chime blocked:", e);
  }
}

export function playFailSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = "triangle";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(90, now + 0.25);
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    
    osc.start();
    osc.stop(now + 0.3);
  } catch (e) {
    console.warn("Audio fail buzzer blocked:", e);
  }
}

export function playAchievementSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const now = ctx.currentTime;
    const chords = [261.63, 329.63, 392.00, 523.25]; // C major chord arpeggio
    
    chords.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      
      gain.gain.setValueAtTime(0, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.06 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.3);
      
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.35);
    });
    
    // Add a final high celebratory spark!
    setTimeout(() => {
      const sparkOsc = ctx.createOscillator();
      const sparkGain = ctx.createGain();
      sparkOsc.connect(sparkGain);
      sparkGain.connect(ctx.destination);
      sparkOsc.type = "sine";
      sparkOsc.frequency.setValueAtTime(1200, ctx!.currentTime);
      sparkGain.gain.setValueAtTime(0.15, ctx!.currentTime);
      sparkGain.gain.exponentialRampToValueAtTime(0.01, ctx!.currentTime + 0.3);
      sparkOsc.start();
      sparkOsc.stop(ctx!.currentTime + 0.35);
    }, 250);
    
  } catch (e) {
    console.warn("Audio fanfarra blocked:", e);
  }
}

export function playWaveSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = "sine";
    // Soft swell in frequency simulating wave sound
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.3);
    osc.frequency.exponentialRampToValueAtTime(130, now + 0.8);
    
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.07, now + 0.3);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.8);
    
    osc.start();
    osc.stop(now + 0.85);
  } catch (e) {
    console.warn("Audio waves sound blocked:", e);
  }
}
