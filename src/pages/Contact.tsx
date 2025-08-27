import React from 'react';
import { motion } from 'framer-motion';
import { FloatingParticle } from '../components/FloatingElements';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ ok: false, msg: 'Email service not configured.' });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // Match your EmailJS template variables
          name: name,
          email: email,
          title: subject,
          message: message,
        },
        PUBLIC_KEY
      );
      setStatus({ ok: true, msg: 'Message sent successfully!' });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setStatus({ ok: false, msg: 'Failed to send message. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative">
      {/* Add floating elements for visual appeal */}
      <FloatingParticle
        size={5}
        position={{ top: '15%', left: '10%' }}
        color="rgba(99, 102, 241, 0.6)"
        duration={8}
      />
      <FloatingParticle
        size={4}
        position={{ bottom: '15%', right: '10%' }}
        color="rgba(52, 211, 153, 0.7)"
        delay={1}
        duration={7}
      />
      
      <div className="container mx-auto px-6 pt-8 md:pt-16 pb-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-secondary/10 to-accent/10 px-8 py-3 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in <span className="gradient-text">Touch</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'd love to hear from you! Connect with me for collaborations, opportunities, or just to say hello.
          </motion.p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact information */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray mb-6">
                Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects, ideas, or opportunities.
              </p>
            </div>
            
            {/* Contact methods */}
            <div className="space-y-6">
              {[
                { 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ), 
                  title: "Email", 
                  value: "sameermajety0@gmail.com",
                  link: "mailto:sameermajety0@gmail.com"
                },
                { 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ), 
                  title: "Phone", 
                  value: "+91 7013043878",
                  link: "tel:+917013043878"
                },
                { 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ), 
                  title: "Location", 
                  value: "Kakinada, 533001, India",
                  link: "#"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="flex items-start gap-4 p-4 card hover:shadow-glow transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="rounded-full p-3 bg-dark border border-light/10 text-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-gray">{item.title}</h4>
                    <p className="font-medium group-hover:text-secondary transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Connect on social media</h4>
              <div className="flex gap-4">
                {[
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    link: "https://www.linkedin.com/in/sameer-majety-a9a81221a/"
                  },
                  
                  { 
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                      </svg>
                    ),
                    link: "https://www.instagram.com/theonlysameermajety/"
                  }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="w-10 h-10 rounded-full bg-dark border border-light/10 flex items-center justify-center text-light/80 hover:text-secondary hover:border-secondary transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ y: -3 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="card p-6 border border-light/10" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="form-input w-full bg-dark border border-light/10 rounded-lg p-3 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="form-input w-full bg-dark border border-light/10 rounded-lg p-3 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="form-input w-full bg-dark border border-light/10 rounded-lg p-3 focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Message subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </motion.div>
              
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  className="form-textarea w-full bg-dark border border-light/10 rounded-lg p-3 focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </motion.div>
              
              {status && (
                <div className={`mb-4 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</div>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                className={`w-full inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all ${sending ? 'bg-secondary cursor-not-allowed opacity-90' : 'bg-gradient-to-r from-accent via-secondary to-accent hover:shadow-accent/30'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={!sending ? { scale: 1.02 } : undefined}
                whileTap={!sending ? { scale: 0.98 } : undefined}
              >
                {sending ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 