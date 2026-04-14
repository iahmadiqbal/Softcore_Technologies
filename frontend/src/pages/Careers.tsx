import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Briefcase, Clock, TrendingUp, Users, Lightbulb, Star, ArrowDown } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const positions = [
  {
    category: "Web Developer Openings",
    jobs: [
      {
        title: "Web Developer",
        type: "Full-Time",
        desc: "We are looking for a skilled Web Developer to join our team. You will be responsible for building and maintaining modern web applications using React, Node.js, and related technologies. The ideal candidate has experience with responsive design, REST APIs, and a passion for clean, efficient code.",
      },
      {
        title: "Web Developer",
        type: "Internship / Part-Time",
        desc: "An exciting opportunity for aspiring developers to gain real-world experience. You'll work alongside senior developers, contribute to live projects, learn modern development practices, and build your portfolio with meaningful work that makes an impact.",
      },
    ],
  },
  {
    category: "Graphic Designer Openings",
    jobs: [
      {
        title: "Graphic Designer",
        type: "Full-Time",
        desc: "We're seeking a creative Graphic Designer with expertise in branding, UI/UX design, and marketing materials. You'll collaborate with our team to create visually compelling designs that effectively communicate our clients' messages and enhance their brand identity.",
      },
      {
        title: "Graphic Designer",
        type: "Internship",
        desc: "Join our creative team as a design intern and develop your skills in a professional environment. You'll assist with branding projects, social media graphics, and UI design while learning industry-standard tools and workflows from experienced designers.",
      },
      {
        title: "Junior Graphic Designer",
        type: "Full-Time",
        desc: "A great entry-level position for designers looking to grow. You'll handle day-to-day design tasks including social media content, presentations, and basic branding work. Strong skills in Adobe Creative Suite and an eye for detail are essential.",
      },
    ],
  },
];

const whyJoin = [
  { icon: TrendingUp, title: "Growth Opportunities" },
  { icon: Users, title: "Collaborative Environment" },
  { icon: Star, title: "Real Projects Experience" },
  { icon: Lightbulb, title: "Skill Development" },
];

const Careers = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero py-24 md:py-32 overflow-hidden">
        <img src={hero2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/80 to-hero/40" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground animate-from-top">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="mt-4 text-hero-muted max-w-2xl mx-auto animate-from-bottom" style={{ animationDelay: "200ms" }}>
            Build your career with a team focused on innovation, growth, and real-world impact.
          </p>
          <a href="#openings" className="inline-block mt-6 animate-from-bottom" style={{ animationDelay: "400ms" }}>
            <Button size="lg" className="text-base px-8 gap-2">View Openings <ArrowDown className="w-4 h-4" /></Button>
          </a>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {positions.map((cat, ci) => (
            <div key={cat.category} className="mb-16 last:mb-0">
              <AnimateOnScroll direction="top">
                <h2 className="text-2xl font-heading font-bold mb-8">{cat.category}</h2>
              </AnimateOnScroll>
              <div className="grid gap-6">
                {cat.jobs.map((job, ji) => (
                  <AnimateOnScroll key={`${ci}-${ji}`} direction={ji % 2 === 0 ? "left" : "right"} delay={ji * 100}>
                    <div className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-primary" />
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
          ))}
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
                  <h3 className="font-heading font-semibold">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground">Didn't find a suitable role?</h2>
            <p className="mt-4 text-hero-muted max-w-lg mx-auto">Send us your profile and we'll get in touch when the right opportunity arises.</p>
            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="text-base px-8">Submit Your Profile</Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Careers;
