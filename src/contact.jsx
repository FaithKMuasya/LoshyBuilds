import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      "service_a6z8016", 
      "template_6nd71g3", 
      form.current,
      "5lXh6WIppOhguzgIY"        
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Ready to work together? I'd love to hear about your project or discuss opportunities.
      </p>

      <div className="contact-content">
        {/* Left side info */}
        <div className="contact-left">
          <h3>Let's Start a Conversation</h3>
          <p>
            Whether you're looking for a dedicated team member or need a reliable developer for your next
            project, I'm here to help bring your ideas to life.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <MdEmail className="info-icon" />
              <span>loshyfaith@gmail.com</span>
            </div>
            <div className="info-item">
              <MdLocationOn className="info-icon" />
              <span>Available for remote work</span>
            </div>
            <div className="info-item">
              <MdAccessTime className="info-icon" />
              <span>Usually within 24 hours</span>
            </div>
          </div>

          <div className="availability-card">
            <h4>Available For:</h4>
            <ul>
              <li> Full-time opportunities</li>
              <li> Freelance projects</li>
              <li> Contract work</li>
              <li> Collaboration opportunities</li>
            </ul>
          </div>
        </div>

        {/* Right side form */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h3>Send Me a Message</h3>
            <p>Fill out the form below and I'll get back to you soon.</p>

            <div className="form-row">
              <input type="text" name="from_name" placeholder="Name" required />
              <input type="email" name="from_email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="send-btn full-width">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
