import React from 'react'
import location from '../../img/location.png'
import telephone from '../../img/telephone.png'
import mail from '../../img/mail.png'


function Contact() {
  return (
    <>

      <section id="contect">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h2
                className="text-white fw-lighter "
                style={{ borderBottom: "2px solid #fff" }}
              >
                CONTACT US
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
              <div>
                <div>
                  <h5 className="text-white mt-4">
                    Fill out the contact form and shahzad will contact you directly.
                  </h5>
                </div>
              </div>
              <div className="mt-4">
                <input
                 name=""
                 id=""
                  className="w-100 border inpu"
                  style={{ backgroundColor: "#1E293B" }}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mt-4">
                <input
                 name=""
                 id=""
                  className="w-100 border inpu"
                  style={{ backgroundColor: "#1E293B" }}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mt-4">
                <textarea
                  name=""
                  id=""
                  type="text"
                  cols={68}
                  rows={8}
                  className="inpu border w-100"
                  style={{ backgroundColor: "#1E293B" }}
                  placeholder="Massage"
                />
              </div>
              <div className="mt-4">
                <button className="btn btn-outline-success w-100  submit">
                  Submit
                </button>
              </div>
              <div className="mt-4">
                <span className="text-white" style={{ fontSize: 15 }}>
                  This site is protected by CAPTCHA and the Google
                  <span style={{ color: "#22C55E", cursor: "pointer" }}>
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "#22C55E", cursor: "pointer" }}>
                    Terms of Service
                  </span>{" "}
                  apply.
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 px-5">
              <div className="mt-4">
                <h5 className="fw-bold text-white">Better yet, see us in person!</h5>
              </div>
              <div className="d-flex gap-2 mt-5">
                <div className="d-flex align-items-center justify-content-center">
                  <img src={location} alt="" height="35px" width="35px" />
                </div>
                <div>
                  <div>
                    <h5 className="text-white">House No.1562 Sector E-11 DHA</h5>
                  </div>
                  <div>
                    <h5 className="text-white">Phase 6, Lahore</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 mt-5">
                <div className="d-flex align-items-center justify-content-center">
                  <img src={telephone} alt="" height="35px" width="35px" />
                </div>
                <div>
                  <div>
                    <h5 className="text-white">Phone: +9230555535384</h5>
                  </div>
                  <div>
                    <h5 className="text-white">Whatsaap No: 03055535384</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 mt-5 align-items-center">
                <div>
                  <img src={mail} alt="" height="35px" width="35px" />
                </div>
                <div>
                  <h5 className="text-white mb-0">Email: contactshafaullah@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Contact