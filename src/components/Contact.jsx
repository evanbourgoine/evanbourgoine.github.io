import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically connect to a backend or email service
    console.log('Form submitted:', formData);
    setFormStatus('success');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    // In a real app, you would handle errors as well
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out to me through the form or via the following channels:</p>
          <ul>
            <li>Email: your.email@example.com</li>
            <li>Location: City, Country</li>
          </ul>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {formStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;