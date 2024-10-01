import React from "react";
import C1 from '../images/C1.svg';
import C2 from '../images/C2.svg';
import C3 from '../images/C3.svg';
import C4 from '../images/C4.svg';
import C5 from '../images/C5.svg';
import C6 from '../images/C6.svg';

function SocialProof() {
  return (
    <div className="text-center mt-[70px]">
      <span className="text-gray-500 font-semibold">
        Join 4,000+ companies already growing
      </span>

      {/* Responsive grid for logos */}
      <div className="grid grid-cols-2 gap-6 my-[50px] mx-[28px] pb-10 border-b-[2px] border-gray-200 rounded md:grid-cols-3 lg:grid-cols-6">
        <img src={C1} alt="Boltshift logo" className="h-[48px] w-auto mx-auto" />
        <img src={C2} alt="Lightbox logo" className="h-[48px] w-auto mx-auto" />
        <img src={C3} alt="FeatherDev logo" className="h-[48px] w-auto mx-auto" />
        <img src={C4} alt="Spherule logo" className="h-[48px] w-auto mx-auto" />
        <img src={C5} alt="GlobalBank logo" className="h-[48px] w-auto mx-auto" />
        <img src={C6} alt="Nietzsche logo" className="h-[48px] w-auto mx-auto" />
      </div>
    </div>
  );
}

export default SocialProof;
