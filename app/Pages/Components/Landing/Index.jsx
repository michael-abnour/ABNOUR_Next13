"use client";
import React from "react";
import styles from "../../../styles/Home.module.css";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";

const Index = () => {
  const matches = useMediaQuery("(max-width:899px)");

  console.log(matches);
  return (
    <>
      {matches != true ? (
        <div
          className={styles.Landing}
          style={{ width: "100%", height: "100vh" }}
        >
          <Container fluid className="p-0">
            <Grid
              container
              className={styles.landingContainer}
              sx={{
                height: "100% !important",
              }}
            >
              <Grid item xs={12} md={6}>
                <div className="mt-2 ">
                  <img
                    src="./img/newPhoto/bg-header.png"
                    alt="bg-header"
                    className={styles.landingImg}
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box>
                  <h2 className={styles.LandingH_2}>
                    Build a <br />
                    <span className={styles.LandingH_2Span}>
                      digital products
                    </span>
                    <br />
                    to solve your problems
                  </h2>
                  <p className={styles.prag}>
                    we are a professional agency with several services that
                    focused on
                    <br />
                    quality and innovations for your business, We help partners
                    and brands
                    <br />
                    develop their businesses and help their customers get the
                    best service.
                  </p>
                  <Link href={"./ContactUs"} className={styles.landingBtn}>
                    BOOK A DEMO <i class="fa-solid fa-chevron-right ms-2"></i>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <div
          className={styles.Landing + " " + styles.LandingMobile}
          style={{ width: "100%" }}
        >
          <Container className="">
            <Grid container className={styles.landingContainer}>
              <Grid
                item
                md={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <h2 className={styles.LandingH_2}>
                    Build a <br />
                    <span className={styles.LandingH_2Span}>
                      digital products
                    </span>
                    <br />
                    to solve your problems
                  </h2>
                  <p className={styles.prag}>
                    we are a professional agency with several services that
                    focused on
                    <br />
                    quality and innovations for your business, We help partners
                    and brands
                    <br />
                    develop their businesses and help their customers get the
                    best service.
                  </p>
                  <Link href={"./ContactUs"} className={styles.landingBtn}>
                    BOOK A DEMO <i class="fa-solid fa-chevron-right ms-2"></i>
                  </Link>
                </Box>
              </Grid>

              <Grid item md={12}>
                <div className="mt-5 d-flex justify-content-center align-items-center ">
                  <img
                    src="./img/newPhoto/bg-header2.png"
                    alt="bg-header"
                    className="w-100 "
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default Index;
