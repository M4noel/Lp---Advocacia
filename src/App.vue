<template>
  <div id="app">
    <!-- Header -->
    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <nav class="nav container">
        <div class="nav-brand">
          <i class="fas fa-balance-scale"></i>
          <span>Dr. João Silva</span>
        </div>
        
        <ul class="nav-menu" :class="{ 'nav-menu-active': isMobileMenuOpen }">
          <li><a href="#inicio" @click="closeMenu">Início</a></li>
          <li><a href="#servicos" @click="closeMenu">Serviços</a></li>
          <li><a href="#sobre" @click="closeMenu">Sobre</a></li>
          <li><a href="#depoimentos" @click="closeMenu">Depoimentos</a></li>
          <li><a href="#contato" @click="closeMenu">Contato</a></li>
        </ul>
        
        <button class="nav-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-text" :class="{ 'animate-in': heroVisible }">
          <h1 class="hero-title">
            <span class="hero-title-main">Defenda Seus Direitos</span>
            <span class="hero-title-sub">com Excelência Jurídica</span>
          </h1>
          
          <p class="hero-description">
            Mais de 15 anos de experiência em Direito Civil, Criminal e Trabalhista. 
            Atendimento personalizado e resultados comprovados para proteger o que é seu.
          </p>
          
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">500+</div>
              <div class="stat-label">Casos Vencidos</div>
            </div>
            <div class="stat">
              <div class="stat-number">15</div>
              <div class="stat-label">Anos de Experiência</div>
            </div>
            <div class="stat">
              <div class="stat-number">95%</div>
              <div class="stat-label">Taxa de Sucesso</div>
            </div>
          </div>
          
          <div class="hero-cta">
            <a href="#contato" class="btn btn-primary">
              <i class="fas fa-calendar-alt"></i>
              Consulta Gratuita
            </a>
            <a href="tel:+5511999999999" class="btn btn-secondary">
              <i class="fas fa-phone"></i>
              (11) 99999-9999
            </a>
          </div>
        </div>
        
        <div class="hero-image" :class="{ 'animate-in': heroVisible }">
          <div class="lawyer-card">
            <div class="lawyer-photo"></div>
            <div class="lawyer-info">
              <h3>Dr. João Silva</h3>
              <p>OAB/SP 123.456</p>
              <div class="lawyer-badges">
                <span class="badge">Direito Civil</span>
                <span class="badge">Direito Criminal</span>
                <span class="badge">Direito Trabalhista</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span>Role para baixo</span>
      </div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="services">
      <div class="container">
        <div class="section-header" :class="{ 'animate-in': servicesVisible }">
          <h2 class="section-title">Áreas de Atuação</h2>
          <p class="section-subtitle">
            Soluções jurídicas completas para proteger seus direitos e interesses
          </p>
        </div>
        
        <div class="services-grid">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="service-card"
            :class="{ 'animate-in': servicesVisible }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                <i class="fas fa-check"></i>
                {{ feature }}
              </li>
            </ul>
            <button class="service-btn" @click="openModal(service)">
              Saiba Mais
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="sobre" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-image" :class="{ 'animate-in': aboutVisible }">
            <div class="about-photo"></div>
            <div class="about-experience">
              <div class="experience-years">15+</div>
              <div class="experience-text">Anos de<br>Experiência</div>
            </div>
          </div>
          
          <div class="about-text" :class="{ 'animate-in': aboutVisible }">
            <h2 class="section-title">Dr. João Silva</h2>
            <p class="about-subtitle">Advogado especialista em defender seus direitos</p>
            
            <div class="about-description">
              <p>
                Formado pela Universidade de São Paulo (USP) em 2008, Dr. João Silva 
                construiu uma carreira sólida defendendo os direitos de seus clientes 
                com dedicação e excelência técnica.
              </p>
              
              <p>
                Com mais de 500 casos vencidos e uma taxa de sucesso de 95%, 
                especializa-se em Direito Civil, Criminal e Trabalhista, sempre 
                priorizando um atendimento humanizado e personalizado.
              </p>
            </div>
            
            <div class="about-credentials">
              <div class="credential">
                <i class="fas fa-graduation-cap"></i>
                <div>
                  <h4>Formação</h4>
                  <p>Direito - USP (2008)</p>
                </div>
              </div>
              
              <div class="credential">
                <i class="fas fa-certificate"></i>
                <div>
                  <h4>Especialização</h4>
                  <p>Direito Civil e Criminal</p>
                </div>
              </div>
              
              <div class="credential">
                <i class="fas fa-award"></i>
                <div>
                  <h4>Reconhecimento</h4>
                  <p>Top 10 Advogados - SP</p>
                </div>
              </div>
            </div>
            
            <a href="#contato" class="btn btn-primary">
              <i class="fas fa-calendar-alt"></i>
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="depoimentos" class="testimonials">
      <div class="container">
        <div class="section-header" :class="{ 'animate-in': testimonialsVisible }">
          <h2 class="section-title">Depoimentos de Clientes</h2>
          <p class="section-subtitle">
            Veja o que nossos clientes têm a dizer sobre nossos serviços
          </p>
        </div>
        
        <div class="testimonials-container">
          <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="testimonial-card"
            >
              <div class="testimonial-content">
                <div class="testimonial-rating">
                  <i v-for="star in 5" :key="star" class="fas fa-star"></i>
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">{{ testimonial.name.charAt(0) }}</div>
                <div class="author-info">
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-case">{{ testimonial.case }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonials-controls">
            <button 
              class="testimonial-btn testimonial-prev" 
              @click="prevSlide"
              :disabled="currentSlide === 0"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button 
              class="testimonial-btn testimonial-next" 
              @click="nextSlide"
              :disabled="currentSlide === testimonials.length - 1"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div class="testimonials-dots">
            <button 
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="testimonial-dot"
              :class="{ active: index === currentSlide }"
              @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="contact">
      <div class="container">
        <div class="section-header" :class="{ 'animate-in': contactVisible }">
          <h2 class="section-title">Entre em Contato</h2>
          <p class="section-subtitle">
            Agende sua consulta gratuita e tire todas as suas dúvidas
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info" :class="{ 'animate-in': contactVisible }">
            <h3>Informações de Contato</h3>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                  <span>Segunda a Sexta, 8h às 18h</span>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h4>E-mail</h4>
                  <p>contato@joaosilva.adv.br</p>
                  <span>Respondemos em até 24h</span>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <h4>Endereço</h4>
                  <p>Av. Paulista, 1000 - Sala 1001</p>
                  <span>São Paulo - SP, 01310-100</span>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="contact-icon">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-details">
                  <h4>WhatsApp</h4>
                  <p>(11) 99999-9999</p>
                  <span>Atendimento 24h</span>
                </div>
              </div>
            </div>
            
            <div class="contact-urgent">
              <div class="urgent-content">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                  <h4>Caso Urgente?</h4>
                  <p>Ligue agora e fale diretamente conosco</p>
                </div>
              </div>
              <a href="tel:+5511999999999" class="btn btn-urgent">
                <i class="fas fa-phone"></i>
                Ligar Agora
              </a>
            </div>
          </div>
          
          <form class="contact-form" :class="{ 'animate-in': contactVisible }" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                :class="{ error: errors.name }"
              >
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  :class="{ error: errors.email }"
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
              
              <div class="form-group">
                <label for="phone">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  required
                  :class="{ error: errors.phone }"
                >
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>
            </div>
            
            <div class="form-group">
              <label for="subject">Área de Interesse</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">Selecione uma área</option>
                <option value="civil">Direito Civil</option>
                <option value="criminal">Direito Criminal</option>
                <option value="trabalhista">Direito Trabalhista</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Descreva seu caso</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="4" 
                required
                :class="{ error: errors.message }"
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>
            
            <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
              <i v-if="!isSubmitting" class="fas fa-paper-plane"></i>
              <i v-else class="fas fa-spinner fa-spin"></i>
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
            </button>
            
            <p class="form-privacy">
              <i class="fas fa-lock"></i>
              Seus dados estão protegidos e serão tratados com total confidencialidade
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="footer-logo">
              <i class="fas fa-balance-scale"></i>
              <span>Dr. João Silva</span>
            </div>
            <p class="footer-description">
              Advocacia comprometida com a excelência e dedicada à defesa 
              dos seus direitos com ética e transparência.
            </p>
            <div class="footer-social">
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-links">
            <h4>Áreas de Atuação</h4>
            <ul>
              <li><a href="#servicos">Direito Civil</a></li>
              <li><a href="#servicos">Direito Criminal</a></li>
              <li><a href="#servicos">Direito Trabalhista</a></li>
              <li><a href="#servicos">Consultoria Jurídica</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h4>Contato</h4>
            <ul>
              <li>
                <i class="fas fa-phone"></i>
                (11) 99999-9999
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                contato@joaosilva.adv.br
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>
                Av. Paulista, 1000 - São Paulo/SP
              </li>
            </ul>
          </div>
          
          <div class="footer-cta">
            <h4>Consulta Gratuita</h4>
            <p>Agende agora mesmo uma consulta sem compromisso</p>
            <a href="#contato" class="btn btn-primary btn-small">
              <i class="fas fa-calendar-alt"></i>
              Agendar Agora
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; 2024 Dr. João Silva - OAB/SP 123.456. Todos os direitos reservados.</p>
          </div>
          <div class="footer-legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Float Button -->
    <a href="https://wa.me/5511999999999" class="whatsapp-float" target="_blank">
      <i class="fab fa-whatsapp"></i>
      <span class="whatsapp-text">Fale Conosco</span>
    </a>

    <!-- Service Modal -->
    <div v-if="selectedService" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <button class="modal-close" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="modal-content">
          <div class="modal-icon">
            <i :class="selectedService.icon"></i>
          </div>
          <h3 class="modal-title">{{ selectedService.title }}</h3>
          <p class="modal-description">{{ selectedService.description }}</p>
          
          <div class="modal-features">
            <h4>Como podemos ajudar:</h4>
            <ul>
              <li v-for="feature in selectedService.features" :key="feature">
                <i class="fas fa-check"></i>
                {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="modal-cta">
            <a href="#contato" class="btn btn-primary" @click="closeModal">
              <i class="fas fa-calendar-alt"></i>
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      heroVisible: false,
      servicesVisible: false,
      aboutVisible: false,
      testimonialsVisible: false,
      contactVisible: false,
      currentSlide: 0,
      selectedService: null,
      isSubmitting: false,
      
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      
      errors: {},
      
      services: [
        {
          icon: 'fas fa-home',
          title: 'Direito Civil',
          description: 'Soluções completas para questões patrimoniais, contratos e relacionamentos familiares.',
          features: [
            'Contratos e Negociações',
            'Direito de Família',
            'Direito Imobiliário',
            'Sucessões e Inventários'
          ]
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Direito Criminal',
          description: 'Defesa experiente em processos criminais com estratégias personalizadas.',
          features: [
            'Defesa Criminal',
            'Recursos e Apelações',
            'Crimes Econômicos',
            'Prisão e Liberdade'
          ]
        },
        {
          icon: 'fas fa-briefcase',
          title: 'Direito Trabalhista',
          description: 'Proteção dos seus direitos nas relações de trabalho.',
          features: [
            'Demissões e Rescisões',
            'Assédio Moral',
            'Horas Extras',
            'Acidente de Trabalho'
          ]
        }
      ],
      
      testimonials: [
        {
          name: 'Maria Santos',
          case: 'Direito de Família',
          text: 'Dr. João foi fundamental na resolução do meu divórcio. Profissional competente, sempre disponível e muito humano. Recomendo sem hesitar!'
        },
        {
          name: 'Carlos Oliveira',
          case: 'Direito Trabalhista',
          text: 'Excelente advogado! Me ajudou a conseguir todos os meus direitos trabalhistas. Processo rápido e resultado acima das expectativas.'
        },
        {
          name: 'Ana Paula',
          case: 'Direito Criminal',
          text: 'Estava desesperada com minha situação, mas Dr. João me tranquilizou e conseguiu provar minha inocência. Profissional excepcional!'
        },
        {
          name: 'Roberto Silva',
          case: 'Direito Civil',
          text: 'Problema resolvido de forma rápida e eficiente. Dr. João tem um conhecimento impressionante e sempre explica tudo de forma clara.'
        }
      ]
    }
  },
  
  mounted() {
    this.setupScrollListener()
    this.setupIntersectionObserver()
    this.startTestimonialAutoplay()
    
    // Animate hero on load
    setTimeout(() => {
      this.heroVisible = true
    }, 100)
  },
  
  methods: {
    setupScrollListener() {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 100
      })
    },
    
    setupIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target.id
            switch(target) {
              case 'servicos':
                this.servicesVisible = true
                break
              case 'sobre':
                this.aboutVisible = true
                break
              case 'depoimentos':
                this.testimonialsVisible = true
                break
              case 'contato':
                this.contactVisible = true
                break
            }
          }
        })
      }, { threshold: 0.2 })
      
      document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section)
      })
    },
    
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    
    closeMenu() {
      this.isMobileMenuOpen = false
    },
    
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    
    nextSlide() {
      if (this.currentSlide < this.testimonials.length - 1) {
        this.currentSlide++
      }
    },
    
    goToSlide(index) {
      this.currentSlide = index
    },
    
    startTestimonialAutoplay() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.testimonials.length
      }, 5000)
    },
    
    openModal(service) {
      this.selectedService = service
      document.body.style.overflow = 'hidden'
    },
    
    closeModal() {
      this.selectedService = null
      document.body.style.overflow = 'auto'
    },
    
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Nome é obrigatório'
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'E-mail é obrigatório'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'E-mail inválido'
      }
      
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Telefone é obrigatório'
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Mensagem é obrigatória'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    async submitForm() {
      if (!this.validateForm()) return
      
      this.isSubmitting = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Success feedback
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
      } catch (error) {
        alert('Erro ao enviar mensagem. Tente novamente.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
