
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

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

  return (
    <section id="contact" className="py-24 px-6 md:px-[10%] relative">
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Contact <span className="gradient-text">Me!</span></h2>
          <div className="w-24 h-2 bg-main-gradient mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Card */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <h3 className="text-2xl font-bold mb-4">Let's discuss your next project.</h3>
            {[
              { icon: <Phone size={24} />, label: 'Call Me', value: '+251 929260629' },
              { icon: <Mail size={24} />, label: 'Email Me', value: 'tesfahunyared108@gmail.com' },
              { icon: <MapPin size={24} />, label: 'Location', value: 'Addis Ababa, Ethiopia' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 glass-card rounded-[32px] flex items-center gap-6 border-l-[6px] border-primary hover:translate-x-2 transition-transform shadow-lg">
                <div className="p-4 bg-main-gradient text-white rounded-2xl shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">{item.label}</h4>
                  <p className="text-lg font-bold text-slate-800 dark:text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 glass-card p-10 md:p-14 rounded-[40px] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Email</label>
                   <input 
                    type="email" 
                    name="email" 
                    placeholder="hello@world.com" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phoneNum" 
                    placeholder="+251 ..." 
                    value={formData.phoneNum}
                    onChange={handleChange}
                    className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Project Inquiry" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">Message</label>
                <textarea 
                  name="message" 
                  cols={30} 
                  rows={5} 
                  placeholder="Tell me about your vision..." 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400 resize-none"
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
                className="w-full py-6 bg-main-gradient text-white font-black text-xl rounded-3xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-4"
              >
                {loading ? 'Sending Brilliance...' : 'Shoot Message'} <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
