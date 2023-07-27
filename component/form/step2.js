import Head from "next/head";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";



const StepTwo = ({ onPrevious, onNext }) => {
  const formik = useFormikContext();
  const { setFieldValue } = useFormikContext();
  const [activeMenu, setActiveMenu] = useState(null);
  const [numFields, setNumFields] = useState(formik.values.More_person.length);
  const [marry, Setmarry] = useState(false);
  const MenuClick = (menuId) => {
    setActiveMenu(menuId === activeMenu ? null : menuId);
  };
  const Setvalue = (Id, value) => {
    setActiveMenu(null);
    setFieldValue(Id, value);
  };

  const handleAddField = () => {
    setNumFields(prevNumFields => prevNumFields + 1);
  };

  const options_Status = ["บ้านส่วนตัว", "บ้านเช่า", "อาศัยบิดามารดา", "อื่น ๆ"];
  const options_Family = ["โสด", "แต่งงาน", "หย่าร้าง", "แยกกันอยู่"];
  const options_Soldier = ["ได้รับการยกเว้น", "ศึกษาวิชาทหาร", "ผ่านการเกณฑ์ทหาร", "อื่น ๆ"];
  return (
    <>
      <button
        type="button"
        onClick={() => {
          console.log(formik.values.More_person);
          console.log(formik.errors.Status);
        }}
      >
        Test
      </button>
      <div className="FormBox">
        <div className="Personal Form_log border-top-0">
          <h3>ประวัติส่วนตัว (Personal Background)</h3>
          <div className="FormCon Status">
            <label htmlFor="Status">สถานะความเป็นอยู่*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Status.status"
                  id="Status.status"
                  className="dropdown-select_full"
                />
                <div className="menubox">
                  {activeMenu === "menu_status" && (
                    <div className="Menu_select">
                      {options_Status.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Status.status", option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  className="Button_select"
                  type="button"
                  onClick={() => MenuClick("menu_status")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Status.status"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Family">
            <label htmlFor="Family">สถานะครอบครัว*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Status.family"
                  id="Status.family"
                  className="dropdown-select_full"
                />
                <div className="menubox">
                  {activeMenu === "menu_Family" && (
                    <div className="Menu_select">
                      {options_Family.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => {
                            if (option == "แต่งงาน") {
                              formik.setFieldValue("Status.Marry.marry", false);
                            } else {
                              formik.setFieldValue("Status.Marry.marry", true);
                            }
                            Setvalue("Status.family", option);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  className="Button_select"
                  type="button"
                  onClick={() => MenuClick("menu_Family")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Status.family"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Soldier">
            <label htmlFor="Soldier">สถานะทางทหาร*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Status.soldier"
                  id="Status.soldier"
                  className="dropdown-select_full"
                />
                <div className="menubox">
                  {activeMenu === "menu_soldier" && (
                    <div className="Menu_select">
                      {options_Soldier.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Status.soldier", option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  className="Button_select"
                  type="button"
                  onClick={() => MenuClick("menu_soldier")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Status.soldier"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Marry">
            <label>กรณีแต่งงาน*</label>
            <div className="InputBox">
              <div className="Radio">
                <label className="radio-button">
                  <div className="radio_box">
                    <Field
                      className="Picker"
                      type="radio"
                      name="Status.Marry.marry_status"
                      value="จดทะเบียน"
                      disabled={formik.values.Status.Marry.marry}
                    />
                  </div>
                  จดทะเบียน
                </label>
                <label className="radio-button">
                  <div className="radio_box">
                    <Field
                      className="Picker"
                      type="radio"
                      name="Status.Marry.marry_status"
                      value="ไม่ได้จดทะเบียน"
                      disabled={formik.values.Status.Marry.marry}
                    />
                  </div>
                  ไม่ได้จดทะเบียน
                </label>
              </div>
            </div>
          </div>
          <div className="FormCon Marry_name">
            <label htmlFor="Name">ชื่อ - นามสกุล คู่สมรส*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="ชื่อ"
                  type="text"
                  id="Status.Marry.marry_firstname"
                  name="Status.Marry.marry_firstName"
                  disabled={formik.values.Status.Marry.marry}
                />
              </div>
              <div className="Input_right">
                <Field
                  className="textInput"
                  placeholder="นามสกุล"
                  type="text"
                  id="Status.Marry.marry_lastName"
                  name="Status.Marry.marry_lastName"
                  disabled={formik.values.Status.Marry.marry}
                />
              </div>
            </div>
          </div>
          <div className="FormCon Marry_jobs">
            <label htmlFor="Marry_jobs">อาชีพ*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="อาชีพ / ตำแหน่งงาน"
                  type="text"
                  id="Status.Marry.marry_jobs"
                  name="Status.Marry.marry_jobs"
                  disabled={formik.values.Status.Marry.marry}
                />
              </div>
            </div>
          </div>
          <div className="FormCon Marry_jobs_place">
            <label htmlFor="Name">สถานที่ทำงาน*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="ชื่อบริษัท"
                  type="text"
                  id="Status.Marry.marry_jobs_place"
                  name="Status.Marry.marry_jobs_place"
                  disabled={formik.values.Status.Marry.marry}
                />
              </div>
            </div>
          </div>
          <div className="FormCon Child">
            <label htmlFor="Child">จำนวนบุตร*</label>
            <div className="InputBox">
              <div className="Input_left d-flex align-items-center">
                <Field
                  className="small_input"
                  type="number"
                  id="Status.Marry.child"
                  name="Status.Marry.child"
                />
                <div className="fs-4 ms-4">คน</div>
              </div>
            </div>
          </div>
          <div className="FormCon Child">
            <label htmlFor="Child">จำนวนบุตรกำลังศึกษา*</label>
            <div className="InputBox">
              <div className="Input_left d-flex align-items-center">
                <Field
                  className="small_input"
                  type="number"
                  id="Status.Marry.child_study"
                  name="Status.Marry.child_study"
                />
                <div className="fs-4 ms-4">คน</div>
              </div>
            </div>
          </div>
          <div className="FormCon Child">
            <label htmlFor="Child">จำนวนบุตรอายุเกิน 21 ปี*</label>
            <div className="InputBox">
              <div className="Input_left d-flex align-items-center">
                <Field
                  className="small_input"
                  type="number"
                  id="Status.Marry.child_teen"
                  name="Status.Marry.child_teen"
                />
                <div className="fs-4 ms-4">คน</div>
              </div>
            </div>
          </div>
        </div>
        <div className="OtherPerson Form_log">
          <h3 className="fs-4">
            บุคคลที่ไม่ใช่ญาติซึ่งทราบประวัติของท่านและบริษัทฯสามารถสอบถามได้
          </h3>
          <h4 className="fs-5 fw-light">
            Persons other than relatives can be contacted
          </h4>
        </div>
        {Array.from({ length: numFields }).map ((_, index) => (
          <div key={index} className={`${index > 0 ? "Form_log" : ""}`}>
            <div className="OtherPerson">
              <div className="FormCon Other_name">
                <label htmlFor={`More_person.Name${index}`}>
                  ชื่อ - นามสกุล*
                </label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className="textInput"
                      placeholder="ชื่อ"
                      type="text"
                      id={`More_person.${index}.firstname`}
                      name={`More_person.${index}.firstname`}
                    />
                    <ErrorMessage
                      name={`More_person.${index}.firstname`}
                      component="div"
                      className="error"
                    />
                    <ErrorMessage
                      name={`More_person.${index}.lastname`}
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="Input_right">
                    <Field
                      className="textInput"
                      placeholder="นามสกุล"
                      type="text"
                      id={`More_person.${index}.lastname`}
                      name={`More_person.${index}.lastname`}
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Other_relation">
                <label htmlFor={`More_person.relation.${index}.lastname`}>
                  ความสัมพันธ์*
                </label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className="textInput"
                      placeholder="เจ้านายเก่า / ฝ่ายบุคคลเก่า"
                      type="text"
                      id={`More_person.${index}.relation`}
                      name={`More_person.${index}.relation`}
                    />
                    <ErrorMessage
                      name={`More_person.${index}.relation`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Other_phone">
                <label htmlFor={`More_person.phone.${index}`}>
                  เบอร์ติดต่อ*
                </label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className="textInput"
                      placeholder="เบอร์มือถือ"
                      type="text"
                      id={`More_person.${index}.phone`}
                      name={`More_person.${index}.phone`}
                      maxlength="10"
                    />
                    <ErrorMessage
                      name={`More_person.${index}.phone`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Other_home">
                <label htmlFor={`More_person.Other_home.${index}`}>
                  สถานที่ทำงาน/ที่อยู่*
                </label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className="textInput"
                      placeholder="ชื่อบริษัท / ที่อยู่อาศัย"
                      type="text"
                      id={`More_person.${index}.home`}
                      name={`More_person.${index}.home`}
                    />
                    <ErrorMessage
                      name={`More_person.${index}.home`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
              <div className="FormCon Other_jobs">
                <label htmlFor={`More_person.Other_jobs.${index}`}>
                  อาชีพ*
                </label>
                <div className="InputBox">
                  <div className="Input_left">
                    <Field
                      className="textInput"
                      placeholder="อาชีพ / ตำแหน่งงาน"
                      type="text"
                      id={`More_person.${index}.jobs`}
                      name={`More_person.${index}.jobs`}
                    />
                    <ErrorMessage
                      name={`More_person.${index}.jobs`}
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        <div className="FormCon">
          <button onClick={handleAddField} className="add_person_btn">
            <img src="/add-icon.svg" />
          </button>
          <div className="add_person">เพิ่มบุคคลที่สามารถติดต่อได้</div>
        </div>
      </div>
      <div className="Button_form">
        <button onClick={onPrevious} className="Back">
          ย้อนกลับ
        </button>
        <button
          onClick={onNext}
          className={`Next ${
            !!formik.errors.Status || !!formik.errors.More_person 
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
export default StepTwo;

