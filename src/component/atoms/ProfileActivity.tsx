import { FC } from "react";
import { Activity } from "../../types";

const ProfileActivity: FC<Activity> = ({ imgSrc, name, description }) => {
  return (
    <div className="border-b border-black pb-4">
      <div className="flex items-center gap-2">
        <img src={imgSrc} alt={name} className="size-8 rounded-full" />
        <h4 className="font-light text-royal-blue text-opacity-90">{name}</h4>
      </div>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ProfileActivity;
