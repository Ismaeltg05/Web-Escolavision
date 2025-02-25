import React, { useState } from 'react';
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Nuevo mensaje de contacto');
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`
    );

    window.location.href = `mailto:info@escolavision.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;