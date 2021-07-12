import React from "react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

//other
import "./Login.css";
import { Card } from "./components";
import { setLogin } from "../../../redux/actions/skateboard/loginActions";

const loginInputs = [
  {
    id: 0,
    type: "email",
    className: "form-style",
    placeHolder: "Your Email",
    icon: "input-icon uil uil-at",
    first: true,
    field: "emailLogin",
  },
  {
    id: 1,
    type: "password",
    className: "form-style",
    placeHolder: "Your Password",
    icon: "input-icon uil uil-lock-alt",
    first: false,
    field: "passwordLogin",
  },
];

const regInputs = [
  {
    id: 2,
    type: "text",
    className: "form-style",
    placeHolder: "Your Full Name",
    icon: "input-icon uil uil-user",
    first: true,
    field: "fio",
  },
  {
    id: 3,
    type: "email",
    className: "form-style",
    placeHolder: "Your Email",
    icon: "input-icon uil uil-at",
    first: false,
    field: "emailReg",
  },
  {
    id: 4,
    type: "password",
    className: "form-style",
    placeHolder: "Your Password",
    icon: "input-icon uil uil-lock-alt",
    first: false,
    field: "passwordReg",
  },
];

export const Login = ({ handleSetLogin }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      emailLogin: "",
      passwordLogin: "",
      fio: "",
      emailReg: "",
      passwordReg: "",
    },
    onSubmit: () => {
      const data = {
        email: values.emailReg.length ? values.emailReg : values.emailLogin,
        fio: values.fio,
      };
      dispatch(setLogin(data));
      handleSetLogin();
      localStorage.setItem("skateUser", JSON.stringify(data));
      history.push("/skateBoard");
    },
    // validationSchema: Yup.object().shape({
    //   email: Yup.string().required("Обязательно для заполнения"),
    //   password: Yup.string().required("Обязательно для заполнения"),
    // }),
  });

  const clickBtn = () => {
    handleSubmit();
  };
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log" />
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <Card
                      cardName="Log In"
                      cardType="card-front"
                      inputs={loginInputs}
                      forgot={true}
                      values={values}
                      handleSubmit={clickBtn}
                      setFieldValue={setFieldValue}
                    />
                    <Card
                      forgot={false}
                      inputs={regInputs}
                      cardName="Sign Up"
                      cardType="card-back"
                      values={values}
                      handleSubmit={clickBtn}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
