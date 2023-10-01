import Barbers from "./components/layout-components/Barbers";
import Services from "./components/layout-components/Services";
import Navbar from "./components/layout-components/Navbar";

import Payments from "./components/layout-components/Payments";
export default function Home() {
  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
        <div className="flex">
          <Services />
          <Barbers />
          <Payments />
        </div>
      </section>
    </>
  );
}
