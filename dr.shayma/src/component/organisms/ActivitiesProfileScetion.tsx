import { FC } from "react";
import ProfileActivity from "../atoms/ProfileActivity";
import { Activity } from "../../types";

type ActivitiesProfileScetionProps = {
  activities: Activity[];
  borderClasses: String;
};

const ActivitiesProfileScetion: FC<ActivitiesProfileScetionProps> = ({
  activities,
  borderClasses,
}) => {
  return (
    <div className={"flex-1 p-4 " + borderClasses}>
      <h2 className="text-3xl text-center font-bold mb-4">فاعلياتك</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ProfileActivity
            key={index}
            imgSrc={activity.imgSrc}
            name={activity.name}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesProfileScetion;
