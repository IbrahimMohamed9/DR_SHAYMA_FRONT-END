"use client";

import aqidtna from "@/images/aqidtna.png";
import rideWithUs from "@/images/rideWithUs.jpg";
import childrenAqidat from "@/images/childrenAqidat.jpg";
import BorderAroundSection from "@atoms/BorderAroundSection";
import Button from "@atoms/Button";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnchorLink = dynamic(
  () => import("react-anchor-link-smooth-scroll").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const FirstHomeSection = () => {
  return (
    <BorderAroundSection
      bgColor="bg-gradient-to-l from-white via-cyan to-cyan"
      className="container max-w-full"
      flex={true}
    >
      <div className="px-2 max-w-full min-h-fit text-2xl md:w-2/3 md:text-4xl md:flex md:flex-col md:justify-center">
        <p className="md:block-fit">
          عقيدة سليمة هي أثمن ما نقدمه لأبنائنا؛ فكيف نغرسها في نفوسهم؟ هذا هو
          ما سنبحر فيه معا حتى نصل بأبنائنا لبر الأمان، فالتوحيد هو أجل غاية
          وأعظم مطلب. فهيا:
          <br />
          <br />
          (يَا بُنَيَّ ارْكَب مَّعَنَا)
        </p>
        <AnchorLink href="#topics">
          <Button className="bg-main-green text-white text-xl w-fit mt-4">
            المواضيع
          </Button>
        </AnchorLink>
      </div>
      <div className="flex gap-7 justify-center mb-5">
        <div>
          <Image
            src={childrenAqidat}
            alt="عقيدتنا"
            width={144}
            className="translate-center-y rounded-lg"
          />
        </div>

        <div>
          <Image
            src={rideWithUs}
            alt="يا بني اركب معنا"
            className="w-36 mb-8 rounded-lg"
          />
          <Image
            src={aqidtna}
            alt="عقيدتنا"
            width={144}
            height={144}
            className="w-36 h-auto"
          />
        </div>
      </div>
    </BorderAroundSection>
  );
};

export default FirstHomeSection;
