'use client';

import { Mail, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCardVisible(true), 200);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (cardRef.current) cardObserver.observe(cardRef.current);

    return () => {
      headerObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto URL with form data
    const subject = `Portfolio Contact: ${formData.fullName}`;
    const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:untara337@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id='contact' className='py-16 scroll-mt-16 bg-white relative'>
      {/* Simple divider */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-3xl font-semibold mb-4 text-red-600'>
            Get In Touch
          </h2>
          <p className='text-base text-gray-600 max-w-2xl mx-auto mb-6'>
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          {/* Card Container */}
          <div
            ref={cardRef}
            className={`bg-white border border-red-200 rounded-lg shadow-sm overflow-hidden transition-all duration-700 ease-out ${
              cardVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className='grid md:grid-cols-5 gap-0'>
              {/* Left Column - Contact Info */}
              <div className='md:col-span-2 p-6 bg-red-50 border-r border-red-100'>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 mb-4'>
                      Contact Information
                    </h3>
                    <div className='space-y-4'>
                      <div className='flex items-start gap-3'>
                        <Mail className='h-5 w-5 text-red-500 mt-0.5' />
                        <div>
                          <p className='text-gray-700'>untara337@gmail.com</p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <MapPin className='h-5 w-5 text-red-500 mt-0.5' />
                        <div>
                          <p className='text-gray-700'>Semarang, Indonesia</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className='text-sm text-gray-500'>
                    I'll get back to you as soon as possible
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className='md:col-span-3 p-6'>
                <form className='space-y-4' onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor='fullName'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500'
                      placeholder='Your name'
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500'
                      placeholder='your.email@example.com'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500'
                      placeholder='Your message here...'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type='submit'
                      className='w-full px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
