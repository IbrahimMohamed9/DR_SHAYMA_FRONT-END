import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FC } from "react";

type PlatformTextType = {
  google: string;
  facebook: string;
};

type SocialButtonProps = {
  platformsText: PlatformTextType;
};

const SocialButton: FC<SocialButtonProps> = ({ platformsText }) => {
  const platforms = {
    google: {
      Icon: FcGoogle,
    },
    facebook: {
      Icon: AiFillFacebook,
    },
  };

  return (
    <div className="mt-2 md:mt-3 w-full">
      {Object.entries(platforms).map(([key, { Icon }]) => (
        <button
          key={key}
          className="relative w-full py-2 px-4 mb-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 text-start"
        >
          <Icon
            className={`inline size-6 mb-[0.2rem] ml-2${
              key === "facebook" ? " text-main-blue" : ""
            }`}
          />
          <span className="ml-2 font-bold">
            {platformsText[key as keyof PlatformTextType]}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SocialButton;
