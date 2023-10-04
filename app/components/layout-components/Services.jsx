"use client";

import React from "react";
import Button from "../building-blocks/Button";
import { BUTTON_TYPES } from "@/app/data/button-types";

const Services = (props) => {


  return (
    <section className="w-[30%]">
      <div className="flex flex-col text-white">
        <Button
          btnText="Klasické stříhání"
          type={BUTTON_TYPES.STRIHANI}
          onClick={props.toggleVisibility}
          
        />
        <Button
          btnText="Úprava vousů"
          type={BUTTON_TYPES.VOUSY}
          onClick={props.toggleVisibility}
        />
        <Button btnText="Stříhání strojkem" type={BUTTON_TYPES.STROJEK} />
        <Button
          btnText="Klasické stříhání s úpravou vousů"
          type={BUTTON_TYPES.KOMPLET}
        />
        <Button
          btnText="Stříhání strojkem s úpravou vousů"
          type={BUTTON_TYPES.STROJEKKOMPLET}
        />
        <Button btnText="Tradiční holení" type={BUTTON_TYPES.HOLENI} />
      </div>
    </section>
  );
};

export default Services;
