import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactSection = () => {
  return (
    <section id="contact" className=" bg-gray-200 py-5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-8">Have any questions? Feel free to reach out to us!</p>
        <a
          href="akashchaursiya381@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mb-6 inline-block"
        >
          <i className="fas fa-envelope mr-2"></i>Email Us
        </a>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/unknown__sky_31/"
            className="text-gray-600 hover:text-gray-800"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            className="text-gray-600 hover:text-gray-800"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/akashchaursiya"
            className="text-gray-600 hover:text-gray-800"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
