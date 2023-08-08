import {
  Button,
  CircularProgress,
  Drawer,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Style from "../../../styles/Contact/ContactUs.module.css";
import { useRouter } from "next/router";
import Axiosinstance from "../../../AxiosInstance";
import { Toaster, toast } from "react-hot-toast";

const index = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [massage, setMassage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: fullName,
      email: emailAddress,
      phoneNo: phoneNumber,
      message: massage,
    };
    setIsLoading(true);
    await Axiosinstance.post("contact/contactUs", data)
      .then((res) => {
        setIsLoading(false);
        toast.success(res.data.message, {
          position: "top-center",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.response.data.message, {
          position: "top-center",
        });
      });
  };
  return (
    <>
      <div
        style={{ backgroundColor: " #0a1e33" }}
        className="css-1160xiw-MuiPaper-root-MuiDrawer-paper"
      >
        <Container fluid>
          <Row className="">
            <Col sm={12} md={4} className={Style.contactInfo + " py-3"}>
              <Container>
                <div className={Style.heading + " text-start"}>
                  <h2>Get in touch</h2>
                  <p>
                    We’ love to hear from you. Our friendly team is always here
                    to chat.
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
                        " d-flex justify-content-center align-items-center  " +
                        Style.icon
                      }
                    >
                      <div className="icon me-3">
                        <a
                          href="https://www.facebook.com/people/Abnour-Software-House/100084227260307/"
                          target="_blank"
                        >
                          {" "}
                          <i class="fa-brands fa-xl fa-facebook-f"></i>
                        </a>
                      </div>

                      <div className="icon me-3">
                        <a
                          href="https://eg.linkedin.com/company/abnoursoftwarehouse"
                          target="_blank"
                        >
                          <i class="fa-brands fa-xl fa-linkedin"></i>
                        </a>
                      </div>

                      <div className="icon">
                        <a
                          href="https://www.instagram.com/abnour_software_house/"
                          target="_blank"
                        >
                          <i class="fa-brands fa-xl fa-square-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </Col>

            <Col sm={12} md={8} className=" py-3">
              <Container>
                <div className={Style.contactHeader + " text-center mt-5 mb-3"}>
                  <h2>
                    We’d love to <span>contact </span> with you{" "}
                  </h2>
                  <p>Drop us a message and we’ll get back to you</p>
                </div>

                <div className={Style.Form}>
                  <form className={Style.form} onSubmit={handelSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Full Name</InputLabel>
                        <TextField
                          // required
                          fullWidth
                          placeholder="Enter your full name"
                          type="text"
                          variant="outlined"
                          sx={{
                            bgcolor: "#122539",
                            border: "1px solid #ffffff54",
                            borderRadius: "5px",
                          }}
                          onChange={(e) => {
                            setFullName(e.target.value);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Phone Number</InputLabel>
                        <TextField
                          fullWidth
                          // required
                          placeholder="Enter your active number"
                          type="text"
                          variant="outlined"
                          sx={{
                            bgcolor: "#122539",
                            border: "1px solid #ffffff54",
                            borderRadius: "5px",
                          }}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Email Address</InputLabel>
                        <TextField
                          fullWidth
                          placeholder="you@company.com"
                          type="email"
                          variant="outlined"
                          // required
                          sx={{
                            bgcolor: "#122539",
                            border: "1px solid #ffffff54",
                            borderRadius: "5px",
                          }}
                          onChange={(e) => {
                            setEmailAddress(e.target.value);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12}>
                        <InputLabel sx={{ mb: 1 }}>Massage</InputLabel>
                        <TextField
                          rows={2}
                          multiline
                          // required
                          fullWidth
                          placeholder="Tell us a little about the project..."
                          type="text"
                          variant="outlined"
                          sx={{
                            bgcolor: "#122539",
                            border: "1px solid #ffffff54",
                            borderRadius: "5px",
                          }}
                          onChange={(e) => {
                            setMassage(e.target.value);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12}>
                        <Button type="submit" className={Style.button}>
                          {isLoading ? (
                            <CircularProgress
                              className="text-white"
                              size={25}
                            />
                          ) : (
                            " Send Message"
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                    <div>
                      <Toaster />
                    </div>
                  </form>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>

        <div
          onClick={() => {
            router.back();
          }}
          className="closeDrawer"
        >
          <button>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
