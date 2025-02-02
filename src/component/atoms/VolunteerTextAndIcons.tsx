import { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Volunteer } from "../../types";

const VolunteerTextAndIcons: FC<Volunteer> = ({
  name,
  title,
  whatsappNumber,
  email,
}) => {
  return (
    <div className="text-center flex-1">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-gray-500">{title}</p>
      <div className="flex gap-2 mt-2 items-center">
        {whatsappNumber && (
          <Link
            to={`https://wa.me/${whatsappNumber}`}
            className="text-xl hover:text-whatsapp m-auto"
          >
            <BsWhatsapp className="size-5" />
          </Link>
        )}
        <Link
          to={`mailto:${email}`}
          className="text-2xl hover:text-main-blue m-auto"
        >
          <AiOutlineMail className="size-6" />
        </Link>
      </div>
    </div>
  );
};

export default VolunteerTextAndIcons;
