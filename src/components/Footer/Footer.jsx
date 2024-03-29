import React from 'react'

import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import instagram from '../../img/instagram.png'



function Footer() {
  return (
    <>

      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
              <span className="text-white fs-5">
                Designed & Developed by Shafa Ullah
              </span>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 text-end mb-4">
              <span className="text-white fs-5">Copyright © 2023 SZ</span>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
              <div className="d-flex gap-4 justify-content-end">
                <div>
                  <a href="https://github.com/MuhammadShafaullah" target="_blank">

                    <img
                      src={github}
                      alt=""
                      height="30px"
                      width="30px"
                      style={{ cursor: "pointer" }}
                    />

                  </a>

                </div>
                <div>
                  <a href="https://www.linkedin.com/in/muhammad-shafaullah-8584251b0/" target="_blank">
                    <img
                      src={linkedin}
                      alt=""
                      height="30px"
                      width="30px"
                      style={{ cursor: "pointer" }}
                    />
                  </a>

                </div>
                <div>
                  <a href="https://www.facebook.com/muhammad.shafaullah.9" target="_blank">
                    <img
                      src={facebook}
                      alt=""
                      height="30px"
                      width="30px"
                      style={{ cursor: "pointer" }}
                    />
                  </a>

                </div>
                <div>
                  <a href="">
                    <img
                      src={twitter}
                      alt=""
                      height="30px"
                      width="30px"
                      style={{ cursor: "pointer" }}
                    />
                  </a>

                </div>
                <div>
                  <a href="https://www.instagram.com/malikshafaullahofficial/" target="_blank">
                    <img
                      src={instagram}
                      alt=""
                      height="30px"
                      width="30px"
                      style={{ cursor: "pointer" }}
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Footer