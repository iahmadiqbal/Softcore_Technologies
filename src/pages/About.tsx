import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground animate-from-top">
            About <span className="text-primary">Softcore Technologies</span>
          </h1>
          <p className="mt-4 text-hero-muted max-w-2xl mx-auto animate-from-bottom" style={{ animationDelay: "200ms" }}>
            A passionate team of developers, designers, and strategists committed to delivering innovative digital solutions.
          </p>
        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimateOnScroll direction="left">
            <h2 className="text-3xl font-heading font-bold text-center mb-6">Our <span className="text-primary">Purpose</span></h2>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" delay={100}>
            <p className="text-muted-foreground leading-relaxed text-center">
              At Softcore Technologies, our purpose is to empower businesses with the digital tools they need to succeed. We believe technology should be accessible, efficient, and transformative. Every project we undertake is driven by our commitment to delivering excellence and creating lasting value for our clients.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <img src={aboutTeam} alt="Our team" className="rounded-xl shadow-xl w-full" loading="lazy" width={800} height={600} />
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <h2 className="text-3xl font-heading font-bold mb-6">Who <span className="text-primary">We Are</span></h2>
            <p className="text-muted-foreground leading-relaxed">
              Softcore Technologies is a team of talented professionals with deep expertise in software development, design, and digital marketing. Founded with a vision to deliver top-quality IT services, we have grown into a trusted partner for businesses seeking reliable and innovative digital solutions. Our team brings together creativity and technical excellence to tackle complex challenges.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <AnimateOnScroll direction="left">
            <div className="bg-card rounded-xl p-8 border border-border shadow-md h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide cutting-edge technology solutions that help businesses optimize their operations, enhance customer experiences, and achieve sustainable growth. We are committed to quality, innovation, and client satisfaction in everything we do.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="bg-card rounded-xl p-8 border border-border shadow-md h-full">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized IT solutions provider known for transforming ideas into reality. We envision a future where every business, regardless of size, has access to world-class technology that drives success and innovation.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="top">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6">Our <span className="text-primary">Team</span></h2>
          </AnimateOnScroll>
          <AnimateOnScroll direction="bottom" delay={100}>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our team consists of skilled web developers, creative graphic designers, experienced mobile app developers, strategic digital marketers, and reliable IT support specialists. Each member brings unique strengths and perspectives, allowing us to deliver comprehensive solutions that exceed client expectations. We foster a culture of continuous learning, collaboration, and innovation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground">Get in Touch</h2>
            <p className="mt-4 text-hero-muted max-w-lg mx-auto">Ready to start your next project? We'd love to hear from you.</p>
            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="text-base px-8">Get in Touch</Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default About;
