import React, { useState, useEffect } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Register() {
    return (
        <div className="ugf-bg ufg-main-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 p-sm-0">
                        <div className="ugf-form">
                            <form name="contact" method="POST" data-netlify="true" id="commentForm">
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="input-block">
                                    <h4>Personal Information</h4>
                                    <div className="row">
                                        <div className="col-md-6 p-sm-0" style={{ marginLeft: '-5px' }}>
                                            <div className="form-group">
                                                <label htmlFor="Firstname">First Name</label>
                                                <input type="text" name="Firstname" className="form-control" id="Firstname" placeholder="e.g. Yusuf" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="Lastname">Last Name</label>
                                                <input type="text" name="Lastname" className="form-control" id="Lastname" placeholder="e.g. Aliyu" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="Othername">Other Name</label>
                                                <input type="text" name="Othername" className="form-control" id="Othername" placeholder="e.g. Aliyu" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="DOB">Date of Birth</label>
                                                <p>Please enter your Date of Birth (DOB) as per your National Identification Number (NIN)</p>
                                                <div className="birth-date">
                                                    <div className="select-input birth-date-input">
                                                        <span></span>
                                                       
                                                        <select id="inputDate" name="day" className="form-control" required>
                                                            <option value="">Date</option>
                                                            {[...Array(31)].map((_, i) => (
                                                                <option key={i + 1} value={i + 1}>
                                                                    {String(i + 1).padStart(2, '0')}
                                                             </option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                    <div className="select-input birth-date-input">
                                                        <span></span>
                                                        <select id="inputMonth" name="month" className="form-control" required>
                                                                <option value="">Month</option>
                                                                {[...Array(12)].map((_, i) => (
                                                                                                                                <option key={i + 1} value={i + 1}>
                                                                        {String(i + 1).padStart(2, '0')}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                       
                                                    </div>
                                                    <div className="select-input birth-date-input">
                                                        <span></span>
                                                        <select id="inputYear" name="year" className="form-control" required>
                                                                <option value="">Year</option>
                                                                {Array.from({ length: 50 }, (_, i) => 1970 + i).map(year => (
                                                                    <option key={year} value={year}>
                                                                        {year}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group country-select">
                                                <label htmlFor="LGA">Local Government Area</label>
                                                <div className="select-input choose-country">
                                                    <span></span>
                                                    <select id="LGA" name="LGA" className="form-control" required>
                                                        <option value="Select LGA..." disabled selected>Select LGA...</option>
                                                        {/* Add other LGA options here */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="Address">Address Line</label>
                                                <input type="text" className="form-control" name="address" id="address" placeholder="e.g. N0 1 Commisioner road, opposite Ministry of works." required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group country-select">
                                                <label htmlFor="Qualification">Educational level</label>
                                                <div className="select-input choose-country">
                                                    <span></span>
                                                    <select id="Qualification" name="Qualification" className="form-control" required>
                                                        <option value="Select LGA..." disabled selected>Qualification</option>
                                                        <option value="Doctorate">Doctorate degree</option>
                                                        <option value="Masters">Master's Degree</option>
                                                        <option value="Undergraduate">Undergraduate programs</option>
                                                        <option value="Secondary">Secondary School Certificate</option>
                                                        <option value="Primary">Primary School Certificate</option>
                                                        <option value="None">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group country-select">
                                                <label htmlFor="MaritalStatus">Marital Status</label>
                                                <div className="select-input choose-country">
                                                    <span></span>
                                                    <select id="MaritalStatus" name="MaritalStatus" className="form-control" required>
                                                        <option value="Select LGA..." disabled selected>Marital Status</option>
                                                        <option value="Married">Married</option>
                                                        <option value="Single">Single</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="PhoneNumber">Phone number</label>
                                                <input type="tel" className="form-control" name="PhoneNumber" id="PhoneNumber" placeholder="e.g. 09131313131" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <div className="check-gender">
                                            <div className="custom-radio">
                                                <input type="radio" name="gender" value="Male" className="custom-control-input" id="Gmale" required />
                                                <label className="custom-control-label" htmlFor="Gmale">Male</label>
                                            </div>
                                            <div className="custom-radio">
                                                <input type="radio" name="gender" value="Female" className="custom-control-input" id="Gfemale" required />
                                                <label className="custom-control-label" htmlFor="Gfemale">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-block">
                                    <div className="form-group">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" name="checkBox" className="custom-control-input" id="customControlValidation1" required />
                                            <label className="custom-control-label" htmlFor="customControlValidation1">
                                                <Link to="/terms">
                                                I accept the Terms & Conditions and Privacy policy
                                                </Link>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn" type="submit">Submit Documents</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
