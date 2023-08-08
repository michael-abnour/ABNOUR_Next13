import React from "react";
import styles from "../../../styles/OurFooter/OurFooter.module.css";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  const matches = useMediaQuery("(max-width:899px)");
  return (
    <div className={styles.footer}>
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Grid container spacing={2}>
          {!matches ? (
            <Grid item lg={3} xs={12} sm={6} md={3} className="">
              <div className={styles.footer_item}>
                <img src="/img/assets/Rectangle 2.png" alt="" />
                <p className={styles.footer_item_text}>
                  Copyright @ 2023 Abnour - All Right Reserved.
                </p>
                <div className={styles.social}>
                  <Link href="https://www.facebook.com/people/Abnour-Software-House/100084227260307/">
                    <Image
                      width={11}
                      height={20}
                      src="/img/assets/face.png"
                      alt="social"
                    />
                  </Link>
                  <Link
                    href="https://eg.linkedin.com/company/abnour"
                    className="px-5"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/img/assets/linked.png"
                      alt="social"
                    />
                  </Link>

                  <Link href="https://www.instagram.com/abnour_software_house/">
                    <Image
                      width={20}
                      height={20}
                      src="/img/assets/insta.png"
                      alt="social"
                    />
                  </Link>
                </div>
              </div>
            </Grid>
          ) : (
            ""
          )}

          {/* quick links */}
          <Grid item lg={2} xs={12} sm={6} md={2} className=" text-white ">
            <p>Quick Links</p>
            <ul className={styles.linkslist}>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/#ourservices">
                <li>Services</li>
              </Link>
              <Link href="/#Projects">
                <li>Projects</li>
              </Link>
              <Link href="/#testimonial">
                <li>Testimonials</li>
              </Link>
              <Link href="/#integrations">
                <li>Integrations</li>
              </Link>
            </ul>
          </Grid>

          {/* company */}
          <Grid item lg={2} xs={12} sm={6} md={2} className=" text-white ">
            <p>Company</p>
            <ul className={styles.linkslist}>
              <Link href="/AboutUs">
                <li>About</li>
              </Link>
              <Link href="/ContactUs">
                <li>Contact</li>
              </Link>
              <Link href="/OurCarrers">
                <li>Careers</li>
              </Link>
            </ul>
          </Grid>

          {/* Support */}
          <Grid item lg={2} xs={12} sm={6} md={2} className=" text-white ">
            <p>Support</p>
            <ul className={styles.linkslist}>
              <Link href="/">
                <li>FAQs</li>
              </Link>
              <Link href="/">
                <li>Support centre</li>
              </Link>
              <Link href="/">
                <li>Privacy Policy</li>
              </Link>{" "}
              <Link href="/">
                <li>Term & Agreement</li>
              </Link>
            </ul>
          </Grid>

          {/* office */}

          <Grid item lg={3} xs={12} sm={6} md={3} className=" text-white ">
            <p>Office</p>
            <ul className={styles.linkslist}>
              <li>Address : Cairo - Egypt </li>

              <Link href="/">
                <li>Email : info@abnourgroup.com </li>
              </Link>

              <li>Phone : 01094141800 </li>
            </ul>
          </Grid>

          {matches == true ? (
            <Grid item lg={3} xs={12} sm={6} md={2} className="">
              <div className={styles.footer_item}>
                <img src="/img/assets/Rectangle 2.png" alt="" />
                <p className={styles.footer_item_text}>
                  Copyright @ 2023 Abnour - All Right Reserved.
                </p>
                <div className={styles.social}>
                  <Link href="https://www.facebook.com/people/Abnour-Software-House/100084227260307/">
                    <Image
                      width={11}
                      height={20}
                      src="/img/assets/face.png"
                      alt="social"
                    />
                  </Link>
                  <Link
                    href="https://eg.linkedin.com/company/abnour"
                    className="px-5"
                  >
                    <Image
                      width={18}
                      height={18}
                      src="/img/assets/linked.png"
                      alt="social"
                    />
                  </Link>

                  <Link href="https://www.instagram.com/abnour_software_house/">
                    <Image
                      width={20}
                      height={20}
                      src="/img/assets/insta.png"
                      alt="social"
                    />
                  </Link>
                </div>
              </div>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Index;
