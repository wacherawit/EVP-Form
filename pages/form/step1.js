import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const StepOne = ( { onNext } ) => {
  return (
    <>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="NameTH" component="div" className="error" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field type="text" id="lastName" name="lastName" />
        <ErrorMessage name="lastName" component="div" className="error" />
      </div>
      <button type="button" onClick={onNext}>Next</button>
    </>
  );
};

export default StepOne;
