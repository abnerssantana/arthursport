"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sword, Dumbbell, Shield, Target } from "lucide-react"
import { forwardRef } from "react"

interface HeroSectionProps {
  opacity?: any
  scale?: any
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ opacity, scale }, ref) => {
  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-950/30 to-transparent z-10"></div>
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="relative w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/pr9xb25cne4?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=pr9xb25cne4&enablejsapi=1&iv_load_policy=3&rel=0&cc_load_policy=0&start=0&end=0&origin=https://yourdomain.com&widgetid=1"
            title="Background video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <Badge className="mb-4 md:mb-6 bg-gradient-to-r from-red-900/10 via-red-600/20 to-red-900/10 text-red-400 border-red-600/30 text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 font-light tracking-wide antialiased backdrop-blur-md">
            DESPERTE O HERÓI QUE EXISTE EM VOCÊ
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mb-4 md:mb-6 leading-tight tracking-tight antialiased"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block"
          >
            HERÓIS NÃO NASCEM
          </motion.span>
          <motion.span 
            className="text-red-500 font-bold block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            PRONTOS
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-gray-300 font-light tracking-wide antialiased uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          São forjados com o <span className="text-red-500 font-light">tempo</span>
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-gray-400 font-light leading-relaxed antialiased px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A plataforma onde cinema, artes marciais e performance real se fundem para transformar corpos comuns em
          lendas vivas.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto px-4 md:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { icon: Dumbbell, text: "CONSULTORIA FÍSICA", primary: true },
            { icon: Sword, text: "KUNG FU TRADICIONAL", primary: false },
            { icon: Shield, text: "SANDA", primary: false },
            { icon: Target, text: "COMBATE URBANO", primary: false }
          ].map((item, index) => (
            <motion.div 
              key={item.text}
              whileHover={{ scale: 1.05, y: -5 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <Button
                size="lg"
                variant={item.primary ? "default" : "outline"}
                className={`h-14 md:h-16 text-sm md:text-lg font-light tracking-wide w-full relative overflow-hidden group backdrop-blur-sm ${
                  item.primary 
                    ? "bg-gradient-to-r from-red-600/70 to-red-700/70 hover:from-red-600/90 hover:to-red-700/90 text-white shadow-lg shadow-red-500/25 transition-all duration-300" 
                    : "bg-gradient-to-r from-transparent to-transparent hover:from-red-900/20 hover:to-red-800/20 border-red-600/50 text-red-400 hover:text-white hover:border-red-400"
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center justify-center">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm md:text-lg">{item.text}</span>
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection