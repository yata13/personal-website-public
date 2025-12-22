import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNum: '',
    subject: '',
    message: '',
    website: '' // honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; 

    setLoading(true);
    const API_BASE = 'https://personal-website-yvbf.onrender.com';
    
    try {
      const res = await fetch(`${API_BASE}/api/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Success! Your message has reached my inbox. ✅');
        setFormData({ name: '', email: '', phoneNum: '', subject: '', message: '', website: '' });
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to send message.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const infoItems = [
    { 
      icon: <Phone size={20} />, 
      label: 'Voice', 
      value: '+251 929 260 629',
      href: 'tel:+251929260629'
    },
    { 
      icon: <Mail size={20} />, 
      label: 'Digital', 
      value: 'tesfahunyared108@gmail.com',
      href: 'mailto:tesfahunyared108@gmail.com'
    },
    { 
      icon: <MapPin size={20} />, 
      label: 'Base', 
      value: 'Addis Ababa, Ethiopia',
      href: 'https://maps.google.com/?q=Addis+Ababa,+Ethiopia'
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-[10%] bg-obsidian relative">
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Contact Context */}
          <div className="w-full lg:w-2/5">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Connection</span>
            <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-10 leading-[0.9] tracking-tighter">
              START A <br /> <span className="text-accent">PROJECT.</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light">
              Have a challenge that needs a custom architectural solution? Drop me a line and let's craft something exceptional.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {infoItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  target={item.label === 'Base' ? '_blank' : undefined}
                  rel={item.label === 'Base' ? 'noopener noreferrer' : undefined}
                  className="bento-card p-6 flex items-center gap-6 group hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-obsidian flex items-center justify-center text-accent border border-white/5 group-hover:bg-accent group-hover:text-obsidian transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-muted font-black mb-1">{item.label}</h4>
                    <p className="text-lg font-bold text-white group-hover:text-accent transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Bento Form */}
          <div className="w-full lg:w-3/5 bento-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-obsidian-soft border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-2">Email</label>
                   <input 
                    type="email" 
                    name="email" 
                    placeholder="hello@world.com" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-obsidian-soft border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phoneNum" 
                    placeholder="+251 ..." 
                    value={formData.phoneNum}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-obsidian-soft border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-2">Objective</label>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Project Inquiry" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-obsidian-soft border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-2">Brief</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  placeholder="Tell me about your vision in detail..." 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-obsidian-soft border border-white/10 rounded-2xl text-white focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-all placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>

              <input 
                type="text" 
                name="website" 
                tabIndex={-1} 
                autoComplete="off" 
                className="hidden" 
                value={formData.website}
                onChange={handleChange}
              />

              <button 
                type="submit" 
                disabled={loading}
                className="group w-full py-6 bg-accent text-obsidian font-black text-xl rounded-2xl shadow-2xl shadow-accent/20 hover:bg-white hover:shadow-white/10 transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-4"
              >
                {loading ? 'Transmitting...' : 'Send Message'} 
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;