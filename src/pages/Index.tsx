import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Globe, Palette, Smartphone, TrendingUp, Cloud, CheckCircle, ArrowRight, ClipboardList, Lightbulb, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const slides = [
  { image: hero1, heading: "Innovating the Digital Future", sub: "We build scalable, modern digital solutions that help businesses grow and thrive in an ever-evolving tech landscape." },
  { image: hero2, heading: "Transforming Ideas Into Reality", sub: "From web applications to mobile apps, we turn your vision into powerful, user-friendly products." },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, responsive websites built for performance." },
  { icon: Palette, title: "Graphic Designing", desc: "Creative designs that make your brand stand out." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications." },
  { icon: TrendingUp, title: "Digital Marketing & SEO", desc: "Strategies to boost your online presence." },
  { icon: Cloud, title: "Cloud & IT Support", desc: "Reliable cloud solutions and IT infrastructure." },
];

const whyUs = [
  "Experienced Team",
  "Reliable Delivery",
  "Custom Solutions",
  "Modern Technologies",
  "Client-Focused Approach",
];

const steps = [
  { icon: ClipboardList, title: "Requirement", step: "01" },
  { icon: Lightbulb, title: "Planning", step: "02" },
  { icon: Code2, title: "Development", step: "03" },
  { icon: Rocket, title: "Delivery", step: "04" },
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
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-hero">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-hero/80 to-hero/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground leading-tight animate-from-left">
              {slides[currentSlide].heading.split(" ").map((word, i) =>
                i === 2 ? <span key={i} className="text-primary">{word} </span> : word + " "
              )}
            </h1>
            <p className="mt-6 text-lg text-hero-muted max-w-xl animate-from-bottom" style={{ animationDelay: "200ms" }}>
              {slides[currentSlide].sub}
            </p>
            <Link to="/contact" className="inline-block mt-8 animate-from-bottom" style={{ animationDelay: "400ms" }}>
              <Button size="lg" className="text-base px-8">Get in Touch</Button>
            </Link>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-primary w-8" : "bg-hero-muted/50"}`} />
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Our <span className="text-primary">Services</span></h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">We offer a comprehensive range of digital services to help your business succeed.</p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
                <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll direction="bottom" delay={300}>
            <div className="text-center mt-10">
              <Link to="/services">
                <Button variant="outline" className="gap-2">View All Services <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="top">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Why <span className="text-primary">Choose Us</span></h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item, i) => (
              <AnimateOnScroll key={item} direction="bottom" delay={i * 100}>
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <CheckCircle className="w-10 h-10 text-primary mb-3" />
                  <span className="font-heading font-medium">{item}</span>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">How We <span className="text-primary">Work</span></h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 150}>
                <div className="relative text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-9 h-9 text-primary" />
                  </div>
                  <span className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 text-4xl font-heading font-bold text-primary/20">{s.step}</span>
                  <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground">Need a solution for your business?</h2>
            <p className="mt-4 text-hero-muted max-w-lg mx-auto">Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.</p>
            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="text-base px-8">Get in Touch</Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Index;
