import logo from "@/images/logo.webp";
import Link from "next/link";
import { LOGO_DESCRIPTION } from "@/utils/Constants";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt={LOGO_DESCRIPTION}
        className="w-32 translate-center-y"
      />
    </Link>
  );
};

export default HeaderLogo;
