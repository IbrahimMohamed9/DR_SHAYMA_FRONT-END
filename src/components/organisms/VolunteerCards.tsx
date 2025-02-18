import { FC } from "react";
import VolunteerCard from "@molecules/VolunteerCard";
import { Volunteer } from "@/types";

type VolunteerCardsProps = {
  volunteers: Volunteer[];
};

const VolunteerCards: FC<VolunteerCardsProps> = ({ volunteers }) => {
  const colors = ["main-green", "main-blue", "main-orange", "main-red"];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 
      max-w-7xl mx-auto"
    >
      {volunteers.map((volunteer, index) => (
        <VolunteerCard
          key={index}
          volunteer={volunteer}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

export default VolunteerCards;
