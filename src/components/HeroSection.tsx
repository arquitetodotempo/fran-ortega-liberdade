import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Pattern Sutil */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(43 50% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 50% 65%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-block mb-6">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-white border border-white/40 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              Liberdade Financeira para Mulheres
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            De Volta ao Controle: Como Mulheres Como Você
            <span className="block text-gold mt-3 drop-shadow">Estão Saindo Das Dívidas em 12 Meses</span>
          </h1>

          <div className="gold-line w-24 mb-6" style={{ background: 'linear-gradient(90deg, transparent, #D4B76E, transparent)' }} />

          <p className="font-body text-lg text-white/95 mb-4 leading-relaxed drop-shadow">
            Um método acolhedor e prático, criado por uma mulher que entende sua jornada.
          </p>
          <p className="font-body text-xl text-gold font-medium mb-8 drop-shadow">
            +500 mulheres já transformaram suas vidas.
            <br />
            <span className="text-white/90 text-base">Sessão Estratégica Gratuita de 30 Minutos.</span>
          </p>

          <motion.button
            onClick={() => scrollTo("cta-final")}
            className="gradient-button text-white font-body font-semibold text-sm px-8 py-4 rounded tracking-[0.15em] uppercase hover:brightness-110 hover:scale-105 transition-all shadow-2xl shadow-coral/30 flex items-center gap-3 mb-4 border-2 border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero Minha Sessão Gratuita
            <ArrowRight size={18} />
          </motion.button>
          <p className="text-white/90 text-sm font-body drop-shadow">
            → Sem julgamento · 100% confidencial
          </p>

          <div className="mt-10 border-t border-white/30 pt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-body text-sm italic text-white/95 mb-2 drop-shadow">
              "Saí de R$ 150.000 em dívidas para poupar R$ 2.000/mês em 18 meses."
            </blockquote>
            <p className="font-body text-xs text-white/90">
              — Carla M., Enfermeira
            </p>
            <p className="font-body text-sm text-gold font-semibold mt-3 tracking-wide">
              +R$ 15 milhões em dívidas eliminadas
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative">
            {/* Glow effect behind stats */}
            <div className="absolute -inset-6 bg-gradient-to-br from-gold/30 to-green/30 rounded-3xl blur-3xl" />
            
            {/* Stats cards - SEM IMAGEM */}
            <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
              <div className="text-center space-y-6">
                <div>
                  <p className="font-heading text-6xl font-bold text-white mb-2 drop-shadow-lg">500+</p>
                  <p className="font-body text-white text-base font-semibold drop-shadow">Mulheres Libertas</p>
                </div>
                
                <div className="gold-line w-16 mx-auto" />
                
                <div>
                  <p className="font-heading text-5xl font-bold text-gold mb-2 drop-shadow-lg">R$ 15M+</p>
                  <p className="font-body text-white text-base font-semibold drop-shadow">Dívidas Eliminadas</p>
                </div>
                
                <div className="gold-line w-16 mx-auto" />
                
                <div>
                  <p className="font-heading text-5xl font-bold text-white mb-2 drop-shadow-lg">18</p>
                  <p className="font-body text-white text-base font-semibold drop-shadow">Meses para Liberdade</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
