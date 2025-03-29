import { Box, Grid, Container, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_nusupdn";
    const templateID = "template_2pf3he8";
    const userID = "oX63ehR5w8TJX1r0k";

    const templateParams = { name: formData.name, email: formData.email, message: formData.message };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      toast.success("Message sent successfully!", { position: "top-left", autoClose: 2000 });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Try again!", { position: "top-left", autoClose: 2000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer  id="footer" sx={styles.footer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Container>
        <Grid sx={styles.contactContainer}>
        <Box sx={styles.contactInfo}>
  <Heading as="h3">Get in Touch with Earn & Secure</Heading>
  <Text>
    We value your interest and are here to assist you. Please feel free to contact us.
  </Text>

  <ul style={{ listStyleType: "none", padding: 0 }}>
  <li style={{ marginBottom: "10px" }}>
      <strong>📢 Telegram: </strong>
      <a
        href="https://t.me/LinkedIn_99"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://t.me/LinkedIn_99
      </a>
    </li>

    <li style={{ marginBottom: "10px" }}>
      <strong>📱 WhatsApp: </strong>
      <a
        href="https://wa.me/85259249497"
        target="_blank"
        rel="noopener noreferrer"
      >
        +85259249497
      </a>
    </li>

    <li>
      <strong>📧 Email: </strong>
      <a
        href="mailto:mastersderonnzshdauc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        mastersderonnzshdauc@gmail.com
      </a>
    </li>
  </ul>
</Box>



          <motion.Box sx={styles.contactForm} initial={{ x: 50 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 120 }}>
            <Heading as="h3">Send Us a Message</Heading>
            <Text>Have any questions or feedback? Fill out the form below, and we’ll get back to you as soon as possible.</Text>
            <form onSubmit={handleSubmit} style={styles.contactForm.form}>
              <motion.input whileFocus={{ scale: 1.05 }} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required style={styles.contactForm.input} />
              <motion.input whileFocus={{ scale: 1.05 }} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required style={styles.contactForm.input} />
              <motion.textarea whileFocus={{ scale: 1.05 }} name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required style={styles.contactForm.textarea}></motion.textarea>
              <motion.button whileHover={{ scale: 1.1 }} type="submit" disabled={isSubmitting} style={styles.contactForm.button}>{isSubmitting ? "Sending..." : "Send Message"}</motion.button>
            </form>
            <ToastContainer />
          </motion.Box>
        </Grid>
        <Box sx={styles.footerBottom}>
          <Text>&copy; {new Date().getFullYear()} Earn & Secure. All Rights Reserved.</Text>
        </Box>
      </Container>
    </motion.footer>
  );
}

const styles = {
  footer: {
    padding: '60px 0',
    background: '#222',
    color: '#fff',
    textAlign: 'center',
  },
  contactContainer: {
    display: 'grid',
    gridTemplateColumns: ['1fr', '1fr 1fr'],
    gap: '40px',
    alignItems: 'center',
  },
  contactInfo: {
    textAlign: 'left',
  },
  contactForm: {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      transition: '0.3s',
    },
    textarea: {
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      minHeight: '120px',
      transition: '0.3s',
    },
    button: {
      padding: '12px 25px',
      background: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '0.3s',
      fontWeight: 'bold',
      ':hover': {
        background: '#0056b3',
      },
    },
  },
  footerBottom: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '14px',
    opacity: 0.8,
  },
};
