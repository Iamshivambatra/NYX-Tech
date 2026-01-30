import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/index.css";

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Services",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const notifySuccess = () => toast.success("Thanks For Contacting");
  const notifyError = (msg) =>
    toast.error(msg || "Oops! Something went wrong.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      notifyError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const serviceID = "service_5t1e9i6";
    const templateID = "template_lna1i5r";
    const publicKey = "ws18bJq8GYzDpmlxv";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_name: "NYX Tech Team",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        notifySuccess();

        // Reset form (same as Footer)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Services",
          message: "",
        });

        setLoading(false);
      })
      .catch(() => {
        notifyError();
        setLoading(false);
      });
  };

  return (
    <main className="Main enquiry-page">
      <div className="enquiry-container">
        <div className="enquiry-form-section">
          <div className="section__title">
            <span className="enquiry-main-title">Have A Project In Mind?</span>
            <h2 className="enquiry-sub-title">Tell Us A Bit More</h2>
          </div>

          <div className="enquiry-form-wrapper">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />

                <select
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="Services">Select a Service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="App Development">App Development</option>
                  <option value="Azure Cloud">Azure Cloud</option>
                  <option value="AWS Cloud">AWS Cloud</option>
                  <option value="Cloud Management">Cloud Management</option>
                  <option value="Cloud Migration">Cloud Migration</option>
                  <option value="Analytics">Analytics</option>
                  <option value="SAP & ERP">SAP & ERP</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Technical Staffing">Technical Staffing</option>
                  <option value="People Development">People Development</option>
                </select>
              </div>

              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>

              <button
                className="btn_enquiry"
                type="submit"
                style={{ width: "20%" }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="enquiry-info-section">
          <div className="info-card">
            <div className="info-header">
              <span className="info-welcome-text">
                We Would Love To Hear From You
              </span>
              <h3 className="info-title">Get In Touch</h3>
            </div>

            <div className="info-contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="ri-phone-fill"></i>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Our Phone Number</div>
                  <div className="contact-value">+91 7896541230</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="ri-mail-line"></i>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Our Email</div>
                  <div className="contact-value">info@nyxtech.com</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Our Location</div>
                  <div className="contact-value">
                    Noida, Uttar Pradesh, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toastify */}
      <ToastContainer
        autoClose={2000}
        closeOnClick
        pauseOnHover
        theme="light"
        limit={3}
        newestOnTop
      />
    </main>
  );
};

export default EnquiryPage;
