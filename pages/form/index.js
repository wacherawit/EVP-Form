import Head from "next/head"
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import StepOne from "../../component/form/step1";
import StepTwo from "../../component/form/step2";

const initialValues = {
  personalInfo: {
    Name: {
      firstName: "",
      lastName: "",
    },
    NameEN : {
      firstNameEN: "",
      lastNameEN: "",
    },
    Nickname: "",
    Gender : "",
    Birth : {
      date: "",
      age: "",
    },
    Blood: "",
    Id_card: "",
    Nation: "",
    Born: "",
    Phone: {
      phone: "",
      Emergen: "",
    },
    Email: "",
  },
  Address: {
    Home: "",
    province: "",
    county: "",
    Sub_dis: "",
    Post: "",
  },
  Address_contact: {
    Home: "",
    province: "",
    county: "",
    Sub_dis: "",
    Post: "",
  }
};

const validationSchema = Yup.object({
  personalInfo: Yup.object({
    Name: Yup.object({
      firstName: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      lastName: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    }),
    NameEN: Yup.object({
      firstNameEN: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      lastNameEN: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    }),
    Nickname: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Gender: Yup.string().required("Please select your gender"),
    Birth: Yup.object({
      date: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      age: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    }),
    Blood: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Id_card: Yup.number()
      .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
      .typeError("*กรุณากรอกข้อมูลให้ถูกต้อง"),
    Nation: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Born: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Phone: Yup.object({
      phone: Yup.number()
        .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
        .typeError("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      Emergen: Yup.number()
        .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
        .typeError("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    }),
    Email: Yup.string()
      .email("*กรุณากรอกข้อมูลให้ครบถ้วน")
      .required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
  }),
  Address: Yup.object({
    Home: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    province: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    county: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Sub_dis: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Post: Yup.number()
      .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
      .typeError("*กรุณากรอกข้อมูลให้ถูกต้อง"),
  }),
  Address_contact: Yup.object({
    Home: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    province: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    county: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Sub_dis: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Post: Yup.number()
      .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
      .typeError("*กรุณากรอกข้อมูลให้ถูกต้อง"),
  })
});

const MultiForm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ProgressBar = ({ step }) => {
      const [activeStep, setActiveStep] = useState(currentPage);
      const progressBarStyles = {
        width: `${(activeStep - 1) * 25}%`,
        backgroundColor: activeStep >= step ? 'green' : 'red',
      };
    
      return (
        <div className="progress-bar">
          <div className="progress" style={progressBarStyles}></div>
          <div className="progress-steps d-flex">
            <div className={`${activeStep >= 1 ? 'active' : ''}`}></div>
            <div className={`${activeStep >= 2 ? 'active' : ''}`}></div>
            <div className={`${activeStep >= 3 ? 'active' : ''}`}></div>
            <div className={`${activeStep >= 4 ? 'active' : ''}`}></div>
          </div>
        </div>
      );
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePreviousPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    return (
      <div>
        <h1 className="Header">APPLICATION FORM</h1>
        <ProgressBar step={currentPage} />
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <button type="submit">Submit</button>
              <button onClick={() => handleNextPage()}>next</button>
              {currentPage === 1 && <StepOne onNext={handleNextPage} />}
              {currentPage === 2 && <StepTwo onPrevious={handlePreviousPage} />}
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default MultiForm;