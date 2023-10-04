"use client";
import React from "react";
import Button from "../building-blocks/Button";

const Payment = (props) => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <Button btnText={props.paymentName} onClick={() => props.onPaymentClick(props.paymentName)} />
      </div>
    </section>
  );
};

export default Payment;
