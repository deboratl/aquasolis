import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplets, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Orcamento() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    tipo_imovel: "",
    area_m2: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Seu orçamento foi enviado. Entraremos em contato em breve!");
    setFormData({ nome: "", email: "", telefone: "", empresa: "", tipo_imovel: "", area_m2: "", servico: "", mensagem: "" });
    setLocation("/");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-blue-900" style={{fontFamily: "'Lora', serif"}}>
              AquaSolis
            </span>
          </div>
          <button
            onClick={() => { setLocation("/"); setTimeout(() => window.scrollTo(0, 0), 100); }}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </div>
      </div>

      <div className="container py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Lora', serif"}}>
              Solicitar Orçamento
            </h1>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e receba um orçamento personalizado para sua solução de reuso de água
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: "'Lora', serif"}}>
                  Dados Pessoais
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa/Condomínio</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: "'Lora', serif"}}>
                  Informações do Imóvel
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Imóvel *</label>
                    <select
                      name="tipo_imovel"
                      value={formData.tipo_imovel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecione um tipo</option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="condominio">Condomínio</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Área (m²) *</label>
                    <input
                      type="number"
                      name="area_m2"
                      value={formData.area_m2}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Área em metros quadrados"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: "'Lora', serif"}}>
                  Serviço Desejado
                </h3>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qual serviço você está interessado? *
                </label>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="captacao_chuva">Captação de Chuva</option>
                  <option value="reuso_agua">Reuso de Água Cinza</option>
                  <option value="tratamento">Tratamento de Água</option>
                  <option value="consultoria">Consultoria Completa</option>
                  <option value="manutencao">Manutenção</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem Adicional</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descreva suas necessidades e dúvidas..."
                />
              </div>

              <div className="flex gap-4 pt-6">
                <Button type="submit" size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Enviar Orçamento
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  onClick={() => { setLocation("/"); setTimeout(() => window.scrollTo(0, 0), 100); }}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Card>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-blue-900">Informação:</span> Após enviar o formulário, um especialista da AquaSolis entrará em contato para discutir sua solução personalizada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
