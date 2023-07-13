import Head from "next/head"
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import StepOne from "./step1";
import StepTwo from "./step2";

const MultiForm = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const ProgressBar = ({ step }) => {
      const [activeStep, setActiveStep] = useState(currentPage);
      const progressBarStyles = {
        width: `${activeStep * 25}%`,
      };

      return (
        <div className="progress-bar">
          <div className="progress" style={progressBarStyles}></div>
          <div className="progress-steps">
            <div className={` ${activeStep >= 1 ? "active" : ""}`}></div>
            <div className={`${activeStep >= 2 ? "active" : ""}`}></div>
            <div className={`${activeStep >= 3 ? "active" : ""}`}></div>
            <div className={`${activeStep >= 4 ? "active" : ""}`}></div>
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
        <h1>Multi-Step Form</h1>
        <ProgressBar step={currentPage} />
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          phone: Yup.string().required('Phone is required'),
        })}
      >
          {/* {({ isSubmitting, isValidating }) => (
            <Form className="FormBox">
              {currentPage === 1 && (
                <>
                  <h2>Step 1: Personal Information</h2>
                  <div className="FormCon">
                    <label htmlFor="NameTH">ชื่อ - นามสกุล*</label>
                    <div className="InputBox">
                      <div>
                        <Field type="text" id="NameTH" name="NameTH" />
                        <ErrorMessage
                          name="NameTH"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div>
                        <Field type="text" id="LastNameTH" name="LastNameTH" />
                        <ErrorMessage
                          name="LastNameTH"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="error"
                    />
                  </div>
                  <button type="button" onClick={handleNextPage}>
                    Next
                  </button>
                </>
              )}

              {currentPage === 2 && (
                <>
                  <h2>Step 2: Contact Information</h2>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Address</label>
                    <Field type="text" id="address" name="address" />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="error"
                    />
                  </div>
                  <button type="button" onClick={handlePreviousPage}>
                    Previous
                  </button>
                  <button type="submit" disabled={isSubmitting || isValidating}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </>
              )}
            </Form>
          )} */}
          {({ isSubmitting }) => (
            <Form>
              {currentPage === 1 && <StepOne onNext={handleNextPage} />}
              {currentPage === 2 && <StepTwo onPrevious={handlePreviousPage} />}
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default MultiForm;