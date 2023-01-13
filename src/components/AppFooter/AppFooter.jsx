import React from "react";
import "./index.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import logoHaulitUrl from "../../assets/logo-haulit.svg"

function AppFooter() {
  return (
    <footer>
      <div className="footer-ctn">
        <div className="logo-ctn">
          <img src={logoHaulitUrl} alt="Logo Haulit" />
        </div>

        <div className="footer-entry">
          <h3>Contact</h3>

          <div className="phone-entry">
            <BsFillTelephoneFill className="icon" />
            <p>(773) 290-8041</p>
          </div>
          <div className="mail-entry">
            <MdEmail className="icon" />
            <a href="mailto:anderson@haulit.one">anderson@haulit.one</a>
          </div>
        </div>

        <div className="footer-entry">
          <h3>Languages</h3>
          <div>
            <p>English</p>
          </div>
          <div>
            <p>Spanish</p>
          </div>
        </div>

        <div className="footer-entry social-media">
          <h3>Social Media</h3>
          <div>
            <AiFillInstagram className="icon" />
            <a target="_blank" href="https://www.instagram.com/haulit.onee">
              Instagram
            </a>
          </div>
          <div>
            <AiFillFacebook className="icon" />
            <a target="_blank" href="https://www.facebook.com/Haulit.one">
              Facebook
            </a>
          </div>
          <div>
            <FaTiktok className="icon" />
            <a target="_blank" href="https://www.tiktok.com/@haulit.one">
              Tik Tok
            </a>
          </div>
        </div>
        
        <p className="copyright">
          © Copyright 2022 - Haulit, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
