import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const StepTwo = ({ onPrevious, onSubmit }) => {
  return (
    <>
      <h2>Step 2: Contact Information</h2>
      <div>
        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" className="error" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Field type="text" id="phone" name="phone" />
        <ErrorMessage name="phone" component="div" className="error" />
      </div>
      <button type="button" onClick={onPrevious}>Previous</button>
      <button type="submit">Submit</button>
    </>
  );
};
export default StepTwo;

