import React from 'react'


function Navbar() {



  const nav = document.getElementsByName('mynav');
  
  window.onscroll = function () {
    
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
      
      if (nav.length > 0) {
        var trns = nav[0];
        trns.classList.add("nav-transparent");
  
        trns.classList.remove("nav-colored");
      }
      else{
        var notrns = nav[0];
        notrns.classList.add("nav-colored");
        notrns.classList.remove("nav-transparent");
      }
    }
  };

  return (
    <>
     

      <section>
        <nav className="navbar navbar-expand-lg   fixed-top " name="mynav" >
          <div className="container  ">
            <a id="navColor" className="navbar-brand  fw-bold fs-5" href="#">
              YourName
            </a>
            <button
              className="rounded navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 ">
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-center p-2  gap-1">
                    <i className="bi bi-house-door" />
                    <a id="navColor" className="nav-link fw-medium font " href="#">
                      HOME
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-center p-2 gap-1">
                    <i className="bi bi-file-person" />
                    <a id="navColor" className="nav-link  fw-medium font " href="#">
                      ABOUT
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-center p-2  gap-1">
                    <i className="bi bi-cast" />
                    <a id="navColor" className="nav-link fw-medium font " href="#">
                      PROJECT
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-center p-2  gap-1">
                    <i className="bi bi-file-earmark-person" />
                    <a id="navColor" className="nav-link   fw-medium font " href="#">
                      RESUME
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="d-flex align-items-center justify-content-center p-2">
                    <i className="bi bi-person-rolodex" />
                    <a id="navColor" className="nav-link fw-medium font " href="#">
                      CONTACT
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar