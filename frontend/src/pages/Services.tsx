import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import hero2 from "@/assets/hero-2.jpg";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    image: serviceWeb,
    desc: "We create stunning, high-performance websites and web applications tailored to your business needs. From responsive landing pages to complex enterprise platforms, our development team utilizes the latest frameworks and technologies including React, Node.js, and modern CMS solutions to deliver scalable, secure, and user-friendly web experiences that drive results.",
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    image: serviceDesign,
    desc: "Our creative team crafts visually compelling designs that communicate your brand's message effectively. We specialize in logo design, brand identity, marketing materials, social media graphics, and UI/UX design. Every design we create is thoughtfully crafted to resonate with your target audience and establish a strong brand presence.",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    image: serviceMobile,
    desc: "We build feature-rich, intuitive mobile applications for both iOS and Android platforms. Whether you need a native app or a cross-platform solution, our team delivers seamless user experiences with robust backend integration. From concept to deployment, we handle every aspect of mobile app development to ensure your app stands out.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    image: serviceMarketing,
    desc: "Boost your online visibility and drive targeted traffic with our comprehensive digital marketing services. We offer SEO optimization, social media marketing, content strategy, PPC campaigns, and analytics-driven approaches to help your business reach the right audience and maximize ROI across all digital channels.",
  },
  {
    id: "cloud-it",
    title: "Cloud & IT Support",
    image: serviceCloud,
    desc: "Ensure your business runs smoothly with our reliable cloud solutions and IT support services. We provide cloud migration, server management, network security, data backup, and 24/7 technical support. Our team helps you leverage cloud technology to improve efficiency, reduce costs, and scale your operations seamlessly.",
  },
];

const Services = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero py-24 md:py-32 overflow-hidden">
        <img src={hero2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/80 to-hero/40" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground animate-from-top">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mt-4 text-hero-muted max-w-2xl mx-auto animate-from-bottom" style={{ animationDelay: "200ms" }}>
            Delivering innovative and scalable digital solutions tailored to your business.
          </p>
          <Link to="/contact" className="inline-block mt-6 animate-from-bottom" style={{ animationDelay: "400ms" }}>
            <Button size="lg" className="text-base px-8">Get in Touch</Button>
          </Link>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`py-20 ${i % 2 === 0 ? "bg-background" : "bg-section-alt"}`}>
          <div className={`container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <AnimateOnScroll direction={i % 2 === 0 ? "left" : "right"}>
              <img
                src={s.image}
                alt={s.title}
                className={`rounded-xl shadow-xl w-full ${i % 2 !== 0 ? "md:order-2" : ""}`}
                loading="lazy"
                width={800}
                height={600}
              />
            </AnimateOnScroll>
            <AnimateOnScroll direction={i % 2 === 0 ? "right" : "left"} delay={100}>
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <h2 className="text-3xl font-heading font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/contact" className="inline-block mt-6">
                  <Button className="gap-2">Request Service <span>→</span></Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground">Need a customized solution for your business?</h2>
            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="text-base px-8">Get in Touch</Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Services;
