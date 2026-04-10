import React from "react";

const BottomFooter = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,#571126_0%,#360a18_100%)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-10 sm:px-10 md:grid-cols-3 md:px-12">
        <div>
          <h2 className="font-heading text-3xl tracking-tight">Location</h2>
          <div className="mt-3 space-y-1 text-sm leading-5 text-white/78">
            <p>1291 Caster Brain Drive,</p>
            <p>Suite Ramon Street</p>
            <p>Burger, IV 37933</p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl tracking-tight">Contact</h2>
          <div className="mt-3 space-y-1 text-sm leading-5 text-white/78">
            <p>(000) 555-8890</p>
            <p>email: juicy@burger.com</p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl tracking-tight">
            Business Hours
          </h2>
          <div className="mt-3 space-y-1 text-sm leading-5 text-white/78">
            <p>Operate: 8:00 pm</p>
            <p>10:00 am - 19:00 pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
