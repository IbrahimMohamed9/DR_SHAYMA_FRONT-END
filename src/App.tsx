import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/pages/Home";
import AboutUs from "./component/pages/AboutUs";
import ContactUs from "./component/pages/ContactUs";
import Header from "./component/organisms/Header";
import Footer from "./component/organisms/Footer";
import Login from "./component/pages/Login";
import SignUp from "./component/pages/SignUp";
import HonorList from "./component/pages/HonorList";
import Profile from "./component/pages/Profile";
import SubjectTemplate from "./component/templates/SubjectTemplate";
import ArticleTemplate from "./component/templates/ArticleTemplate";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="articles/:category/:subcategory?/">
          <Route index element={<SubjectTemplate />} />
          <Route path=":articleId" element={<ArticleTemplate />} />
        </Route>
        <Route path="/honorList" element={<HonorList />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
