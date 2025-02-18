import utils, { detectLanguage } from "@/utils/utils";
import SubjectTemplateImage from "@atoms/SubjectTemplateImage";
import SectionHeader from "@atoms/SectionHeader";
import SubjectCategoriesList from "@molecules/SubjectCategoriesList";
import ArticleCardsSubjectTemplate from "@organisms/ArticleCardsSubjectTemplate";
import axiosInstance from "@/config/axios";

const SubjectTemplate = async ({
  category,
  subcategory,
}: {
  category: string;
  subcategory: string;
}) => {
  const decodedCategory = decodeURI(category);

  const { bigImg, color } = utils.categoryDetails(decodedCategory);

  let articlesReq;
  const subcategoriesReq = await axiosInstance.get(
    `/article-subcategories/category/${detectLanguage(
      decodedCategory
    )}/${category}`
  );

  if (subcategory) {
    articlesReq = await axiosInstance.get(
      `/articles/subcategory/${detectLanguage(
        decodeURI(subcategory)
      )}/${subcategory}`
    );
  } else {
    articlesReq = await axiosInstance.get(
      `/articles/category/${detectLanguage(decodedCategory)}/${category}`
    );
  }

  return (
    <div className="container">
      <SubjectTemplateImage imgSrc={bigImg} title={category} />
      <SectionHeader content="المقالات" />
      <SubjectCategoriesList
        color={color}
        subcategories={subcategoriesReq.data}
        currentCategory={category}
        currentSubcategory={subcategory}
      />
      <ArticleCardsSubjectTemplate color={color} articles={articlesReq.data} />
    </div>
  );
};

export default SubjectTemplate;
