# AquaSolis

Site institucional da AquaSolis — soluções em captação de chuva e reuso de água para residências e empresas.

## Tecnologias

- **Frontend:** React 19, TypeScript, TailwindCSS 4, Vite 7
- **Componentes:** shadcn/ui (Radix UI)
- **Roteamento:** Wouter
- **Servidor:** Express (para produção)
- **Gerenciador de pacotes:** pnpm

## Estrutura

```
aquasolis/
├── client/
│   ├── index.html
│   └── src/
│       ├── components/
│       │   ├── ui/              # Componentes shadcn/ui
│       │   └── ErrorBoundary.tsx
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── hooks/
│       ├── images/
│       ├── pages/
│       │   ├── Home.tsx         # Página principal
│       │   ├── Orcamento.tsx
│       │   └── NotFound.tsx
│       ├── lib/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── server/
│   └── index.ts                 # Servidor Express (produção)
├── shared/
│   └── const.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/installation)

```bash
npm install -g pnpm
```

### Instalação

```bash
# Clone o repositório
git clone https://github.com/deboratl/aquasolis.git
cd aquasolis

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build para produção

```bash
pnpm build
pnpm start
```

