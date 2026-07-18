import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sentiment from "./pages/Sentiment";
import Translation from "./pages/Translation";
import Summary from "./pages/Summary";
import QuestionAnswer from "./pages/QuestionAnswer";
import ZeroShot from "./pages/ZeroShot";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SENTIMENT} element={<Sentiment />} />
        <Route path={ROUTES.TRANSLATION} element={<Translation />} />
        <Route path={ROUTES.SUMMARY} element={<Summary />} />
        <Route path={ROUTES.QUESTION_ANSWER} element={<QuestionAnswer />} />
        <Route path={ROUTES.ZERO_SHOT} element={<ZeroShot />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;