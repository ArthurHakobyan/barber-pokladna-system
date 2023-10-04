"use client";
import React from "react";
import Button from "../building-blocks/Button";
import { BUTTON_TYPES } from "@/app/data/button-types";

const Barbers = (props) => {
  return (
    <div className="w-[40%] bg-gray-100">
      {props.isVisible && (
        <div>
          <Button btnText="Artur" type={BUTTON_TYPES.BARBER} />
          <Button btnText="Lukas" type={BUTTON_TYPES.BARBER} />
        </div>
      )}
    </div>
  );
};

export default Barbers;
