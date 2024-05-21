import React from "react";
import "./myFoot.css";
const MyFoot = () => {
  return (
    <footer>
      <div className="container">
        <div className="row py-6">
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Company</h2>
            <ul className="list-unstyled ">
              <li className="mb-2 ">
                <a href="./index.html">About</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Careers</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Brand Center</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Help center</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index.html">Discord Server</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Legal</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index.html">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Licensing</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2 className="mb-4 text-uppercase">Download</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="./index.html">iOS</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Android</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">Windows</a>
              </li>
              <li className="mb-2">
                <a href="./index.html">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="container text-center">
          <p className={`  mb-0`}>
            © 2024 <a href="#">Tidy Caos™</a>. All Rights Reserved.
          </p>
          <div className="mt-3">
            <a href="./index.html" className={` me-4`}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="./index.html" className="text-muted me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="./index.html" className="text-muted me-4">
              <i className="fab fa-discord"></i>
            </a>
            <a href="./index.html" className="text-muted">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFoot;
