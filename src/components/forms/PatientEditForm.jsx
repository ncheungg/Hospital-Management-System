import React, { useState } from "react";
import { FormInput } from "src/components/forms/FormInput";
import styles from "./patientRegisterForm.module.css";
import Button from "@mui/material/Button";
import { updatePatient } from "src/api/db";

export const PatientEditForm = (props) => {
  const { formValsDefault } = props;

  const [hasFinished, setHasFinished] = useState(null);
  const [formVals, setFormVals] = useState(formValsDefault);

  const basicInformation = [
    {
      id: "firstName",
      name: "firstName",
      type: "text",
      pattern: "^[a-zA-Z ]*$",
      placeholder: "First Name",
      errorMessage: "Please provide a first name",
      label: "First Name",
      required: true,
    },
    {
      id: "lastName",
      name: "lastName",
      type: "text",
      pattern: "^[a-zA-Z ]*$",
      placeholder: "Last Name",
      errorMessage: "Please provide a last name",
      label: "Last Name",
      required: true,
    },
    {
      id: "dob",
      name: "dob",
      type: "date",
      errorMessage: "Please provide a date of birth",
      label: "Date of Birth",
      required: true,
    },
    {
      id: "healthCardNumber",
      name: "healthCardNumber",
      type: "text",
      pattern: "[1-9]\\d{9}",
      placeholder: "1234567890-AW",
      errorMessage: "Please provide your 10-digit health card number",
      label: "Health Card Number",
      required: true,
    },
    {
      id: "gender",
      name: "gender",
      type: "text",
      placeholder: "Gender",
      errorMessage: "Please provide a gender",
      label: "Gender",
      required: true,
    },
  ];

  const personalContactInformation = [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please provide a email",
      label: "Email",
      required: true,
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      type: "tel",
      placeholder: "1234567890",
      pattern: "\\d{10}",
      errorMessage: "Please provide a phone number",
      label: "Phone Number",
      required: true,
    },
    {
      id: "homeAddress",
      name: "homeAddress",
      type: "text",
      placeholder: "Home Address",
      errorMessage: "Please provide a home address",
      label: "Home Address",
      required: true,
    },
  ];

  const emergencyContactInformation = [
    {
      id: "eName",
      name: "eName",
      type: "text",
      pattern: "^[a-zA-Z ]*$",
      placeholder: "Name",
      errorMessage: "Please provide a name",
      label: "Name",
      required: true,
    },
    {
      id: "relationshipToPatient",
      name: "relationshipToPatient",
      type: "text",
      pattern: "^[a-zA-Z ]*$",
      placeholder: "Relationship to Patient",
      errorMessage: "Please provide their relationship to patient",
      label: "Relationship to Patient",
      required: true,
    },
    {
      id: "ePhone",
      name: "ePhone",
      type: "tel",
      placeholder: "1234567890",
      pattern: "\\d{10}",
      errorMessage: "Please provide a phone number",
      label: "Phone Number",
      required: true,
    },
    {
      id: "eEmail",
      name: "eEmail",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please provide a email",
      label: "Email",
      required: true,
    },
  ];

  const physicianInformation = [
    {
      id: "physicianName",
      name: "physicianName",
      type: "text",
      placeholder: "Physician Name",
      errorMessage: "Please provide a physician name",
      label: "Physician Name",
    },
    {
      id: "clinicName",
      name: "clinicName",
      type: "text",
      placeholder: "Clinic Name",
      errorMessage: "Please provide a clinic name",
      label: "Clinic Name",
    },
    {
      id: "clinicAddress",
      name: "clinicAddress",
      type: "text",
      placeholder: "Clinic Address",
      errorMessage: "Please provide a Clinic Address",
      label: "Clinic Address",
    },
    {
      id: "clinicPhone",
      name: "clinicPhone",
      type: "tel",
      placeholder: "1234567890",
      pattern: "\\d{10}",
      errorMessage: "Please provide a clinic phone",
      label: "Clinic Phone",
    },
    {
      id: "clinicEmail",
      name: "clinicEmail",
      type: "email",
      placeholder: "Clinic Email",
      errorMessage: "Please provide a clinic email",
      label: "Clinic Email",
    },
  ];

  const pharmacy = [
    {
      id: "pName",
      name: "pName",
      type: "text",
      placeholder: "Name",
      errorMessage: "Please provide a name",
      label: "Name",
    },
    {
      id: "pPhone",
      name: "pPhone",
      type: "tel",
      placeholder: "1234567890",
      pattern: "\\d{10}",
      errorMessage: "Please provide a phone",
      label: "Phone",
    },
    {
      id: "fax",
      name: "fax",
      type: "tel",
      placeholder: "1234567890",
      pattern: "\\d{10}",
      errorMessage: "Please provide a fax Address",
      label: "Fax Address",
    },
    {
      id: "pEmail",
      name: "pEmail",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please provide a email",
      label: "Email",
    },
    {
      id: "pAddress",
      name: "pAddress",
      type: "text",
      placeholder: "Address",
      errorMessage: "Please provide a address",
      label: "Address",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      dob,
      healthCardNumber,
      gender,
      email,
      phoneNumber,
      homeAddress,
      eName,
      relationshipToPatient,
      ePhone,
      eEmail,

      //Physician and clinic info (optional)
      physicianName = "",
      clinicName = "",
      clinicAddress = "",
      clinicPhone = "",
      clinicEmail = "",

      //Pharmacy info (optional)
      pName = "",
      pPhone = "",
      fax = "",
      pEmail = "",
      pAddress = "",
      uid,
    } = formVals;
    const patient = {
      uid,
      basicInformation: {
        firstName,
        lastName,
        dob: new Date(dob),
        healthCardNumber,
        gender,
      },
      personalContactInformation: {
        email,
        phoneNumber,
        homeAddress,
      },
      emergencyContactInformation: {
        name: eName,
        relationshipToPatient,
        phoneNumber: ePhone,
        email: eEmail,
      },
      physicianInformation: {
        physicianName,
        clinicName,
        clinicAddress,
        clinicPhone,
        clinicEmail,
      },
      pharmacy: {
        name: pName,
        phone: pPhone,
        fax,
        email: pEmail,
        address: pAddress,
      },
    };

    const status = await updatePatient(patient);
    setHasFinished(status);
  };

  const handleChange = (e) => {
    setFormVals({ ...formVals, [e.target.name]: e.target.value });
    setHasFinished(null);
  };

  return (
    <>
      <h3 className={styles.h3}>Edit Patient</h3>
      <div className={styles.center}>
        <form onSubmit={handleSubmit} className={styles.FormItems}>
          <div className={styles.mainDetails}>
            <h4 className={styles.h4}>Basic information</h4>
            {basicInformation.map((basicInformations) => (
              <FormInput
                className={styles.customFormInput}
                key={basicInformations.id}
                {...basicInformations}
                value={formVals[basicInformations.name]}
                onChange={handleChange}
              />
            ))}
            <h4 className={styles.h4}>Personal Contact Information</h4>
            {personalContactInformation.map((personalContactInformations) => (
              <FormInput
                key={personalContactInformations.id}
                {...personalContactInformations}
                value={formVals[personalContactInformations.name]}
                onChange={handleChange}
              />
            ))}
            <h4 className={styles.h4}>Emergency Contact Information</h4>
            {emergencyContactInformation.map((emergencyContactInformations) => (
              <FormInput
                key={emergencyContactInformations.id}
                {...emergencyContactInformations}
                value={formVals[emergencyContactInformations.name]}
                onChange={handleChange}
              />
            ))}{" "}
          </div>
          <div className={styles.otherDetails}>
            <h4 className={styles.h4}> Family Physician Information</h4>
            {physicianInformation.map((physicianInformations) => (
              <FormInput
                key={physicianInformations.id}
                {...physicianInformations}
                value={formVals[physicianInformations.name]}
                onChange={handleChange}
              />
            ))}
            <h4 className={styles.h4}>Preferred Pharmacy</h4>
            {pharmacy.map((pharmac) => (
              <FormInput
                key={pharmac.id}
                {...pharmac}
                value={formVals[pharmac.name]}
                onChange={handleChange}
              />
            ))}
          </div>
          <Button type="submit" className={styles.btnSub1} variant="contained">
            Submit
          </Button>
          {hasFinished && <span className="successMessage">Edit successful!</span>}
          {hasFinished === false && <span className="errorMessage">Edit failed!</span>}
        </form>
      </div>
    </>
  );
};

export default PatientEditForm;
