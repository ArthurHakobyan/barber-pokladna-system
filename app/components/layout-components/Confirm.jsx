import React from "react";
import Button from "../building-blocks/Button";

const Confirm = (props) => {
  return (
    <div className="flex justify-center">
      <Button btnText={props.btnText} onClick={props.onConfirmClick} />
    </div>
  );
};

export default Confirm;
