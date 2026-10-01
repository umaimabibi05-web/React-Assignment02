import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Review from "./Review";
import sideImg from "../assets/illustration.svg";
import "./Form.css";

const emptyData = {
  name: "",
  email: "",
  dob: "",
  gender: "",
  contact: "",
  country: "",
  city: "",
  address: "",
  education: "",
  occupation: "",
  experience: "",
  about: "",
  skills: "",
  linkedin: "",
  resume: null,
};

const stepLabels = ["Personal", "Contact", "Education", "Skills", "Review"];

const Form = () => {
  let [step, setStep] = useState(1);
  let [data, setData] = useState(emptyData);
  let [errors, setErrors] = useState({});
  let [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e) => {
    setData({ ...data, resume: e.target.files[0] || null });
    setErrors({ ...errors, resume: "" });
  };

  const validate = (stepNo) => {
    let err = {};

    if (stepNo === 1) {
      if (!data.name.trim()) err.name = "Name is required";
      else if (data.name.trim().length < 3)
        err.name = "Name must be at least 3 characters";

      if (!data.email.trim()) err.email = "Email is required";
      else if (!data.email.includes("@") || !data.email.includes("."))
        err.email = "Enter a valid email address";

      if (!data.dob) err.dob = "Date of birth is required";
      else if (new Date(data.dob) > new Date())
        err.dob = "Date of birth cannot be in the future";

      if (!data.gender) err.gender = "Please select your gender";
    }

    if (stepNo === 2) {
      if (!data.contact.trim()) err.contact = "Contact number is required";
      else if (isNaN(data.contact))
        err.contact = "Contact must contain numbers only";
      else if (data.contact.length < 10 || data.contact.length > 13)
        err.contact = "Contact must be 10 to 13 digits";

      if (!data.country) err.country = "Please select a country";
      if (!data.city.trim()) err.city = "City is required";
      if (!data.address.trim()) err.address = "Address is required";
    }

    if (stepNo === 3) {
      if (!data.education) err.education = "Please select your education";
      if (!data.occupation.trim()) err.occupation = "Occupation is required";
      if (!data.experience) err.experience = "Please select your experience";
      if (!data.about.trim()) err.about = "Please write something about yourself";
      else if (data.about.trim().length < 10)
        err.about = "Write at least 10 characters";
    }

    if (stepNo === 4) {
      if (!data.skills.trim()) err.skills = "Please enter at least one skill";

      // LinkedIn optional hai, sirf tab check karo jab kuch likha ho
      if (data.linkedin.trim() && !data.linkedin.includes("linkedin.com"))
        err.linkedin = "Enter a valid LinkedIn profile link";

      if (!data.resume) err.resume = "Please upload your resume";
      else if (data.resume.size > 2 * 1024 * 1024)
        err.resume = "File size must be less than 2MB";
      else {
        let fileName = data.resume.name.toLowerCase();
        if (
          !fileName.endsWith(".pdf") &&
          !fileName.endsWith(".doc") &&
          !fileName.endsWith(".docx")
        )
          err.resume = "Only PDF, DOC or DOCX files are allowed";
      }
    }

    setErrors(err);
  
    if (Object.keys(err).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleNext = () => {
    if (validate(step)) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => prev - 1);
  };

  const handleClear = () => {
    setStep(1);
    setData(emptyData);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setSubmitted(true);
  };

  const handleAnother = () => {
    setSubmitted(false);
    handleClear();
  };

  // ---------- Success screen ----------
  if (submitted) {
    return (
      <div className="page">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Form Submitted!</h2>
          <p>
            Thank you, <b>{data.name}</b>. Your information has been submitted
            successfully.
          </p>
          <button type="button" className="btn btn-primary" onClick={handleAnother}>
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card">
        {/* Left image panel */}
        <aside className="side">
          <img className="side-img" src={sideImg} alt="" />
          <div className="side-text">
            <h2>Create your profile</h2>
            <p>Fill in a few details in simple steps and review everything before you submit.</p>
          </div>
        </aside>

        {/* Right form panel */}
        <section className="content">
          <div className="stepper">
            {stepLabels.map((label, i) => {
              const n = i + 1;
              const cls = step === n ? "active" : step > n ? "done" : "";
              return (
                <div key={label} className={`stepper-item ${cls}`}>
                  <span className="circle">{step > n ? "✓" : n}</span>
                  <span className="label">{label}</span>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {step === 1 && (
              <Step1
                data={data}
                errors={errors}
                handleChange={handleChange}
                handleNext={handleNext}
              />
            )}
            {step === 2 && (
              <Step2
                data={data}
                errors={errors}
                handleChange={handleChange}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {step === 3 && (
              <Step3
                data={data}
                errors={errors}
                handleChange={handleChange}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {step === 4 && (
              <Step4
                data={data}
                errors={errors}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
            {step === 5 && <Review data={data} handlePrev={handlePrev} />}
          </form>

          <button type="button" className="clear-btn" onClick={handleClear}>
             Clear Form
          </button>
        </section>
      </div>
    </div>
  );
};

export default Form;
