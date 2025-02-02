import { FC } from "react";
import SectionHeader from "../atoms/SectionHeader";
import VolunteerCards from "../organisms/VolunteerCards";
import { Volunteer } from "../../types";

const HonorListTemplate: FC<{ volunteers: Volunteer[] }> = ({ volunteers }) => {
  return (
    <div className="container my-6">
      <SectionHeader content="لائحة الشرف" className="mr-0 text-center" />
      <p className="text-center text-bold mb-8 text-lg">
        القائمين على هذا العمل مخلصين و لهم جزيل الشكر
      </p>
      <VolunteerCards volunteers={volunteers} />
    </div>
  );
};

export default HonorListTemplate;
