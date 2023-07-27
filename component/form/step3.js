import Head from "next/head";
import { useFormikContext, FieldArray , Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import * as Yup from 'yup';

const StepThree = ({ onPrevious, onNext }) => {
  const formik = useFormikContext();
  const [selectDegree, setSelectDegree] = useState('');
  const [Exp, SetExp] = useState(formik.values.Experience.isExperience);
  const [numFields, setNumFields] = useState(formik.values.Experience.length);

  const handleAddField = () => {
    setNumFields(prevNumFields => prevNumFields + 1);
  };

    const NoExp = () =>{
        if(!Exp){
            formik.setFieldValue("Experience", formik.values.Experience_default);
            setNumFields(1);
        }
    }

  const PickDegree = (event) => {
    const value = event.target.value;
    if (selectDegree == value) {
        setSelectDegree('');
        formik.setFieldValue("Education.Degree", '');
    } else {
      setSelectDegree(value);
      formik.setFieldValue("Education.Degree", value);
    }
  };

  return (
    <>
      <div className="FormBox">
        <button
          type="button"
          onClick={() => {
            console.log(formik.values.Experience);
            console.log(formik.values.Experience.isExperience);
            console.log(formik.errors.Experience);
          }}
        >
          Test
        </button>
        <div className="Education Form_log border-top-0">
          <h3>ประวัติการศึกษา (Educational Background)*</h3>
          <div className="Check_box pt-2">
            <Field
              type="checkbox"
              name="Education.high_school"
              className="form-check-input ms-0"
              checked={formik.values.Education.high_school}
              onChange={formik.handleChange}
            />
            <div>มัธยมศึกษา</div>
          </div>                                                                          
          <div className="FormCon School_name">
            <label htmlFor="School_name">ชื่อสถาบัน*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="ชื่อโรงเรียน / มหาลัย "
                  type="text"
                  id="Education.School.School_name"
                  name="Education.School.School_name"
                  onChange={formik.handleChange}
                />
                <ErrorMessage
                  name="Education.School.School_name"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon School_location">
            <label htmlFor="School_location">จังหวัด/ประเทศ*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="จังหวัดที่ตั้งสถาบัน"
                  type="text"
                  id="Education.School.School_location"
                  name="Education.School.School_location"
                  onChange={formik.handleChange}
                />
                <ErrorMessage
                  name="Education.School.School_location"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon School_year">
            <label htmlFor="Education.School_year">ปีการศึกษา*</label>
            <div className="InputBox">
              <div className="Input_left d-flex align-items-center">
                <Field
                  className="small_input"
                  type="text"
                  id="Education.School.School_year.start"
                  name="Education.School.School_year.start"
                  onChange={formik.handleChange}
                  placeholder="YYYY"
                  maxlength="4"
                />
                <div className="fs-4 ms-1 me-1 fw-light"> - </div>
                <Field
                  className="small_input"
                  type="text"
                  id="Education.School.School_year.end"
                  name="Education.School.School_year.end"
                  onChange={formik.handleChange}
                  placeholder="YYYY"
                  maxlength="4"
                />
              </div>
              <ErrorMessage
                name="Education.School.School_year.start"
                component="div"
                className="error"
              />
              <ErrorMessage
                name="Education.School.School_year.end"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="FormCon School_major">
            <label htmlFor="School_major">วิชาที่ศึกษา/วุฒิที่ได้รับ*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="วิชาที่สำเร็จการศึกษา"
                  type="text"
                  id="Education.School.School_major"
                  name="Education.School.School_major"
                  onChange={formik.handleChange}
                />
                <ErrorMessage
                  name="Education.School.School_major"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Degree">
            <div className="Check_box flex-column">
              <div className="CheckBox">
                <Field
                  type="checkbox"
                  name="Education.Degree"
                  className="form-check-input ms-0"
                  checked={formik.values.Education.Degree === "อาชีวศึกษา"}
                  onChange={PickDegree}
                  value="อาชีวศึกษา"
                />
                <span>อาชีวศึกษา</span>
              </div>
              <div className="CheckBox pt-3">
                <Field
                  type="checkbox"
                  name="Education.Degree"
                  className="form-check-input ms-0"
                  checked={formik.values.Education.Degree === "อนุปริญญา"}
                  onChange={PickDegree}
                  value="อนุปริญญา"
                />
                <span>อนุปริญญา</span>
              </div>
              <div className="CheckBox pt-3">
                <Field
                  type="checkbox"
                  name="Education.Degree"
                  className="form-check-input ms-0"
                  checked={formik.values.Education.Degree === "ปริญญาตรี"}
                  onChange={PickDegree}
                  value="ปริญญาตรี"
                />
                <span>ปริญญาตรี</span>
              </div>
            </div>
          </div>
          <div className="FormCon Uni_name">
            <label htmlFor="Uni_name">ชื่อสถาบัน*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="ชื่อโรงเรียน / มหาลัย / สถาบัน"
                  type="text"
                  id="Education.University.Uni_name"
                  name="Education.University.Uni_name"
                  onChange={formik.handleChange}
                />
                <ErrorMessage
                  name="Education.University.Uni_name"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Uni_location">
            <label htmlFor="Uni_location">จังหวัด/ประเทศ*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="จังหวัดที่ตั้งสถาบัน"
                  type="text"
                  id="Education.University.Uni_location"
                  name="Education.University.Uni_location"
                  onChange={formik.handleChange}
                />
                <ErrorMessage
                  name="Education.University.Uni_location"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Uni_year">
            <label htmlFor="Uni_year">ปีการศึกษา*</label>
            <div className="InputBox">
              <div className="Input_left d-flex align-items-center">
                <Field
                  className="small_input"
                  type="text"
                  id="Education.University.Uni_year.start"
                  name="Education.University.Uni_year.start"
                  onChange={formik.handleChange}
                  placeholder="YYYY"
                  maxlength="4"
                />
                <div className="fs-4 ms-1 me-1 fw-light"> - </div>
                <Field
                  className="small_input"
                  type="text"
                  id="Education.University.Uni_year.end"
                  name="Education.University.Uni_year.end"
                  onChange={formik.handleChange}
                  placeholder="YYYY"
                  maxlength="4"
                />
              </div>
              <ErrorMessage
                name="Education.University.Uni_year.start"
                component="div"
                className="error"
              />
              <ErrorMessage
                name="Education.University.Uni_year.end"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="FormCon School_major">
            <label htmlFor="School_major">วิชาที่ศึกษา/วุฒิที่ได้รับ*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="วิชาที่สำเร็จการศึกษา"
                  type="text"
                  id="Education.University.Uni_major"
                  name="Education.University.Uni_major"
                  onChange={formik.handleChange}
                />
                <ErrorMessage
                  name="Education.University.Uni_major"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Experience Form_log">
          <h3>
            ประสบการณ์การทำงาน (เริ่มจากงานปัจจุบัน แล้วย้อนหลังไปตามลำดับ)
          </h3>
          <h3>
            Working Experience (Start with your present and previous positions)
          </h3>
          <div className="Check_box pt-2">
            <Field
              type="checkbox"
              name="Experience.isExperience"
              className="form-check-input ms-0"
              checked={formik.values.Experience.isExperience}
              onChange={formik.handleChange}
              onClick={() => {
                SetExp(!Exp);
                NoExp();
              }}
            />
            <div>ไม่มีประสบการณ์ทำงาน / เด็กจบใหม่</div>
          </div>
          {Array.from({ length: numFields }).map ((_, index) => (
            <div key={index} className={`${index > 0 ? "Form_log" : ""}`}>
              <div className="FormCon Company_name">
                <label htmlFor={`Company_name${index}`}>ชื่อบริษัท*</label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className={`textInput ${Exp ? "disabled" : ""}`}
                      placeholder="ชื่อบริษัท / องค์กร"
                      type="text"
                      id={`Experience.${index}.Company.Company_name`}
                      name={`Experience.${index}.Company.Company_name`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Company_name`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Company_type">
                <label htmlFor={`Company_type${index}`}>ประเภทธุรกิจ*</label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className={`textInput ${Exp ? "disabled" : ""}`}
                      placeholder="ประเภทธุรกิจ"
                      type="text"
                      id={`Experience.${index}.Company.Company_type`}
                      name={`Experience.${index}.Company.Company_type`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Company_type`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Company_location">
                <label htmlFor={`Company_location${index}`}>ที่อยู่*</label>
                <div className="InputBox">
                  <div className="Input_Full">
                    <Field
                      className={`textInput_full ${Exp ? "disabled" : ""}`}
                      placeholder="ที่ตั้งบริษัท"
                      type="text"
                      id={`Experience.${index}.Company.Company_location`}
                      name={`Experience.${index}.Company.Company_location`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Company_location`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Company_Jobs align-items-start mt-3">
                <label htmlFor={`Jobs${index}`}>ลักษณะงานที่รับผิดชอบโดยย่อ*</label>
                <div className="InputBox mt-0 ">
                  <div className="Input_Full">
                    <Field
                        component="textarea"
                      rows="4"
                      className={`textInput_full_Big ${Exp ? "disabled" : ""}`}
                      placeholder="ลักษณะงาน"
                      type="text"
                      id={`Experience.${index}.Company.Jobs`}
                      name={`Experience.${index}.Company.Jobs`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Jobs`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Company_Time">
                <label htmlFor={`Date${index}`}>วันเริ่มงาน ถึง*</label>
                <div className="InputBox">
                  <div className="Input_left d-flex">
                    <div className="date_input">
                      <Field name={`Experience.${index}.Company.Time.start`}>
                        {({ field, form }) => (
                          <DatePicker
                            {...field}
                            selected={field.value}
                            showMonthDropdown
                          showYearDropdown
                          yearDropdownItemNumber={50}
                          scrollableYearDropdown
                          formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                          useShortMonthInDropdown
                            onChange={(date) => {
                              form.setFieldValue(field.name, date);
                              formik.handleChange;
                            }}
                            dateFormat="MM/yyyy"
                            placeholderText="MM/YYYY"
                            className={`date-picker_small ${Exp ? "disabled" : ""}`}
                            disabled={formik.values.Experience.isExperience}
                          />
                        )}
                      </Field>
                      <img
                        src="/calendar_month.svg"
                        className="date_icon"
                      ></img>
                      <ErrorMessage
                        name={`Experience.${index}.Company.Time.start`}
                        component="div"
                        className="error"
                      />
                      <ErrorMessage
                        name={`Experience.${index}.Company.Time.end`}
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="fs-4 ms-1 me-1 fw-light"> - </div>
                    <div className="date_input">
                      <Field name={`Experience.${index}.Company.Time.end`}>
                        {({ field, form }) => (
                          <DatePicker
                            {...field}
                            selected={field.value}
                            showMonthDropdown
                          showYearDropdown
                          yearDropdownItemNumber={50}
                          scrollableYearDropdown
                          formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                          useShortMonthInDropdown
                            onChange={(date) => {
                              form.setFieldValue(field.name, date);
                              formik.handleChange;
                            }}
                            dateFormat="MM/yyyy"
                            placeholderText="MM/YYYY"
                            className={`date-picker_small ${Exp ? "disabled" : ""}`}
                            disabled={formik.values.Experience.isExperience}
                          />
                        )}
                      </Field>
                      <img
                        src="/calendar_month.svg"
                        className="date_icon"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="FormCon Company_Position_start">
                <label htmlFor={`Position.start${index}`}>ตำแหน่งแรกเข้า*</label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className={`textInput ${Exp ? "disabled" : ""}`}
                      placeholder="ตำแหน่งงาน"
                      type="text"
                      id={`Experience.${index}.Company.Position.start`}
                      name={`Experience.${index}.Company.Position.start`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Position.start`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Company_Position_end">
                <label htmlFor={`Position.end${index}`}>ตำแหน่งสุดท้าย*</label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className={`textInput ${Exp ? "disabled" : ""}`}
                      placeholder="ตำแหน่งงาน"
                      type="text"
                      id={`Experience.${index}.Company.Position.end`}
                      name={`Experience.${index}.Company.Position.end`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Position.end`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Company_Salary_start">
                <label htmlFor={`Company.Salary.start${index}`}>เงินเดือนแรกเข้า*</label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className={`textInput ${Exp ? "disabled" : ""}`}
                      placeholder="จำนวนเงิน บาท/เดือน"
                      type="text"
                      id={`Experience.${index}.Company.Salary.start`}
                      name={`Experience.${index}.Company.Salary.start`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Salary.start`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Company_Salary_end mb-3">
                <label htmlFor={`Company.Salary.end${index}`}>เงินเดือนสุดท้าย*</label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className={`textInput ${Exp ? "disabled" : ""}`}
                      placeholder="จำนวนเงิน บาท/เดือน"
                      type="text"
                      id={`Experience.${index}.Company.Salary.end`}
                      name={`Experience.${index}.Company.Salary.end`}
                      onChange={formik.handleChange}
                      disabled={formik.values.Experience.isExperience}
                    />
                    <ErrorMessage
                      name={`Experience.${index}.Company.Salary.end`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="FormCon">
          <button onClick={handleAddField} className="add_person_btn">
            <img src="/add-icon.svg" />
          </button>
          <div className="add_person">เพิ่มตำแหน่งงาน</div>
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
              !!formik.errors.Education || formik.errors.Experience
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
export default StepThree;
