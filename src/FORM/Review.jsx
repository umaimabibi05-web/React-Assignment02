import React from "react";

const Review = ({ handlePrev, data }) => {
  
  const skillList = data.skills
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");

  return (
    <>
      <h1>Form Review</h1>
      <p className="subtitle">Please check your details before submitting</p>

      <div className="review">
        <h3>Personal</h3>
        <ul>
          <li><span>Name</span><b>{data.name}</b></li>
          <li><span>Email</span><b>{data.email}</b></li>
          <li><span>Date of Birth</span><b>{data.dob}</b></li>
          <li><span>Gender</span><b>{data.gender}</b></li>
        </ul>

        <h3>Contact</h3>
        <ul>
          <li><span>Contact</span><b>{data.contact}</b></li>
          <li><span>Country</span><b>{data.country}</b></li>
          <li><span>City</span><b>{data.city}</b></li>
          <li><span>Address</span><b>{data.address}</b></li>
        </ul>

        <h3>Education &amp; Work</h3>
        <ul>
          <li><span>Education</span><b>{data.education}</b></li>
          <li><span>Occupation</span><b>{data.occupation}</b></li>
          <li><span>Experience</span><b>{data.experience}</b></li>
          <li><span>About</span><b>{data.about}</b></li>
        </ul>

        <h3>Skills &amp; Documents</h3>
        <ul>
          <li>
            <span>Skills</span>
            <div className="chips">
              {skillList.map((skill, index) => (
                <em key={index} className="chip">{skill}</em>
              ))}
            </div>
          </li>
          <li>
            <span>LinkedIn</span>
            <b>{data.linkedin.trim() ? data.linkedin : "Not provided"}</b>
          </li>
          <li>
            <span>Resume</span>
            <b>{data.resume ? data.resume.name : ""}</b>
          </li>
        </ul>
      </div>

      <div className="buttons">
        <button type="button" className="btn btn-secondary" onClick={handlePrev}>
          Prev
        </button>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </div>
    </>
  );
};

export default Review;
