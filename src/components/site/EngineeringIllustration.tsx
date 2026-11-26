import React from "react";
import cadChassisImg from "@/assets/cad-sheetmetal-chassis.jpg";

export function EngineeringIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[540px] mx-auto select-none overflow-hidden ${className}`}>
      <img
        src={cadChassisImg}
        alt="Engineering CAD Sheet Metal Illustration from Idea to Reality"
        className="w-full h-auto object-contain mix-blend-multiply"
        loading="eager"
      />
    </div>
  );
}
