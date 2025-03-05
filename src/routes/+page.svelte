<script>
  import '../lib/styles.css';
  
  let formData = {
    name: '',
    message: ''
  };

  function handleSubmit() {
    const mailtoLink = `mailto:contact@energyplugautos.com?subject=Website Inquiry from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  }
</script>

<!-- Header -->
<header class="header">
  <div class="container">
    <div class="header-content">
      <div class="logo">
        <h2>EnergyPlug Autos</h2>
      </div>
      <div class="whatsapp-cta">
        <a href="https://wa.me/2348160576497" target="_blank" class="whatsapp-button">
          <span class="whatsapp-icon">📱</span>
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  </div>
</header>

<!-- Hero Section (Attention) -->
<section class="hero">
  <div class="container">
    <div class="hero-wrapper">
      <div class="hero-content">
        <h1 class="hero-title">Premium Auto <span class="text-highlight">Service</span></h1>
        <p class="hero-subtitle">Expert Mechanical Engineering for All Vehicle Types</p>
        
        <div class="hero-benefits">
          <div class="benefit-tag"><span class="check-icon">✓</span> 30% Cheaper Than Dealerships</div>
          <div class="benefit-tag"><span class="check-icon">✓</span> Factory-Trained Technicians</div>
          <div class="benefit-tag"><span class="check-icon">✓</span> 12-Month Parts & Labor Warranty</div>
        </div>
        
        <a href="https://wa.me/2348160576497" target="_blank" class="hero-cta">
          <span class="whatsapp-icon">💬</span>
          Book Your Service Now
        </a>
      </div>
      
      <div class="hero-image">
        <img src="/images/eyitemiren-working.jpg" alt="Premium Auto Service" />
        <div class="trust-badge">Trusted by 1000+ Car Owners</div>
      </div>
    </div>
  
    <div class="car-types">
      <h3>We Service All Types of Premium Vehicles</h3>
      <div class="car-brands">
        <div class="car-category">
          <span class="car-icon">🇺🇸</span>
          <span>American</span>
        </div>
        <div class="car-category">
          <span class="car-icon">🇩🇪</span>
          <span>German</span>
        </div>
        <div class="car-category">
          <span class="car-icon">🇪🇺</span>
          <span>European</span>
        </div>
        <div class="car-category">
          <span class="car-icon">🇯🇵</span>
          <span>Asian</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Transformation Section -->
<section class="section section--light" id="process">
  <div class="container">
    <h2 class="section-title">Your Journey With Us</h2>
    <div class="journey-cards">
      <div class="journey-card">
        <div class="journey-icon">📅</div>
        <h3>1. Schedule</h3>
        <p>Book your service appointment through WhatsApp or give us a call.</p>
        <a href="https://wa.me/2348160576497" class="journey-link">Schedule Now</a>
      </div>
      <div class="journey-card">
        <div class="journey-icon">🔧</div>
        <h3>2. Service</h3>
        <p>Our expert technicians perform comprehensive inspections and necessary repairs.</p>
      </div>
      <div class="journey-card">
        <div class="journey-icon">✓</div>
        <h3>3. Success</h3>
        <p>Drive away with confidence, knowing your vehicle is performing at its best.</p>
      </div>
    </div>
  </div>
</section>

<!-- Interest Section -->
<section class="section" id="services">
  <div class="container">
    <h2 class="section-title">Premium Auto Services</h2>
    <div class="services-container">
      <div class="service-card">
        <div class="service-icon">🛠️</div>
        <h3>Expert Repairs</h3>
        <p>Specialized technicians delivering precision repairs for all vehicle makes and models.</p>
        <ul class="service-features">
          <li><span>✓</span> Extended vehicle lifespan</li>
          <li><span>✓</span> Reduced long-term costs</li>
          <li><span>✓</span> Genuine or OEM parts</li>
        </ul>
        <a href="https://wa.me/2348160576497" class="service-link">Book Service</a>
      </div>
      
      <div class="service-card">
        <div class="service-icon">🔍</div>
        <h3>Diagnostics</h3>
        <p>State-of-the-art computer diagnostics to identify complex issues with pinpoint accuracy.</p>
        <ul class="service-features">
          <li><span>✓</span> Multi-brand expertise</li>
          <li><span>✓</span> Electrical fault finding</li>
          <li><span>✓</span> Performance optimization</li>
        </ul>
        <a href="https://wa.me/2348160576497" class="service-link">Book Service</a>
      </div>
      
      <div class="service-card">
        <div class="service-icon">🔄</div>
        <h3>Maintenance</h3>
        <p>Comprehensive preventive care to keep your vehicle in optimal condition.</p>
        <ul class="service-features">
          <li><span>✓</span> Enhanced safety</li>
          <li><span>✓</span> Improved performance</li>
          <li><span>✓</span> Comprehensive inspection</li>
        </ul>
        <a href="https://wa.me/2348160576497" class="service-link">Book Service</a>
      </div>
    </div>
  </div>
</section>

<!-- Desire Section -->
<section class="section section--light glass">
  <div class="container">
    <h2 class="section-title">Real Client Experiences</h2>
    <p class="section-subtitle">Discover what our satisfied clients say about their experience</p>
    
    <div class="testimonials-grid">
      <div class="testimonial glass">
        <div class="testimonial__rating">
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
        </div>
        <blockquote class="testimonial__quote">
          "I swear die! I match the car today, my babe shout sey the engine na blast! E don tey wey Keith Dey look the car Dey try find fault, today I shock when he open up sey this na the first GLK he don see with clean engine. Everything just be top notch! I don promise myself sey I go always maintain am! The car give me joy I no go lie you."
        </blockquote>
        <div class="testimonial__author">Ivan K. - Mercedes GLK Owner</div>
        <div class="testimonial__verified">✓ Verified Review</div>
      </div>

      <div class="testimonial glass">
        <div class="testimonial__rating">
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
        </div>
        <blockquote class="testimonial__quote">
          "I Dey turn the steering, still Dey do my big boy! Steering too sweet! This na the 3rd Benz I Dey drive, non sweet reach this one! Everything Dey totally sound!"
        </blockquote>
        <div class="testimonial__author">Ivan K. - Repeat Customer</div>
        <div class="testimonial__verified">✓ Verified Review</div>
      </div>

      <div class="testimonial glass highlight-testimonial">
        <div class="testimonial__rating">
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
          <span class="testimonial__star">★</span>
        </div>
        <blockquote class="testimonial__quote">
          "You Dey deliver no worry! Anybody wey say you no Dey deliver, call me. I go use police come arrest dem, make dem sleep cell for like 2 weeks make their brain reset."
        </blockquote>
        <div class="testimonial__author">Ivan K. - Brand Ambassador</div>
        <div class="testimonial__verified">✓ Verified Review</div>
        <div class="testimonial__badge">
          <span class="badge">Top Client</span>
        </div>
      </div>
    </div>

    <div class="testimonial-stats glass">
      <div class="stat">
        <span class="stat__number">100%</span>
        <span class="stat__label">Client Satisfaction</span>
      </div>
      <div class="stat">
        <span class="stat__number">3+</span>
        <span class="stat__label">Premium Vehicles</span>
      </div>
      <div class="stat">
        <span class="stat__number">5.0</span>
        <span class="stat__label">Service Rating</span>
      </div>
    </div>
  </div>
</section>

<!-- Compare Section -->
<section class="section glass">
  <div class="container">
    <h2>Why Choose Us</h2>
    <table class="comparison-table glass">
      <thead>
        <tr>
          <th>Features</th>
          <th>EnergyPlug <span style="color: var(--gold-light);">Autos</span></th>
          <th>Others</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Expert Technicians</strong></td>
          <td><span style="color: var(--gold); font-size: 1.2rem;">✓</span></td>
          <td>Varies</td>
        </tr>
        <tr>
          <td><strong>Comprehensive Inspections</strong></td>
          <td><span style="color: var(--gold); font-size: 1.2rem;">✓</span></td>
          <td>Limited</td>
        </tr>
        <tr>
          <td><strong>State-of-the-art Equipment</strong></td>
          <td><span style="color: var(--gold); font-size: 1.2rem;">✓</span></td>
          <td>Basic</td>
        </tr>
        <tr>
          <td><strong>Service Warranty</strong></td>
          <td><span style="color: var(--gold); font-size: 1.2rem;">✓</span></td>
          <td>Limited</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Objections Section -->
<section class="section section--light">
  <div class="container">
    <h2 class="section-title">Frequently Asked Questions</h2>
    <div class="faq-container">
      <div class="faq-item">
        <div class="faq-question">
          <span class="faq-icon">→</span>
          <h4>How does your diagnostic process differ from dealerships?</h4>
        </div>
        <div class="faq-answer">
          <p>Unlike dealerships, we use advanced independent diagnostics tools that work across multiple manufacturers, offering a comprehensive analysis without brand-specific limitations. This allows us to identify complex issues that dealer software might miss.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <span class="faq-icon">→</span>
          <h4>Why should I choose independent specialists over dealerships?</h4>
        </div>
        <div class="faq-answer">
          <p>Our technicians specialize across multiple luxury brands, offering expertise that single-brand dealerships can't match. Plus, you'll work directly with the mechanic servicing your vehicle, ensuring personalized attention and communication throughout the repair process.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <span class="faq-icon">→</span>
          <h4>Can I get premium service without breaking the bank?</h4>
        </div>
        <div class="faq-answer">
          <p>Absolutely! Our specialized service delivers dealership-quality results at 30-40% lower costs by eliminating unnecessary overhead while maintaining premium parts and expert technicians.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <span class="faq-icon">→</span>
          <h4>What's your approach to preventative maintenance?</h4>
        </div>
        <div class="faq-answer">
          <p>We use a data-driven approach to predict potential failures before they happen, saving you costly future repairs. Each service includes a comprehensive health report identifying early warning signs specific to your vehicle's make and model.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Action Section -->
<section class="section section--light" id="contact">
  <div class="container">
    <h2 class="section-title">Get In Touch</h2>
    <div class="contact-container">
      <div class="contact-form-container">
        <form class="contact-form" on:submit|preventDefault={handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={formData.name} required placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" bind:value={formData.message} rows="5" required placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" class="btn btn--primary">Send Message</button>
        </form>
      </div>
      
      <div class="contact-info">
        <div class="contact-card business-hours-card">
          <h3 class="contact-card-title">Business Hours</h3>
          <div class="hours-container">
            <div class="hours-item">
              <span class="day">Monday - Friday</span>
              <span class="time">8:00 AM - 6:00 PM</span>
            </div>
            <div class="hours-item">
              <span class="day">Saturday</span>
              <span class="time">9:00 AM - 2:00 PM</span>
            </div>
            <div class="hours-item">
              <span class="day">Sunday</span>
              <span class="time">Closed</span>
            </div>
          </div>
        </div>
        
        <a href="https://wa.me/2348160576497" class="whatsapp-contact-button">
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-company">
        <h3>EnergyPlug Autos</h3>
        <p>Expert mechanical engineering services for American, German, European, and Asian vehicles.</p>
        <p class="copyright"> 2025 EnergyPlug Autos. All rights reserved.</p>
      </div>
      <div class="footer-contact">
        <h3>Contact Info</h3>
        <div class="contact-item">
          <span class="contact-icon">📧</span>
          <span>yeliatie@gmail.com</span>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <span>+234 816 057 6497</span>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <span>5b Folabi Oyeyemi Close, Lekki Lagos</span>
        </div>
        <div class="contact-item whatsapp-link">
          <a href="https://wa.me/2348160576497" target="_blank">
            <span class="contact-icon">📱</span>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  /* Additional page-specific styles */

  ul {
    list-style-position: inside;
    margin-bottom: var(--space-md);
  }

  li {
    margin-bottom: var(--space-sm);
  }
</style>
