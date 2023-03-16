import React from "react";
import AdviceID from "./AdviceID";
import TheAdvice from "./TheAdvice";
import Button from "./Button";

const Advice = ({ advice, getAdvice }) => {
  return (
    <div className="patrat">
      <AdviceID id={advice.id} />
      <TheAdvice text={advice.text} />
      <Button onClick={getAdvice} />
    </div>
  );
};

export default Advice;
