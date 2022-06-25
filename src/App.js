import "./App.css";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInformationPage from "./components/UserInformationPage";
import ShowData from "./components/ShowData";
import Question2 from "./components/Question2";
import Question1 from "./components/Question1";

function App() {
  const useCases = [1, 2, 3];
  const getData = () => {};
  return (
    <div className="app">
      {/* <Banner>Digital Request For Information (RFI)</Banner>
      <UserInformationPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question1 />} />

          <Route path="/question3" element={<UserInformationPage />} />
          <Route path="/showData" element={<ShowData />} />
          <Route path="/question2" element={<Question2 />} />

          {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
