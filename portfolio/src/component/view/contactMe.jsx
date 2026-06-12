import "./contactMe.scss";
import linkedin from "./../../assets/linkedin.png";
import github from "./../../assets/github.png";
import { useState } from "react";
function ContactMe() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4cf4fc99-06f6-4fed-a6f8-17e6e8a0e05c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("I received your message. I will be replying ASAP.");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Failed to send the message. Please, try again!");
      setResult(data.message);
    }
  };
  return (
    <div className="contactMe">
      <h1 id="title">
        Contact Me <hr class="line" />
      </h1>
      <div className="itemsContainer">
        <div className="left">
          <h2 className="subtitle"> Get In Touch</h2>
          <hr class="line" />
          <p>
            Feel free to reach out for any questions, project inquiries, or just
            to say hello!
          </p>
          <div className="socialText">
            <h3>Email</h3>
            <p>y.mumtahina19@gmail.com</p>
          </div>
          <div className="socialLinks">
            <a
              href="https://github.com/yeahhina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/yeasmin-m/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <form className="right" onSubmit={onSubmit}>
          <div className="nameAndEmail">
            <div className="entry">
              <label>Your Name</label>
              <input name="name" placeholder="Enter your name" required />
            </div>
            <div className="entry">
              <label>Your Email</label>
              <input name="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="entry subject">
            <label>Subject</label>
            <input name="subject" placeholder="Enter subject" required />
          </div>
          <div className="entry message">
            <label>Message</label>
            <textarea
              name="message"
              className="messageBox"
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default ContactMe;
