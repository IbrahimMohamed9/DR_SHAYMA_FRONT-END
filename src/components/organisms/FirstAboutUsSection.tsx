import aqidtna from "@/images/aqidtna.png";
import BorderAroundSection from "@atoms/BorderAroundSection";
import SectionHeader from "@atoms/SectionHeader";
import Button from "@atoms/Button";
import Link from "next/link";
import Image from "next/image";

const FirstAboutUsSection = () => {
  return (
    <BorderAroundSection
      bgColor="bg-main-blue bg-opacity-30 py-4"
      className="container max-w-full"
      flex={true}
    >
      <div className="md:w-2/3 px-2 min-h-fit text-2xl md:text-4xl md:flex md:flex-col md:justify-center max-w-xl">
        <SectionHeader content="اعرف عنا" className="text-center" />
        <p className="md:block-fit text-2xl text-center">
          طبيبة مصرية، درست بالمعاهد الأزهرية، وتخرجت من كلية الطب والجراحة
          جامعة الأزهر في عام 2001، زوجة وأم لشابين وفتاتين.
          <br />
          <br />
          أعمل بمجال الاستشارات الأسرية والتربوية منذ عام 2012.
          <br /> وخلال رحلتي مع أبنائي وأبناء المسلمين وجدت الحاجة ضرورية لتعليم
          الأمهات عن التربية المستمدة من الوحيين، الخالية من التغريب.
        </p>
        <Button className="bg-main-green text-white text-xl w-fit mt-4 mx-auto block">
          <Link href="/honorList">القائمين علي العمل</Link>
        </Button>
      </div>
      <div className="max-w-360 mx-auto">
        <Image
          src={aqidtna}
          alt="عقيدتنا"
          width={480}
          height={320}
          className="mb-8 max-w-full h-auto object-contain"
        />
      </div>
    </BorderAroundSection>
  );
};

FirstAboutUsSection.propTypes = {};

export default FirstAboutUsSection;
