import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#0B1221] relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#142f5c"
          fillOpacity="1"
          d="M0,96L60,106.7C120,117,240,139,360,160C480,181,600,203,720,208C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#00000070] h-full flex items-center w-full absolute top-0 left-0">
        <div className="w-11/12 mx-auto ">
          <footer className="footer text-neutral-content">
            <div>
              <div className="flex items-center">
                <img src={logo} alt="" className="w-[100px]" />
                <img src={name} alt="" className="w-[200px]" />
              </div>
              <p>
                MANUB Industries Ltd.
                <br />
                Providing reliable tech since 1992
              </p>
            </div>
            <nav>
              <header className="footer-title">Services</header>
              <NavLink to="/" className="mb-1 lg:mb-0">
                Home
              </NavLink>
              <NavLink to="/addjobs" className="mb-1 lg:mb-0">
                Add job
              </NavLink>
              <NavLink to="myPostedJobs" className="mb-1 lg:mb-0">
                My posted jobs
              </NavLink>

              <NavLink to="/myBids" className="mb-1 lg:mb-0">
                My Bids
              </NavLink>
              <NavLink to="/bidRequest" className="mb-1 lg:mb-0">
                Bid Requests
              </NavLink>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Social</header>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
          <p className="text-center pt-10 text-white">
            Copyright © 2023 - All right reserved by MANUB Industries Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
