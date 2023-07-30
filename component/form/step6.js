import Head from "next/head";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import React, { useState } from "react";


const StepSix = ({onPrevious, onSubmit}) => {
  const formik = useFormikContext();

  const Term_check = [
    "ข้าพเจ้ารับทราบและตกลงยินยอมให้บริษัทเก็บรวบรวม และ/หรือ ใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคล ของข้าพเจ้า ที่ได้ให้ไว้หรือมีอยู่กับบริษัท หรือที่บริษัทได้รับ หรือเข้าถึงได้จากแหล่งอื่น",
    "ข้าพเจ้ารับทราบและยินยอมให้บริษัทเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลที่เป็นข้อมูลอ่อนไหวของข้าพเจ้า ตามมาตรา 26 แห่งพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562 ได้แก่ ข้อมูลศาสนา เพื่อใช้ดําเนินการ ที่เกี่ยวกับรูปแบบเครื่องแต่งกาย หรือการบริการด้านอาหารที่ต้องมีการจัดแยกเป็นพิเศษ หรือการดําเนินการใด ๆ ที่เกี่ยวข้อง กับพิธีกรรมทางศาสนา รวมถึงใช้เป็นเอกสาร ประกอบการลา หรือวัตถุประสงค์อื่น ๆ ในลักษณะเดียวกัน",
    "ข้าพเจ้ารับทราบและยินยอมให้บริษัทเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลที่เป็นข้อมูลอ่อนไหวของข้าพเจ้า ตามมาตรา 26 แห่งพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562 ได้แก่ ข้อมูลสุขภาพ เพื่อดําเนินการเกี่ยวกับ การเบิกจ่าย สวัสดิการ การตรวจสุขภาพประจําปีของพนักงาน หรือวัตถุประสงค์อื่น ๆ ในลักษณะเดียวกัน",
    "ข้าพเจ้ารับทราบและยินยอมให้บริษัทเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลที่เป็นข้อมูลอ่อนไหวของข้าพเจ้า ตามมาตรา 26 แห่งพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562 ได้แก่ ข้อมูลชีวภาพ เพื่อการเข้า - ออก บริเวณอาคาร และเพื่อรักษา ความปลอดภัยของบุคคลและทรัพย์สินภายในและบริเวณอาคาร หรือวัตถุประสงค์อื่น ๆ ในลักษณะเดียวกัน",
  ];

  return (
    <>
      <div className="FormBox">
        <div>
          <div className="fs-5">
            <span className="fw-light fs-5">*กรุณาอ่านเอกสาร&nbsp;</span>
            <span>
              คำขอความยินยอม ในการเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคล
              สำหรับผู้สมัครงาน และนักศึกษาฝึกงาน (Consent Form)
            </span>
            <span className="fw-light">
              &nbsp; อย่างละเอียด <br></br>{" "}
              และกดยอมรับหากคุณตกลงให้เราใช้ข้อมูลส่วนบุคคลและข้อมูลใดๆ ของคุณ
              ให้แก่บริษัทฯ เพื่อวัตถุประสงค์ ในด้านทรัพยากรบุคคล
            </span>
          </div>
          <div className="Logo d-flex flex-column align-items-center justify-content-center p-4 text-center">
            <Image src="/Evp-Logo.svg" width={199} height={40} />
            <span className="fs-5 mt-4">
              แบบคำขอความยินยอม <br></br>
              การเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคล สำหรับผู้สมัครงาน
              และนักศึกษาฝึกงาน<br></br>
              (Consent Form)
            </span>
          </div>
          <div className="rule">
            <span className="font_detail">
              &emsp;&emsp;&emsp;&emsp;เพื่อปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
              พ.ศ.2562 บริษัท อีเว้นท์ไทย จํากัด และบริษัทในเครือ (“บริษัท”)
              ซึ่งจัดเก็บข้อมูลส่วนบุคคลของเจ้าของข้อมูล
              เพื่อปฏิบัติตามภาระหน้าที่ของบริษัทที่มีตามกฎหมาย
              หรือตามสัญญาที่มีอยู่ กับเจ้าของข้อมูลหรือ
              เพื่อประโยชน์อันชอบด้วยกฎหมายของบริษัท โดยบริษัทได้ระบุรายละเอียด
              และขอบเขตการเก็บรวบรวม ใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคล
              ของเจ้าของข้อมูล เช่น วัตถุประสงค์ ของการเก็บรวบรวม
              ใช้และ/หรือเปิดเผยข้อมูลส่วนบุคคล
              ประเภทของข้อมูลส่วนบุคคลที่จัดเก็บ ระยะเวลาในการจัดเก็บ
              บุคคลหรือนิติบุคคลที่บริษัทอาจเปิดเผยข้อมูลส่วนบุคคล
              ให้สิทธิอันชอบด้วยกฎหมายของบริษัทในการจัดเก็บข้อมูล
              สิทธิของเจ้าของข้อมูลตามกฎหมาย เป็นต้น
              ตามที่ปรากฏในนโยบายการคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy) และ
              ประกาศความเป็น ส่วนตัวสําหรับพนักงาน (Privacy Notice) ของบริษัท
            </span>
          </div>
          <div className="FormCon NameTH font_detail d-flex justify-content-center mt-3 mb-3">
            <span htmlFor="Name" className="me-5">
              ข้าพเจ้า{" "}
            </span>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="ชื่อ"
                  type="text"
                  id="Name_com.firstName"
                  name="Name_com.firstName"
                />
                <ErrorMessage
                  name="Name_com.firstName"
                  component="div"
                  className="error"
                />
                <ErrorMessage
                  name="Name_com.lastName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="Input_right">
                <Field
                  className="textInput"
                  placeholder="นามสกุล"
                  type="text"
                  id="Name_com.lastName"
                  name="Name_com.lastName"
                />
              </div>
            </div>
          </div>

          <div className="Term">
            <div className="FormCon Term w-100 align-items-start">
              <div className="InputBox w-100 align-items-start justify-content-center flex-column">
                {Term_check.map((Term, index) => (
                  <div key={index} className="d-flex mt-4">
                    <div className="Check_box d-flex mt-2">
                      <Field
                        type="checkbox"
                        name={`Submit_Term.${index}`}
                        className="form-check-input ms-0"
                        checked={formik.values.Submit_Term[index]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <ErrorMessage
                        name={`Submit_Term.${index}`}
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="fw-light ms-5 fs-5">{Term}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rule mt-3">
            <span className="font_detail">
              &emsp;&emsp;&emsp;&emsp;การเก็บข้อมูลอ่อนไหวดังกล่าว
              ตามรายละเอียดที่ปรากฏในนโยบายการคุ้มครองข้อมูลส่วนบุคคล (Privacy
              Policy) และ ประกาศความเป็นส่วนตัวสําหรับ ผู้สมัครงาน (Privacy
              Notice) ของบริษัท
              <br></br>
            </span>
            <span className="font_detail">
              &emsp;&emsp;&emsp;&emsp;ทั้งนี้ ก่อนการแสดงเจตนา
              ข้าพเจ้าได้อ่านหนังสือยินยอมเกี่ยวกับข้อมูลส่วนบุคคลฉบับนี้โดยตลอดแล้ว
              ข้าพเจ้าให้ ความยินยอม
              หรือปฏิเสธไม่ให้ความยินยอมในเอกสารนี้ด้วยความสมัครใจ
              ปราศจากการบังคับหรือชักจูง และข้าพเจ้าทราบว่า
              ข้าพเจ้าสามารถถอนความ
              ยินยอมนี้เสียเมื่อใดก็ได้เว้นแต่ในกรณีมีข้อจํากัดสิทธิตามกฎหมายหรือยังมีสัญญาระหว่างข้าพเจ้า
              กับบริษัทที่ให้ประโยชน์แก่ข้าพเจ้าอยู่ <br />
            </span>
            <span className="font_detail">
              &emsp;&emsp;&emsp;&emsp;กรณีที่ข้าพเจ้าประสงค์จะขอถอนความยินยอม
              ข้าพเจ้าทราบว่าการถอนความยินยอมจะมีผลทําให้ข้าพเจ้าได้รับความสะดวก
              ในการใช้บริการน้อยลง หรือ
              ไม่สามารถเข้าถึงฟังก์ชันการใช้งานบางอย่างได้ ทั้งนี้
              ข้าพเจ้าทราบว่าการถอนความยินยอมดังกล่าว ไม่มีผลกระทบ
              ต่อการประมวลผลข้อมูลส่วนบุคคลที่ได้ดําเนินการเสร็จสิ้นไปแล้วก่อนการถอนความยินยอม
              ในกรณีที่ท่านประสงค์ร้องขอใช้สิทธิของเจ้าของ
              ข้อมูลส่วนบุคคลตามที่พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562
              กําหนดไว้ ท่านสามารถติดต่อบริษัทเพื่อร้องขอใช้สิทธิตามกฎหมาย
              ผ่านช่องทาง [dpo@eventthai.com]
            </span>
          </div>
          <div className="Agree Form_log mt-4">
            <div className="FormCon Term w-100 align-items-start">
              <div className="InputBox w-100 align-items-start justify-content-start">
                <div className="Check_box d-flex">
                  <Field
                    type="checkbox"
                    name="Agree"
                    className="form-check-input ms-0"
                    value="checked"
                    checked={formik.values.Agree}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <ErrorMessage name="Agree" component="div" className="error" />
                </div>
                <div className="fw-light fs-5">ตกลงและยอมรับเงื่อนไข</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Button_form">
        <button
        onClick={onSubmit}
        type="submit"
          className={`Next ${
            !!formik.errors.Submit_Term ||
            !!formik.errors.Name_com ||
            !!formik.errors.Agree
              ? "disabled"
              : ""
          }`}
        >
          เสร็จสิ้น
        </button>
      </div>
    </>
  );
};

export default StepSix;
