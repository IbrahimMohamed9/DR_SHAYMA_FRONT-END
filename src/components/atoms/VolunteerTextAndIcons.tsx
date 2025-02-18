import { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { Volunteer } from "@/types";

const VolunteerTextAndIcons: FC<Volunteer> = ({
  name,
  title,
  position,
  whatsapp,
  email,
  linkedin,
  phone,
}) => {
  return (
    <div className="text-center flex-1 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-lg font-medium text-main-blue mb-1">{title}</p>
      {position && (
        <p className="text-sm text-gray-600 mb-4 italic">{position}</p>
      )}
      <div className="flex gap-4 mt-4 items-center justify-center">
        {whatsapp && (
          <Link
            href={`https://wa.me/${whatsapp}`}
            className="text-gray-600 hover:text-whatsapp transform hover:scale-110 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <BsWhatsapp className="size-6" />
          </Link>
        )}
        <Link
          href={`mailto:${email}`}
          className="text-gray-600 hover:text-main-blue transform hover:scale-110 transition-all"
          aria-label="Email"
        >
          <AiOutlineMail className="size-6" />
        </Link>
        {linkedin && (
          <Link
            href={linkedin}
            className="text-gray-600 hover:text-linkedin transform hover:scale-110 transition-all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="size-6" />
          </Link>
        )}
        {phone && (
          <Link
            href={`tel:${phone}`}
            className="text-gray-600 hover:text-gray-600 transform hover:scale-110 transition-all"
            aria-label="Phone"
          >
            <FiPhone className="size-6" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default VolunteerTextAndIcons;
