import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-teal via-green to-background min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Pattern Sutil */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(43 64% 51%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 64% 51%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-block mb-6">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal border border-teal/30 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm">
              Liberdade Financeira para Mulheres
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            De Volta ao Controle: Como Mulheres Como Você
            <span className="block text-gold mt-3">Estão Saindo Das Dívidas em 12 Meses</span>
          </h1>

          <div className="gold-line w-24 mb-6" />

          <p className="font-body text-lg text-foreground/80 mb-4 leading-relaxed">
            Um método acolhedor e prático, criado por uma mulher que entende sua jornada.
          </p>
          <p className="font-body text-xl text-green font-semibold mb-8">
            +500 mulheres já transformaram suas vidas.
            <br />
            <span className="text-foreground/60 text-base">Sessão Estratégica Gratuita de 30 Minutos.</span>
          </p>

          <motion.button
            onClick={() => scrollTo("cta-final")}
            className="bg-teal hover:bg-teal-light text-white font-body font-semibold text-sm px-8 py-4 rounded tracking-[0.15em] uppercase transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 mb-4 border-2 border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero Minha Sessão Gratuita
            <ArrowRight size={18} />
          </motion.button>
          <p className="text-foreground/60 text-sm font-body">
            → Sem julgamento · 100% confidencial
          </p>

          <div className="mt-10 border-t border-foreground/20 pt-6 bg-white/60 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-body text-sm italic text-foreground/80 mb-2">
              "Saí de R$ 150.000 em dívidas para poupar R$ 2.000/mês em 18 meses."
            </blockquote>
            <p className="font-body text-xs text-foreground/60">
              — Carla M., Enfermeira
            </p>
            <p className="font-body text-sm text-gold font-semibold mt-3 tracking-wide">
              +R$ 15 milhões em dívidas eliminadas
            </p>
          </div>
        </motion.div>

        {/* Lado Direito - Imagem + Stats */}
        <motion.div
          className="hidden md:flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Imagem Mulher de Sucesso - Sem fundo branco */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-green/30 rounded-2xl blur-2xl" />
            <img
              src="/mulher-sucesso.png"
              alt="Mulher de sucesso conquistando liberdade financeira"
              className="w-full h-auto rounded-2xl relative z-10"
            />
          </div>

          {/* Stats Cards - Por baixo da imagem */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-md mt-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-green/30 shadow-lg">
              <p className="font-heading text-3xl font-bold text-teal mb-1">500+</p>
              <p className="font-body text-xs text-foreground/70 font-semibold">Mulheres Libertas</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-gold/30 shadow-lg">
              <p className="font-heading text-3xl font-bold text-gold mb-1">R$ 15M+</p>
              <p className="font-body text-xs text-foreground/70 font-semibold">Dívidas Eliminadas</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-teal/30 shadow-lg">
              <p className="font-heading text-3xl font-bold text-green mb-1">18</p>
              <p className="font-body text-xs text-foreground/70 font-semibold">Meses para Liberdade</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
