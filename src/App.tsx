import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TopHeader from "./pages/TopHeader";
import PPAi1 from "./pages/PPAi1";
import ProgramPage from "./pages/ProgramPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pp-ai-1":
        title = "";
        metaDescription = "";
        break;
      case "/program-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TopHeader />} />
      <Route path="/pp-ai-1" element={<PPAi1 />} />
      <Route path="/program-page" element={<ProgramPage />} />
    </Routes>
  );
}
export default App;
