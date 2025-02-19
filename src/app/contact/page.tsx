import ContactTitle from "@/components/atoms/ContactTitle";
import FeedbackFrom from "@/components/organisms/FeedbackFrom";
import axiosInstance from "@/config/axios";

export default async function Contact() {
  const contactCategories = await axiosInstance.get("/feedback-categories");

  return (
    <div className="container">
      <ContactTitle />
      <FeedbackFrom contactCategories={contactCategories.data} />
    </div>
  );
}
