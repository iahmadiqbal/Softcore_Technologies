import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Briefcase, Clock, TrendingUp, Users, Lightbulb, Star, ArrowDown, Globe, Server, Palette, Coffee } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const positions = [
  {
    title: "Node.js Developer",
    type: "Full-Time",
    icon: Server,
    desc: "Join our backend team as a Node.js Developer. You'll design and implement scalable server-side applications, build RESTful APIs, and work with databases like MongoDB and PostgreSQL. Strong knowledge of Express.js, asynchronous programming, and microservices architecture is required.",
  },
  {
    title: "Graphic Designer",
    type: "Full-Time",
    icon: Palette,
    desc: "We're seeking a talented Graphic Designer to create stunning visual content for web and print. You'll design brand identities, marketing materials, social media graphics, and UI elements. Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign), strong typography skills, and a portfolio showcasing creative work are required.",
  },
  {
    title: "Junior Java Developer",
    type: "Full-Time",
    icon: Coffee,
    desc: "An excellent opportunity for Java developers starting their career. You'll work on enterprise applications, learn Spring Boot framework, participate in code reviews, and contribute to building robust backend systems. Basic understanding of OOP, SQL, and version control is essential.",
  },
];

const whyJoin = [
  { 
    icon: TrendingUp, 
    title: "Growth Opportunities",
    desc: "Advance your career with continuous learning, mentorship programs, and clear promotion paths."
  },
  { 
    icon: Users, 
    title: "Collaborative Environment",
    desc: "Work with talented professionals in a supportive team culture that values your ideas and contributions."
  },
  { 
    icon: Star, 
    title: "Real Projects Experience",
    desc: "Gain hands-on experience working on live client projects that make a real impact in the industry."
  },
  { 
    icon: Lightbulb, 
    title: "Skill Development",
    desc: "Access to training resources, workshops, and the latest technologies to enhance your expertise."
  },
];

const Careers = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#5A2D82' }}>
        <img src={aboutTeam} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white animate-from-top">
            Join Our <span style={{ color: '#F4B400' }}>Team</span>
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto animate-from-bottom" style={{ animationDelay: "200ms" }}>
            Build your career with a team focused on innovation, growth, and real-world impact.
          </p>
          <a href="#openings" className="inline-block mt-6 animate-from-bottom" style={{ animationDelay: "400ms" }}>
            <Button size="lg" className="text-base px-8 gap-2" style={{ backgroundColor: '#F4B400', color: '#5A2D82' }}>View Openings <ArrowDown className="w-4 h-4" /></Button>
          </a>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="top">
            <h2 className="text-2xl font-heading font-bold mb-8">Current Openings</h2>
          </AnimateOnScroll>
          <div className="grid gap-6">
            {positions.map((job, ji) => (
              <AnimateOnScroll key={ji} direction={ji % 2 === 0 ? "left" : "right"} delay={ji * 100}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <job.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button size="sm">Join Us</Button>
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{job.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="top">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Why <span className="text-primary">Join Us</span></h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoin.map((item, i) => (
              <AnimateOnScroll key={item.title} direction="bottom" delay={i * 100}>
                <div className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#5A2D82' }}>
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="scale">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Didn't find a suitable role?</h2>
            <p className="mt-4 text-white/90 max-w-lg mx-auto">Send us your profile and we'll get in touch when the right opportunity arises.</p>
            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="text-base px-8" style={{ backgroundColor: '#F4B400', color: '#5A2D82' }}>Submit Your Profile</Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Careers;
