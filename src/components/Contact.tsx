import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MessageCircle, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { personal } from '../data/personal';
import { socials } from '../data/socials';

/**
 * Contact Component — Multiple contact methods + optional form
 * 
 * Provides several ways to get in touch:
 * - Email (mailto: link)
 * - Google Meet (calendar link)
 * - Phone (tel: link)
 * - WhatsApp (wa.me link)
 * - Social media icons
 * - Optional contact form with placeholder handler
 * 
 * WHY multiple methods?
 * - Different people prefer different communication channels
 * - Reducing friction = more contacts
 * - The form captures those who want to leave a quick message
 * 
 * The section uses a slightly different background shade to
 * visually distinguish it as an "action" area.
 */

// Map social names to lucide icons
const socialIcons: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Twitter: <Twitter size={20} />,
  Instagram: <Instagram size={20} />,
};

export default function Contact() {
  // Form state (optional contact form)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder handler — replace with actual form submission logic
    // (e.g., EmailJS, Formspree, or a serverless function)
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! This is a placeholder — connect a real form handler.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Contact method definitions — each becomes a clickable card
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email Me',
      description: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <Calendar size={24} />,
      label: 'Schedule a Meet',
      description: 'Book a Google Meet',
      href: personal.calendarLink,
    },
    {
      icon: <Phone size={24} />,
      label: 'Call Me',
      description: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      description: 'Send a message',
      href: `https://wa.me/${personal.whatsapp}`,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-base-dark/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-heading text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body/60 text-center mb-16 max-w-2xl mx-auto"
        >
          Have a project in mind, a question, or just want to say hi? Reach out through any of these channels.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Methods */}
          <div className="space-y-6">
            {/* Contact Method Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-base-light/50 border border-secondary/30 rounded-2xl hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  aria-label={method.label}
                >
                  <div className="p-3 bg-heading/15 rounded-xl text-heading">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-body font-bold text-sm">{method.label}</p>
                    <p className="text-body/50 text-xs">{method.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-base-light/50 border border-secondary/30 rounded-2xl"
            >
              <h3 className="text-heading font-bold text-lg mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary/20 hover:bg-secondary/40 rounded-xl text-body transition-all duration-200 hover:scale-110"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {socialIcons[social.icon]}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 bg-base-light/50 border border-secondary/30 rounded-2xl space-y-4"
            >
              <h3 className="text-heading font-bold text-lg mb-2">Send a Message</h3>

              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="block text-body/70 text-sm font-bold mb-1">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-base border border-secondary/40 rounded-xl text-body text-sm focus:outline-none focus:ring-2 focus:ring-heading/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="block text-body/70 text-sm font-bold mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-base border border-secondary/40 rounded-xl text-body text-sm focus:outline-none focus:ring-2 focus:ring-heading/50 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="block text-body/70 text-sm font-bold mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-base border border-secondary/40 rounded-xl text-body text-sm focus:outline-none focus:ring-2 focus:ring-heading/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-heading hover:bg-heading-dark text-base-light rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] shadow-md cursor-pointer"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
