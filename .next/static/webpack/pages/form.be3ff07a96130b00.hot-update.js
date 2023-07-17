"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./pages/form/index.js":
/*!*****************************!*\
  !*** ./pages/form/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var _component_form_step1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/form/step1 */ \"./component/form/step1.js\");\n/* harmony import */ var _component_form_step2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/form/step2 */ \"./component/form/step2.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst initialValues = {\n    firstname: \"\",\n    email: \"\",\n    phone: \"\",\n    addresses: [\n        {\n            street: \"\",\n            city: \"\",\n            country: \"\"\n        }\n    ]\n};\nconst validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object({\n    name: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Name is required\"),\n    email: yup__WEBPACK_IMPORTED_MODULE_4__.string().email(\"Invalid email address\").required(\"Email is required\"),\n    phone: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Phone is required\"),\n    addresses: yup__WEBPACK_IMPORTED_MODULE_4__.array().of(yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({\n        street: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Street is required\"),\n        city: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"City is required\"),\n        country: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Country is required\")\n    }))\n});\nconst MultiForm = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const ProgressBar = (param)=>{\n        let { step } = param;\n        _s1();\n        const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(currentPage);\n        const progressBarStyles = {\n            width: \"\".concat((activeStep - 1) * 25, \"%\"),\n            backgroundColor: activeStep >= step ? \"green\" : \"red\"\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"progress-bar\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"progress\",\n                    style: progressBarStyles\n                }, void 0, false, {\n                    fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"progress-steps d-flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(activeStep >= 1 ? \"active\" : \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(activeStep >= 2 ? \"active\" : \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(activeStep >= 3 ? \"active\" : \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(activeStep >= 4 ? \"active\" : \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, undefined);\n    };\n    _s1(ProgressBar, \"xvPXZMFWYA3y7yKLe5a8gWXYJ+4=\");\n    const handleNextPage = ()=>{\n        setCurrentPage((prevPage)=>prevPage + 1);\n    };\n    const handlePreviousPage = ()=>{\n        setCurrentPage((prevPage)=>prevPage - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"Header\",\n                children: \"APPLICATION FORM\"\n            }, void 0, false, {\n                fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressBar, {\n                step: currentPage\n            }, void 0, false, {\n                fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {\n                children: (param)=>/*#__PURE__*/ {\n                    let { isSubmitting } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleNextPage(),\n                                children: \"next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined),\n                            currentPage === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_form_step1__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onNext: handleNextPage\n                            }, void 0, false, {\n                                fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 37\n                            }, undefined),\n                            currentPage === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_form_step2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                onPrevious: handlePreviousPage\n                            }, void 0, false, {\n                                fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 37\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zigma/Documents/GitHub/EVP-Form/pages/form/index.js\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, undefined);\n};\n_s(MultiForm, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = MultiForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiForm);\nvar _c;\n$RefreshReg$(_c, \"MultiForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSztBQUMwQjtBQUNoQztBQUNzQjtBQUNBO0FBRWpELE1BQU1TLGdCQUFnQjtJQUNwQkMsV0FBVztJQUNYQyxPQUFPO0lBQ1BDLE9BQU87SUFDUEMsV0FBVztRQUFDO1lBQUVDLFFBQVE7WUFBSUMsTUFBTTtZQUFJQyxTQUFTO1FBQUc7S0FBRTtBQUNwRDtBQUVBLE1BQU1DLG1CQUFtQlgsdUNBQVUsQ0FBQztJQUNsQ2EsTUFBTWIsdUNBQVUsR0FBR2UsUUFBUSxDQUFDO0lBQzVCVixPQUFPTCx1Q0FBVSxHQUFHSyxLQUFLLENBQUMseUJBQXlCVSxRQUFRLENBQUM7SUFDNURULE9BQU9OLHVDQUFVLEdBQUdlLFFBQVEsQ0FBQztJQUM3QlIsV0FBV1Asc0NBQVMsR0FBR2lCLEVBQUUsQ0FDdkJqQix1Q0FBVSxHQUFHa0IsS0FBSyxDQUFDO1FBQ2pCVixRQUFRUix1Q0FBVSxHQUFHZSxRQUFRLENBQUM7UUFDOUJOLE1BQU1ULHVDQUFVLEdBQUdlLFFBQVEsQ0FBQztRQUM1QkwsU0FBU1YsdUNBQVUsR0FBR2UsUUFBUSxDQUFDO0lBQ2pDO0FBRUo7QUFFQSxNQUFNSSxZQUFZOzs7SUFDZCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0yQixjQUFjO1lBQUMsRUFBRUMsSUFBSSxFQUFFOztRQUMzQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBRzlCLCtDQUFRQSxDQUFDeUI7UUFDN0MsTUFBTU0sb0JBQW9CO1lBQ3hCQyxPQUFPLEdBQXlCLE9BQXRCLENBQUNILGFBQWEsS0FBSyxJQUFHO1lBQ2hDSSxpQkFBaUJKLGNBQWNELE9BQU8sVUFBVTtRQUNsRDtRQUVBLHFCQUNFLDhEQUFDTTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7b0JBQVdDLE9BQU9MOzs7Ozs7OEJBQ2pDLDhEQUFDRztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFXLEdBQW1DLE9BQWhDTixjQUFjLElBQUksV0FBVzs7Ozs7O3NDQUNoRCw4REFBQ0s7NEJBQUlDLFdBQVcsR0FBbUMsT0FBaENOLGNBQWMsSUFBSSxXQUFXOzs7Ozs7c0NBQ2hELDhEQUFDSzs0QkFBSUMsV0FBVyxHQUFtQyxPQUFoQ04sY0FBYyxJQUFJLFdBQVc7Ozs7OztzQ0FDaEQsOERBQUNLOzRCQUFJQyxXQUFXLEdBQW1DLE9BQWhDTixjQUFjLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXhEO1FBbEJNRjtJQW9CTixNQUFNVSxpQkFBaUI7UUFDckJYLGVBQWUsQ0FBQ1ksV0FBYUEsV0FBVztJQUMxQztJQUVBLE1BQU1DLHFCQUFxQjtRQUN6QmIsZUFBZSxDQUFDWSxXQUFhQSxXQUFXO0lBQzFDO0lBRUEscUJBQ0UsOERBQUNKOzswQkFDQyw4REFBQ007Z0JBQUdMLFdBQVU7MEJBQVM7Ozs7OzswQkFDdkIsOERBQUNSO2dCQUFZQyxNQUFNSDs7Ozs7OzBCQUNuQiw4REFBQ3hCLDBDQUFNQTswQkFHSjt3QkFBQyxFQUFFd0MsWUFBWSxFQUFFOzJCQUNoQiw4REFBQ3ZDLHdDQUFJQTs7MENBQ0gsOERBQUN3QztnQ0FBT0MsU0FBUyxJQUFLTjswQ0FBa0I7Ozs7Ozs0QkFHdkNaLGdCQUFnQixtQkFBSyw4REFBQ25CLDZEQUFPQTtnQ0FBQ3NDLFFBQVFQOzs7Ozs7NEJBQ3RDWixnQkFBZ0IsbUJBQUssOERBQUNsQiw2REFBT0E7Z0NBQUNzQyxZQUFZTjs7Ozs7Ozs7Ozs7O2dCQUN2Qzs7Ozs7Ozs7Ozs7O0FBS2hCO0dBakRJZjtLQUFBQTtBQW1ESiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtL2luZGV4LmpzPzE3OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IFN0ZXBPbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9mb3JtL3N0ZXAxXCI7XG5pbXBvcnQgU3RlcFR3byBmcm9tIFwiLi4vLi4vY29tcG9uZW50L2Zvcm0vc3RlcDJcIjtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgZmlyc3RuYW1lOiAnJyxcbiAgZW1haWw6ICcnLFxuICBwaG9uZTogJycsXG4gIGFkZHJlc3NlczogW3sgc3RyZWV0OiAnJywgY2l0eTogJycsIGNvdW50cnk6ICcnIH1dLFxufTtcblxuY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3Qoe1xuICBuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ05hbWUgaXMgcmVxdWlyZWQnKSxcbiAgZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJykucmVxdWlyZWQoJ0VtYWlsIGlzIHJlcXVpcmVkJyksXG4gIHBob25lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1Bob25lIGlzIHJlcXVpcmVkJyksXG4gIGFkZHJlc3NlczogWXVwLmFycmF5KCkub2YoXG4gICAgWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgIHN0cmVldDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdTdHJlZXQgaXMgcmVxdWlyZWQnKSxcbiAgICAgIGNpdHk6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnQ2l0eSBpcyByZXF1aXJlZCcpLFxuICAgICAgY291bnRyeTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdDb3VudHJ5IGlzIHJlcXVpcmVkJyksXG4gICAgfSlcbiAgKSxcbn0pO1xuXG5jb25zdCBNdWx0aUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBQcm9ncmVzc0JhciA9ICh7IHN0ZXAgfSkgPT4ge1xuICAgICAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gdXNlU3RhdGUoY3VycmVudFBhZ2UpO1xuICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJTdHlsZXMgPSB7XG4gICAgICAgIHdpZHRoOiBgJHsoYWN0aXZlU3RlcCAtIDEpICogMjV9JWAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlU3RlcCA+PSBzdGVwID8gJ2dyZWVuJyA6ICdyZWQnLFxuICAgICAgfTtcbiAgICBcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIHN0eWxlPXtwcm9ncmVzc0JhclN0eWxlc30+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1zdGVwcyBkLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHthY3RpdmVTdGVwID49IDEgPyAnYWN0aXZlJyA6ICcnfWB9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FjdGl2ZVN0ZXAgPj0gMiA/ICdhY3RpdmUnIDogJyd9YH0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YWN0aXZlU3RlcCA+PSAzID8gJ2FjdGl2ZScgOiAnJ31gfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHthY3RpdmVTdGVwID49IDQgPyAnYWN0aXZlJyA6ICcnfWB9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSAtIDEpO1xuICAgIH07XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiSGVhZGVyXCI+QVBQTElDQVRJT04gRk9STTwvaDE+XG4gICAgICAgIDxQcm9ncmVzc0JhciBzdGVwPXtjdXJyZW50UGFnZX0gLz5cbiAgICAgICAgPEZvcm1pa1xuICAgICAgICAgIFxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGhhbmRsZU5leHRQYWdlKCl9PlxuICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHtjdXJyZW50UGFnZSA9PT0gMSAmJiA8U3RlcE9uZSBvbk5leHQ9e2hhbmRsZU5leHRQYWdlfSAvPn1cbiAgICAgICAgICAgICAge2N1cnJlbnRQYWdlID09PSAyICYmIDxTdGVwVHdvIG9uUHJldmlvdXM9e2hhbmRsZVByZXZpb3VzUGFnZX0gLz59XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgTXVsdGlGb3JtOyJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJFcnJvck1lc3NhZ2UiLCJZdXAiLCJTdGVwT25lIiwiU3RlcFR3byIsImluaXRpYWxWYWx1ZXMiLCJmaXJzdG5hbWUiLCJlbWFpbCIsInBob25lIiwiYWRkcmVzc2VzIiwic3RyZWV0IiwiY2l0eSIsImNvdW50cnkiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwiYXJyYXkiLCJvZiIsInNoYXBlIiwiTXVsdGlGb3JtIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIlByb2dyZXNzQmFyIiwic3RlcCIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwicHJvZ3Jlc3NCYXJTdHlsZXMiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGFuZGxlTmV4dFBhZ2UiLCJwcmV2UGFnZSIsImhhbmRsZVByZXZpb3VzUGFnZSIsImgxIiwiaXNTdWJtaXR0aW5nIiwiYnV0dG9uIiwib25DbGljayIsIm9uTmV4dCIsIm9uUHJldmlvdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/form/index.js\n"));

/***/ })

});