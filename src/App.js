import { Routes, Route } from "react-router-dom";
import Fees from "./pages/fees/Fees";
import Home from "./pages/home/Index";
import Nursery from "./pages/nursery/Nursery";
import Parents from "./pages/parents/Index";
import Team from "./pages/team/Index";
import Touch from "./pages/touch/Index";
import Showaround from "./pages/showaround/Index";
import Enquiry from "./pages/enquiry/Index";
import Space from "./pages/space/Index";
import EnquirySuccess from "./pages/enquiry/Success";
import ShowaroundSuccess from "./pages/showaround/Success";
import SpaceSuccess from "./pages/space/Success";
import GoogleTagManager from './GoogleTagManager';

function App() {
  return (
    <GoogleTagManager>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurNursery" element={<Nursery />} />
          <Route path="/OurFees" element={<Fees />} />
          <Route path="/ForParents" element={<Parents />} />
          <Route path="/OurTeam" element={<Team />} />
          <Route path="/GetInTouch" element={<Touch />} />
          <Route path="/BookAShow-Around" element={<Showaround />} />
          <Route path="/BookAShow-Around-ENQUIRY-COMPLETE" element={<ShowaroundSuccess />} />
          <Route path="/AskAQuestion" element={<Enquiry />} />
          <Route path="/AskAQuestion-ENQUIRY-COMPLETE" element={<EnquirySuccess />} />
          <Route path="/ApplyForASpace" element={<Space />} />
          <Route path="/ApplyForASpace-ENQUIRY-COMPLETE" element={<SpaceSuccess />} />
        </Routes>
      </div>
    </GoogleTagManager>
  );
}

export default App;