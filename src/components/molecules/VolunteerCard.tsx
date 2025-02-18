import { FC } from "react";
import VolunteerTextAndIcons from "@atoms/VolunteerTextAndIcons";
import { Volunteer } from "@/types";
import Image from "next/image";

type VolunteerCardProps = {
  volunteer: Volunteer;
  color?: string;
};

const VolunteerCard: FC<VolunteerCardProps> = ({ volunteer, color }) => {
  const borderColor = color ?? "main-green";

  return (
    <div
      className={`rounded-3xl border-2 border-${borderColor} 
        p-6 flex flex-col items-center gap-6
        bg-white/90 hover:shadow-2xl transition-all duration-300 
        transform hover:-translate-y-1 hover:border-opacity-80
        backdrop-blur-sm w-full h-full
        group cursor-pointer`}
    >
      {volunteer.img && (
        <div className="relative">
          <div
            className={`absolute inset-0 bg-${borderColor} rounded-full 
              blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
          />
          <Image
            src={volunteer.img}
            alt={volunteer.name}
            width={140}
            height={140}
            className={`relative rounded-full w-32 h-32 
              object-cover border-2 border-${borderColor}
              transition-transform duration-300 group-hover:scale-105
              shadow-md group-hover:shadow-lg`}
            priority
          />
        </div>
      )}
      <VolunteerTextAndIcons {...volunteer} />
    </div>
  );
};

export default VolunteerCard;
