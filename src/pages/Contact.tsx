import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_h5l5t9i',
      'template_8olwxbr',
      formData,
      'UKPs1uOZ3DXeTLxEV'
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response);
        alert('Mensaje enviado correctamente.');
        setIsSending(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        setIsSending(false);
      }
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;