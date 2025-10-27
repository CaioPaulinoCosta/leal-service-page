import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <div className="App font-montserrat">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/trabalhe-conosco" element={<WorkWithUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
