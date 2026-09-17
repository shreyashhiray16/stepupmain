import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Building, CheckCircle2 } from 'lucide-react';
import { saveQuery } from '../data/contentStore';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = ['Transformer Repair & Maintenance', 'Oil Filtration & Testing', 'Transformer Sales / Emergency Supply', 'OLTC Services', 'Switchgear & Panel Services', 'Earthing & Cabling', 'Wiring & Compliance', 'Other'];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    saveQuery(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const inputCls = (field: string) => `w-full px-4 py-3 bg-white border ${errors[field] ? 'border-primary' : 'border-white/20'} rounded-lg text-dark text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4">
        <CheckCircle2 size={48} className="text-primary mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Quote Request Sent</h3>
        <p className="text-white/70 text-sm max-w-sm mb-6">
          Thanks for reaching out! Our team has received your details and will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white font-medium rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-white mb-2"><User size={14} className="text-primary" /> Name <span className="text-primary">*</span></label>
          <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={inputCls('name')} placeholder="Your full name" />
          {errors.name && <p className="text-primary text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-white mb-2"><Phone size={14} className="text-primary" /> Phone <span className="text-primary">*</span></label>
          <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className={inputCls('phone')} placeholder="+91 XXXXX XXXXX" />
          {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-white mb-2"><Mail size={14} className="text-primary" /> Email</label>
          <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputCls('email')} placeholder="your@email.com" />
          {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium text-white mb-2"><Building size={14} className="text-primary" /> Company</label>
          <input type="text" id="company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className={inputCls('company')} placeholder="Company name" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="flex items-center gap-2 text-sm font-medium text-white mb-2">Service Required</label>
        <select id="service" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className={inputCls('service')}>
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-white mb-2"><MessageSquare size={14} className="text-primary" /> Message <span className="text-primary">*</span></label>
        <textarea id="message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={inputCls('message')} placeholder="Describe your requirements..." />
        {errors.message && <p className="text-primary text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
        <Send size={18} /> Send Quote Request
      </button>
    </form>
  );
}
