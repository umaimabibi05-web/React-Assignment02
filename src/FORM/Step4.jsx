import React from "react";

const Step4 = ({
  data,
  errors,
  handleChange,
  handleFileChange,
  handleNext,
  handlePrev,
}) => {
  return (
    <>
      <h1>Step 4</h1>
      <p className="subtitle">Skills & Documents</p>

      <div className="field">
        <label htmlFor="skills">Skills</label>
        <textarea
          value={data.skills}
          onChange={handleChange}
          name="skills"
          id="skills"
          rows="3"
          placeholder="React, JavaScript, CSS, Node.js"
          className={errors.skills ? "invalid" : ""}
        />
        <span className="hint">Separate your skills with commas</span>
        {errors.skills && <span className="error">{errors.skills}</span>}
      </div>

      <div className="field">
        <label htmlFor="linkedin">
          LinkedIn Profile Link <em>(optional)</em>
        </label>
        <input
          value={data.linkedin}
          onChange={handleChange}
          name="linkedin"
          id="linkedin"
          type="text"
          placeholder="https://www.linkedin.com/in/your-name"
          className={errors.linkedin ? "invalid" : ""}
        />
        {errors.linkedin && <span className="error">{errors.linkedin}</span>}
      </div>

      <div className="field">
        <label htmlFor="resume">Upload Resume</label>
        <input
          onChange={handleFileChange}
          name="resume"
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className={errors.resume ? "invalid" : ""}
        />
        <span className="hint">PDF, DOC or DOCX (max 2MB)</span>
        {data.resume && (
          <span className="file-name">📄 Selected: {data.resume.name}</span>
        )}
        {errors.resume && <span className="error">{errors.resume}</span>}
      </div>

      <div className="buttons">
        <button type="button" className="btn btn-secondary" onClick={handlePrev}>
          Prev
        </button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Step4;
