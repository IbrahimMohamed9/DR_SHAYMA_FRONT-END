import SectionHeader from "./../atoms/SectionHeader";

const SecondAboutUsSection = () => {
  return (
    <div className="bg-main-red bg-opacity-30 text-center py-4">
      <SectionHeader content="دورنا" className="leading-[2.6rem]" />
      <p className="text-center -mt-4 text-2xl container">
        وتحذير الأمهات من كل ما يفسد الفطرة فيقطع عليها طريق تربيتهم، بل إن في
        عصرنا هذا غاب دور الحداثة وكثير من الأمهات في تعليم الأمهات
        <br />
        الصغيرات كيف تكون الحياة الأسرية، وكيف تكون التربية، فكانت تلك المقالات،
        والأبحاث.
        <br />
        صدر لي كتاب ورقي بعنوان: النماذج في التربية العنيفة في الإسلام، يتضمن ما
        تعلقه في ذلك الفرع من فروع التربية
        <br />
        وأبحاث مفرغة عن تعليم الأبناء العنيفة السليمة وأسئلتهم عن البركة وعن
        التربيات، وعن المواد التي فنيتها وتأثيرها على الأبناء، وعن التربية
        بالقصص، والتربية
        <br />
        بالتفكر و غيرها من الأبحاث.
      </p>
    </div>
  );
};

export default SecondAboutUsSection;
