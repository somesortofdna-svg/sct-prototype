'use client';

import { useState } from "react";
import './contact.css';

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try{
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(formData),
      });

    setStatus("success");

    setFormData({
      name: "",
      phone: "",
      altPhone: "",
      email: "",
      message: ""
    });

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      
      <video
        className="contact-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/media/about-bg.mp4" type="video/mp4" />
      </video>

      <div className="contact-overlay" />

      <div className="contact-container">
        
        {/* LEFT */}
        <div className="contact-info">
          <h2>Talk to Us</h2>
          <p className="contact-description">
            Get in touch with our experts and find out how we can build a
            complete solution for you.
          </p>

          <div className="contact-block">
            <h4>Address:</h4>
            <p><b>Noida:</b> SH-007, Ground Floor, Sector-63 Noida-201309</p>
            <p><b>Bangalore:</b> IBC Knowledge Park, Bennerghatta Road, Bangalore-560029.</p>
            <p><b>Delhi:</b> 403, Pratap Bhawan, ITO Bahadur Shah-Zafar Marg, Delhi-110002</p>
            <p><b>Mumbai:</b> 4/495, Shaniwar Peth ,Bajirao Road Mantri Heights, Near Hotel Basera,Pune</p>
          </div>

          <div className="contact-block">
            <h4>Email:</h4>
            <p>smartchip@smartchiptree.com</p>
          </div>

          <div className="contact-block">
            <h4>Phone:</h4>
            <p>9650707992</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form">
          <h2>Send a Message</h2>

          <form className="contact-form-inner" onSubmit={handleSubmit}>
            <div className="form-fields">

              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    placeholder="Enter primary phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Alternate Phone</label>
                  <input 
                    type="tel"
                    name="altPhone"
                    placeholder="Enter alternate phone number"
                    value={formData.altPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  rows={3}
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS ANIMATION (does NOT affect layout) */}
      {status === "success" && (
        <div className="success-toast">
          <div className="success-check">✓</div>
          <span>Message sent successfully</span>
        </div>
      )}

    </section>
  );
}
