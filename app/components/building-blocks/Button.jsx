import React from "react";
import { BUTTON_TYPES } from "@/app/data/button-types";

const Button = (props) => {
  const { type, btnText } = props;
  const getButtonClass = () => {
    switch (type) {
      case BUTTON_TYPES.STRIHANI:
        return "bg-blue-500 rounded-md font-bold";

      case BUTTON_TYPES.VOUSY:
        return " bg-green-500 rounded-md font-bold";

      case BUTTON_TYPES.STROJEK:
        return " bg-yellow-500 rounded-md font-bold";

      case BUTTON_TYPES.KOMPLET:
        return " bg-teal-500 rounded-md font-bold";

      case BUTTON_TYPES.STROJEKKOMPLET:
        return " bg-orange-500 rounded-md font-bold";

      case BUTTON_TYPES.HOLENI:
        return " bg-blue-600 rounded-md font-bold";

      case BUTTON_TYPES.BARBER:
        return "bg-cyan-400 rounded-lg";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <button className={`${getButtonClass()} py-4 px-6 mx-2 my-2 text-white`}>
      {btnText}
    </button>
  );
};

export default Button;
