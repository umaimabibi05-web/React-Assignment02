import React from "react";

const Step1 = ({ data, errors, handleChange, handleNext }) => {
  return (
    <>
      <h1>Step 1</h1>
      <p className="subtitle">Personal Information</p>

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          value={data.name}
          onChange={handleChange}
          name="name"
          placeholder="Umaima"
          id="name"
          type="text"
          className={errors.name ? "invalid" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          value={data.email}
          onChange={handleChange}
          name="email"
          placeholder="umaima@gmail.com"
          id="email"
          type="email"
          className={errors.email ? "invalid" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="dob">Date of Birth</label>
          <input
            value={data.dob}
            onChange={handleChange}
            name="dob"
            id="dob"
            type="date"
            className={errors.dob ? "invalid" : ""}
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>

        <div className="field">
          <label htmlFor="gender">Gender</label>
          <select
            value={data.gender}
            onChange={handleChange}
            name="gender"
            id="gender"
            className={errors.gender ? "invalid" : ""}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
      </div>

      <div className="buttons">
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Step1;
