"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sword, Dumbbell, Shield, Target, Phone, Calendar, Play, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KungFuHeroSite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-extralight text-red-500 tracking-widest antialiased">KUNG FU HERO</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-red-500 transition-colors font-light tracking-wide">
                Início
              </Link>
              <Link href="#transformacao" className="hover:text-red-500 transition-colors font-light tracking-wide">
                Transformação
              </Link>
              <Link href="#kungfu" className="hover:text-red-500 transition-colors font-light tracking-wide">
                Kung Fu
              </Link>
              <Link href="#combate" className="hover:text-red-500 transition-colors font-light tracking-wide">
                Combate
              </Link>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-light tracking-wide">
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Warrior in combat stance"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-red-600/20 text-red-400 border-red-600/30 text-lg px-4 py-2 font-light tracking-wide antialiased">
              DESPERTE O HERÓI QUE EXISTE EM VOCÊ
            </Badge>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-extralight mb-6 leading-tight tracking-tight antialiased"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            HERÓIS NÃO NASCEM
            <br />
            <span className="text-red-500 font-light">PRONTOS</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-8 text-gray-300 font-light tracking-wide antialiased"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Eles se <span className="text-red-500 font-light">constroem</span>.
          </motion.p>

          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto text-gray-400 font-light leading-relaxed antialiased"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A plataforma onde cinema, artes marciais e performance real se fundem para transformar corpos comuns em
            lendas vivas.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white h-16 text-lg font-light tracking-wide"
              >
                <Dumbbell className="w-6 h-6 mr-2" />
                CONSULTORIA FÍSICA
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white h-16 text-lg font-light tracking-wide"
              >
                <Sword className="w-6 h-6 mr-2" />
                KUNG FU TRADICIONAL
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white h-16 text-lg font-light tracking-wide"
              >
                <Shield className="w-6 h-6 mr-2" />
                SANDA
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white h-16 text-lg font-light tracking-wide"
              >
                <Target className="w-6 h-6 mr-2" />
                COMBATE URBANO
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consultoria de Transformação Física */}
      <section id="transformacao" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/30 font-light tracking-wider antialiased">
                TRANSFORMAÇÃO FÍSICA
              </Badge>
              <h2 className="text-5xl font-extralight mb-6 tracking-tight antialiased">
                CORPO DE <span className="text-red-500 font-light">HERÓI</span>
              </h2>
              <p className="text-xl mb-6 text-gray-300 font-light leading-relaxed antialiased">
                Se você quer corpo de herói, precisa treinar como um.
                <span className="text-red-500 font-normal"> E eu vou te guiar.</span>
              </p>
              <p className="text-lg mb-8 text-gray-400 font-light leading-relaxed antialiased">
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
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-light antialiased">Treino personalizado para seu biotipo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-light antialiased">Nutrição estratégica para resultados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-light antialiased">Acompanhamento 24/7</span>
                </div>
              </motion.div>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 font-light tracking-wide">
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-light tracking-wide"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    VER RESULTADOS
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Physical transformation results"
                width={500}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kung Fu Tradicional */}
      <section id="kungfu" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Traditional Kung Fu training"
                width={500}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/30 antialiased">
                KUNG FU TRADICIONAL
              </Badge>
              <h2 className="text-5xl font-black mb-6 antialiased">
                SABEDORIA <span className="text-red-500">ANCESTRAL</span>
              </h2>
              <p className="text-xl mb-6 text-gray-300 antialiased">
                Kung Fu é mais que luta. É identidade.
                <span className="text-red-500 font-bold"> É filosofia de guerra e paz.</span>
              </p>
              <p className="text-lg mb-8 text-gray-400 antialiased">
                História do estilo Fei Hok Phai. Disciplina que transcende o físico, inspirada em lendas como Shang-Chi,
                Jackie Chan e os mestres de Avatar.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-900 border-red-900/30">
                  <CardContent className="p-6 text-center">
                    <Sword className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="font-bold mb-2 antialiased">Formas Tradicionais</h3>
                    <p className="text-sm text-gray-400 antialiased">Movimentos ancestrais</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-red-900/30">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="font-bold mb-2 antialiased">Filosofia</h3>
                    <p className="text-sm text-gray-400 antialiased">Mente e corpo unidos</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  PRIMEIRA AULA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                >
                  SABER MAIS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanda / Combate Urbano */}
      <section id="combate" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/30 antialiased">
              SANDA & COMBATE URBANO
            </Badge>
            <h2 className="text-5xl font-black mb-6 antialiased">
              COMBATE <span className="text-red-500">REAL</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto antialiased">
              No ringue ou na rua, a disciplina é sua armadura.
              <span className="text-red-500 font-bold"> E eu sou o seu forjador.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-red-900/30 overflow-hidden group hover:border-red-500/50 transition-colors">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Sanda training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 antialiased">SANDA</h3>
                <p className="text-gray-400 mb-4 antialiased">Kickboxing chinês para competição e defesa pessoal</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">TREINAR SANDA</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900/30 overflow-hidden group hover:border-red-500/50 transition-colors">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Urban combat"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 antialiased">DEFESA URBANA</h3>
                <p className="text-gray-400 mb-4 antialiased">Técnicas práticas para situações reais</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">APRENDER DEFESA</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900/30 overflow-hidden group hover:border-red-500/50 transition-colors">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Competition training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 antialiased">COMPETIÇÃO</h3>
                <p className="text-gray-400 mb-4 antialiased">Preparação para campeonatos e torneios</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">COMPETIR</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-red-500 mb-2 antialiased">500+</div>
              <div className="text-gray-400 antialiased">Alunos Transformados</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2 antialiased">15+</div>
              <div className="text-gray-400 antialiased">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2 antialiased">50+</div>
              <div className="text-gray-400 antialiased">Competições</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2 antialiased">100%</div>
              <div className="text-gray-400 antialiased">Dedicação</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-6 antialiased">
            PRONTO PARA SE TORNAR UM <span className="text-red-500">HERÓI</span>?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto antialiased">
            Sua jornada de transformação começa com uma conversa. Vamos descobrir qual herói existe dentro de você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-xl px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              WHATSAPP DIRETO
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white text-xl px-8 py-4"
            >
              <Calendar className="w-6 h-6 mr-2" />
              AGENDAR CONSULTA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-red-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-red-500 mb-4 antialiased">KUNG FU HERO</div>
              <p className="text-gray-400 antialiased">
                Transformando vidas através da disciplina, força e sabedoria ancestral.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 antialiased">SERVIÇOS</h3>
              <ul className="space-y-2 text-gray-400 antialiased">
                <li>Consultoria Física</li>
                <li>Kung Fu Tradicional</li>
                <li>Sanda & Kickboxing</li>
                <li>Defesa Pessoal</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 antialiased">CONTATO</h3>
              <div className="space-y-2 text-gray-400 antialiased">
                <div>WhatsApp: (11) 99999-9999</div>
                <div>Email: contato@kungfuhero.com</div>
                <div>Instagram: @kungfuhero</div>
              </div>
            </div>
          </div>
          <div className="border-t border-red-900/20 mt-8 pt-8 text-center text-gray-400 antialiased">
            <p>&copy; 2024 Kung Fu Hero. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
