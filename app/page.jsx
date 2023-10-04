"use client";
import { useState } from "react";
import Barber from "./components/layout-components/Barber";
import Service from "./components/layout-components/Service";
import Navbar from "./components/layout-components/Navbar";
import Payment from "./components/layout-components/Payment";
import { BUTTON_TYPES } from "@/app/data/button-types";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState({
    first: 'Artur',
    second: 'Lukas'
  });
  const [price, setPrice] = useState(null);

  const handleStrihani = (serviceName) => {
    setSelectedService(serviceName);
    setPrice(550);
  };

  const handleVousy = (serviceName) => {
    setSelectedService(serviceName);
    setPrice(390);
  };

  const handleBarberClick = (barberName) => {
    console.log(barberName)
  };

  const handlePyamentClick = (paymentName) => {
    
    console.log(selectedService, price, paymentName);
  };

  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
        <div className="flex">
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
          </div>

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
          <div className="flex-1">
            <div className=" text-center py-[45%]">
              <p className="text-gray-400">Vybrat způsob platby.</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
