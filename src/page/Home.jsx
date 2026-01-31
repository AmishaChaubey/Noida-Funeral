import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Heart, Truck, Award, ChevronDown, Menu, X, Star, Users, CheckCircle, Flower2, Headphones, DollarSign, UserCheck } from 'lucide-react';

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us. We will reach out to you shortly with compassion and care.');
    setFormData({ name: '', phone: '', email: '', location: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-50 rounded-full text-[#3d535f] text-xs sm:text-sm font-semibold mb-4">
            <Heart size={14} className="sm:w-4 sm:h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
            Contact <span className="text-[#3d535f]">Us Today</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Our compassionate team is available 24/7 to assist you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* Left Side - Image with Overlay Info */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://i.pinimg.com/1200x/b5/34/e9/b534e9bb4c9372c33471cd7c9a6698be.jpg"
                alt="Customer support"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Quick Contact</h3>
                <div className="space-y-3 sm:space-y-4">
                  <a href="tel:+919259300588" className="flex items-center space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl hover:bg-white/20 transition-all group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3d535f] rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform flex-shrink-0">
                      <Phone size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-300">Call Us Now</p>
                      <p className="text-base sm:text-lg lg:text-xl font-bold truncate">+91 9259300588</p>
                    </div>
                  </a>
                  
                  <a href="mailto:support@noidafuneral.com" className="flex items-center space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl hover:bg-white/20 transition-all group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform flex-shrink-0">
                      <Mail size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-300">Email Us</p>
                      <p className="text-sm sm:text-base lg:text-lg font-bold break-all">support@noidafuneral.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">Service Hours</p>
                      <p className="text-base sm:text-lg font-bold">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-sm sm:text-base"
                      placeholder="+91"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-sm sm:text-base"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-sm sm:text-base"
                    placeholder="Sector, Noida"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none resize-none text-sm sm:text-base"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3d535f] hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl text-sm sm:text-base"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function NoidaFuneralServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const faqs = [
    {
      q: "What funeral services do you provide in Noida?",
      a: "We offer comprehensive funeral services including freezer box rentals, transportation, cremation arrangements, documentation assistance, and complete funeral ceremony coordination across all sectors of Noida."
    },
    {
      q: "How quickly can you respond to an emergency call?",
      a: "Our team is available 24/7 and can reach any location in Noida within 30-60 minutes of your call. We understand the urgency and respond with immediate assistance."
    },
    {
      q: "What is included in your funeral service packages?",
      a: "Our packages include freezer box rental, transportation services, documentation support, cremation ground arrangements, priest coordination, and all necessary funeral supplies. We handle everything with dignity and care."
    },
    {
      q: "Do you assist with legal documentation and certificates?",
      a: "Yes, we provide complete assistance with death certificates, cremation permits, and all required legal documentation. Our experienced team guides you through every step."
    },
    {
      q: "What are your service charges?",
      a: "Our pricing is transparent and varies based on the services required. We offer flexible packages to suit different needs and budgets. Contact us for a detailed, compassionate consultation."
    },
    {
      q: "Do you provide services for all communities and religions?",
      a: "Yes, we respect and serve all communities, religions, and cultural practices. Our team is trained to handle ceremonies according to your specific traditions and beliefs."
    }
  ];

  return (
    <div className="bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .text-[#3d535f] {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
              <img className='h-40 sm:h-52 w-auto' src='/logo2.svg' alt="Logo"/>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-[#3d535f] font-semibold transition-all relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d535f] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-2 lg:ml-4 bg-[#3d535f] hover:from-indigo-700 hover:to-purple-700 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg text-sm lg:text-base"
              >
                Get Help Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} className="text-[#3d535f]" /> : <Menu size={24} className="text-[#3d535f]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-[#3d535f] hover:bg-indigo-50 font-semibold rounded-xl transition-all"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#3d535f] text-white px-6 py-3 rounded-xl font-bold w-full transition-all hover:scale-105 shadow-lg"
              >
                Get Help Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20 relative min-h-screen overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0">
          <img
            src="/1.png"
            alt="Compassionate funeral services"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/25 via-gray-900/30 to-gray-900/40"></div>
        </div>

        {/* Content - Left Side */}
        <div className="relative z-10 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-0">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs sm:text-sm font-bold mb-8 sm:mb-16 animate-slide-up">
                <Heart className="animate-pulse" size={14} />
                <span>Professional Funeral Services in Noida</span>
              </div>
              
              <div>
                {/* Main Heading */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                  Compassionate Care in
                  Difficult Times
                </h1>
                
                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Providing dignified funeral services with 24/7 availability across all sectors of Noida. We're here to support you with professionalism and compassion.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-20 animate-slide-up" style={{animationDelay: '0.3s'}}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#3d535f] hover:from-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 group"
                  >
                    <span>Request Service</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <a
                    href="tel:+919259300588"
                    className="border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#3d535f] transition-all text-center backdrop-blur-sm bg-white/5 flex items-center justify-center space-x-2"
                  >
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                    <span className="truncate">+91 9259300588</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
              Trusted by <span className="text-[#3d535f]">Families</span> Across Noida
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">Excellence in service, compassion in care</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "1000+", label: "Families Served", icon: <Users size={24} className="sm:w-8 sm:h-8" />, color: "from-[#3d535f] to-[#7894a3]" },
              { number: "24/7", label: "Always Available", icon: <Clock size={24} className="sm:w-8 sm:h-8" />, color: "from-[#3d535f] to-[#7894a3]" },
              { number: "50+", label: "Areas Covered", icon: <MapPin size={24} className="sm:w-8 sm:h-8" />, color: "from-[#3d535f] to-[#7894a3]" },
              { number: "100%", label: "Satisfaction", icon: <Star size={24} className="sm:w-8 sm:h-8" />, color: "from-[#3d535f] to-[#7894a3]" }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover-lift border-2 border-gray-100 hover:border-indigo-200 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 lg:mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#3d535f] transition-colors">
                    {stat.number}
                  </h3>
                  <p className="font-semibold text-gray-600 text-xs sm:text-sm lg:text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-50 rounded-full text-[#3d535f] text-xs sm:text-sm font-semibold mb-4">
              <Heart size={14} className="sm:w-4 sm:h-4" />
              <span>About Us</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
              Professional <span className="text-[#3d535f]">Funeral Services</span> in Noida
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We understand that losing a loved one is one of life's most challenging experiences. Our dedicated team provides compassionate, professional funeral services across all sectors of Noida.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
            {/* Left - Image Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover-lift">
                  <img
                    src="https://i.pinimg.com/736x/0f/aa/ec/0faaec3a028cba96ea8c50627e8b5a1d.jpg"
                    alt="Professional team"
                    className="w-full h-40 sm:h-60 lg:h-84 object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#3d535f] to-[#7894a3] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-xl hover-lift">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">10+</h3>
                  <p className="text-indigo-100 text-xs sm:text-sm">Years of Trusted Service</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-8">
                <div className="bg-gradient-to-br from-[#3d535f] to-[#7894a3] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-xl hover-lift">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">24/7</h3>
                  <p className="text-green-100 text-xs sm:text-sm">Always Available</p>
                </div>
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover-lift">
                  <img
                    src="https://i.pinimg.com/736x/f3/df/1c/f3df1ca7903d9014ba385b09cd0f1a4f.jpg"
                    alt="Compassionate care"
                    className="w-full h-40 sm:h-60 lg:h-84 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                With over a decade of experience, we offer comprehensive funeral arrangements including freezer box rentals, transportation, cremation coordination, and complete ceremony management.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Our team ensures dignity and respect in every aspect of our service, providing support when you need it most.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  { icon: <CheckCircle size={20} className="sm:w-6 sm:h-6" />, text: "Licensed and certified professionals" },
                  { icon: <CheckCircle size={20} className="sm:w-6 sm:h-6" />, text: "Compassionate and experienced team" },
                  { icon: <CheckCircle size={20} className="sm:w-6 sm:h-6" />, text: "Transparent pricing with no hidden costs" },
                  { icon: <CheckCircle size={20} className="sm:w-6 sm:h-6" />, text: "Complete documentation assistance" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 group">
                    <div className="text-green-600 group-hover:scale-125 transition-transform flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-[#3d535f] transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#3d535f] hover:from-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Get in Touch →
                </button>
                <a
                  href="tel:+919259300588"
                  className="border-2 border-[#3d535f] text-[#3d535f] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#3d535f] hover:text-white transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white shadow-md rounded-full text-[#3d535f] text-xs sm:text-sm font-semibold mb-4">
              <Star size={14} className="sm:w-4 sm:h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
              Why Families <span className="text-[#3d535f]">Trust Us</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're committed to providing the highest quality funeral services with compassion and professionalism
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <Headphones size={32} className="sm:w-10 sm:h-10" />,
                title: "24/7 Support",
                description: "Our compassionate team is available round the clock to assist you immediately, any time of day or night.",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: <Shield size={32} className="sm:w-10 sm:h-10" />,
                title: "Trusted Service",
                description: "Over 10 years of experience serving families across Noida with dignity and respect.",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50"
              },
              {
                icon: <DollarSign size={32} className="sm:w-10 sm:h-10" />,
                title: "Transparent Pricing",
                description: "Clear, upfront pricing with no hidden costs. We provide detailed quotes for all our services.",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50"
              },
              {
                icon: <UserCheck size={32} className="sm:w-10 sm:h-10" />,
                title: "Professional Team",
                description: "Trained and experienced staff who handle every aspect with care and professionalism.",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group">
                <div className="bg-white text-[#3d535f] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-indigo-200 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${feature.bgColor} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-[#3d535f] bg-clip-text`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#3d535f] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`mt-4 sm:mt-6 w-12 h-1 bg-[#3d535f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Quick Response",
                description: "We reach any location in Noida within 30-60 minutes of your call",
                icon: "⚡"
              },
              {
                title: "Complete Documentation",
                description: "We handle all legal paperwork and certificates on your behalf",
                icon: "📋"
              },
              {
                title: "All Traditions Respected",
                description: "We serve all communities and honor every cultural practice",
                icon: "🕉️"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-100 text-[#3d535f] rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
              <Flower2 size={14} className="sm:w-4 sm:h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
              Complete <span className="text-[#3d535f]">Funeral Solutions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive services designed to support you through every step
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Freezer Box Rental",
                description: "Medical-grade freezer boxes with temperature control from -10°C to -20°C. Available for flexible rental periods.",
                icon: "❄️",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "24/7 Emergency Service",
                description: "Round-the-clock availability with rapid response across all Noida sectors. Always here when you need us.",
                icon: "🚨",
                color: "from-red-500 to-red-600"
              },
              {
                title: "Transportation",
                description: "Professional and dignified transportation services with well-maintained vehicles and experienced staff.",
                icon: "🚗",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Cremation Services",
                description: "Complete cremation arrangements including ground booking, priest coordination, and ceremony management.",
                icon: "🕉️",
                color: "from-orange-500 to-orange-600"
              },
              {
                title: "Documentation Support",
                description: "Assistance with death certificates, cremation permits, and all required legal documentation.",
                icon: "📋",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Complete Packages",
                description: "Comprehensive funeral packages covering all aspects from initial pickup to final ceremonies.",
                icon: "📦",
                color: "from-indigo-500 to-[#3d535f]"
              }
            ].map((service, idx) => (
              <div key={idx} className="group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover-lift border-2 border-gray-100 hover:border-indigo-200 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#ececec] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#3d535f] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#3d535f] hover:from-indigo-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:scale-105 shadow-2xl"
            >
              Request Service Now →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden h-[500px] sm:h-[550px] md:h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/2.png"
            alt="Compassionate support team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              
              {/* Glass Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl 
                              p-4 sm:p-5 md:p-6 shadow-2xl hover:bg-white/15 transition-all duration-500">

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 
                                bg-white/20 backdrop-blur-md border border-white/30 
                                rounded-full text-white text-xs font-semibold mb-3">
                  <Phone className="animate-pulse" size={12} />
                  <span>Emergency Support Available 24/7</span>
                </div>

                {/* Heading */}
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl 
                               font-bold text-white mb-3 leading-tight">
                  Need Immediate
                  <span className="block text-indigo-300">Assistance?</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/90 mb-4 leading-relaxed">
                  Our compassionate team responds within 30–60 minutes across all Noida sectors. Available 24/7.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
                  <a
                    href="tel:+919259300588"
                    className="bg-white text-[#3d535f] px-4 py-2.5 rounded-xl 
                               font-bold text-sm hover:bg-indigo-50 transition-all 
                               hover:scale-105 shadow-xl flex items-center justify-center 
                               space-x-2 group"
                  >
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-[#3d535f]" />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-sm font-bold truncate">+91 9259300588</p>
                    </div>
                  </a>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-white/20 backdrop-blur-md border border-white/40 
                               text-white px-4 py-2.5 rounded-xl font-bold text-sm 
                               hover:bg-white/30 transition-all hover:scale-105 
                               flex items-center justify-center space-x-2"
                  >
                    <Mail size={15} />
                    <span>Send Message</span>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/20">
                  {[
                    { icon: <Clock size={14} className="sm:w-4 sm:h-4" />, text: "30–60 Min", subtext: "Response" },
                    { icon: <Shield size={14} className="sm:w-4 sm:h-4" />, text: "Licensed", subtext: "Professional" },
                    { icon: <Heart size={14} className="sm:w-4 sm:h-4" />, text: "10+ Years", subtext: "Experience" }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="inline-flex items-center justify-center 
                                      w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-md 
                                      rounded-lg sm:rounded-xl mb-1">
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <p className="text-white font-semibold text-xs">{item.text}</p>
                      <p className="text-white/70 text-[10px]">{item.subtext}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-50 rounded-full text-[#3d535f] text-xs sm:text-sm font-semibold mb-4">
              <MapPin size={14} className="sm:w-4 sm:h-4" />
              <span>Our Coverage</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
              Serving <span className="text-[#3d535f]">All of Noida</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We provide funeral services across all sectors of Noida, Greater Noida, and Noida Extension
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {[
              {
                title: "Noida",
                areas: ["Sector 1-168", "Film City", "Botanical Garden", "City Center", "Wave City"],
                color: "from-[#3d535f] to-[#7894a3]"
              },
              {
                title: "Greater Noida",
                areas: ["Alpha", "Beta", "Gamma", "Delta", "Pari Chowk", "Knowledge Park"],
                color: "from-[#3d535f] to-[#7894a3]"
              },
              {
                title: "Noida Extension",
                areas: ["Gaur City", "Crossing Republik", "Stellar Jeevan", "Supertech", "All Extensions"],
                color: "from-[#3d535f] to-[#7894a3]"
              }
            ].map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100">
                <div className={`inline-flex px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${area.color} text-white rounded-full font-bold mb-4 sm:mb-6 text-sm sm:text-base`}>
                  {area.title}
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {area.areas.map((location, i) => (
                    <li key={i} className="flex items-center space-x-2 sm:space-x-3 text-gray-700 text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3d535f] rounded-full flex-shrink-0"></div>
                      <span>{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192713!2d77.38910788928634!3d28.535517034283522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500 sm:h-[500px]"
            ></iframe>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-[#3d535f] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-xl sm:rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <Phone size={24} className="sm:w-8 sm:h-8" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm opacity-90">Need Immediate Service?</p>
                  <a href="tel:+919259300588" className="text-lg sm:text-xl lg:text-2xl font-bold hover:underline">
                    +91 9259300588
                  </a>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-center sm:text-left">We'll reach you within 30-60 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white shadow-md rounded-full text-[#3d535f] text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-indigo-100">
              <span>❓</span>
              <span>FAQs</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
              Common <span className="text-[#3d535f]">Questions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">Everything you need to know about our services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover-lift border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 flex items-start justify-between text-left hover:bg-indigo-50 transition-all group"
                >
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg pr-4 group-hover:text-[#3d535f] transition-colors flex-1">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#3d535f] transition-transform duration-300 sm:w-6 sm:h-6 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-fade-in border-t border-gray-100">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 border-indigo-100 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">We're available 24/7 to help you with any concerns</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+919259300588"
                className="bg-[#3d535f] hover:from-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Call Now
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-[#3d535f] text-[#3d535f] px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-[#3d535f] hover:text-white transition-all text-sm sm:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#3d535f] to-gray-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold">Noida Funeral Services</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Compassionate Care, 24/7</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Providing dignified and professional funeral services across all sectors of Noida. Our experienced team is dedicated to supporting families with compassion and respect during their most difficult times.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="flex-shrink-0 text-white mt-1" size={16} />
                  <div>
                    <a href="tel:+919259300588" className="text-sm sm:text-base hover:text-white transition-colors">
                      +91 9259300588
                    </a>
                    <p className="text-xs text-gray-400">24/7 Helpline</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="flex-shrink-0 text-white mt-1" size={16} />
                  <div>
                    <a href="mailto:support@noidafuneral.com" className="text-sm sm:text-base hover:text-white transition-colors break-all">
                      support@noidafuneral.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="flex-shrink-0 text-white mt-1" size={16} />
                  <span className="text-sm sm:text-base">All Sectors, Noida, UP</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; 2026 Noida Funeral Services. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}