import { FC } from "react";
import VolunteerTextAndIcons from "@atoms/VolunteerTextAndIcons";
import { Volunteer } from "../../types";
import Image from "next/image";

type VolunteerCardProps = {
  volunteer: Volunteer;
  color?: string;
};

// this component for honor list page
const VolunteerCard: FC<VolunteerCardProps> = ({ volunteer, color }) => {
  return (
    <div
      className={`border-4 border-${
        color ?? "main-green"
      } rounded-3xl p-4 flex max-xs:flex-col items-center justify-center`}
    >
      {volunteer.imgSrc && (
        <Image
          src={volunteer.imgSrc}
          alt={volunteer.name}
          className="rounded-full size-20 lg:size-32 sm:ml-4"
        />
      )}
      <VolunteerTextAndIcons
        name={volunteer.name}
        title={volunteer.title}
        whatsappNumber={volunteer.whatsappNumber}
        email={volunteer.email}
      />
    </div>
  );
};

export default VolunteerCard;
