"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sword, Dumbbell, Shield, Target, Phone, Calendar, Play, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import HeroSection from "@/components/HeroSection"
import Navigation from "@/components/Navigation"

export default function ArthurSportSite() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection ref={containerRef} opacity={opacity} scale={scale} />

      {/* Consultoria de Transformação Física */}
      <section id="transformacao" className="py-12 md:py-20 bg-gradient-to-b from-black/90 via-red-950/5 to-zinc-950/90">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-gradient-to-r from-red-900/10 via-red-600/20 to-red-900/10 text-red-400 border-red-600/30 font-light tracking-wider antialiased backdrop-blur-md">
                  TRANSFORMAÇÃO FÍSICA
                </Badge>
              </motion.div>
              <motion.h2 
                className="text-3xl md:text-5xl font-extralight mb-4 md:mb-6 tracking-tight antialiased"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                CORPO DE <span className="text-red-500 font-light">HERÓI</span>
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl mb-4 md:mb-6 text-gray-300 font-light leading-relaxed antialiased"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Se você quer corpo de herói, precisa treinar como um.
                <span className="text-red-500 font-normal"> E eu vou te guiar.</span>
              </motion.p>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-400 font-light leading-relaxed antialiased">
                Superação física com metodologia de estrelas de cinema. Transformações reais inspiradas em Chris Evans,
                Henry Cavill, Michael B. Jordan.
              </p>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  "Treino personalizado para seu biotipo",
                  "Nutrição estratégica para resultados",
                  "Acompanhamento 24/7"
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full shadow-lg shadow-red-500/50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="font-light antialiased">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 font-light tracking-wide shadow-lg shadow-red-500/25 backdrop-blur-sm transition-all duration-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-gradient-to-r from-transparent to-transparent hover:from-red-600/80 hover:to-red-700/80 border-red-600/50 text-red-500 hover:text-white font-light tracking-wide backdrop-blur-sm transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    VER RESULTADOS
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/body1.jpg?height=600&width=500"
                alt="Physical transformation results"
                width={500}
                height={600}
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kung Fu Tradicional */}
      <section id="kungfu" className="py-12 md:py-20 bg-gradient-to-b from-black/90 via-red-950/10 to-black/90">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
              <Image
                src="/kf.jpg?height=600&width=500"
                alt="Traditional Kung Fu training"
                width={500}
                height={600}
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-gradient-to-r from-red-900/10 via-red-600/20 to-red-900/10 text-red-400 border-red-600/30 antialiased backdrop-blur-md">
                KUNG FU TRADICIONAL
              </Badge>
              <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 antialiased">
                SABEDORIA <span className="text-red-500">ANCESTRAL</span>
              </h2>
              <p className="text-lg md:text-xl mb-4 md:mb-6 text-gray-300 antialiased">
                Kung Fu é mais que luta. É identidade.
                <span className="text-red-500 font-bold"> É filosofia de guerra e paz.</span>
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-400 antialiased">
                História do estilo Fei Hok Phai. Disciplina que transcende o físico, inspirada em lendas como Shang-Chi,
                Jackie Chan e os mestres de Avatar.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <Card className="bg-gradient-to-br from-gray-900/50 to-red-950/20 border-red-900/30 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6 text-center">
                    <Sword className="w-6 h-6 md:w-8 md:h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base antialiased">Formas Tradicionais</h3>
                    <p className="text-xs md:text-sm text-gray-700 antialiased">Movimentos ancestrais</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-900/50 to-red-950/20 border-red-900/30 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6 text-center">
                    <Star className="w-6 h-6 md:w-8 md:h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base antialiased">Filosofia</h3>
                    <p className="text-xs md:text-sm text-gray-700 antialiased">Mente e corpo unidos</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 backdrop-blur-sm">
                  <Calendar className="w-5 h-5 mr-2" />
                  PRIMEIRA AULA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-gradient-to-r from-transparent to-transparent hover:from-red-600/80 hover:to-red-700/80 border-red-600/50 text-red-500 hover:text-white backdrop-blur-sm"
                >
                  SABER MAIS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanda / Combate Urbano */}
      <section id="combate" className="py-12 md:py-20 bg-gradient-to-b from-gray-900/80 via-red-950/20 to-black/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-red-900/10 via-red-600/20 to-red-900/10 text-red-400 border-red-600/30 antialiased backdrop-blur-md">
              SANDA & COMBATE URBANO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 antialiased">
              COMBATE <span className="text-red-500">REAL</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto antialiased">
              No ringue ou na rua, a disciplina é sua armadura.
              <span className="text-red-500 font-bold"> E eu sou o seu forjador.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gradient-to-br from-gray-900/40 via-red-950/10 to-gray-900/40 border-red-900/30 overflow-hidden group hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/sanda.jpg?height=200&width=400"
                  alt="Sanda training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 antialiased">SANDA</h3>
                <p className="text-gray-700 mb-4 antialiased">Kickboxing chinês para competição e defesa pessoal</p>
                <Button className="w-full bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 backdrop-blur-sm">TREINAR SANDA</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/40 via-red-950/10 to-gray-900/40 border-red-900/30 overflow-hidden group hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/urban.jpg?height=200&width=400"
                  alt="Urban combat"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 antialiased">DEFESA URBANA</h3>
                <p className="text-gray-700 mb-4 antialiased">Técnicas práticas para situações reais</p>
                <Button className="w-full bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 backdrop-blur-sm">APRENDER DEFESA</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/40 via-red-950/10 to-gray-900/40 border-red-900/30 overflow-hidden group hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="relative h-48">
                <Image
                  src="/box.jpg?height=200&width=400"
                  alt="Competition training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 antialiased">COMPETIÇÃO</h3>
                <p className="text-gray-700 mb-4 antialiased">Preparação para campeonatos e torneios</p>
                <Button className="w-full bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 backdrop-blur-sm">COMPETIR</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black/90 via-red-950/10 to-black/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-black text-red-500 mb-2 antialiased">500+</div>
              <div className="text-sm md:text-base text-gray-400 antialiased">Alunos Transformados</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-black text-red-500 mb-2 antialiased">15+</div>
              <div className="text-sm md:text-base text-gray-400 antialiased">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-black text-red-500 mb-2 antialiased">50+</div>
              <div className="text-sm md:text-base text-gray-400 antialiased">Competições</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-black text-red-500 mb-2 antialiased">100%</div>
              <div className="text-sm md:text-base text-gray-400 antialiased">Dedicação</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-red-900/10 via-red-950/20 to-black/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 antialiased">
            PRONTO PARA SE TORNAR UM <span className="text-red-500">HERÓI</span>?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300 max-w-2xl mx-auto antialiased">
            Sua jornada de transformação começa com uma conversa. Vamos descobrir qual herói existe dentro de você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 backdrop-blur-sm shadow-lg shadow-red-500/25">
              <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              WHATSAPP DIRETO
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-transparent to-transparent hover:from-red-600/80 hover:to-red-700/80 border-red-600/50 text-red-500 hover:text-white text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              AGENDAR CONSULTA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-gradient-to-b from-black/80 to-red-950/10 border-t border-red-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="text-xl md:text-2xl font-bold text-red-500 mb-3 md:mb-4 antialiased">ARTHUR SPORT</div>
              <p className="text-sm md:text-base text-gray-400 antialiased">
                Transformando vidas através da disciplina, força e sabedoria ancestral.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base antialiased">SERVIÇOS</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-400 antialiased">
                <li>Consultoria Física</li>
                <li>Kung Fu Tradicional</li>
                <li>Sanda & Kickboxing</li>
                <li>Defesa Pessoal</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base antialiased">CONTATO</h3>
              <div className="space-y-2 text-sm md:text-base text-gray-400 antialiased">
                <div>WhatsApp: (11) 99999-9999</div>
                <div>Email: contato@arthursport.com</div>
                <div>Instagram: @arthursport</div>
              </div>
            </div>
          </div>
          <div className="border-t border-red-900/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400 antialiased">
            <p>&copy; 2024 Arthur Sport. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
