import React, { useEffect } from 'react'
import mypic from '../../img/Mypic.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2
                className="text-white fw-bold "
                style={{ borderBottom: "2px solid #22C55E", display: "inline-block" }}
              >
                About Me
              </h2>
            </div>
          </div>
          <div className="row">
            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              className="col-12 col-sm-12 col-lg-6 text-center "
            >
              <img
                src={mypic}
                className="img-fluid rounded"
                alt=""
                style={{ marginTop: 40 }}
              />
            </div>
            <div data-aos="fade-up" className="col-12 col-sm-12 col-lg-6">
              <div>
                <h1 className="text-white mt-5 fw-bold">
                  {" "}
                  Hi There! I'm ShafaUllah Malik
                </h1>
              </div>
              <div>
                <h2 style={{ color: "#22C55E" }} className="mt-3">
                  Web Developer
                </h2>
              </div>
              <div>
                <p className="mt-4" style={{ color: "#939AA7", fontSize: 20 }}>
                  I am a skilled Web Developer with a passion for crafting seamless
                  web experiences. Proficient in HTML, CSS, JavaScript, and React, I
                  create responsive and user-friendly web applications. My goal is to
                  provide innovative solutions that engage users and enhance their
                  online interactions.
                </p>
              </div>
              <div className="d-flex gap-4 mt-4">
                <div>
                  <h4 className="fw-bold" style={{ color: "#939AA7" }}>
                    Birthday:
                  </h4>
                </div>
                <div>
                  <h4 style={{ color: "#939AA7" }}>Jun 20, 1998</h4>
                </div>
              </div>
              <div className="d-flex gap-4 mt-2">
                <div>
                  <h5 className="fw-bold" style={{ color: "#939AA7" }}>
                    Phone:
                  </h5>
                </div>
                <div>
                  <h5 style={{ color: "#939AA7" }}>+92 305 5535384</h5>
                </div>
              </div>
              <div className="d-flex gap-4 mt-2">
                <div>
                  <h5 className="fw-bold" style={{ color: "#939AA7" }}>
                    Email:
                  </h5>
                </div>
                <div>
                  <h5 style={{ color: "#939AA7" }}>mrmalikshafaullahh@gmail.com</h5>
                </div>
              </div>
              <div className="d-flex gap-4 mt-2">
                <div>
                  <h5 className="fw-bold" style={{ color: "#939AA7" }}>
                    From:
                  </h5>
                </div>
                <div>
                  <h5 style={{ color: "#939AA7" }}>Pakistan</h5>
                </div>
              </div>
              <div className="d-flex gap-4 mt-2">
                <div>
                  <h5 className="fw-bold" style={{ color: "#939AA7" }}>
                    Language:
                  </h5>
                </div>
                <div>
                  <h5 style={{ color: "#939AA7" }}>Urdu, English</h5>
                </div>
              </div>
              <div className="d-flex gap-4 mt-2">
                <div>
                  <h5 className="fw-bold" style={{ color: "#939AA7" }}>
                    Freelancer:
                  </h5>
                </div>
                <div>
                  <h5 style={{ color: "#939AA7" }}>Availble</h5>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="btn text-black fw-bold"
                  style={{
                    borderRadius: 50,
                    padding: "10px 15px",
                    backgroundColor: "#22C55E",
                    color: "#112A46"
                  }}
                >
                  <a href="#" style={{ textDecoration: "none", color: "#112A46" }}>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default About