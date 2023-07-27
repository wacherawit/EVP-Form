import Head from "next/head";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import React, { useState } from "react";


const StepFour = ({ onPrevious, onNext }) => {
  const formik = useFormikContext();


  const test = () => {
    console.log(formik.values)
    console.log(formik.errors)
  };
  return (
    <>
      <div className="FormBox">
        <button onClick={() => test()}>Test</button>
        <div>
          <div className="Know Form_log border-top-0">
            <div className="FormCon Knwo_name w-100 justify-content-between">
              <label htmlFor="Know.Name">
                บุคคลในบริษัทที่ท่านรู้จักคุ้นเคย
              </label>
              <div className="InputBox w-50 justify-content-center">
                <div className="Input_left">
                  <Field
                    className="textInput_long"
                    placeholder="ชื่อ - นามสกุล"
                    type="text"
                    id="Know.Name"
                    name="Know.Name"
                  />
                </div>
              </div>
            </div>
            <div className="FormCon Know_relation w-100 justify-content-between">
              <label htmlFor="Know.relation">ความสัมพันธ์</label>
              <div className="InputBox w-50 justify-content-center">
                <div className="Input_left">
                  <Field
                    className="textInput_long"
                    placeholder="ความสัมพันธ์"
                    type="text"
                    id="Know.relation"
                    name="Know.relation"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Request Form_log">
            <div className="FormCon Knwo_name w-100 justify-content-between">
              <label htmlFor="Request_1">
                ตำแหน่งงานที่ต้องการมีการค้ำประกัน*
              </label>
              <div className="InputBox w-50 justify-content-center">
                <div className="Radio d-flex justify-content-end">
                  <label className="radio-button">
                    <div className="radio_box">
                      <Field
                        className="Picker"
                        type="radio"
                        name="Request.Request_1"
                        value="ไม่ขัดข้อง"
                      />
                    </div>
                    ไม่ขัดข้อง
                  </label>
                  <label className="radio-button">
                    <div className="radio_box">
                      <Field
                        className="Picker"
                        type="radio"
                        name="Request.Request_1"
                        value="ขัดข้อง"
                      />
                    </div>
                    ขัดข้อง
                  </label>
                </div>
              </div>
            </div>
            <div className="FormCon Knwo_name w-100 justify-content-between">
              <label htmlFor="Request_1">
                การปฏิบัติงานที่เป็นกะหมุนเวียนกันไป*
              </label>
              <div className="InputBox w-50 justify-content-center">
                <div className="Radio d-flex justify-content-end">
                  <label className="radio-button">
                    <div className="radio_box">
                      <Field
                        className="Picker"
                        type="radio"
                        name="Request.Request_2"
                        value="ไม่ขัดข้อง"
                      />
                    </div>
                    ไม่ขัดข้อง
                  </label>
                  <label className="radio-button">
                    <div className="radio_box">
                      <Field
                        className="Picker"
                        type="radio"
                        name="Request.Request_2"
                        value="ขัดข้อง"
                      />
                    </div>
                    ขัดข้อง
                  </label>
                </div>
              </div>
            </div>
            <div className="FormCon Knwo_name w-100 justify-content-between">
              <label htmlFor="Request_1">
                การเปลี่ยนแปลงตำแหน่งหน้าที่ตามความเหมาะสม*
              </label>
              <div className="InputBox w-50 justify-content-center">
                <div className="Radio d-flex justify-content-end">
                  <label className="radio-button">
                    <div className="radio_box">
                      <Field
                        className="Picker"
                        type="radio"
                        name="Request.Request_3"
                        value="ไม่ขัดข้อง"
                      />
                    </div>
                    ไม่ขัดข้อง
                  </label>
                  <label className="radio-button">
                    <div className="radio_box">
                      <Field
                        className="Picker"
                        type="radio"
                        name="Request.Request_3"
                        value="ขัดข้อง"
                      />
                    </div>
                    ขัดข้อง
                  </label>
                </div>
                <ErrorMessage
                  name="Request.Request_1"
                  component="div"
                  className="error"
                />
                <ErrorMessage
                  name="Request.Request_2"
                  component="div"
                  className="error"
                />
                <ErrorMessage
                  name="Request.Request_3"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="Know Form_log">
            <div className="FormCon Start_date w-100 d-flex align-items-start justify-content-between">
              <label htmlFor="Start_date" className="pt-4">
                วันที่พร้อมจะปฏิบัติงานกับบริษัทฯ*
              </label>
              <div className="InputBox w-50 align-items-center flex-column">
                <div className="date_input">
                  <Field name="Start_work.date">
                    {({ field, form }) => (
                      <DatePicker
                        {...field}
                        selected={field.value}
                        showMonthDropdown
                        showYearDropdown
                        yearDropdownItemNumber={50}
                        scrollableYearDropdown
                        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                        useShortMonthInDropdown
                        onChange={(date) => {
                          form.setFieldValue(field.name, date);
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        className="date-picker textInput"
                      />
                    )}
                  </Field>
                  <img src="/calendar_month.svg" className="date_icon"></img>
                  <ErrorMessage
                    name="Start_work.date"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="Check_box pt-4 pe-4">
                  <Field
                    type="checkbox"
                    name="Start_work.now"
                    className="form-check-input ms-0"
                    checked={formik.values.Start_work.now}
                    onChange={formik.handleChange}
                    onClick={() => {
                      if (!formik.values.Start_work.now) {
                        const today = new Date();
                        formik.setFieldValue("Start_work.date", today);
                      }
                    }}
                  />
                  <div className="fs-4 fw-light">พร้อมเริ่มงานทันที</div>
                </div>
              </div>
            </div>
            <div className="FormCon salary w-100 justify-content-between">
              <label htmlFor="Start_work.Salary">เงินเดือนที่ต้องการ*</label>
              <div className="InputBox w-50 align-items-start justify-content-center">
                <div>
                  <Field
                    className="textInput"
                    placeholder="จำนวนเงิน บาท/เดือน"
                    type="text"
                    id="Start_work.Salary"
                    name="Start_work.Salary"
                    maxlength="10"
                  />
                  <ErrorMessage
                    name="Start_work.Salary"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Term Form_log">
            <div className="FormCon Term w-100 align-items-start">
              <div className="InputBox w-100 align-items-start justify-content-center">
                <div className="Check_box d-flex">
                  <Field
                    type="checkbox"
                    name="Term"
                    className="form-check-input ms-0"
                    value="checked"
                    checked={formik.values.Term}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <ErrorMessage name="Term" component="div" className="error" />
                </div>
                <div className="fw-light fs-5">
                  *ข้าพเจ้าขอรับรองว่า
                  ข้อความข้างต้นทั้งหมดนี้เป็นความจริงทุกประการ
                  หากข้อความตอนหนึ่งตอนใด ไม่ตรงกับความเป็นจริง
                  ข้าพเจ้ายอมรับว่าการว่าจ้างที่ตกลงนั้น เป็นโมฆะทันที *Certify
                  that all of the statement in this application are true and
                  correct to the best of my knowledge and any false information
                  willfully given shall be sufficient reason to dismiss me from
                  the service.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Button_form">
        <button onClick={onPrevious} className={`Back`}>
          ย้อนกลับ
        </button>
        <button
          onClick={onNext}
          className={`Next ${
            !!formik.errors.Request ||
            !!formik.errors.Agree
              ? "disabled"
              : ""
          }`}
        >
          ถัดไป
        </button>
      </div>
    </>
  );
};

export default StepFour;
