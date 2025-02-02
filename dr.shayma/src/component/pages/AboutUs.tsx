import FirstAboutUsSection from "./../organisms/FirstAboutUsSection";
import SecondAboutUsSection from "./../organisms/SecondAboutUsSection";
import BooksSection from "./../organisms/BooksSection";
import { useRecoilState } from "recoil";
import booksState from "../../assets/atoms/booksState";
import { useEffect, useState } from "react";
import { fetchData } from "../../assets/customHooks/RestClient";
import LoadingAndErrorMsg from "../molecules/LoadingAndErrorMsg";

const AboutUs = () => {
  const [, setBooks] = useRecoilState(booksState);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData("/books", { setLoading, setError, setData });
  }, []);

  useEffect(() => {
    if (!loading) setBooks(data);
  }, [setBooks, data, loading]);

  const BooksSectionElement =
    loading || error ? (
      <LoadingAndErrorMsg loading={loading} error={error} />
    ) : (
      <BooksSection />
    );

  return (
    <div>
      <FirstAboutUsSection />
      <SecondAboutUsSection />
      {BooksSectionElement}
    </div>
  );
};

export default AboutUs;
