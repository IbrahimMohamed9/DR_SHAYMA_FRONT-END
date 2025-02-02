import React, { FC } from "react";
import ActivitiesProfileScetion from "../organisms/ActivitiesProfileScetion";
import ProfileInfoSection from "../organisms/ProfileInfoSection";
import SectionHeader from "../atoms/SectionHeader";
import { Activity, PersonInfo } from "../../types";

type ProfileTemplateProps = {
  activities: Activity[];
  personalInfo: PersonInfo;
};

const ProfileTemplate: FC<ProfileTemplateProps> = ({
  activities,
  personalInfo,
}) => {
  const borderClasses = "border-5 border-red-600 rounded-lg";

  return (
    <div className="contianer my-12">
      <SectionHeader
        content="الملف الشخصي"
        className="mr-0 text-center md:text-5xl"
      />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 p-6">
        <ProfileInfoSection
          borderClasses={borderClasses}
          name={personalInfo.name}
          email={personalInfo.email}
          imgSrc={personalInfo.imgSrc}
        />
        <ActivitiesProfileScetion
          activities={activities}
          borderClasses={borderClasses}
        />
      </div>
    </div>
  );
};

export default ProfileTemplate;
