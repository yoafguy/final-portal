import React, { useState, useEffect } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [associationVisible, setAssociationVisible] = useState(false);

    const handleAssociationChange = (e) => {
        setAssociationVisible(e.target.value === 'Yes');
    };

 

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
                            </div>
                            <div className='row'>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="Othername">Other Name</label>
                                                <input type="text" name="Othername" className="form-control" id="Othername" placeholder="e.g. Aliyu" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="DOB">Date of Birth</label>
                                            
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

                             </div>
                             <div className='row'>
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
                                                <input type="text" className="form-control" name="address" id="address" placeholder="e.g. N0 1 Commissioner road, opposite Ministry of works." required />
                                            </div>
                                        </div>

                             </div>
                             <div className='row'>

                                   <div className="col-md-6 p-sm-0">
                                            <div className="form-group country-select">
                                                <label htmlFor="Qualification">Educational level</label>
                                                <div className="select-input choose-country">
                                                    <span></span>
                                                    <select id="Qualification" name="Qualification" className="form-control" required>
                                                        <option value="Select Qualification..." disabled selected>Qualification</option>
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
                                                        <option value="Select Marital Status..." disabled selected>Marital Status</option>
                                                        <option value="Married">Married</option>
                                                        <option value="Single">Single</option>
                                                        <option value="Widow">Widow</option>
                                                        <option value="Widower">Widower</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                             </div>
                             <div className='row'>
                                   <div className="col-md-6 p-sm-0">
                                            <div className="form-group">
                                                <label htmlFor="PhoneNumber">Phone number</label>
                                                <input type="tel" className="form-control" name="PhoneNumber" id="PhoneNumber" placeholder="e.g. 09131313131" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-sm-0">
                                    <div className="form-group">
                                        <label htmlFor="IslamicEducation" className="questionsLabel">Islamic Education</label>
                                        <input type="text" name="IslamicEducation" className="form-control" id="IslamicEducation" placeholder="Specify your Islamic education" />
                                    </div>
                                    </div>
                                        

                             </div>
                             <div className='row'>
                             <div className="col-md-6 p-sm-0">
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
                           
                                  <div className="col-md-6 p-sm-0">

                                   <div className="form-group">
                                        <label htmlFor="DroppedOut" className="questionsLabel">Dropped out?</label>
                                        <div className="check-gender">
                                            <div className="custom-radio" >
                                                <input type="radio" name="DroppedOut" value="Yes" className="custom-control-input" id="DroppedOutYes" required />
                                                <label className="custom-control-label" htmlFor="DroppedOutYes">Yes</label>
                                            </div>
                                            <div className="custom-radio">
                                                <input type="radio" name="DroppedOut" value="No" className="custom-control-input" id="DroppedOutNo" required />
                                                <label className="custom-control-label" htmlFor="DroppedOutNo">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    


                             </div>
                             <div className='row'>
                                  <div className="col-md-6 p-sm-0">
                                   <div className="form-group">
                                        <label htmlFor="Employment" className="questionsLabel">Have you ever been employed?</label>
                                        <div className="check-gender">
                                            <div className="custom-radio">
                                                <input type="radio" name="Employment" value="Yes" className="custom-control-input" id="EmploymentYes" required />
                                                <label className="custom-control-label" htmlFor="EmploymentYes">Yes</label>
                                            </div>
                                            <div className="custom-radio">
                                                <input type="radio" name="Employment" value="No" className="custom-control-input" id="EmploymentNo" required />
                                                <label className="custom-control-label" htmlFor="EmploymentNo">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6 p-sm-0">
                                    <div className="form-group">
                                        <label htmlFor="JobAcceptance" className="questionsLabel">Would you accept any job available?</label>
                                        <div className="check-gender">
                                            <div className="custom-radio">
                                                <input type="radio" name="JobAcceptance" value="Yes" className="custom-control-input" id="JobAcceptanceYes" required />
                                                <label className="custom-control-label" htmlFor="JobAcceptanceYes">Yes</label>
                                            </div>
                                            <div className="custom-radio">
                                                <input type="radio" name="JobAcceptance" value="No" className="custom-control-input" id="JobAcceptanceNo" required />
                                                <label className="custom-control-label" htmlFor="JobAcceptanceNo">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                             </div>
                             <div className='row'>
                             <div className="col-md-6 p-sm-0">
                                     <div className="form-group">
                                        <label htmlFor="SkillsTraining" className="questionsLabel">Are you ready for skills acquisition training?</label>
                                        <div className="check-gender">
                                            <div className="custom-radio">
                                                <input type="radio" name="SkillsTraining" value="Yes" className="custom-control-input" id="SkillsTrainingYes" required />
                                                <label className="custom-control-label" htmlFor="SkillsTrainingYes">Yes</label>
                                            </div>
                                            <div className="custom-radio">
                                                <input type="radio" name="SkillsTraining" value="No" className="custom-control-input" id="SkillsTrainingNo" required />
                                                <label className="custom-control-label" htmlFor="SkillsTrainingNo">No</label>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-md-6 p-sm-0">
                                      
                                    <div className="form-group">
                                        <label htmlFor="Association" className="questionsLabel">Do you have an association?</label>
                                        <div className="check-gender">
                                            <div className="custom-radio">
                                                <input type="radio" name="Association" value="Yes" className="custom-control-input" id="AssociationYes" required onChange={handleAssociationChange} />
                                                <label className="custom-control-label" htmlFor="AssociationYes">Yes</label>
                                            </div>
                                            <div className="custom-radio">
                                                <input type="radio" name="Association" value="No" className="custom-control-input" id="AssociationNo" required onChange={handleAssociationChange} />
                                                <label className="custom-control-label" htmlFor="AssociationNo">No</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                             </div>
      
                               
                                 
                                
                               
                                    
                             
                                    {associationVisible && (
                                        <>
                                            <div className="form-group">
                                                <label htmlFor="AssociationName">Name of the Association/Club</label>
                                                <input type="text" name="AssociationName" className="form-control" id="AssociationName" placeholder="Name of the Association/Club" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="AssociationAddress">Association Address</label>
                                                <input type="text" name="AssociationAddress" className="form-control" id="AssociationAddress" placeholder="Address of the Association/Club" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="ContactPerson">Contact Person</label>
                                                <input type="text" name="ContactPerson" className="form-control" id="ContactPerson" placeholder="Contact Person" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="AssociationRegistered">Is your Association registered with a regulatory body?</label>
                                                <div className="check-gender">
                                                    <div className="custom-radio">
                                                        <input type="radio" name="AssociationRegistered" value="Yes" className="custom-control-input" id="AssociationRegisteredYes" required />
                                                        <label className="custom-control-label" htmlFor="AssociationRegisteredYes">Yes</label>
                                                    </div>
                                                    <div className="custom-radio">
                                                        <input type="radio" name="AssociationRegistered" value="No" className="custom-control-input" id="AssociationRegisteredNo" required />
                                                        <label className="custom-control-label" htmlFor="AssociationRegisteredNo">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="ContactGSM">Contact GSM</label>
                                                <input type="tel" name="ContactGSM" className="form-control" id="ContactGSM" placeholder="Contact GSM" />
                                            </div>
                                        </>
                                    )}
                                        <div className='row'>
                                  <div className="col-md-6 p-sm-0">
                                  <div className="form-group">
                                        <label htmlFor="SpecialNeeds">People with special needs</label>
                                        <input type="text" name="SpecialNeeds" className="form-control" id="SpecialNeeds" placeholder="Nature of disability" />
                                    </div>
                                    </div>
                                    <div className="col-md-6 p-sm-0">
                                    <div className="form-group">
                                        <label htmlFor="SpecialSkills">Do you have any special skills?</label>
                                        <input type="text" name="SpecialSkills" className="form-control" id="SpecialSkills" placeholder="Specify your special skills" />
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
