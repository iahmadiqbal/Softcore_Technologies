import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import hero1 from "@/assets/hero-1.jpg";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add document to Firestore 'contacts' collection
      await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        timestamp: serverTimestamp(),
        status: "new", // You can use this to track message status
      });

      toast({
        title: "✅ Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "❌ Error",
        description:
          "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: "#5A2D82" }}
      >
        <img
          src={hero1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white animate-from-top">
            Get in <span style={{ color: "#F4B400" }}>Touch</span>
          </h1>
          <p
            className="mt-4 text-white/90 max-w-2xl mx-auto animate-from-bottom"
            style={{ animationDelay: "200ms" }}
          >
            Have a project in mind? Let's discuss how we can help you.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <AnimateOnScroll direction="left">
            <div className="bg-card rounded-xl p-8 border border-border shadow-md">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      // Only allow numbers, spaces, +, -, and ()
                      const value = e.target.value.replace(/[^\d\s+()-]/g, "");
                      setForm({ ...form, phone: value });
                    }}
                    placeholder="+1 (403) 477-7967"
                    pattern="[\d\s+()-]+"
                    minLength={10}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderLeftColor: "#5A2D82" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#5A2D82" }}
                  >
                    <Phone className="w-6 h-6" style={{ color: "#F4B400" }} />
                  </div>
                  <div>
                    <h3
                      className="font-heading font-semibold text-lg"
                      style={{ color: "#5A2D82" }}
                    >
                      Phone Number
                    </h3>
                    <p className="text-gray-600 mt-1">+1 403-477-7967</p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderLeftColor: "#5A2D82" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#5A2D82" }}
                  >
                    <Mail className="w-6 h-6" style={{ color: "#F4B400" }} />
                  </div>
                  <div>
                    <h3
                      className="font-heading font-semibold text-lg"
                      style={{ color: "#5A2D82" }}
                    >
                      Email Address
                    </h3>
                    <p className="text-gray-600 mt-1">
                      info@softcoretechnologies.com
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderLeftColor: "#5A2D82" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#5A2D82" }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: "#F4B400" }} />
                  </div>
                  <div>
                    <h3
                      className="font-heading font-semibold text-lg"
                      style={{ color: "#5A2D82" }}
                    >
                      Calgary Office
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Suite 200 - 1212 - 1st SE, Calgary AB T2G 2H8
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderLeftColor: "#5A2D82" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#5A2D82" }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: "#F4B400" }} />
                  </div>
                  <div>
                    <h3
                      className="font-heading font-semibold text-lg"
                      style={{ color: "#5A2D82" }}
                    >
                      Edson Office
                    </h3>
                    <p className="text-gray-600 mt-1">
                      4629 3rd Avenue Edson, Alberta T7E 1C2, Canada
                    </p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.8!2d-114.0719!3d51.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f7c07d6b7e5%3A0x1!2s1212%201%20St%20SE%2C%20Calgary%2C%20AB%20T2G%202H8!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Calgary Office - Suite 200, 1212 1st SE, Calgary AB T2G 2H8"
            />
          </div>
        </AnimateOnScroll>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#5A2D82" }}>
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="scale">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Need immediate assistance?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <a href="tel:+14034777967">
                <Button
                  size="lg"
                  className="text-base gap-2"
                  style={{ backgroundColor: "#F4B400", color: "#5A2D82" }}
                >
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
              </a>
              <a href="mailto:info@softcoretechnologies.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base gap-2 bg-white text-gray-800 border-white hover:bg-gray-100"
                >
                  <Mail className="w-4 h-4" /> Email Us
                </Button>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Contact;
