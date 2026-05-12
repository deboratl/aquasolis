import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplets, Leaf, TrendingDown, Zap } from "lucide-react";
import { useLocation } from "wouter";
import beneficiosImg from "../images/beneficios.png";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sobreSection = document.getElementById('sobre');
      if (sobreSection) {
        const rect = sobreSection.getBoundingClientRect();
        setShowButton(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-blue-900" style={{fontFamily: "'Lora', serif"}}>
              AquaSolis
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Sobre</a>
            <a href="#servicos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Serviços</a>
            <a href="#beneficios" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Benefícios</a>
            <a href="#contato" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Contato</a>
          </div>
          <Button
            onClick={() => setLocation("/orcamento")}
            className={`bg-blue-600 hover:bg-blue-700 transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            Começar Agora
          </Button>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-aqua opacity-50" />
        <div className="relative container py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-sm font-medium text-blue-700">Sustentabilidade Hídrica</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: "'Lora', serif"}}>
              Água Limpa,{" "}
              <span className="gradient-text">Futuro Sustentável</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Soluções inovadoras em captação de chuva e reuso de água para
              residências e empresas. Reduza custos, economize água e contribua
              para um planeta mais verde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => setLocation("/orcamento")} size="lg" className="bg-blue-600 hover:bg-blue-700">
                Começar Agora
              </Button>
              <a href="#servicos" className="inline-block">
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663228697359/cLQyAgrJFTtXGubfZdeEGC/aquasolis-hero-GUUZ9yZZXYpcMEFvgNnEUs.webp"
              alt="Sistema de captação de água"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Lora', serif"}}>
              Sobre a AquaSolis
            </h2>
            <p className="text-lg text-gray-600">
              Somos especialistas em soluções sustentáveis de gestão hídrica,
              oferecendo tecnologia de ponta para captação de chuva e reuso de água cinza.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Captação de Chuva",
                description: "Sistemas eficientes que coletam e armazenam água da chuva para uso em irrigação e limpeza.",
              },
              {
                icon: Leaf,
                title: "Reuso de Água",
                description: "Tratamento avançado de água cinza para reutilização segura em múltiplas aplicações.",
              },
              {
                icon: TrendingDown,
                title: "Redução de Custos",
                description: "Diminua suas contas de água em até 50% com nossas soluções inteligentes.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-blue-100 hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-2" style={{fontFamily: "'Lora', serif"}}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Lora', serif"}}>
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600">
              Oferecemos soluções completas adaptadas às suas necessidades específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Consultoria Hídrica",
                description: "Análise completa do seu consumo de água e recomendações personalizadas para máxima eficiência.",
                features: ["Diagnóstico detalhado", "Plano de implementação", "Suporte técnico"],
              },
              {
                title: "Instalação de Sistemas",
                description: "Instalação profissional de sistemas de captação e reuso com garantia e manutenção.",
                features: ["Equipamento de qualidade", "Instalação rápida", "Garantia estendida"],
              },
              {
                title: "Manutenção Preventiva",
                description: "Serviços de manutenção regular para garantir o funcionamento ótimo do seu sistema.",
                features: ["Limpeza de filtros", "Verificação de componentes", "Relatórios mensais"],
              },
              {
                title: "Treinamento & Suporte",
                description: "Capacitação completa da sua equipe e suporte contínuo 24/7.",
                features: ["Treinamento prático", "Documentação técnica", "Suporte prioritário"],
              },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="font-bold text-2xl text-gray-900 mb-3" style={{fontFamily: "'Lora', serif"}}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Lora', serif"}}>
              Benefícios do Reuso de Água
            </h2>
            <p className="text-lg text-gray-600">
              Descubra como nossas soluções transformam vidas e protegem o planeta.
            </p>
          </div>

          <div className="relative">
            <img
              src={beneficiosImg}
              alt="Benefícios do reuso de água"
              className="w-full rounded-2xl shadow-xl mb-12"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Economia", value: "Até 50%", description: "Redução nas contas de água" },
              { label: "Sustentabilidade", value: "100%", description: "Energia renovável utilizada" },
              { label: "Impacto", value: "1M+", description: "Litros economizados anualmente" },
              { label: "Clientes", value: "500+", description: "Famílias e empresas satisfeitas" },
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 text-center border-blue-100">
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="font-bold text-gray-900 mb-1" style={{fontFamily: "'Lora', serif"}}>{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: "'Lora', serif"}}>
            Pronto para Transformar Seu Consumo de Água?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje e receba uma consultoria gratuita sobre
            como implementar soluções de reuso de água em seu imóvel.
          </p>
          <a href="#contato" className="inline-block">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Solicitar Consultoria Gratuita
            </Button>
          </a>
        </div>
      </section>

      <section id="contato" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12" style={{fontFamily: "'Lora', serif"}}>
              Entre em Contato
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-start items-start gap-8 md:gap-32 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-white" style={{fontFamily: "'Lora', serif"}}>AquaSolis</span>
              </div>
              <p className="text-sm max-w-xs">Soluções sustentáveis em reuso de água e captação de chuva.</p>
            </div>
            <div className="flex-1" />
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-blue-400 transition">Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-blue-400 transition">Serviços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contato" className="hover:text-blue-400 transition">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 AquaSolis. Todos os direitos reservados. | Desenvolvido com{" "}
              <span className="text-blue-400">♡</span>{" "}
              para um futuro sustentável.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
