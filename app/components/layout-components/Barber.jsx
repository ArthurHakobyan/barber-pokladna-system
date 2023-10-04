"use client";
import React from "react";
import Button from "../building-blocks/Button";

const Barber = (props) => {
  return (
    <div>
      <Button
        btnText={props.barberName}
        type={props.type}
        onClick={() => props.onBarberClick(props.barberName)}
      />
    </div>
  );
};

export default Barber;
