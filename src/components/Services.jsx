import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './ServicesData';

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!service) {
    return (
      <div style={{ padding: '100px 40px', textAlign: 'center' }}>
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
      </div>
    );
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <main className="Main">
      {/* Hero Section */}
      <div id="Main_start" className="WebPage_start">
        <div style={{ background: '#b6eae51f', padding: '20px', borderRadius: '20px', height: '100%', display: 'flex' }}>
          <div className="W_50prc" style={{ height: '100%', justifyContent: 'space-around', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '21px', color: '#000000' }}>
              <h1 className="About_title">
                <span className="Color_main">{service.title}</span>
              </h1>
            </div>
            <div className="Gap_20 D_Flex dir_clum">
              <h3>{service.subtitle}</h3>
              <div>{service.description}</div>
            </div>
            <div className="D_Flex Gap_20">
              <button className="btn_enquiry">Lets Start Conversation</button>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div id="" className="Chooseus">
        <div className="D_Flex just_btwn Py20px40px">
          {service.highlights.map((highlight, index) => (
            <div key={index} className="DetailBox_services">
              <div className="DetailBox_Title">
                <div><img height="90px" src={highlight.icon} alt="" /></div>
                <div>{highlight.title}</div>
              </div>
              <div>
                <h5>{highlight.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div style={{ backgroundColor: '#b6eae51f' }} className="WeServeDiv Px_40">
        <h4 className="Chooseus_title">Industries We Serve</h4>
        <div className="txt_center">
          <div className="Font_bold Font_35">
            Proud To Deliver Excellence
            <div><span className="Color_main">Every Time</span></div>
          </div>
        </div>
        <div className="Px_40">
          <div className="D_Flex" style={{ width: '75%', justifySelf: 'center', justifyContent: 'space-around' }}>
            {service.industries.slice(0, 2).map((industry, index) => (
              <div key={index} className="W_48prc Excellence_box">
                <div className="Logo_Weserve"><img src={industry.icon} alt="" /></div>
                <h3>{industry.title}</h3>
                <div><p>{industry.description}</p></div>
              </div>
            ))}
          </div>
          {service.industries.length > 2 && (
            <div className="D_Flex" style={{ marginTop: '20px', width: '75%', justifySelf: 'center', justifyContent: 'space-around' }}>
              {service.industries.slice(2, 4).map((industry, index) => (
                <div key={index} className="W_48prc Excellence_box">
                  <div className="Logo_Weserve"><img src={industry.icon} alt="" /></div>
                  <h3>{industry.title}</h3>
                  <div><p>{industry.description}</p></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Technology Stack */}
      <div id="TechStackweuse" style={{ padding: '20px 40px' }} className="">
        <h4 className="Techstack_title">Technology Stack</h4>
        <div className="txt_center">
          <div className="Font_bold Font_35">
            Technology we Work with in <span className="Color_main">{service.title}</span>
          </div>
        </div>
        <div className="D_Flex just_btwn" style={{ marginTop: '20px' }}>
          <div className="W_50prc" style={{ display: 'flex', flexDirection: 'column', rowGap: '25px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
              <div><h2>Frontend</h2></div>
              <div className="D_Flex Gap_10 Divstackimgs">
                {service.techStack.frontend.map((tech, index) => (
                  <div key={index}><img src={tech.icon} alt={tech.name} /></div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
              <div><h2>Backend</h2></div>
              <div className="D_Flex Gap_10 Divstackimgs">
                {service.techStack.backend.map((tech, index) => (
                  <div key={index}><img src={tech.icon} alt={tech.name} /></div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
              <div><h2>Infrastructure</h2></div>
              <div className="D_Flex Gap_10 Divstackimgs">
                {service.techStack.infrastructure.map((tech, index) => (
                  <div key={index}><img src={tech.icon} alt={tech.name} /></div>
                ))}
              </div>
            </div>
          </div>
          <div className="W_50prc">
            <div className="MainStart__img">
              <span className="circle wow fadeInDown animated" data-wow-duration="1s"
                style={{ visibility: 'visible', WebkitAnimationDuration: '1s', MozAnimationDuration: '1s', animationDuration: '1s' }}></span>
              <img className="lazy-load" data-src={service.heroImage} data-wow-duration="1s" alt="" src={service.heroImage} />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="FaqSec" className="Faqsection" style={{ padding: '20px' }}>
        <h4 className="Services_title">FAQs</h4>
        <div className="txt_center">
          <div className="Font_bold Font_35">
            Frequently <span className="Color_main">Asked </span>Questions
          </div>
        </div>
        <div className="txt_center">
          <h5>Welcome to our FAQ section! Here you'll find quick answers to the most common questions.</h5>
        </div>
        <div className="FaqAccordion">
          {service.faqs.map((faq, index) => (
            <div key={index} className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                {faq.question}
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </button>
              <div className="accordion-content">
                <div>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicePage;