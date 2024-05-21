import React from "react";
import "./myFoot.css";
const MyFoot = () => {
  return (
    <footer>
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
