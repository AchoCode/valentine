import { Route, Routes } from "react-router-dom";
import { LockScreenPg } from "./component/pages/LockScreenPg";
import { StatisticsPg } from "./component/pages/StatisticsPg";
import { Timeline } from "./component/pages/Timeline";
import { LoveQuiz } from "./component/pages/LoveQuiz";
function App() {
  return (
    <div className="page-wrapper">
      <Routes>
        <Route exact path="/" element={<LockScreenPg />} />
        <Route exact path="/stats" element={<StatisticsPg />} />
        <Route exact path="/timeline" element={<Timeline />} />
        <Route exact path="/lovequiz" element={<LoveQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
