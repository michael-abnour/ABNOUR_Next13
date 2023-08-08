import {
  CircularProgress,
  Drawer,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Style from "../../../styles/Contact/ContactUs.module.css";
import { TextField, Grid } from "@mui/material";
import carrers from "../../../styles/Careers/Careers.module.css";
// import { width } from "@mui/system";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import CarrersLeftSide from "./CarrersLeftSide";
import { useRouter } from "next/router";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import AxiosInstance from "../../../AxiosInstance";

// import { useDispatch } from "react-redux";
// import { sendData } from "../../store/OurCarrers";

const jobRoleArray = [
  {
    value: "Internship",
    label: "Internship",
  },
  {
    value: "Fresh",
    label: "Fresh",
  },
  ,
  {
    value: "junior",
    label: "junior",
  },
  ,
  {
    value: "Mid-Level",
    label: "Mid-Level",
  },
  ,
  {
    value: "Senior",
    label: "Senior",
  },
];

const jobTypeArray = [
  {
    value: "Front-End",
    label: "Front-End",
  },
  {
    value: "Back-End",
    label: "Back-End",
  },
  {
    value: "Flutter-Developer",
    label: "Flutter-Developer",
  },
  {
    value: "Graphic-Designer",
    label: "Graphic-Designer",
  },
  {
    value: "UI UX-Designer",
    label: "UI UX-Designer",
  },
  {
    value: "Project Manager",
    label: "Project Manager",
  },
  {
    value: "HR",
    label: "HR",
  },
];
const index = () => {
  const [value, setValue] = useState("second");
  //  const dispatch = useDispatch()
  const router = useRouter();

  // states for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobType, setJobType] = useState("");

  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  console.log(file, "aaaa");

  const [isLoading, setIsLoading] = useState(false);

  async function formHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNo", phoneNo);
    formData.append("email", email);
    formData.append("jobRole", jobRole);
    formData.append("jobType", jobType);
    formData.append("shortBio", message);
    formData.append("resume", file);

    setIsLoading(true);

    // validation

    // validate

    // Validate form fields
    if (!firstName) {
      toast.error("first name is required", {
        duration: 3000,
      });
      setIsLoading(false);

      return;
    }
    if (!lastName) {
      toast.error("Last name is required", {
        duration: 3000,
      });

      setIsLoading(false);

      return;
    }
    if (!phoneNo) {
      toast.error("phone number is required", {
        duration: 3000,
      });

      setIsLoading(false);

      return;
    }
    if (!email) {
      toast.error("Email is required", {
        duration: 3000,
      });
      setIsLoading(false);

      return;
    }
    if (!jobRole) {
      toast.error("jobRole is required", {
        duration: 3000,
      });

      setIsLoading(false);

      return;
    }
    if (!jobType) {
      toast.error("JobTitle is required", {
        duration: 3000,
      });

      setIsLoading(false);

      return;
    }
    if (!message) {
      toast.error("Short Bio is required", {
        duration: 3000,
      });

      setIsLoading(false);

      return;
    }
    if (!file) {
      toast.error("File is required", {
        duration: 3000,
      });

      setIsLoading(false);

      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address.", {
        duration: 3000,
      });
      return;
    }

    // Validate file type
    const allowedFileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedFileTypes.includes(file.type)) {
      toast.error("Unsupported file format. Allowed formats: PDF, DOC, DOCX.", {
        duration: 3000,
      });
      return;
    }

    //

    //

    let data;
    const res = await AxiosInstance.post(`Contact/Careerform`, formData)

      .then((res) => {
        console.log(res);
        setIsLoading(false);
        data = res.data;
        toast.success(`data send Successfully`, {
          duration: 4000,
        });
        clearFunction();
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.response.data.message, {
          duration: 4000,
        });
      });
    return data;
  }

  const clearFunction = () => {
    setFile("");
    setLastName("");
    setFirstName("");
    setEmail("");
    setMessage("");
    setJobRole("");
    setJobType("");
    setPhoneNumber("");
  };
  return (
    <>
      <div
        style={{ backgroundColor: " #0a1e33" }}
        className="css-1160xiw-MuiPaper-root-MuiDrawer-paper"
      >
        <Container fluid>
          <Row className="">
            <Col sm={12} md={4} className={Style.contactInfo}>
              <CarrersLeftSide />
            </Col>

            <Col style={{ height: "100vh", overflow: "auto" }} sm={12} md={8}>
              <div className={carrers.rightCarrersSide}>
                <p className={carrers.mainParagraph}>
                  Show your ideas to the world and <span>join us !</span>
                </p>
                <p className={carrers.secondParagraph}>
                  Just fill the form with your data and we’ll contact you.
                </p>
              </div>

              <form
                onSubmit={formHandler}
                className={carrers.carrerForm}
                style={{ margin: "3rem auto" }}
              >
                <Container>
                  <Grid container spacing={3}>
                    {/* first Name */}
                    <Grid item xs={12} sm={12} md={6}>
                      <InputLabel className={carrers.inputField} sx={{ mb: 1 }}>
                        First Name
                      </InputLabel>
                      <TextField
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        className={carrers.textField}
                        // required
                        fullWidth
                        placeholder="Enter your first name"
                        type="text"
                        variant="outlined"
                        sx={{
                          bgcolor: "#122539",
                          border: "1px solid #ffffff33",
                          borderRadius: "10px",
                          boxShadow: "none",
                        }}
                      />
                    </Grid>
                    {/* last Name */}
                    <Grid item xs={12} sm={12} md={6}>
                      <InputLabel
                        className={carrers.inputField}
                        sx={{ mb: 1, color: "white" }}
                      >
                        Last Name
                      </InputLabel>
                      <TextField
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        className={carrers.textField}
                        // required
                        fullWidth
                        placeholder="Enter your Last name"
                        type="text"
                        variant="outlined"
                        sx={{
                          bgcolor: "#122539",
                          border: "1px solid #ffffff33",
                          borderRadius: "10px",
                          boxShadow: "none",
                        }}
                      />
                    </Grid>

                    {/* mobile number */}
                    <Grid item xs={12} sm={12} md={12}>
                      <InputLabel
                        className={carrers.inputField}
                        sx={{ mb: 1, color: "white" }}
                      >
                        Phone Number
                      </InputLabel>
                      <TextField
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNo}
                        className={carrers.textField}
                        // required
                        fullWidth
                        placeholder="Enter your Active Number"
                        type="text"
                        variant="outlined"
                        sx={{
                          bgcolor: "#122539",
                          border: "1px solid #ffffff33",
                          borderRadius: "10px",
                          boxShadow: "none",
                        }}
                      />
                    </Grid>

                    {/* Email Address */}
                    <Grid item xs={12} sm={12} md={12}>
                      <InputLabel
                        className={carrers.inputField}
                        sx={{ mb: 1, color: "white" }}
                      >
                        Email Address
                      </InputLabel>
                      <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className={carrers.textField}
                        // required
                        fullWidth
                        placeholder="you@company.com"
                        type="email"
                        variant="outlined"
                        sx={{
                          bgcolor: "#122539",
                          border: "1px solid #ffffff33",
                          borderRadius: "10px",
                          boxShadow: "none",
                        }}
                      />
                    </Grid>

                    {/* job title */}
                    <Grid item xs={12} sm={12} md={6}>
                      <InputLabel
                        className={carrers.inputField}
                        sx={{ mb: 1, color: "white" }}
                      >
                        Job Title
                      </InputLabel>
                      <TextField
                        onChange={(e) => setJobType(e.target.value)}
                        value={jobType}
                        className={carrers.textField}
                        id="outlined-select-type"
                        select
                        //   label="Job Type"
                        // defaultValue="type1"
                        // helperText="Please select your Job Roles"
                        sx={{
                          bgcolor: "#122539",
                          border: "1px solid #ffffff33",

                          borderRadius: "10px",
                          boxShadow: "none",
                          width: "100%",
                        }}
                      >
                        {jobTypeArray.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    {/* Job Role */}
                    <Grid item xs={12} sm={12} md={6}>
                      <InputLabel
                        className={carrers.inputField}
                        sx={{ mb: 1, color: "white" }}
                      >
                        Job Roles
                      </InputLabel>
                      <TextField
                        onChange={(e) => setJobRole(e.target.value)}
                        value={jobRole}
                        className={carrers.textField}
                        id="outlined-select-role"
                        select
                        //   label="Job Roles"
                        defaultValue="Role1"
                        //   helperText="Please select your Job Roles"
                        sx={{
                          bgcolor: "#122539",
                          border: "1px solid #ffffff33",
                          borderRadius: "10px",
                          boxShadow: "none",
                          width: "100%",
                        }}
                      >
                        {jobRoleArray.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    {/*text message  */}
                    <Grid item xs={12} sm={12} md={12}>
                      <InputLabel
                        className={carrers.inputField}
                        sx={{ mb: 1, color: "white" }}
                      >
                        Cover Letter / short bio
                      </InputLabel>
                      <TextField
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className={carrers.textField}
                        rows={2}
                        multiline
                        // required
                        fullWidth
                        placeholder="Give a brief of your skills.."
                        type="text"
                        variant="outlined"
                        sx={{
                          bgcolor: "#122539",
                          border: "1px solid #ffffff33",
                          borderRadius: "5px",
                        }}
                      />
                    </Grid>

                    {/* upload files */}
                    <Grid item xs={12} sm={12} md={12}>
                      <InputLabel
                        className={carrers.inputField}
                        sx={{ mb: 1, color: "white" }}
                      >
                        upload Resume
                      </InputLabel>
                      <div
                        onChange={(e) => setFile(e.target.files[0])}
                        value={file}
                      >
                        <FileUploader
                          accept=".pdf, .doc, .docx"
                          label={" upload Additional file "}
                          name="file"
                        />

                        <InputLabel
                          sx={{
                            mb: 1,
                            marginTop: "5px",
                            color: "#ffffff33 !important",
                            fontSize: "12px",
                          }}
                        >
                          Attach file size of your documents should not exceed
                          10MB
                        </InputLabel>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                      <button
                        style={{ borderRadius: "10px" }}
                        type="submit"
                        className={Style.button}
                      >
                        {isLoading ? (
                          <CircularProgress size={20} sx={{ color: "#fff" }} />
                        ) : (
                          "Submit"
                        )}
                      </button>
                      <Toaster />
                    </Grid>
                  </Grid>
                </Container>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        onClick={() => {
          {
            router.back();
          }
        }}
        style={{ right: "17px", cursor: "pointer" }}
        className="closeDrawer"
      >
        <button>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
};

export default index;
