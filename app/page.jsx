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
  const [buttonClicked, setButtonClicked] = useState(false);
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
  const [tableData, setTableData] = useState([]);
  const [price, setPrice] = useState(null);

  //Change guaiding text above the payment buttons

  //SERVICES BUTTONS ACTIONS
  const handleStrihani = (serviceName) => {
    if (!buttonClicked) {
      setSelectedService(serviceName);
      // Update specific properties while preserving others
      setData((prevData) => [
        {
          ...prevData[0],
          price: "550",
          service: serviceName,
        },
      ]);
      const newTableData = [
        ...tableData,
        { name: "", service: serviceName, price: "550", payment: "" },
      ];
      setTableData(newTableData);
      setPrice(550);
      setButtonClicked(true);
    } else {
      alert("Prosím, vyberte holice");
    }
  };

  const handleVousy = (serviceName) => {
    if (!buttonClicked) {
      setSelectedService(serviceName);
      // Update specific properties while preserving others
      setData((prevData) => [
        {
          ...prevData[0],
          price: "390",
          service: serviceName,
        },
      ]);
      const newTableData = [
        ...tableData,
        { name: "", service: serviceName, price: "390", payment: "" },
      ];
      setTableData(newTableData);
      setPrice(390);
      setButtonClicked(true);
    } else {
      alert("Prosím, vyberte holice");
    }
  };

  const handleStrihaVousy = (serviceName) => {
    if (!buttonClicked) {
      setSelectedService(serviceName);
      // Update specific properties while preserving others
      setData((prevData) => [
        {
          ...prevData[0],
          price: "890",
          service: serviceName,
        },
      ]);
      const newTableData = [
        ...tableData,
        { name: "", service: serviceName, price: "890", payment: "" },
      ];
      setTableData(newTableData);
      setPrice(890);

      setButtonClicked(true);
    } else {
      alert("Prosím, vyberte holice");
    }
  };

  const handleStrojek = (serviceName) => {
    if (!buttonClicked) {
      setSelectedService(serviceName);
      // Update specific properties while preserving others
      setData((prevData) => [
        {
          ...prevData[0],
          price: "390",
          service: serviceName,
        },
      ]);
      const newTableData = [
        ...tableData,
        { name: "", service: serviceName, price: "390", payment: "" },
      ];
      setTableData(newTableData);
      setPrice(390);

      setButtonClicked(true);
    } else {
      alert("Prosím, vyberte holice");
    }
  };

  const handleStrojekaVousy = (serviceName) => {
    if (!buttonClicked) {
      setSelectedService(serviceName);
      // Update specific properties while preserving others
      setData((prevData) => [
        {
          ...prevData[0],
          price: "690",
          service: serviceName,
        },
      ]);
      const newTableData = [
        ...tableData,
        { name: "", service: serviceName, price: "690", payment: "" },
      ];
      setTableData(newTableData);
      setPrice(690);

      setButtonClicked(true);
    } else {
      alert("Prosím, vyberte holice");
    }
  };
  const handleHoleni = (serviceName) => {
    if (!buttonClicked) {
      setSelectedService(serviceName);
      // Update specific properties while preserving others
      setData((prevData) => [
        {
          ...prevData[0],
          price: "450",
          service: serviceName,
        },
      ]);
      const newTableData = [
        ...tableData,
        { name: "", service: serviceName, price: "450", payment: "" },
      ];
      setTableData(newTableData);
      setPrice(450);

      setButtonClicked(true);
    } else {
      alert("Prosím, vyberte holice");
    }
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
    const updatedData = tableData.map((item, index) => {
      if (index === tableData.length - 1) {
        // Update the first row (assuming services and price are in the first row)
        return { ...item, name: barberName };
      }
      return item;
    });
    setTableData(updatedData);
    console.log(data);
    setButtonClicked(false);
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
    const updatedData = tableData.map((item, index) => {
      if (index === tableData.length - 1) {
        return { ...item, payment: paymentName };
      }
      return item;
    });
    setTableData(updatedData);
  };

  // const handleConfirmClick = () => {
  //   console.log(data);
  // };

  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
        {/* APP WRAPPER */}
        <div className="md:flex">
          {/* SERVICES WRAPPER */}
          <div className="flex-col flex-1">
            <Service
              serviceName="Klasicke strihani"
              type={BUTTON_TYPES.STRIHANI}
              onServiceClick={handleStrihani}
              disabled={buttonClicked}
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
          <div>
            <p className="flex justify-center text-gray-600 font-bold">
              {selectedService ? "vybrat holice " : "vybrst sluzbu"}
            </p>
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

            {/* DATA TABLE */}
            <div className="flex justify-center text-center py-[5%]">
              <Table tableData={tableData} />

              {/* CONFIRM BUTTON */}
              {/* <Confirm onConfirmClick={handleConfirmClick} btnText="Potvrdit" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
