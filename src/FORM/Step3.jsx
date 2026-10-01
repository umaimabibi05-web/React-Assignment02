import React from "react";

const Step3 = ({ data, errors, handleChange, handleNext, handlePrev }) => {
  return (
    <>
      <h1>Step 3</h1>
      <p className="subtitle">Education & Work</p>

      <div className="row">
        <div className="field">
          <label htmlFor="education">Education</label>
          <select
            value={data.education}
            onChange={handleChange}
            name="education"
            id="education"
            className={errors.education ? "invalid" : ""}
          >
            <option value="">Select education</option>
            <option value="Matric">Matric</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.education && <span className="error">{errors.education}</span>}
        </div>

        <div className="field">
          <label htmlFor="occupation">Occupation</label>
          <input
            value={data.occupation}
            onChange={handleChange}
            name="occupation"
            id="occupation"
            type="text"
            placeholder="Web Developer"
            className={errors.occupation ? "invalid" : ""}
          />
          {errors.occupation && <span className="error">{errors.occupation}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="experience">Experience</label>
        <select
          value={data.experience}
          onChange={handleChange}
          name="experience"
          id="experience"
          className={errors.experience ? "invalid" : ""}
        >
          <option value="">Select experience</option>
          <option value="Fresher (No experience)">Fresher (No experience)</option>
          <option value="Less than 1 year">Less than 1 year</option>
          <option value="1 - 2 years">1 - 2 years</option>
          <option value="3 - 5 years">3 - 5 years</option>
          <option value="More than 5 years">More than 5 years</option>
        </select>
        {errors.experience && <span className="error">{errors.experience}</span>}
      </div>

      <div className="field">
        <label htmlFor="about">About You</label>
        <textarea
          value={data.about}
          onChange={handleChange}
          name="about"
          id="about"
          rows="4"
          placeholder="Write a short introduction..."
          className={errors.about ? "invalid" : ""}
        />
        {errors.about && <span className="error">{errors.about}</span>}
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

export default Step3;
