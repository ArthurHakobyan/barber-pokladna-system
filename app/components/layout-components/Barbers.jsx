import React from "react";
import Button from "../building-blocks/Button";
import { BUTTON_TYPES } from "@/app/data/button-types";

const Barbers = () => {
  return (
    <div className="w-[40%] bg-gray-100">
      <Button btnText="Artur" type={BUTTON_TYPES.BARBER} />
      <Button btnText="Lukas" type={BUTTON_TYPES.BARBER} />
    </div>
  );
};

export default Barbers;
