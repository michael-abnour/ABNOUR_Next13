import React from "react";
import Style from "../../../styles/Contact/ContactUs.module.css";
import { Container } from "react-bootstrap";

const CarrersLeftSide = () => {
  return (
    <Container className="">
      <div className={Style.heading + " text-start "}>
        <h2>Get in touch</h2>
        <p>
          We’ love to hear from you. Our friendly team is always here to chat.
        </p>
      </div>
      <div className="mt-5">
        <div className={" d-flex mb-4 " + Style.item}>
          <div className="icon me-3">
            <i class="fa-regular fa-paper-plane fa-xl text-white"></i>
          </div>
          <div>
            <h3>Chat to us</h3>
            <span>Our friendly team is here to help.</span>
            <p>info@abnourgroup.com </p>
          </div>
        </div>

        <div className={" d-flex mb-4 " + Style.item}>
          <div className="icon me-3">
            <i class="fa-solid fa-phone fa-xl text-white"></i>
          </div>
          <div>
            <h3>Phone</h3>
            <span>Come say hello at our office HQ.</span>
            <p>01094141800 </p>
          </div>
        </div>

        <div className={" d-flex mb-4 " + Style.item}>
          <div className="icon me-3">
            <i class="fa-solid fa-location-dot fa-2xl text-white"></i>
          </div>
          <div>
            <h3>Office</h3>
            <span>Sun - tue from 10am to 6pm.</span>
            <p>Cairo - Egypt</p>
          </div>
        </div>

        <div>
          <div
            className={
              " d-flex justify-content-center align-items-center " + Style.icon
            }
          >
            <div className="icon me-3">
              <a href="#">
                {" "}
                <i class="fa-brands fa-xl fa-facebook-f"></i>
              </a>
            </div>

            <div className="icon me-3">
              <a href="#">
                <i class="fa-brands fa-xl fa-linkedin"></i>
              </a>
            </div>

            <div className="icon me-3">
              <a href="#">
                <i class="fa-brands fa-xl fa-twitter"></i>
              </a>
            </div>

            <div className="icon">
              <a href="#">
                <i class="fa-brands fa-xl fa-square-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarrersLeftSide;
