import React, { useState } from 'react';
import '../styles/Contact.css';  // Make sure to import the new CSS file

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage('All fields are required');
    } else {
      setErrorMessage('');
      // Handle form submission (e.g., send data to the server)
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Message"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default Contact;