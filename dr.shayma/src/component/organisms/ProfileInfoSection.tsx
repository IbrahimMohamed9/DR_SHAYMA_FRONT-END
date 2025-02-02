import React, { FC } from "react";
import { PersonInfo } from "../../types";

type ProfileInfoSectionProps = PersonInfo & {
  borderClasses: string;
};

const ProfileInfoSection: FC<ProfileInfoSectionProps> = ({
  borderClasses,
  name,
  email,
  imgSrc,
}) => {
  const h3Classes = "font-light text-sm text-royal-blue text-opacity-80";
  const pClasses =
    "border-b border-black text-lg text-ellipsis overflow-hidden";

  return (
    <div className={"w-full md:w-64 p-4 " + borderClasses}>
      <div className="flex md:flex-col items-center">
        <img
          src={imgSrc}
          alt={name}
          className="size-32 max-md:ml-5 md:size-44 rounded-full"
        />
        <div className="max-w-full">
          <h3 className={h3Classes}>الاسم</h3>
          <p className={pClasses}>{name}</p>

          <h3 className={"mt-4 " + h3Classes}>البريد الإلكتروني</h3>
          {/* TODO: how to fix the email overflow */}
          <p className={pClasses}>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoSection;
