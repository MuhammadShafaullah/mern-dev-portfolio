import React from 'react'
import vec from '../img/vec-d.webp'
import fb from '../img/facebook.png'
import github from '../img/github.png'
import insta from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'
import Typewriter from 'typewriter-effect';


function Hero() {



  return (
    <>

      <section id="header">
        <div className="container">
          <div className="row">
            <div className=" col-sm-12 col-lg-6">
              <div className="text-white">
                <h2 className="mb-5 clr-gr">Hi There!</h2>
                <h1 style={{ fontSize: 50 }}>I'M Shafa Ullah</h1>
                <div className="d-flex align-items-center mt-5">
                  <h6 className="text-white mb-0 fw-bolder">
                    Are You Ready To Build &nbsp;
                  </h6>
                  {/* <div id="typewriter" className="ms-1" style={{ fontSize: 15 }} />
                   */}
                  <Typewriter
                    options={{
                      strings: [" NEXT JS DEVELOPER", "WEB DEVELOPMENT", "AMAZING WEBSITE ?"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>

                <div
                  className="border mt-5 d-flex gap-2 p-2 inp"
                  style={{ borderRadius: 50, overflow: "hidden" }}
                >
                  <div
                    className="d-flex align-items-center  gap-2 p-2 icon"
                    style={{ borderRadius: 50, cursor: "pointer" }}
                  >
                    <div className="img1 d-flex align-items-center gap-1">
                      <a href="#">
                        <img
                          src={github}
                          alt=""
                          height="30px"
                          width="30px"
                        />
                      </a>
                      <h5 className="fw-bold mb-0 git">GitHub</h5>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center  gap-2 p-2 icon"
                    style={{ borderRadius: 50, cursor: "pointer" }}
                  >
                    <div className="img1 d-flex align-items-center gap-1">
                      <a href="#">
                        <img
                          src={linkedin}
                          alt=""
                          height="30px"
                          width="30px"
                        />
                      </a>
                      <h5 className="fw-bold mb-0 git">Linkedin</h5>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center  gap-2 p-2 icon"
                    style={{ borderRadius: 50, cursor: "pointer" }}
                  >
                    <div className="img1 d-flex align-items-center gap-1">
                      <a href="#">
                        <img
                          src={fb}
                          alt=""
                          height="30px"
                          width="30px"
                        />
                      </a>
                      <h5 className="fw-bold mb-0 git">Facebook</h5>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center  gap-2 p-2 icon"
                    style={{ borderRadius: 50, cursor: "pointer" }}
                  >
                    <div className="img1 d-flex align-items-center gap-1">
                      <a href="#">
                        <img
                          src={twitter}
                          alt=""
                          height="30px"
                          width="30px"
                        />
                      </a>
                      <h5 className="fw-bold mb-0 git">Twitter</h5>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center  gap-2 p-2 icon"
                    style={{ borderRadius: 50, cursor: "pointer" }}
                  >
                    <div className="img1 d-flex align-items-center gap-1">
                      <a href="#">
                        <img
                          src={insta}
                          alt=""
                          height="30px"
                          width="30px"
                        />
                      </a>
                      <h5 className="fw-bold mb-0 git">Instagram</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-sm-12 col-lg-6  col-xl-6 col-xxl-6">
              <img src={vec} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Hero