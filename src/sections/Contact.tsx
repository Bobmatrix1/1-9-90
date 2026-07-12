import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, MessageCircle, Facebook, Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "13B Abiodun Onanuga Street, Igbeba, Ijebu Ode, Ogun State, Nigeria",
    href: "https://www.google.com/maps/place/6.8208,3.9208/@6.8208,3.9208,17z",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "08096580183",
    href: "tel:+2348096580183",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "08067540693",
    href: "https://wa.me/2348067540693",
  },
  {
    icon: Mail,
    label: "Email",
    value: "keystoneng@gmail.com",
    href: "mailto:keystoneng@gmail.com",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Keystone Mercantile",
    href: "https://www.facebook.com/share/1BEtr4ffUj/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Keystone Mercantile",
    href: "https://ng.linkedin.com/in/keystone-mercantile-90158624&sa=U&ved=2ahUKEwi5xtvQtM2VAxVhXkEAHUA0Fk8QFnoECAwQAg&usg=AOvVaw1wljNhHFCElEY81p7Tc51Y",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left", {
        x: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".contact-right", {
        x: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const messageText = `Hello Keystone Mercantile,

I would like to make an inquiry. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interested Product: ${formData.product || "General Inquiry"}

Message:
${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/2348067540693?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-[100px] bg-cream"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="contact-left w-full lg:w-1/2">
            <p className="text-gold text-xs font-medium tracking-[0.12em] uppercase mb-3">
              Get in Touch
            </p>
            <h2
              className="font-display font-bold text-forest leading-[1.1] tracking-[-0.01em] mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Let&apos;s Start a Conversation
            </h2>

            {/* Contact Details */}
            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-forest/60 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-forest text-sm hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-forest text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1BEtr4ffUj/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://ng.linkedin.com/in/keystone-mercantile-90158624&sa=U&ved=2ahUKEwi5xtvQtM2VAxVhXkEAHUA0Fk8QFnoECAwQAg&usg=AOvVaw1wljNhHFCElEY81p7Tc51Y" },
                { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/2348067540693" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border-[1.5px] border-forest flex items-center justify-center text-forest hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-right w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-elevated p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={32} className="text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-forest text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sage text-sm">
                    We&apos;ll get back to you shortly via WhatsApp or email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-forest text-xs font-medium uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-mist rounded-lg px-4 py-3 text-forest text-sm focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-gold/15 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-forest text-xs font-medium uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-mist rounded-lg px-4 py-3 text-forest text-sm focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-gold/15 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-forest text-xs font-medium uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-mist rounded-lg px-4 py-3 text-forest text-sm focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-gold/15 transition-all"
                        placeholder="+234..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-forest text-xs font-medium uppercase tracking-wider mb-1.5">
                      Product Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full border border-mist rounded-lg px-4 py-3 text-forest text-sm focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-gold/15 transition-all appearance-none bg-white"
                    >
                      <option value="">Select a product</option>
                      <option value="cashew">Raw Cashew Nuts</option>
                      <option value="kernels">Cashew Kernels</option>
                      <option value="cocoa">Cocoa Beans</option>
                      <option value="honey">Natural Honey</option>
                      <option value="spices">Premium Spices</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-forest text-xs font-medium uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-mist rounded-lg px-4 py-3 text-forest text-sm focus:outline-none focus:border-gold focus:ring-[3px] focus:ring-gold/15 transition-all resize-y"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-deep-earth transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
