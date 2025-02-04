import FirstAboutUsSection from "@organisms/FirstAboutUsSection";
import SecondAboutUsSection from "@organisms/SecondAboutUsSection";
import BooksSection from "@organisms/BooksSection";
import axiosInstance from "@/assets/customHooks/axios";

export default async function About() {
  const response = await axiosInstance.get("/books");
  const data = response.data;

  return (
    <div>
      <FirstAboutUsSection />
      <SecondAboutUsSection />
      <BooksSection books={data} />
    </div>
  );
}
