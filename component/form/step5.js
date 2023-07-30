import Head from "next/head";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

const StepFive = ({ onPrevious, onNext }) => {
    const formik = useFormikContext();
    const [numFields, setNumFields] = useState(formik.values.File.Link.length);

    const handleAddField = () => {
        setNumFields(prevNumFields => prevNumFields + 1);
      };

    const handleRemoveFile = (location) => {
      formik.setFieldValue(location, null);
    };
    return (
      <>
        <div className="FormBox">
          <div>
            <div className="File Form_log border-top-0">
              <h4>
                ไฟล์เอกสารที่จำเป็น (Resume, Transcript, Portfolio, Cover
                Letter)
              </h4>
              <div className="FormCon Resume">
                <div className="label w-50">
                  <div className="position-relative">
                    <label htmlFor="Resume">Resume</label>
                    <div className="error2">Require</div>
                  </div>

                  {/* <ErrorMessage
                    name="File.Resume"
                    component="div"
                    className="error"
                  /> */}
                </div>

                <div className="InputBox">
                  <div className="Input_file position-relative">
                    <div
                      className={`file_input ms-0 ${
                        formik.values.File.Resume ? "disabled" : ""
                      }`}
                    >
                      เพิ่มไฟล์
                      <input
                        type="file"
                        disabled={formik.values.File.Resume}
                        name="File.Resume"
                        placeholder="เพิ่มไฟล์"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "File.Resume",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                    </div>
                    <div className="File_upload position-absolute">
                      {" "}
                      {formik.values.File.Resume ? (
                        <div className="file">
                          <div className="file_logo">
                            <img src="/File.svg"></img>
                          </div>
                          <div className="file_name">
                            {formik.values.File.Resume.name}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile("File.Resume")}
                          >
                            <img src="/close.svg"></img>
                          </button>
                        </div>
                      ) : (
                        <span className="file_name_none">
                          ยังไม่มีไฟล์ที่เลือก
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="FormCon Transcript mt-3">
                <div className="label w-50 position-relative">
                  <label htmlFor="Transcript">Transcript</label>
                  <div className="error2">Require</div>
                  {/* <ErrorMessage
                    name="File.Transcript"
                    component="div"
                    className="error"
                  /> */}
                </div>

                <div className="InputBox">
                  <div className="Input_file position-relative">
                    <div
                      className={`file_input ms-0 ${
                        formik.values.File.Transcript ? "disabled" : ""
                      }`}
                    >
                      เพิ่มไฟล์
                      <input
                        type="file"
                        disabled={formik.values.File.Transcript}
                        name="File.Transcript"
                        placeholder="เพิ่มไฟล์"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "File.Transcript",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                    </div>
                    <div className="File_upload position-absolute">
                      {" "}
                      {formik.values.File.Transcript ? (
                        <div className="file">
                          <div className="file_logo">
                            <img src="/File.svg"></img>
                          </div>
                          <div className="file_name">
                            {formik.values.File.Transcript.name}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile("File.Transcript")}
                          >
                            <img src="/close.svg"></img>
                          </button>
                        </div>
                      ) : (
                        <span className="file_name_none">
                          ยังไม่มีไฟล์ที่เลือก
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="FormCon Port mt-3">
                <div className="label w-50 d-flex position-relative align-items-center">
                  <div htmlFor="Port" className="w-0 fs-4">
                    เอกสารอื่น ๆ
                  </div>
                  <span className="fw-light">
                    &nbsp;&nbsp;(Portfolio, Cover letter)
                  </span>
                  <div className="error2">Optional</div>
                  {/* <ErrorMessage
                    name="File.Port"
                    component="div"
                    className="error"
                  /> */}
                </div>

                <div className="InputBox">
                  <div className="Input_file position-relative">
                    <div className="file_input ms-0">
                      เพิ่มไฟล์
                      <input
                        key={formik.values.File?.Port?.length}
                        type="file"
                        name="File.Port"
                        placeholder="เพิ่มไฟล์"
                        onChange={(event) => {
                          const files = event.currentTarget.files;
                          formik.setFieldValue("File.Port", [
                            ...(formik.values.File?.Port || []),
                            ...Array.from(files),
                          ]);
                        }}
                        multiple
                      />
                    </div>
                    <div className="File_upload position-absolute d-flex">
                      {formik.values.File.Port.length > 0 ? (
                        formik.values.File.Port.map((file, index) => (
                          <div key={index} className="file me-3">
                            <div className="file_logo">
                              <img src="/File.svg"></img>
                            </div>
                            <div className="file_name">{file.name}</div>
                            <button
                              type="button"
                              onClick={() => {
                                const updatedFiles =
                                  formik.values.File.Port.slice();
                                updatedFiles.splice(index, 1);
                                formik.setFieldValue("File.Port", updatedFiles);
                              }}
                            >
                              <img src="/close.svg"></img>
                            </button>
                          </div>
                        ))
                      ) : (
                        <span className="file_name_none">
                          ยังไม่มีไฟล์ที่เลือก
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="FormCon Transcript mt-0">
                <div className="label w-50 position-relative"></div>
                <div className="InputBox">
                  <div className="Input_file position-relative">
                    <button
                      className="file_input ms-0"
                      onClick={handleAddField}
                    >
                      เพิ่มลิงก์
                    </button>
                    <div className="File_upload d-flex flex-column">
                      {Array.from({ length: numFields }).map((_, index) => (
                        <div key={index}>
                          <Field
                            className="textInput_Link mt-4"
                            placeholder="วางลิงก์"
                            type="text"
                            id={`File.Link.${index}.Link`}
                            name={`File.Link.${index}.Link`}
                          />
                        </div>
                      ))}
                    </div>
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
              !!formik.errors.File
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

export default StepFive;
