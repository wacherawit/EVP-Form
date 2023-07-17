import Head from "next/head";
import { useFormikContext , Formik, Form, Field, ErrorMessage , } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import React, { useState } from 'react';

const StepOne = ( { onNext } ) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { setFieldValue } = useFormikContext();

  const MenuClick = (menuId) => { 
    setActiveMenu(menuId === activeMenu ? null : menuId);
  };

  const Setvalue = (Id , value) => {
    setActiveMenu(null);
    setFieldValue( Id , value );
  };
  const options_county = ["คลองสาน", "คลองสามวา", "คลองเตย", "คันนายาว"];
  const options_Sub_dis = ["จตุจักร", "จอมพล", "จันทรเกษม", "ลาดยาว"];
  const options_provin = ['กรุงเทพมหานคร','กระบี่','กาญจนบุรี','กาฬสินธุ์'];
  const options_blood = ['A','B','AB','O'];
  return (
    <>
      <div className="FormBox">
        <div className="Personal Form_log">
          <h3>ประวัติส่วนตัว (Personal Background)</h3>
          <div className="FormCon NameTH">
            <label htmlFor="Name">ชื่อ - นามสกุล*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="ชื่อ"
                  type="text"
                  id="personalInfo.Name.firstName"
                  name="personalInfo.Name.firstName"
                />
                <ErrorMessage
                  name="personalInfo.Name.firstName"
                  component="div"
                  className="error"
                />
                <ErrorMessage
                  name="personalInfo.Name.lastName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="Input_right">
                <Field
                  className="textInput"
                  placeholder="นามสกุล"
                  type="text"
                  id="personalInfo.Name.lastName"
                  name="personalInfo.Name.lastName"
                />
              </div>
            </div>
          </div>
          <div className="FormCon NameEN">
            <label htmlFor="NameEN">First - Last Name*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="First Name"
                  type="text"
                  id="personalInfo.NameEN.firstName"
                  name="personalInfo.NameEN.firstNameEN"
                />
                <ErrorMessage
                  name="personalInfo.NameEN.firstNameEN"
                  component="div"
                  className="error"
                />
                <ErrorMessage
                  name="personalInfo.NameEN.lastNameEN"
                  component="div"
                  className="error"
                />
              </div>
              <div className="Input_right">
                <Field
                  className="textInput"
                  placeholder="Last Name"
                  type="text"
                  id="personalInfo.NameEN.lastName"
                  name="personalInfo.NameEN.lastNameEN"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Nickname">
            <label htmlFor="Nickname">ชื่อเล่น*</label>
            <div className="InputBox">
              <div>
                <Field
                  className="textInput"
                  placeholder="ชื่อเล่น"
                  type="text"
                  id="personalInfo.Nickname"
                  name="personalInfo.Nickname"
                />
                <ErrorMessage
                  name="personalInfo.Nickname"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Gender">
            <label>เพศ*</label>
            <div className="InputBox">
              <div className="Radio">
                <label className="radio-button">
                  <Field
                    className="Picker"
                    type="radio"
                    name="personalInfo.Gender"
                    value="Male"
                  />
                  Male
                </label>
                <label className="radio-button">
                  <Field
                    className="Picker"
                    type="radio"
                    name="personalInfo.Gender"
                    value="female"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="FormCon Birth">
            <label htmlFor="Date">วัน/เดือน/ปีเกิด*</label>
            <div className="InputBox">
              <div className="Input_left">
                <div className="date_input">
                  <Field name="personalInfo.Birth.date">
                    {({ field, form }) => (
                      <DatePicker
                        {...field}
                        selected={field.value}
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
                    name="personalInfo.Birth.date"
                    component="div"
                    className="error"
                  />
                  <ErrorMessage
                    name="personalInfo.Birth.age"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="Input_right">
                <Field
                  className="small_input"
                  placeholder="อายุ"
                  type="number"
                  id="personalInfo.Birth.age"
                  name="personalInfo.Birth.age"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Blood">
            <label htmlFor="Blood">กรุ๊ปเลือด*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="personalInfo.Blood"
                  id="personalInfo.Blood"
                  className="dropdown-select"
                  placeholder="จังหวัด"
                  disabled
                />
                <div className="menubox">
                  {activeMenu === "menu_blood" && (
                    <div className="Menu_select">
                      {options_blood.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("personalInfo.Blood", option)}
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
                  onClick={() => MenuClick("menu_blood")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="personalInfo.Blood"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Id_card">
            <label htmlFor="Id_card">เลขที่บัตรประชาชน* </label>
            <div className="InputBox">
              <div>
                <Field
                  className="textInput"
                  placeholder="เลขที่บัตรประชาชน 13 หลัก"
                  type="text"
                  id="personalInfo.Id_card"
                  name="personalInfo.Id_card"
                  maxlength="13"
                />
                <ErrorMessage
                  name="personalInfo.Id_card"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Nation">
            <label htmlFor="Nation">สัญชาติ* </label>
            <div className="InputBox">
              <div>
                <Field
                  className="textInput"
                  placeholder="สัญชาติ"
                  id="personalInfo.Nation"
                  name="personalInfo.Nation"
                />
                <ErrorMessage
                  name="personalInfo.Nation"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Born">
            <label htmlFor="Born">สถานที่เกิด* </label>
            <div className="InputBox">
              <div>
                <Field
                  className="textInput"
                  placeholder="จังหวัดที่เกิด"
                  id="personalInfo.Born"
                  name="personalInfo.Born"
                />
                <ErrorMessage
                  name="personalInfo.Born"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Phone_num">
            <label htmlFor="Name">เบอร์ติดต่อ*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="เบอร์มือถือ"
                  type="text"
                  id="personalInfo.Phone.phone"
                  name="personalInfo.Phone.phone"
                  maxlength="10"
                />
                <ErrorMessage
                  name="personalInfo.Phone.phone"
                  component="div"
                  className="error"
                />
                <ErrorMessage
                  name="personalInfo.Phone.Emergen"
                  component="div"
                  className="error"
                />
              </div>
              <div className="Input_right">
                <Field
                  className="textInput"
                  placeholder="เบอร์ติดต่อฉุกเฉิน"
                  type="text"
                  id="personalInfo.Phone.Emergen"
                  name="personalInfo.Phone.Emergen"
                  maxlength="10"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Email">
            <label htmlFor="Email">อีเมล*</label>
            <div className="InputBox">
              <div>
                <Field
                  className="textInput"
                  placeholder="ex. sample@gmail.com"
                  type="text"
                  id="personalInfo.Email"
                  name="personalInfo.Email"
                />
                <ErrorMessage
                  name="personalInfo.Email"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Address Form_log">
          <div className="FormCon Home">
            <label htmlFor="Home">ที่อยู่ปัจจุบันที่ติดต่อได้สะดวก*</label>
            <div className="InputBox">
              <div className="Input_Full">
                <Field
                  className="textInput_full"
                  placeholder="บ้านเลขที่ / หมู่บ้าน / ถนน / ซอย"
                  type="text"
                  id="Address.Home"
                  name="Address.Home"
                />
                <ErrorMessage
                  name="Address.Home"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon province">
            <label htmlFor="province">จังหวัด*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Address.province"
                  id="Address.province"
                  className="dropdown-select_full"
                  placeholder="จังหวัด"
                  disabled
                />
                <div className="menubox">
                  {activeMenu === "menu_provin" && (
                    <div className="Menu_select">
                      {options_provin.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Address.province", option)}
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
                  onClick={() => MenuClick("menu_provin")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Address.province"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon county">
            <label htmlFor="county">เขต/อำเภอ*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Address.county"
                  id="Address.county"
                  className="dropdown-select_full"
                  placeholder="เขต/อำเภอ"
                  disabled
                />
                <div className="menubox">
                  {activeMenu === "menu_county" && (
                    <div className="Menu_select">
                      {options_county.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Address.county", option)}
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
                  onClick={() => MenuClick("menu_county")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Address.county"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Sub_dis">
            <label htmlFor="Sub_dis">แขวง/ตำบล*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Address.Sub_dis"
                  id="Address.Sub_dis"
                  className="dropdown-select_full"
                  placeholder="แขวง/ตำบล"
                  disabled
                />
                <div className="menubox">
                  {activeMenu === "menu_Sub_dis" && (
                    <div className="Menu_select">
                      {options_Sub_dis.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Address.Sub_dis", option)}
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
                  onClick={() => MenuClick("menu_Sub_dis")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Address.Sub_dis"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Post">
            <label htmlFor="Post">รหัสไปรษณีย์*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="รหัสไปรษณีย์"
                  type="text"
                  id="Address.Post"
                  name="Address.Post"
                  maxlength="5"
                />
                <ErrorMessage
                  name="Address.Post"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Address_contact Form_log">
          <div className="Same_address_check">
            <Field type="checkbox" name="toggle" />
            <div>ใช้ข้อมูลเดียวกันกับที่อยู่ปัจจุบัน</div>
          </div>
          <div className="FormCon Home">
            <label htmlFor="Name">ที่อยู่ปัจจุบันที่ติดต่อได้สะดวก*</label>
            <div className="InputBox">
              <div className="Input_Full">
                <Field
                  className="textInput_full"
                  placeholder="บ้านเลขที่ / หมู่บ้าน / ถนน / ซอย"
                  type="text"
                  id="Address.Home"
                  name="Address.Home"
                />
                <ErrorMessage
                  name="Address.Home"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon province">
            <label htmlFor="province">จังหวัด*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Address.province"
                  id="Address.province"
                  className="dropdown-select_full"
                  placeholder="จังหวัด"
                  disabled
                />
                <div className="menubox">
                  {activeMenu === "menu_provin" && (
                    <div className="Menu_select">
                      {options_provin.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Address.province", option)}
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
                  onClick={() => MenuClick("menu_provin")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Address.province"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon county">
            <label htmlFor="county">เขต/อำเภอ*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Address.county"
                  id="Address.county"
                  className="dropdown-select_full"
                  placeholder="เขต/อำเภอ"
                  disabled
                />
                <div className="menubox">
                  {activeMenu === "menu_county" && (
                    <div className="Menu_select">
                      {options_county.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Address.county", option)}
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
                  onClick={() => MenuClick("menu_county")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Address.county"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Sub_dis">
            <label htmlFor="Sub_dis">แขวง/ตำบล*</label>
            <div className="InputBox">
              <div className="Select_box">
                <Field
                  type="text"
                  name="Address.Sub_dis"
                  id="Address.Sub_dis"
                  className="dropdown-select_full"
                  placeholder="แขวง/ตำบล"
                  disabled
                />
                <div className="menubox">
                  {activeMenu === "menu_Sub_dis" && (
                    <div className="Menu_select">
                      {options_Sub_dis.map((option, index) => (
                        <button
                          key={index}
                          value={option}
                          className="dropdown-option"
                          onClick={() => Setvalue("Address.Sub_dis", option)}
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
                  onClick={() => MenuClick("menu_Sub_dis")}
                >
                  <img src="/Select.svg" className="arrow_down"></img>
                </button>
                <ErrorMessage
                  name="Address.Sub_dis"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
          <div className="FormCon Post">
            <label htmlFor="Post">รหัสไปรษณีย์*</label>
            <div className="InputBox">
              <div className="Input_left">
                <Field
                  className="textInput"
                  placeholder="รหัสไปรษณีย์"
                  type="text"
                  id="Address.Post"
                  name="Address.Post"
                  maxlength="5"
                />
                <ErrorMessage
                  name="Address.Post"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
