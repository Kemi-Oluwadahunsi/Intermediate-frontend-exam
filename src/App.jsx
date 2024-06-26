import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import AllRepos from "./components/AllRepos";
import Header from "./components/Header";
import { useEffect } from "react";
import RepoDetails from "./components/RepoDetails";
import ComponentWithError from "./components/ComponentWithError";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    
      <div className="max-w-[1600px] mx-auto">
        <Header />
        <ScrollArrow />
        <Routes>
          <Route path="/" element={<AllRepos />} />
          <Route path="/repo-details" element={<RepoDetails />} />
          <Route path="/error-testing" element={<ComponentWithError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
  
  );
}

export default App;
