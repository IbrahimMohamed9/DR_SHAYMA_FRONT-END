import utils from "../../assets/utils/utils";
import SubjectTemplateImage from "@atoms/SubjectTemplateImage";
import SectionHeader from "@atoms/SectionHeader";
import SubjectCategoriesList from "@molecules/SubjectCategoriesList";
import ArticleCardsSubjectTemplate from "@organisms/ArticleCardsSubjectTemplate";
import axiosInstance from "@/assets/customHooks/axios";

const SubjectTemplate = async ({
  category,
  subcategory,
}: {
  category: string;
  subcategory: string;
}) => {
  const { bigImg, color } = utils.categoryDetails(category);

  let response;

  // TODO:: there is a bug if i navigate directly to subcategory
  // the subcategories will not render to fix that make variable to render only once
  // and subcategories api
  if (subcategory) {
    response = await axiosInstance.get(`/articles`);
  } else {
    response = await axiosInstance.get(`/${category}`);
  }
  const data = response.data;

  return (
    <div className="container">
      <SubjectTemplateImage imgSrc={bigImg} title={category} />
      <SectionHeader content="المقالات" />
      <SubjectCategoriesList
        color={color}
        categories={data.categories}
        currentCategory={category}
        currentSubcategory={subcategory}
      />
      <ArticleCardsSubjectTemplate color={color} articles={data.articles} />
    </div>
  );
};

export default SubjectTemplate;
