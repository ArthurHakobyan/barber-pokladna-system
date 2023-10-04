"use client";

import React from "react";
import Button from "../building-blocks/Button";

const Service = (props) => {
  return (
    <section>
      <div className="flex flex-col text-white">
        <Button
          btnText={props.serviceName}
          type={props.type}
          onClick={()=>props.onServiceClick(props.serviceName)}
        />
        
      </div>
    </section>
  );
};

export default Service;
