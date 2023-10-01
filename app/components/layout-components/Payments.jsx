import React from "react";

const Payments = () => {
  return (
    <section className="border w-[30%]">
      <div className=" text-center py-[55%]">
        <p className="text-gray-400">Vybrat způsob platby.</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center text-center gap-2 text-white">
          <button className="px-5 py-3 bg-green-600 w-1/2 rounded-md">
            HOTOVE
          </button>
          <button className="px-5 py-3 bg-blue-600 w-1/2 rounded-md">
            KARTOU
          </button>
        </div>
        <buton className="w-full px-5 mx-auto py-3 text-center text-white my-4 bg-blue-600 rounded-md">
          690
        </buton>
      </div>
    </section>
  );
};

export default Payments;
