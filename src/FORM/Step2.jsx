import React from "react";

const Step2 = ({ data, errors, handleChange, handleNext, handlePrev }) => {
  return (
    <>
      <h1>Step 2</h1>
      <p className="subtitle">Contact Details</p>

      <div className="row">
        <div className="field">
          <label htmlFor="c">Contact</label>
          <input
            value={data.contact}
            onChange={handleChange}
            name="contact"
            id="c"
            type="tel"
            placeholder="923489374830"
            className={errors.contact ? "invalid" : ""}
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>

        <div className="field">
          <label htmlFor="ct">Country</label>
          <select
            value={data.country}
            onChange={handleChange}
            name="country"
            id="ct"
            className={errors.country ? "invalid" : ""}
          >
            <option value="">Select country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Other">Other</option>
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="city">City</label>
        <input
          value={data.city}
          onChange={handleChange}
          name="city"
          id="city"
          type="text"
          placeholder="Karachi"
          className={errors.city ? "invalid" : ""}
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>

      <div className="field">
        <label htmlFor="address">Address</label>
        <input
          value={data.address}
          onChange={handleChange}
          name="address"
          id="address"
          type="text"
          placeholder="House no, Street, Area"
          className={errors.address ? "invalid" : ""}
        />
        {errors.address && <span className="error">{errors.address}</span>}
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

export default Step2;
