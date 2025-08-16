import React, { useState } from 'react';
import Button from './ui/Button';
import { SendIcon } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  return <section id="contact" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
    darkMode ? 'bg-gray-900' : 'bg-[#567C8D]'
  }`}>
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-[radial-gradient(circle_at_center,rgba(47,65,86,0.1),transparent_70%)]' 
          : 'bg-[radial-gradient(circle_at_center,rgba(47,65,86,0.3),transparent_70%)]'
      }`}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            Get In <span className="text-[#C8D9E6]">Touch</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-white/90'
          }`}>
            Let's collaborate and create something amazing together
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-white/90'
                }`}>
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8D9E6] focus:border-[#C8D9E6] transition-all ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white/20 border-white/30 text-white placeholder-white/60'
                }`} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-white/90'
                }`}>
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8D9E6] focus:border-[#C8D9E6] transition-all ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white/20 border-white/30 text-white placeholder-white/60'
                }`} placeholder="shemaiah@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-white/90'
              }`}>
                Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8D9E6] focus:border-[#C8D9E6] transition-all ${
                darkMode 
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white/20 border-white/30 text-white placeholder-white/60'
              }`} placeholder="Tell me about your project..." />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="px-8 py-3 bg-[#2F4156] text-white hover:bg-[#2F4156]/90" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span> : formStatus === 'success' ? <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Sent!
                  </span> : <span className="flex items-center">
                    Send Message
                    <SendIcon size={16} className="ml-2" />
                  </span>}
              </Button>
            </div>
            {formStatus === 'error' && <p className="text-red-500 text-center mt-4">
                Something went wrong. Please try again.
              </p>}
          </form>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className={`p-6 rounded-lg border ${
              darkMode ? 'bg-gray-800/50 border-gray-600' : 'bg-white/10 border-white/20'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                darkMode ? 'bg-gray-700' : 'bg-white/20'
              }`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className={`text-lg font-medium mb-2 ${
                darkMode ? 'text-white' : 'text-white'
              }`}>Email</h3>
              <p className={`${
                darkMode ? 'text-gray-400' : 'text-white/80'
              }`}>shemaiahdavid2004@gmail.com</p>
            </div>
            <div className={`p-6 rounded-lg border ${
              darkMode ? 'bg-gray-800/50 border-gray-600' : 'bg-white/10 border-white/20'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                darkMode ? 'bg-gray-700' : 'bg-white/20'
              }`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className={`text-lg font-medium mb-2 ${
                darkMode ? 'text-white' : 'text-white'
              }`}>Phone</h3>
              <p className={`${
                darkMode ? 'text-gray-400' : 'text-white/80'
              }`}>+94 74 223 2713</p>
            </div>
            <div className={`p-6 rounded-lg border ${
              darkMode ? 'bg-gray-800/50 border-gray-600' : 'bg-white/10 border-white/20'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                darkMode ? 'bg-gray-700' : 'bg-white/20'
              }`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className={`text-lg font-medium mb-2 ${
                darkMode ? 'text-white' : 'text-white'
              }`}>Location</h3>
              <p className={`${
                darkMode ? 'text-gray-400' : 'text-white/80'
              }`}>Dehiwala, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;