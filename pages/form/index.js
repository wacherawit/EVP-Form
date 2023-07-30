import Head from "next/head";
import { useState } from "react";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { object, boolean, string, mixed, array } from 'yup';
import DatePicker from "react-datepicker";
import StepOne from "../../component/form/step1";
import StepTwo from "../../component/form/step2";
import StepThree from "@/component/form/step3";
import StepFour from "@/component/form/step4";
import StepFive from "@/component/form/step5";
import StepSix from "@/component/form/step6";
import { Value } from "sass";

const initialValues = {
  personalInfo: {
    Name: {
      firstName: "",
      lastName: "",
    },
    NameEN: {
      firstNameEN: "",
      lastNameEN: "",
    },
    Nickname: "",
    Gender: "",
    Birth: {
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
    Same_address: false,
    Home: "",
    province: "",
    county: "",
    Sub_dis: "",
    Post: "",
  },
  Status: {
    status: "",
    family: "",
    soldier: "",
    Marry: {
      marry: false,
      marry_status: "",
      marry_firstname: "",
      marry_lastname: "",
      marry_jobs: "",
      marry_jobs_place: "",
      child: "",
      child_study: "",
      child_teen: "",
    },
  },
  More_person: [{}],
  Education: {
    high_school: false,
    School: {
      School_name: "",
      School_location: "",
      School_year: {
        start1: "",
        end1: "",
      },
      School_major: "",
    },
    Degree: "",
    University: {
      Uni_name: "",
      Uni_location: "",
      Uni_year: {
        start: "",
        end: "",
      },
      Uni_major: "",
    },
  },
  Experience_default: [
    {
      Company: {
        Company_name: "",
        Company_type: "",
        Company_location: "",
        Jobs: "",
        Time: {
          start: "",
          end: "",
        },
        Position: {
          start: "",
          end: "",
        },
        Salary: {
          start: "",
          end: "",
        },
      },
    },
  ],
  Experience: [{
    isExperience: false,
  }],
  Know: {
    Name: "",
    relation: "",
  },
  Request: {
    Request_1: "",
    Request_2: "",
    Request_3: "",
  },
  Start_work: {
    date: "",
    now: false,
    Salary: "",
  },
  Term: false,
  File: {
    Resume: null,
    Transcript: null,
    Port: [],
    Link: [
      {
        Link: "",
      },
    ],
  },
  Submit_Term: [],
  Name_com: {
    firstName: "",
    lastName: "",
  },
  Agree: false,
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
  }),
  Status: Yup.object({
    status: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    family: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    soldier: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
  }),
  More_person: Yup.array().of(
    Yup.object().shape({
      firstname: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      lastname: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      phone: Yup.number()
        .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
        .typeError("*กรุณากรอกข้อมูลให้ถูกต้อง"),
      relation: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      home: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      jobs: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    })
  ),
  Education: Yup.object({
    Degree: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    School: Yup.object({
      School_name: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      School_location: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      School_year: Yup.object({
        start: Yup.number()
          .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
          .typeError("*กรุณากรอกข้อมูลให้ครบถ้วน"),
        end: Yup.number()
          .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
          .typeError("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      }),
      School_major: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    }),
    University: Yup.object({
      Uni_name: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      Uni_location: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      Uni_year: Yup.object({
        start: Yup.number()
          .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
          .typeError("*กรุณากรอกข้อมูลให้ครบถ้วน"),
        end: Yup.number()
          .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
          .typeError("*กรุณากรอกข้อมูลให้ครบถ้วน"),
      }),
      Uni_major: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    }),
  }),
  Experience: Yup.array().of(
    Yup.object().shape({
      isExperience: Yup.boolean(),
      Company: Yup.object().when('isExperience', {
        is: false,
        then: () => Yup.object({
          Company_name: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
          Company_type: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
          Company_location: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
          Jobs: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
          Time: Yup.object().shape({
            start: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
            end: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
          }),
          Position: Yup.object().shape({
            start: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
            end: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน'),
          }),
          Salary: Yup.object().shape({
            start: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน')
              .typeError('*กรุณากรอกข้อมูลให้ถูกต้อง'),
            end: Yup.string().required('*กรุณากรอกข้อมูลให้ครบถ้วน')
              .typeError('*กรุณากรอกข้อมูลให้ถูกต้อง'),
          }),
        }),
      }),
    })
  ),
  
  Request: Yup.object({
    Request_1: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Request_2: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    Request_3: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
  }),
  Start_work: Yup.object({
    now: Yup.boolean(),
    Salary: Yup.number()
      .required("*กรุณากรอกข้อมูลให้ครบถ้วน")
      .typeError("*กรุณากรอกข้อมูลให้ถูกต้อง"),
  }),
  Term: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
  File: Yup.object({
    Resume: Yup.mixed().required("Require"),
    Transcript: Yup.mixed().required("Require"),
  }),
  Submit_Term: Yup.array().of(
    Yup.boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions")
  ),
  Name_com: Yup.object({
    firstName: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
    lastName: Yup.string().required("*กรุณากรอกข้อมูลให้ครบถ้วน"),
  }),
  Agree: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

const MultiForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const ProgressBar = ({ step }) => {
    return (
      <div className="progress-bar">
        <div className="progress-steps d-flex">
          <div className={`Progress ${currentPage >= 1 ? "active" : ""}`}></div>
          <div className={`Progress ${currentPage >= 2 ? "active" : ""}`}></div>
          <div className={`Progress ${currentPage >= 3 ? "active" : ""}`}></div>
          <div className={`Progress ${currentPage >= 4 ? "active" : ""}`}></div>
          <div className={`Progress ${currentPage >= 5 ? "active" : ""}`}></div>
          <div className={`Progress ${currentPage >= 6 ? "active" : ""}`}></div>
        </div>
      </div>
    );
  };

  const handleNextPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const onSubmit = (values) => {
    console.log("form submitted");
    console.log(values);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <Head>
        <title>Application Form</title>
      </Head>
      <h1 className="Header">APPLICATION FORM</h1>
      <ProgressBar step={currentPage} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={true}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              {currentPage === 1 && <StepOne onNext={handleNextPage} />}
              {currentPage === 2 && (
                <StepTwo
                  onPrevious={handlePreviousPage}
                  onNext={handleNextPage}
                />
              )}
              {currentPage === 3 && (
                <StepThree
                  onPrevious={handlePreviousPage}
                  onNext={handleNextPage}
                />
              )}
              {currentPage === 4 && (
                <StepFour
                  onPrevious={handlePreviousPage}
                  onNext={handleNextPage}
                />
              )}
              {currentPage === 5 && (
                <StepFive
                  onPrevious={handlePreviousPage}
                  onNext={handleNextPage}
                />
              )}
              {currentPage === 6 && (
                <StepSix onPrevious={handlePreviousPage} onSubmit={onSubmit} />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiForm;
