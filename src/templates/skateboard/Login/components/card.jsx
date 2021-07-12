import React from "react";

import { Input, Btn } from "./index";

export const Card = ({
  cardType,
  cardName,
  inputs,
  forgot,
  values,
  handleSubmit,
  setFieldValue,
}) => {
  return (
    <>
      <div className={cardType}>
        <div className="center-wrap">
          <div className="section text-center">
            <h4 className="mb-4 pb-3">{cardName}</h4>
            {inputs.map((input) => {
              let cl = "";
              if (input.first) {
                cl = "form-group";
              } else {
                cl = "form-group mt-2";
              }
              let val;
              switch (input.field) {
                case "emailLogin": {
                  val = values.emailLogin;
                  break;
                }
                case "passwordLogin": {
                  val = values.passwordLogin;
                  break;
                }
                case "fio": {
                  val = values.fio;
                  break;
                }
                case "emailReg": {
                  val = values.emailReg;
                  break;
                }
                case "passwordReg": {
                  val = values.passwordReg;
                  break;
                }
              }
              return (
                <div className={cl} key={input.id}>
                  <Input
                    className={input.className}
                    icon={input.icon}
                    placeHolder={input.placeHolder}
                    type={input.type}
                    value={val}
                    setFieldValue={setFieldValue}
                    field={input.field}
                  />
                </div>
              );
            })}
            <Btn text="submit" handleSubmit={handleSubmit} />
            {forgot ? (
              <p className="mb-0 mt-4 text-center">
                <a href="#0" className="link">
                  Forgot your password?
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
