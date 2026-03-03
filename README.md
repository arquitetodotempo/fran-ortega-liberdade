# 🦋 Fran Liberdade - Site B2C

**Site Oficial:** F. Ortega - Liberdade Financeira para Mulheres  
**Público-Alvo:** Mulheres endividadas (25-45 anos)  
**Objetivo:** Ajudar mulheres a saírem das dívidas em 12-18 meses

---

## 🎯 SOBRE O PROJETO

Este é o site **B2C (Business to Consumer)** da F. Ortega, focado em ajudar mulheres a:

- ✅ Sair das dívidas
- ✅ Organizar as finanças
- ✅ Conquistar liberdade financeira
- ✅ Construir futuro seguro

**Método:** Liberdade Financeira F. Ortega  
**Tempo Médio:** 12-18 meses  
**Resultados:** +500 mulheres libertas

---

## 🚀 DESENVOLVIMENTO

### Pré-requisitos

- Node.js 18+ instalado
- npm instalado

### Instalar Dependências

```bash
npm install
```

### Desenvolvimento Local

```bash
npm run dev
```

Aceder: `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

Output: `dist/`

### Preview do Build

```bash
npm run preview
```

---

## 📁 ESTRUTURA DO PROJETO

```
fran-liberdade/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx         ← Headline principal
│   │   ├── ProblemSection.tsx      ← Dores das mulheres
│   │   ├── SolutionSection.tsx     ← Método Liberdade
│   │   ├── MethodSection.tsx       ← 5 fases
│   │   ├── ResultsSection.tsx      ← Resultados
│   │   ├── TestimonialsSection.tsx ← Depoimentos
│   │   ├── AboutSection.tsx        ← Sobre Fran Ortega
│   │   ├── OfferSection.tsx        ← Oferta
│   │   ├── FAQSection.tsx          ← FAQ
│   │   ├── FinalCTASection.tsx     ← CTA final
│   │   └── Footer.tsx              ← Footer
│   ├── pages/
│   │   └── Index.tsx               ← Página principal
│   ├── assets/
│   ├── hooks/
│   ├── lib/
│   └── index.css                   ← Estilos e cores
├── public/
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

---

## 🎨 IDENTIDADE VISUAL

### Cores B2C (Liberdade)

```css
:root {
  /* Verde Esperança */
  --primary: 140 47% 34%;      /* #2E7D32 */
  
  /* Dourado Sucesso */
  --secondary: 43 69% 47%;     /* #C9A227 */
  
  /* Coral Energia */
  --accent: 0 100% 71%;        /* #FF6B6B */
  
  /* Neutras */
  --background: 60 56% 91%;    /* Off-White */
  --foreground: 0 0% 8%;       /* Preto */
}
```

### Tipografia

- **Títulos:** Playfair Display (Serifada, elegante)
- **Corpo:** Inter (Sans-serif, legível)

---

## 📊 TECNOLOGIAS

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 18.3.1 | Framework UI |
| **TypeScript** | 5.8.3 | Linguagem |
| **Vite** | 5.4.21 | Build tool |
| **Tailwind CSS** | 3.4.17 | Estilização |
| **shadcn-ui** | - | Componentes |
| **Framer Motion** | - | Animações |
| **React Router** | 6.30.1 | Rotas |

---

## 🚀 DEPLOY

### Cloudflare Pages (Recomendado)

1. Aceder https://pages.cloudflare.com
2. "Create a project"
3. "Connect to GitHub"
4. Selecionar: `arquitetodotempo/fran-ortega-liberdade`
5. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
6. "Save and Deploy"

**URL:** `https://fran-ortega-liberdade.pages.dev`

### Wrangler CLI (Alternativa)

```bash
# Instalar Wrangler
npm install -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy dist --project-name=fran-ortega-liberdade
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Para Lançamento:

- [ ] **Configurar Cloudflare Pages**
- [ ] **Adicionar imagem da Fran Ortega** (pasta public/)
- [ ] **Adicionar logo** (pasta public/)
- [ ] **Alterar cores** para Verde + Dourado + Coral
- [ ] **Criar copy B2C** (foco em mulheres, dívidas, transformação)
- [ ] **Adicionar depoimentos** de mulheres reais
- [ ] **Configurar formulário** de agendamento
- [ ] **Adicionar Analytics** (Google Analytics)
- [ ] **Configurar Facebook Pixel** (Meta Ads)
- [ ] **Testar responsivo** (mobile, tablet, desktop)
- [ ] **Testar formulários**
- [ ] **Configurar domínio** customizado (opcional)

---

## 🔗 LINKS ÚTEIS

### Repositório:
- **GitHub:** https://github.com/arquitetodotempo/fran-ortega-liberdade

### Site:
- **Produção:** https://fran-ortega-liberdade.pages.dev
- **Domínio:** liberdade.fortega.com.br (opcional)

### Documentação:
- **React:** https://react.dev
- **Vite:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn-ui:** https://ui.shadcn.com
- **Framer Motion:** https://www.framer.com/motion

---

## 📞 CONTACTO

**Fran Ortega - Assessoria Contábil & Fiscal**

- **Email:** fran.ortega@exemplo.com.br
- **WhatsApp:** +55 (11) 9XXXX-XXXX
- **LinkedIn:** linkedin.com/in/franortega
- **Instagram:** @f.ortega.consultoria

---

## 📄 LICENÇA

MIT License - Ver ficheiro LICENSE se aplicável.

---

*Última atualização: 21 de Fevereiro de 2026*  
*Projeto: Fran Ortega - Liberdade Financeira*
