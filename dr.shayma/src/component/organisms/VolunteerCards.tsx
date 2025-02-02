import { FC } from "react";
import VolunteerCard from "../molecules/VolunteerCard";
import { Volunteer } from "../../types";

type VolunteerCardsProps = {
  volunteers: Volunteer[];
};

const VolunteerCards: FC<VolunteerCardsProps> = ({ volunteers }) => {
  const colors = ["main-green", "main-blue", "main-orange", "main-red"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {volunteers.map((volunteer, index) => (
        <VolunteerCard
          key={index}
          volunteer={volunteer}
          color={colors[index % 4]}
        />
      ))}
    </div>
  );
};

export default VolunteerCards;
