import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage('All fields are required');
    } else {
      setErrorMessage('');
      // Handle form submission
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
        />
        <button type="submit">Submit</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </section>
  );
}

export default Contact;