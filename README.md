# 🏛️ Landing Page - Advocacia Dr. João Silva

Uma landing page moderna e responsiva desenvolvida em Vue.js para escritórios de advocacia, focada em conversão e experiência do usuário.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações suaves
- **Alta Conversão**: Elementos estratégicos para captura de leads (CTAs, formulários, urgência)
- **Animações Atrativas**: Transições suaves e efeitos visuais que prendem a atenção
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido e experiência fluída
- **SEO Ready**: Meta tags e estrutura otimizada para buscadores

## 🚀 Funcionalidades

### 📱 Seções Incluídas
- **Hero Section**: Chamada principal com estatísticas e CTAs
- **Serviços**: Cards interativos das áreas de atuação
- **Sobre**: Apresentação do advogado com credenciais
- **Depoimentos**: Carousel automático com avaliações de clientes
- **Contato**: Formulário completo + informações de contato
- **Footer**: Links úteis e informações adicionais

### 🎯 Elementos de Conversão
- Botão WhatsApp flutuante
- Múltiplos CTAs estratégicos
- Formulário de contato com validação
- Seção de urgência
- Depoimentos sociais
- Números e estatísticas

### ⚡ Animações
- Entrada suave dos elementos
- Hover effects nos cards
- Carousel automático
- Indicadores de scroll
- Transições fluídas
- Efeitos de background

## 🛠️ Tecnologias

- **Vue.js 3**: Framework JavaScript reativo
- **Vite**: Build tool rápido e moderno
- **CSS3**: Estilos avançados com flexbox/grid
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia moderna (Inter)

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone [repositorio]
cd lp
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute em modo desenvolvimento:**
```bash
npm run dev
```

4. **Build para produção:**
```bash
npm run build
```

## 🎨 Personalização

### Cores Principais
```css
/* Cor primária (vermelho advocacia) */
--primary: #C53030
--primary-dark: #E53E3E

/* Cores neutras */
--dark: #2D3748
--gray: #4A5568
--light-gray: #F7FAFC
```

### Modificar Informações do Advogado

**src/App.vue** - Linha 8:
```html
<span>Seu Nome Aqui</span>
```

**src/App.vue** - Linha 76:
```html
<h3>Seu Nome</h3>
<p>OAB/SP 000.000</p>
```

### Alterar Telefone/WhatsApp

Procure por `5511999999999` e substitua pelo seu número:
```html
href="https://wa.me/SEUNUMERO"
href="tel:+SEUNUMERO"
```

### Modificar E-mail

**src/App.vue** - Linha 295:
```html
<p>seuemail@advogado.com.br</p>
```

## 📱 Seções Detalhadas

### Hero Section
- Título impactante com gradiente
- Descrição dos serviços
- Estatísticas (personalizáveis)
- Dois CTAs principais
- Card do advogado
- Indicador de scroll

### Serviços
- 3 cards principais (Direito Civil, Criminal, Trabalhista)
- Modal com detalhes expandidos
- Ícones representativos
- Lista de subserviços
- CTA para agendamento

### Sobre
- Foto do advogado (emoji - substitua por foto real)
- Badge de experiência
- Descrição profissional
- Credenciais (formação, especialização, reconhecimento)
- CTA para contato

### Depoimentos
- 4 depoimentos pré-configurados
- Sistema de navegação (botões + dots)
- Auto-play a cada 5 segundos
- Avatars com iniciais
- Rating com estrelas

### Contato
- 4 métodos de contato
- Formulário com validação
- Seção de urgência
- Privacidade destacada

## 🔧 Funcionalidades JavaScript

### Animações on Scroll
```javascript
setupIntersectionObserver() {
  // Detecta quando elementos entram na tela
  // Ativa animações automaticamente
}
```

### Validação de Formulário
```javascript
validateForm() {
  // Valida nome, email, telefone, mensagem
  // Exibe mensagens de erro específicas
}
```

### Carousel de Depoimentos
```javascript
startTestimonialAutoplay() {
  // Auto-play a cada 5 segundos
  // Navegação manual disponível
}
```

## 🎯 Otimizações de Conversão

### CTAs Estratégicos
- Hero: "Consulta Gratuita" + Telefone
- Serviços: "Saiba Mais" em cada card
- Sobre: "Agendar Consulta"
- Contato: "Enviar Mensagem"
- Footer: "Agendar Agora"
- WhatsApp flutuante sempre visível

### Elementos de Urgência
- Botão "Caso Urgente?" no contato
- WhatsApp com "Atendimento 24h"
- Animação pulse no botão urgente

### Prova Social
- Estatísticas no hero (500+ casos, 95% sucesso)
- 4 depoimentos detalhados
- Badges de especialização
- Reconhecimento profissional

## 📊 SEO e Performance

### Meta Tags Incluídas
```html
<title>Advocacia - Excelência em Direito | Dr. João Silva</title>
<meta name="description" content="Advocacia especializada...">
```

### Otimizações
- Lazy loading de imagens
- CSS minificado
- JavaScript otimizado
- Fontes precarregadas
- Estrutura semântica

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 1024px (layout completo)
- **Tablet**: 768px - 1024px (grid reduzido)
- **Mobile**: < 768px (stack vertical)
- **Small Mobile**: < 480px (otimizações extras)

### Ajustes Mobile
- Menu hamburger
- CTAs centralizados
- Formulário em coluna única
- WhatsApp apenas ícone
- Fontes redimensionadas

## 🚀 Deploy

### Netlify/Vercel
```bash
npm run build
# Upload da pasta dist/
```

### Servidor Apache/Nginx
```bash
npm run build
# Copie os arquivos da pasta dist/ para o servidor
```

## 🎨 Customizações Avançadas

### Adicionar Nova Seção
1. Crie o HTML na template
2. Adicione os estilos CSS
3. Configure animação on-scroll
4. Atualize navegação

### Modificar Animações
```css
.minha-animacao {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.minha-animacao.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

## 📞 Suporte

Para dúvidas sobre personalização ou implementação, consulte:
- Documentação do Vue.js
- Documentação do Vite
- MDN Web Docs para CSS

## 📄 Licença

Este projeto é fornecido como exemplo educacional. Personalize livremente para seu uso profissional.

---

**⚖️ Desenvolvido para advogados que valorizam excelência digital**
