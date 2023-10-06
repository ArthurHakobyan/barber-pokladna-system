"use client";
import { useState } from "react";
import Barber from "./components/layout-components/Barber";
import Service from "./components/layout-components/Service";
import Navbar from "./components/layout-components/Navbar";
import Payment from "./components/layout-components/Payment";
import { BUTTON_TYPES } from "@/app/data/button-types";
import Confirm from "./components/layout-components/Confirm";
import Table from "./components/Table";

export default function Home() {
  //STATE OF THE APP
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber] = useState({
    first: "Artur",
    second: "Lukas",
  });
  const [data, setData] = useState([
    {
      name: "",
      service: "",
      price: "",
      payment: "",
    },
  ]);
  const [price, setPrice] = useState(null);

  //SERVICES BUTTONS ACTIONS
  const handleStrihani = (serviceName) => {
    setSelectedService(serviceName);
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        price: "550",
        service: serviceName,
      },
    ]);
    setPrice(550);
  };

  const handleVousy = (serviceName) => {
    setSelectedService(serviceName);
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        price: "390",
        service: serviceName,
      },
    ]);
    setPrice(390);
  };

  const handleStrihaVousy = (serviceName) => {
    setSelectedService(serviceName);
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        price: "890",
        service: serviceName,
      },
    ]);
    setPrice(890);
  };

  const handleStrojek = (serviceName) => {
    setSelectedService(serviceName);
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        price: "390",
        service: serviceName,
      },
    ]);
    setPrice(390);
  };

  const handleStrojekaVousy = (serviceName) => {
    setSelectedService(serviceName);
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        price: "690",
        service: serviceName,
      },
    ]);
    setPrice(690);
  };
  const handleHoleni = (serviceName) => {
    setSelectedService(serviceName);
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        price: "450",
        service: serviceName,
      },
    ]);
    setPrice(450);
  };

  // BARBERS BUTTONS ACTION
  const handleBarberClick = (barberName) => {
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        name: barberName,
      },
    ]);
    console.log(data);
  };

  //PAYMENTS BUTTONS ACTION
  const handlePyamentClick = (paymentName) => {
    // Update specific properties while preserving others
    setData((prevData) => [
      {
        ...prevData[0],
        payment: paymentName,
      },
    ]);
  };

  const handleConfirmClick = () => {
    console.log(data);
  };

  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
        {/* APP WRAPPER */}
        <div className="flex">
          {/* SERVICES WRAPPER */}
          <div className="flex-col flex-1">
            <Service
              serviceName="Klasicke strihani"
              type={BUTTON_TYPES.STRIHANI}
              onServiceClick={handleStrihani}
              price={price}
            />
            <Service
              serviceName="Uprava Vousu"
              type={BUTTON_TYPES.VOUSY}
              onServiceClick={handleVousy}
              price={price}
            />
            <Service
              serviceName="Klasicke Striahni a Uprava Vousu"
              type={BUTTON_TYPES.KOMPLET}
              onServiceClick={handleStrihaVousy}
              price={price}
            />
            <Service
              serviceName="Strihani Strojkem"
              type={BUTTON_TYPES.STROJEK}
              onServiceClick={handleStrojek}
              price={price}
            />
            <Service
              serviceName="Strihani Strojkem a uprava vousu"
              type={BUTTON_TYPES.STROJEKKOMPLET}
              onServiceClick={handleStrojekaVousy}
              price={price}
            />
            <Service
              serviceName="Tradicni Holeni"
              type={BUTTON_TYPES.HOLENI}
              onServiceClick={handleHoleni}
              price={price}
            />
          </div>

          {/* BARBERS WRAPPER */}
          <div className="flex flex-1 bg-gray-100">
            <Barber
              barberName={selectedBarber.first}
              type={BUTTON_TYPES.BARBER}
              onBarberClick={handleBarberClick}
            />
            <Barber
              barberName={selectedBarber.second}
              type={BUTTON_TYPES.BARBER}
              onBarberClick={handleBarberClick}
            />
          </div>

          {/* PAYMENTS WRAPPER */}
          <div className="flex-1">
            {/* DATA TABLE */}
            <div className="flex justify-center text-center py-[45%]">
              <Table data={data} />
            </div>

            <div className="flex justify-center items-center">
              <Payment
                selectedService={selectedService}
                price={price}
                paymentName="Hotove"
                onPaymentClick={handlePyamentClick}
              />
              <Payment
                onPaymentClick={handlePyamentClick}
                selectedService={selectedService}
                price={price}
                paymentName="Kartou"
              />
            </div>

            {/* CONFIRM BUTTON */}
            <Confirm onConfirmClick={handleConfirmClick} btnText="Potvrdit" />
          </div>
        </div>
      </section>
    </>
  );
}
