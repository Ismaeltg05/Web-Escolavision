import React, { useState } from 'react';
import styles from "./Contact.module.css";
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false); // Para mostrar el estado de envío

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Utiliza tus credenciales de EmailJS aquí
    emailjs.send(
      'service_h5l5t9i', // Tu ID de servicio
      'template_8olwxbr', // Tu ID de plantilla
      formData,
      'UKPs1uOZ3DXeTLxEV' // Tu ID de usuario
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

        <button type="submit" disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
