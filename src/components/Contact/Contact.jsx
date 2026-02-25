import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2ge0u0i", "template_770jmqh", form.current, {
        publicKey: "sxb8Mx3iRMBe_OEXp",
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send the message, please try again.");
        }
      );
    e.target.reset();
  };
  return (
    <section id="Contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact">
          <div>
            <small>
              <MdEmail />
            </small>
            <p>Email</p>
            <p>firassrachid2000@gmail.com</p>
            <a href="mailto:firassrachid2000@gmail.com" target="_blank">
              Send Mesage
            </a>
          </div>

          <div>
            <small>
              <FaWhatsapp />
            </small>
            <p>WhatsApp</p>
            <p>
              <a href="tel:+963 937898507">+963 937898507</a>
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=963937898507"
              target="_blank"
            >
              Send Message
            </a>
          </div>
        </div>

        <form onSubmit={sendEmail} ref={form} className="send">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows={15}
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="send-butt" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
