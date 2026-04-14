import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import hero1 from "@/assets/hero-1.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero py-24 md:py-32 overflow-hidden">
        <img src={hero1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/80 to-hero/40" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground animate-from-top">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="mt-4 text-hero-muted max-w-2xl mx-auto animate-from-bottom" style={{ animationDelay: "200ms" }}>
            Have a project in mind? Let's discuss how we can help you.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <AnimateOnScroll direction="left">
            <div className="bg-card rounded-xl p-8 border border-border shadow-md">
              <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email Address</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone Number</label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="403-836-3512" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full text-base">Send Message</Button>
              </form>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Phone Number</h3>
                    <p className="text-muted-foreground text-sm mt-1">403-836-3512</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Email Address</h3>
                    <p className="text-muted-foreground text-sm mt-1">info@softcoretechnologies.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Office Location</h3>
                    <p className="text-muted-foreground text-sm mt-1">Softcore Technologies, Main Office</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-section-alt">
        <AnimateOnScroll direction="bottom">
          <div className="h-[400px] w-full bg-muted flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0!2d67.0!3d24.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzAwLjAiTiA2N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
            />
          </div>
        </AnimateOnScroll>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="scale">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-hero-foreground">Need immediate assistance?</h2>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <a href="tel:4038363512">
                <Button size="lg" className="text-base gap-2"><Phone className="w-4 h-4" /> Call Now</Button>
              </a>
              <a href="mailto:info@softcoretechnologies.com">
                <Button size="lg" variant="outline" className="text-base gap-2 bg-white text-gray-800 border-white hover:bg-gray-100"><Mail className="w-4 h-4" /> Email Us</Button>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Contact;
