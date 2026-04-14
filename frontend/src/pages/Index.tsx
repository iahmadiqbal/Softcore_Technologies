import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Globe, Palette, Smartphone, TrendingUp, Cloud, CheckCircle, ArrowRight, ClipboardList, Lightbulb, Code2, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";

const slides = [
  { image: hero1, heading: "Innovating the Digital Future", sub: "We build scalable, modern digital solutions that help businesses grow and thrive." },
  { image: hero2, heading: "Transforming Ideas Into Reality", sub: "From web applications to mobile apps, we turn your vision into powerful products." },
];

const services = [
  { 
    icon: Globe, 
    title: "Web Development", 
    desc: "Create stunning, high-performance websites and web applications tailored to your business needs using the latest technologies like React, Node.js, and modern frameworks.",
    image: serviceWeb
  },
  { 
    icon: Palette, 
    title: "Graphic Designing", 
    desc: "Craft visually compelling designs that communicate your brand's message effectively. From logos to marketing materials, we create designs that resonate with your audience.",
    image: serviceDesign
  },
  { 
    icon: Smartphone, 
    title: "Mobile App Development", 
    desc: "Build feature-rich, intuitive mobile applications for iOS and Android platforms. We deliver seamless user experiences with robust backend integration.",
    image: serviceMobile
  },
  { 
    icon: TrendingUp, 
    title: "Digital Marketing & SEO", 
    desc: "Boost your online visibility and drive targeted traffic with comprehensive digital marketing services including SEO optimization, social media marketing, and content strategy.",
    image: serviceMarketing
  },
  { 
    icon: Cloud, 
    title: "Cloud & IT Support", 
    desc: "Ensure your business runs smoothly with reliable cloud solutions and IT support services. We provide cloud migration, server management, and 24/7 technical support.",
    image: serviceCloud
  },
];

const whyUs = [
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals with years of industry expertise", color: "#5A2D82" },
  { icon: CheckCircle, title: "Reliable Delivery", desc: "On-time project completion with quality assurance", color: "#F4B400" },
  { icon: Lightbulb, title: "Custom Solutions", desc: "Tailored approaches designed for your unique needs", color: "#5A2D82" },
  { icon: Code2, title: "Modern Technologies", desc: "Latest tools and frameworks for cutting-edge solutions", color: "#F4B400" },
  { icon: Rocket, title: "Client-Focused Approach", desc: "Your success is our priority, always", color: "#5A2D82" },
];

const steps = [
  { icon: ClipboardList, title: "Requirement", step: "01", desc: "Understanding your vision and project goals" },
  { icon: Lightbulb, title: "Planning", step: "02", desc: "Strategic roadmap and technical architecture" },
  { icon: Code2, title: "Development", step: "03", desc: "Building with modern tools and best practices" },
  { icon: Rocket, title: "Delivery", step: "04", desc: "Launch, support, and continuous improvement" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden" style={{ backgroundColor: '#5A2D82' }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
          </div>
        ))}
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight animate-from-top">
              Innovating the <span style={{ color: '#F4B400' }}>Digital</span> Future
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto animate-from-bottom" style={{ animationDelay: "200ms" }}>
              We build scalable, modern digital solutions that help businesses grow and thrive.
            </p>
            <Link to="/contact" className="inline-block mt-6 animate-from-bottom" style={{ animationDelay: "400ms" }}>
              <Button size="lg" className="text-base px-8 font-semibold shadow-xl" style={{ backgroundColor: '#F4B400', color: '#5A2D82' }}>Get in Touch</Button>
            </Link>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-3 rounded-full transition-all ${i === currentSlide ? "w-8" : "w-3"}`} style={{ backgroundColor: i === currentSlide ? '#F4B400' : 'rgba(255, 255, 255, 0.5)' }} />
          ))}
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                About <span className="text-primary">Softcore Technologies</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Softcore Technologies is a forward-thinking IT company specializing in delivering innovative digital solutions. From custom web applications to creative branding, mobile apps, and cloud infrastructure — we help businesses leverage technology to achieve their goals efficiently and effectively.
              </p>
              <Link to="/about" className="inline-block mt-6">
                <Button variant="outline" className="gap-2">Learn More <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <img src={aboutTeam} alt="Softcore team" className="rounded-xl shadow-xl w-full" loading="lazy" width={800} height={600} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="top">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Our <span style={{ color: '#5A2D82' }}>Services</span></h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">We offer a comprehensive range of digital services to help your business succeed in the modern digital landscape.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
                <div className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#F4B400' }}>
                        <s.icon className="w-5 h-5" style={{ color: '#5A2D82' }} />
                      </div>
                      <h3 className="font-heading font-semibold text-xl" style={{ color: '#5A2D82' }}>{s.title}</h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll direction="bottom" delay={300}>
            <div className="text-center mt-10">
              <Link to="/services">
                <Button 
                  variant="outline" 
                  className="gap-2 border-2 font-semibold hover:text-white transition-all" 
                  style={{ borderColor: '#5A2D82', color: '#5A2D82', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#5A2D82'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5A2D82'; }}
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="top">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Why <span style={{ color: '#5A2D82' }}>Choose Us</span></h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">We combine expertise, innovation, and dedication to deliver exceptional results for your business</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item, i) => (
              <AnimateOnScroll key={item.title} direction="bottom" delay={i * 100}>
                <div className="relative group">
                  {/* Card */}
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#F4B400] h-full">
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <span className="font-heading font-semibold text-xl mb-2" style={{ color: '#5A2D82' }}>{item.title}</span>
                    
                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: item.color }} />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="top">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">How We <span style={{ color: '#5A2D82' }}>Work</span></h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">Our proven process ensures smooth project execution from concept to completion</p>
          </AnimateOnScroll>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <AnimateOnScroll key={s.title} direction="bottom" delay={i * 150}>
                  <div className="relative">
                    {/* Connector Line */}
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#5A2D82] to-[#F4B400]" />
                    )}
                    
                    <div className="relative text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#F4B400]">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#5A2D82' }}>
                        {s.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mt-2" style={{ backgroundColor: '#F4B400' }}>
                        <s.icon className="w-8 h-8" style={{ color: '#5A2D82' }} />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-heading font-semibold text-xl mb-2" style={{ color: '#5A2D82' }}>{s.title}</h3>
                      
                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#5A2D82' }}>
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Need a solution for your business?</h2>
            <p className="mt-4 text-white/90 max-w-lg mx-auto">Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.</p>
            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="text-base px-8" style={{ backgroundColor: '#F4B400', color: '#5A2D82' }}>Get in Touch</Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Index;
